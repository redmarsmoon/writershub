const fs = require('fs');
const path = require('path');

const noticeBar = `\n<!-- Notice Bar -->\n<div style="background-color: var(--whp-secondary, #a43d19);" class="text-white text-center py-2 text-sm font-semibold relative z-[60]">\n    Under construction but at work\n</div>`;

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== '.git' && file !== 'node_modules') {
                processDir(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Avoid double injection
            if (!content.includes('Under construction but at work')) {
                // Find <body ...>
                const bodyMatch = content.match(/<body[^>]*>/);
                if (bodyMatch) {
                    content = content.replace(bodyMatch[0], bodyMatch[0] + noticeBar);
                    fs.writeFileSync(fullPath, content);
                    console.log(`Added notice bar to ${fullPath}`);
                }
            }
        }
    });
}

processDir('C:/Users/Home/Desktop/writershub');
