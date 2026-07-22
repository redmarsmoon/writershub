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
  
  // The nav container might be:
  // <div class="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1">
  const searchStr = '<div class="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1">';
  // Let's replace justify-center with justify-start, and maybe increase the margin on the logo
  const replaceStr = '<div class="hidden md:flex items-center justify-start space-x-6 lg:space-x-10 flex-1 ml-4 lg:ml-8">';
  
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    
    // Also increase logo space slightly just in case
    content = content.replace('<div class="flex-shrink-0 mr-8 lg:mr-16">', '<div class="flex-shrink-0 mr-8 lg:mr-20">');
    
    fs.writeFileSync(file, content);
    console.log('Updated nav alignment on ' + file);
  }
});
