const fs = require('fs');

// Read order-now.html
let orderNow = fs.readFileSync('order-now.html', 'utf8');

// Find the tabs block in order-now.html
const tabsStart = orderNow.indexOf('<!-- Top Level Tabs -->');
const tabsEnd = orderNow.indexOf('<!-- 1. Academic Writing Wizard -->');
const currentTabs = orderNow.substring(tabsStart, tabsEnd);

// Create new tabs
const newTabs = `<!-- Top Level Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button data-target="form-academic" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-primary bg-primary-container/10 text-primary transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">school</span> Academic Writing
        </button>
        <button data-target="form-career" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">business_center</span> Job Hunting & CV Services
        </button>
        <button data-target="form-training" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">psychology</span> AI Training
        </button>
        <button data-target="form-seo" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">query_stats</span> AI SEO & LLM
        </button>
    </div>

    `;

// Extract AI Training and SEO from old_build_utf8.js
const oldBuild = fs.readFileSync('old_build_utf8.js', 'utf8');
const aiStart = oldBuild.indexOf('    <!-- 3. AI Training Enrollment Form (Hidden by default) -->');
const aiEnd = oldBuild.indexOf('\n</div>\n</section>');
const aiForms = oldBuild.substring(aiStart, aiEnd);

// Replace tabs and E-commerce in order-now.html
let newOrderNow = orderNow.replace(currentTabs, newTabs);

const ecoStart = newOrderNow.indexOf('    <!-- 3. E-commerce & Digital Services -->');
const ecoEnd = newOrderNow.indexOf('\n</div>\n</section>');
newOrderNow = newOrderNow.substring(0, ecoStart) + aiForms + newOrderNow.substring(ecoEnd);

fs.writeFileSync('order-now.html', newOrderNow, 'utf8');

// Now generate a clean build_order_page.js from the fixed order-now.html
const formSectionStart = newOrderNow.indexOf('<!-- Form Section -->');
const formSectionEnd = newOrderNow.indexOf('<!-- Social Proof -->');

const newBody = newOrderNow.substring(formSectionStart, formSectionEnd);

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

const newBody = \`${newBody.replace(/`/g, '\\`')}\`;

const finalContent = header + newBody + footer;

fs.writeFileSync(targetFile, finalContent);
console.log('Successfully rebuilt order-now.html');
`;

fs.writeFileSync('build_order_page.js', builderContent, 'utf8');
console.log('Done!');
