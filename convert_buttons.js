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
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Convert <button ...>Place your order</button> to <a href="/order-now.html" ...>Place your order</a>
  content = content.replace(/<button([^>]*)>([\s\S]*?Place your order[\s\S]*?)<\/button>/gi, '<a href="/order-now.html"$1>$2</a>');
  content = content.replace(/<button([^>]*)>([\s\S]*?Place Your First Order[\s\S]*?)<\/button>/gi, '<a href="/order-now.html"$1>$2</a>');
  
  // Explore Service / Explore Services
  content = content.replace(/<button([^>]*)>([\s\S]*?Explore Service[\s\S]*?)<\/button>/gi, '<a href="/services.html"$1>$2</a>');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Converted buttons to links on ' + file);
  }
});
