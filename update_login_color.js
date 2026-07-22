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
  
  const searchStr = '<button class="hidden md:flex items-center text-[15px] font-semibold text-primary dark:text-primary-fixed hover:opacity-80">';
  const replaceStr = '<button class="hidden md:flex items-center text-[15px] font-semibold text-accent-vibrant hover:opacity-80">';
  
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(file, content);
    console.log('Updated login button on ' + file);
  } else {
    // try a more generic replace in case of minor spacing differences
    const genericSearch = /<button class="hidden md:flex items-center text-\[15px\] font-semibold text-primary[^>]*>/i;
    if (genericSearch.test(content)) {
      content = content.replace(genericSearch, replaceStr);
      fs.writeFileSync(file, content);
      console.log('Updated login button (generic match) on ' + file);
    }
  }
});
