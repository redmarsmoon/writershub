const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== '.git' && file !== 'node_modules') {
                processDir(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            if (content.includes('var(--whp-secondary, #a43d19)')) {
                content = content.replace(/var\(--whp-secondary, #a43d19\)/g, '#ff8057');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated notice color in ${fullPath}`);
            }
        }
    });
}

processDir('C:/Users/Home/Desktop/writershub');
