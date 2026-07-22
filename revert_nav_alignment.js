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
  
  const searchStr = '<div class="hidden md:flex items-center justify-start space-x-6 lg:space-x-10 flex-1 ml-4 lg:ml-8">';
  const replaceStr = '<div class="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1">';
  
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    content = content.replace('<div class="flex-shrink-0 mr-8 lg:mr-20">', '<div class="flex-shrink-0 mr-8 lg:mr-16">');
    fs.writeFileSync(file, content);
    console.log('Reverted nav alignment on ' + file);
  }
});
