const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const links = new Set();
const regex = /href="\/([^"]+)"/g;
let match;
while ((match = regex.exec(indexHtml)) !== null) {
  if (match[1].endsWith('.html')) {
    links.add(match[1]);
  }
}

console.log('Links found in index.html:');
for (const link of links) {
  if (fs.existsSync(link)) {
    const lines = fs.readFileSync(link, 'utf8').split('\n').length;
    console.log('[OK] ' + link + ' (Lines: ' + lines + ')');
    if (lines < 150) {
      console.log('  -> WARNING: ' + link + ' seems to be a small placeholder!');
    }
  } else {
    console.log('[MISSING] ' + link);
  }
}
