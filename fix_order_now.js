const fs = require('fs');
let html = fs.readFileSync('order-now.html', 'utf8');

const formEnd = html.lastIndexOf('</section>');
if (formEnd !== -1) {
    const headerSplit = html.split('<!-- Form Section -->');
    const header = headerSplit[0];
    const newBody = html.substring(html.indexOf('<!-- Form Section -->'), formEnd + 10);
    
    let footer = '';
    try {
        const trackOrder = fs.readFileSync('track-your-order.html', 'utf8');
        const socialProofStart = trackOrder.indexOf('<!-- Social Proof -->');
        if (socialProofStart !== -1) {
            footer = '\n' + trackOrder.substring(socialProofStart);
        }
    } catch(e) {
        console.error(e);
    }
    
    if (footer) {
        fs.writeFileSync('order-now.html', header + newBody + footer, 'utf8');
        console.log('Cleaned order-now.html');
    }

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
const newBody = ${JSON.stringify(newBody)};
const finalContent = header + newBody + footer;
fs.writeFileSync(targetFile, finalContent);
console.log('Successfully rebuilt order-now.html');
`;
    fs.writeFileSync('build_order_page.js', builderContent, 'utf8');
    console.log('Recreated build_order_page.js');
}
