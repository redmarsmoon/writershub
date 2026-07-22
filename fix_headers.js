const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Use regex to extract the nav
const navMatch = indexHtml.match(/<nav[\s\S]*?<\/nav>/i);

if (!navMatch) {
  console.error("Could not find nav in index.html");
  process.exit(1);
}

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

  // Replace <header ... top-0 ...> ... </header> with navContent
  content = content.replace(/<header[^>]*?(?:sticky|fixed)[^>]*?top-0[^>]*>[\s\S]*?<\/header>/i, navContent);

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Removed duplicate header wrapper in ' + file);
  }
});
