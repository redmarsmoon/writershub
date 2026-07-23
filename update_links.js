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

            // Update main menu Order Now button (and any other order-now.html links)
            if (content.includes('href="/order-now.html"')) {
                content = content.replace(/href="\/order-now\.html"/g, 'href="/new-orders.html"');
                modified = true;
            }
            if (content.includes('href="../order-now.html"')) {
                content = content.replace(/href="\.\.\/order-now\.html"/g, 'href="../new-orders.html"');
                modified = true;
            }
            if (content.includes('href="order-now.html"')) {
                content = content.replace(/href="order-now\.html"/g, 'href="new-orders.html"');
                modified = true;
            }

            // Update index.html hero section
            if (fullPath.endsWith('index.html') && content.includes('Order Academic Services')) {
                content = content.replace(
                    /<a href="\/writing-services\/index\.html"([^>]*>)\s*Order Academic Services/g,
                    '<a href="/new-orders.html"$1\n                                Order Academic Services'
                );
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDir('C:/Users/Home/Desktop/writershub');
