import re

with open('build_order_page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace tabs
old_tabs = """        <button data-target="form-ecommerce" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">storefront</span> E-commerce & Digital Services
        </button>"""

new_tabs = """        <button data-target="form-training" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">psychology</span> AI Training
        </button>
        <button data-target="form-seo" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">query_stats</span> AI SEO & LLM
        </button>"""

content = content.replace(old_tabs, new_tabs)

# Read the old_build_utf8.js to extract the AI training and SEO forms
with open('old_build_utf8.js', 'r', encoding='utf-8') as f:
    old_build = f.read()

start_idx = old_build.find('<!-- 3. AI Training Enrollment Form (Hidden by default) -->')
end_idx = old_build.find('</div>\n</section>')
ai_forms = old_build[start_idx:end_idx]

# Remove E-commerce from build_order_page.js
ecommerce_start = content.find('<!-- 3. E-commerce & Digital Services -->')
ecommerce_end = content.find('</div>\n</section>')
if ecommerce_start != -1 and ecommerce_end != -1:
    content = content[:ecommerce_start] + ai_forms + content[ecommerce_end:]

with open('build_order_page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("build_order_page.js updated")
