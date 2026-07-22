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
  
  // Replace existing favicon links
  content = content.replace(/<link rel="icon"[^>]*>\n?/gi, '');
  content = content.replace(/<link rel="shortcut icon"[^>]*>\n?/gi, '');
  
  const faviconTag = '<link rel="icon" type="image/jpeg" href="/assets/images/favicon.jpg">\n';
  if (content.includes('</head>')) {
    content = content.replace('</head>', faviconTag + '</head>');
    fs.writeFileSync(file, content);
  }
});
console.log('Favicon added to all HTML files.');
