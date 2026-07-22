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
  let original = content;
  
  // Replace all href="..." and src="..."
  // We want to make them absolute starting with /
  content = content.replace(/(href|src)="([^"]+)"/g, (match, attr, url) => {
      // Ignore absolute URLs, data URIs, anchors, empty
      if (url.startsWith('http') || url.startsWith('//') || url.startsWith('data:') || url.startsWith('#') || url === '' || url.startsWith('mailto:') || url.startsWith('tel:')) {
          return match;
      }
      
      // If it already starts with '/', it's absolute
      if (url.startsWith('/')) {
          return match;
      }
      
      // Remove any leading '../' or './' 
      let cleanUrl = url;
      while (cleanUrl.startsWith('../') || cleanUrl.startsWith('./')) {
          if (cleanUrl.startsWith('../')) cleanUrl = cleanUrl.substring(3);
          if (cleanUrl.startsWith('./')) cleanUrl = cleanUrl.substring(2);
      }
      
      // Now it's something like 'assets/css/styles.css' or 'pricing.html'
      return attr + '="/' + cleanUrl + '"';
  });

  if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Updated ' + file);
  }
});
