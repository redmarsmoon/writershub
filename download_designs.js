const fs = require('fs');
const https = require('https');
const path = require('path');

const data = JSON.parse(fs.readFileSync('C:\\Users\\Home\\.gemini\\antigravity-ide\\brain\\1db7e00d-1576-4560-932e-fd8c51fb511f\\.system_generated\\steps\\335\\output.txt', 'utf8'));
const screens = data.screens.filter(s => s.htmlCode && s.htmlCode.downloadUrl);

const mappings = [
    { title: "Job Hunters Redesign - WritersHub Plus", path: "job-hunters.html", depth: "" },
    { title: "eCommerce Marketing Redesign - WritersHub Plus", path: "ecommerce-marketing.html", depth: "" },
    { title: "Research Paper Redesign - WritersHub Plus", path: "research-paper.html", depth: "" },
    { title: "Contact Us Redesign - WritersHub Plus", path: "contact-us.html", depth: "" },
    { title: "Doctoral Thesis Support - WritersHub Plus", path: "writing-services/dissertation-writing.html", depth: "../" },
    { title: "Services Redesign - WritersHub Plus", path: "services.html", depth: "" },
    { title: "Gen AI SEO Redesign - WritersHub Plus", path: "ai-seo/index.html", depth: "../" },
    { title: "Essay Cave Redesign - WritersHub Plus", path: "essay-cave.html", depth: "" },
    { title: "Pricing Redesign - WritersHub Plus", path: "pricing.html", depth: "" },
    { title: "EmailmeEssay Redesign - WritersHub Plus", path: "emailmeessay.html", depth: "" },
    { title: "Thank You / Order Confirmation - WritersHub Plus Redesign", path: "thank-you.html", depth: "" },
    { title: "VerifiMe Redesign - WritersHub Plus", path: "verifime.html", depth: "" },
    { title: "LinkedIn Optimization - WritersHub Plus", path: "job-hunting-services/linkedin-optimization.html", depth: "../" },
    { title: "How It Works Redesign - WritersHub Plus", path: "how-it-works.html", depth: "" },
    { title: "Privacy Policy Redesign - WritersHub Plus", path: "privacy-policy.html", depth: "" },
    { title: "Academic Writing Redesign - WritersHub Plus", path: "writing-services/index.html", depth: "../" },
    { title: "Writers AI Redesign - WritersHub Plus", path: "writers-ai.html", depth: "" },
    { title: "Buyer Purchase Protection - WritersHub Plus Redesign", path: "buyer-purchase-protection.html", depth: "" },
    { title: "FAQ Redesign - WritersHub Plus", path: "faq.html", depth: "" },
    { title: "About Us Redesign - WritersHub Plus", path: "about-us.html", depth: "" },
    { title: "Get a Quote - WritersHub Plus", path: "order-now.html", depth: "" },
    { title: "How to Order Redesign - WritersHub Plus", path: "how-to-order.html", depth: "" },
    { title: "Review My Business Redesign - WritersHub Plus", path: "review-my-business.html", depth: "" },
    { title: "Blog - WritersHub Plus Redesign", path: "blog.html", depth: "" }
];

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract nav and footer from index.html
const navRegex = /<nav[\s\S]*?<\/nav>/i;
const footerRegex = /<footer[\s\S]*?<\/footer>/i;

const indexNav = indexHtml.match(navRegex)[0];
const indexFooter = indexHtml.match(footerRegex)[0];

const headAdditions = `
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script src="assets/js/tailwind-config.js"></script>
`;

function adjustDepth(html, depth) {
    if (!depth) return html;
    let modified = html.replace(/href="([^"h#][^"]*)"/g, 'href="' + depth + '$1"');
    modified = modified.replace(/src="([^"h#][^"]*)"/g, 'src="' + depth + '$1"');
    return modified;
}

const downloadHtml = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
};

async function run() {
    for (const mapping of mappings) {
        const screen = screens.find(s => s.title === mapping.title);
        if (!screen) {
            console.log('Screen not found for: ' + mapping.title);
            continue;
        }
        
        console.log('Downloading: ' + mapping.title + ' -> ' + mapping.path);
        let html = await downloadHtml(screen.htmlCode.downloadUrl);
        
        // Ensure directory exists
        const dir = path.dirname(mapping.path);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        html = html.replace(/<head>([\s\S]*?)<\/head>/i, (match, innerHead) => {
            let newHead = innerHead.replace(/<script src="https:\/\/cdn\.tailwindcss\.com.*?"><\/script>/i, '');
            newHead = newHead.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/i, '');
            return '<head>' + newHead + '\n' + adjustDepth(headAdditions, mapping.depth) + '</head>';
        });

        // Replace Nav
        if (html.match(navRegex)) {
            html = html.replace(navRegex, adjustDepth(indexNav, mapping.depth));
        } else {
            // Prepend to body
            html = html.replace(/<body[^>]*>/i, '$&\n' + adjustDepth(indexNav, mapping.depth));
        }

        // Replace Footer
        if (html.match(footerRegex)) {
            html = html.replace(footerRegex, adjustDepth(indexFooter, mapping.depth));
        } else {
            // Append before </body>
            html = html.replace(/<\/body>/i, '\n' + adjustDepth(indexFooter, mapping.depth) + '\n</body>');
        }

        fs.writeFileSync(mapping.path, html);
        console.log('Saved ' + mapping.path);
    }
}

run().catch(console.error);
