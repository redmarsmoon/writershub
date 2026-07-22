const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Use regex to extract the nav and footer
const navMatch = indexHtml.match(/<nav[\s\S]*?<\/nav>/i);
const footerMatch = indexHtml.match(/<footer[\s\S]*?<\/footer>/i);

if (!navMatch || !footerMatch) {
  console.error("Could not find nav or footer in index.html");
  process.exit(1);
}

const navContent = navMatch[0];
const footerContent = footerMatch[0];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory && f !== 'node_modules' && !f.startsWith('.')) {
      walkDir(dirPath, callback);
    } else if (!isDirectory && f.endsWith('.html') && f !== 'index.html') {
      callback(dirPath);
    }
  });
}

walkDir('.', function(file) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace nav
  content = content.replace(/<nav[\s\S]*?<\/nav>/i, navContent);
  // Replace footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/i, footerContent);

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated nav and footer in ' + file);
  }
});
