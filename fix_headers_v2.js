const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Use regex to extract the nav
const navMatch = indexHtml.match(/<nav[\s\S]*?<\/nav>/i);

const navContent = navMatch[0];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory && f !== 'node_modules' && !f.startsWith('.')) {
      walkDir(dirPath, callback);
    } else if (!isDirectory && f.endsWith('.html') && dirPath !== 'index.html') {
      callback(dirPath);
    }
  });
}

walkDir('.', function(file) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Find all <header ... > ... </header>
  content = content.replace(/<header([^>]*)>([\s\S]*?)<\/header>/gi, (match, attrs, inner) => {
      // If the header has sticky top-0 or fixed top-0, replace it with navContent
      if (attrs.includes('top-0') && (attrs.includes('sticky') || attrs.includes('fixed') || attrs.includes('docked'))) {
          return navContent;
      }
      return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Removed duplicate header wrapper in ' + file);
  }
});
