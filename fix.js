const fs = require('fs');
let content = fs.readFileSync('build_order_page.js', 'utf8');

const old_tabs = `        <button data-target="form-ecommerce" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">storefront</span> E-commerce & Digital Services
        </button>`;

const new_tabs = `        <button data-target="form-training" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">psychology</span> AI Training
        </button>
        <button data-target="form-seo" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">query_stats</span> AI SEO & LLM
        </button>`;
content = content.replace(old_tabs, new_tabs);

const old_build = fs.readFileSync('old_build_utf8.js', 'utf8');
const start_idx = old_build.indexOf('    <!-- 3. AI Training Enrollment Form (Hidden by default) -->');
const end_idx = old_build.indexOf('\n</div>\n</section>');
const ai_forms = old_build.substring(start_idx, end_idx);

const ecommerce_start = content.indexOf('    <!-- 3. E-commerce & Digital Services -->');
const ecommerce_end = content.indexOf('\n</div>\n</section>');
content = content.substring(0, ecommerce_start) + ai_forms + content.substring(ecommerce_end);

fs.writeFileSync('build_order_page.js', content, 'utf8');
console.log('Fixed build_order_page.js');
