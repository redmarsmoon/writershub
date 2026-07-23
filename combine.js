const fs = require('fs');

const cleanHtml = fs.readFileSync('clean_order_now.html', 'utf8');
const currentHtml = fs.readFileSync('order-now.html', 'utf8');

const headerSplit = cleanHtml.split('<!-- Form Section -->');
const header = headerSplit[0] + '<!-- Form Section -->';

const footerSplit = cleanHtml.split('<!-- Social Proof -->');
const footer = '\n<!-- Social Proof -->' + footerSplit[1];

// For the body, we want from just after "<!-- Form Section -->" to "</section>"
const bodyStart = currentHtml.indexOf('<!-- Form Section -->') + '<!-- Form Section -->'.length;
const bodyEnd = currentHtml.lastIndexOf('</section>') + '</section>'.length;

const newBody = currentHtml.substring(bodyStart, bodyEnd);

const finalHtml = header + newBody + footer;
fs.writeFileSync('order-now.html', finalHtml, 'utf8');

// Also write out a clean build_order_page.js
const builderContent = `const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'order-now.html');
let content = fs.readFileSync(targetFile, 'utf8');

// Ensure order-engine.js is included in head
if(!content.includes('order-engine.js')) {
    content = content.replace('</head>', '    <script src="/assets/js/order-engine.js"></script>\\n</head>');
}

const headerSplit = content.split('<!-- Form Section -->');
const header = headerSplit[0];
const footerSplit = headerSplit[1].split('<!-- Social Proof -->');
const footer = '<!-- Social Proof -->' + footerSplit[1];

// We don't overwrite newBody in this simple rebuild process, we just rebuild exactly what's there
// Wait, build_order_page.js used to have the whole form inside it.
// I will just put the whole form string inside build_order_page.js using JSON.stringify
const newBody = ${JSON.stringify(newBody)};

const finalContent = header + newBody + footer;

fs.writeFileSync(targetFile, finalContent);
console.log('Successfully rebuilt order-now.html');
`;

fs.writeFileSync('build_order_page.js', builderContent, 'utf8');
console.log('Successfully combined order-now.html and build_order_page.js');
