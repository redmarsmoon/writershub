const fs = require('fs');
const { execSync } = require('child_process');

// Get clean order-now.html from git directly
const cleanHtml = execSync('git show ea6161d:order-now.html', { encoding: 'utf8' });
const currentHtml = fs.readFileSync('order-now.html', 'utf8');

// The new body we want to keep is from 5bd193a. 
// But wait, order-now.html is currently messed up from my UTF-16 run!
// Let me get the 5bd193a order-now.html directly from git too!
const currentHtmlFromGit = execSync('git show 5bd193a:order-now.html', { encoding: 'utf8' });

const headerSplit = cleanHtml.split('<!-- Form Section -->');
const header = headerSplit[0] + '<!-- Form Section -->\n';

const footerSplit = cleanHtml.split('<!-- Social Proof -->');
const footer = '\n<!-- Social Proof -->' + footerSplit[1];

const bodyStart = currentHtmlFromGit.indexOf('<!-- Form Section -->') + '<!-- Form Section -->'.length;
const bodyEnd = currentHtmlFromGit.lastIndexOf('</section>') + '</section>'.length;
const newBody = currentHtmlFromGit.substring(bodyStart, bodyEnd);

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
console.log('Success');
