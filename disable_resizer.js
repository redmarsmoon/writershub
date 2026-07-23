const fs = require('fs');
const file = 'C:/Users/Home/Desktop/writershub/new-orders.html';
let content = fs.readFileSync(file, 'utf8');

// Disable the iframe resizer script call completely
content = content.replace("iFrameResize({ log: false, checkOrigin: false }, '#whp-order-iframe');", "// Iframe resizer disabled temporarily");

// Increase min-height to 2500px to give it plenty of room, and set scrolling to auto
content = content.replace('style="width: 100%; border: none; min-height: 1200px;"', 'style="width: 100%; border: none; min-height: 2500px; height: 100vh;"');

fs.writeFileSync(file, content);
console.log('Disabled iframe resizer and updated height!');
