const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory && f !== 'node_modules' && !f.startsWith('.')) {
      walkDir(dirPath, callback);
    } else if (!isDirectory && f.endsWith('.html')) {
      callback(dirPath);
    }
  });
}

walkDir('.', function(file) {
  if (file === 'index.html') return; // already did this one manually
  let content = fs.readFileSync(file, 'utf8');
  let match = content.match(/(<h1[^>]*>)([\s\S]*?)(<\/h1>)/i);
  if (match) {
    let originalInner = match[2];
    
    // check if it already has a span
    if (originalInner.includes('<span')) return;
    
    let words = originalInner.trim().split(' ');
    if (words.length > 1) {
      let lastWord = words.pop();
      let newInner = words.join(' ') + ' <span class="text-primary">' + lastWord + '</span>';
      let newH1 = match[1] + newInner + match[3];
      content = content.replace(match[0], newH1);
      fs.writeFileSync(file, content);
      console.log('Updated ' + file + ': ' + newInner);
    }
  }
});
