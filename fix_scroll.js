const fs = require('fs');
const file = 'C:/Users/Home/Desktop/writershub/new-orders.html';
let content = fs.readFileSync(file, 'utf8');
content = content.replace('scrolling="no"', 'scrolling="auto"');
fs.writeFileSync(file, content);
console.log('Scroll fix applied!');
