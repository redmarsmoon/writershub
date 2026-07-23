const fs = require('fs');
let builder = fs.readFileSync('build_order_page.js', 'utf8');

// Find the start of the garbage code. It starts with the BOM character and "const fs"
const garbageStart = builder.indexOf('﻿const fs = require(\'fs\');');
if (garbageStart !== -1) {
    builder = builder.substring(0, garbageStart);
}

const garbageStart2 = builder.indexOf("const fs = require('fs');\nconst path");
if (garbageStart2 !== -1) {
    builder = builder.substring(0, garbageStart2);
}

// Ensure the newBody string is closed and the final code is appended
builder = builder.trim();
if (!builder.endsWith('`;')) {
    // Check if it ends with </section> or </div>
    const sectionEnd = builder.lastIndexOf('</section>');
    if (sectionEnd !== -1) {
        builder = builder.substring(0, sectionEnd + 10) + '\n`;\n';
    }
}

const footerLogic = `
const finalContent = header + newBody + footer;

fs.writeFileSync(targetFile, finalContent);
console.log('Successfully rebuilt order-now.html');
`;

if (!builder.includes('fs.writeFileSync')) {
    builder += footerLogic;
}

fs.writeFileSync('build_order_page.js', builder, 'utf8');
console.log('Cleaned build_order_page.js');
