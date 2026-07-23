const fs = require('fs');

// Read the clean html from ea6161d (which is clean_order_now.html, UTF-16le)
const cleanHtml = fs.readFileSync('clean_order_now.html', 'utf16le');

// Read the current html from 5bd193a (which is current.html, UTF-16le)
const currentHtml = fs.readFileSync('current.html', 'utf16le');

const headerSplit = cleanHtml.split('<!-- Form Section -->');
const header = headerSplit[0] + '<!-- Form Section -->\n';

const footerSplit = cleanHtml.split('<!-- Social Proof -->');
const footer = '\n<!-- Social Proof -->' + footerSplit[1];

// Find the form section in currentHtml
const formStartMarker = '<section class="py-20 bg-surface-container-low relative" id="order-wizard">';
// Wait, is it relative? Let's check what it actually is by searching for '<section class="py-20'.
const sectionStart = currentHtml.indexOf('<section class="py-20');
const sectionEnd = currentHtml.lastIndexOf('</section>') + '</section>'.length;

const newBody = currentHtml.substring(sectionStart, sectionEnd);

const finalHtml = header + newBody + footer;
fs.writeFileSync('order-now.html', finalHtml, 'utf8');

const builderContent = `const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'order-now.html');
let content = fs.readFileSync(targetFile, 'utf8');

if(!content.includes('order-engine.js')) {
    content = content.replace('</head>', '    <script src="/assets/js/order-engine.js"></script>\\n</head>');
}

const headerSplit = content.split('<!-- Form Section -->');
const header = headerSplit[0] + '<!-- Form Section -->\\n';
const footerSplit = content.split('<!-- Social Proof -->');
const footer = '\\n<!-- Social Proof -->' + footerSplit[1];

const newBody = ${JSON.stringify(newBody)};

const finalContent = header + newBody + footer;

fs.writeFileSync(targetFile, finalContent, 'utf8');
console.log('Successfully rebuilt order-now.html');
`;

fs.writeFileSync('build_order_page.js', builderContent, 'utf8');
console.log('Successfully extracted form block and built order-now.html and build_order_page.js');
