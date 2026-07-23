const fs = require('fs');
const oldBuild = fs.readFileSync('old_build_utf8.js', 'utf8');
const newBuild = fs.readFileSync('build_order_page.js', 'utf8');

// The AI tab button from old_build_utf8.js
const aiTabBtnsStart = oldBuild.indexOf('<button data-target="form-training"');
const aiTabBtnsEnd = oldBuild.indexOf('</div>', aiTabBtnsStart);
const aiTabBtns = oldBuild.substring(aiTabBtnsStart, aiTabBtnsEnd);

// The AI forms from old_build_utf8.js
const aiFormStart = oldBuild.indexOf('<!-- 3. AI Training Enrollment Form');
const aiFormEnd = oldBuild.lastIndexOf('</section>');
const aiForms = oldBuild.substring(aiFormStart, aiFormEnd);

// Replace Ecommerce tab buttons
const ecoTabBtnStart = newBuild.indexOf('<button data-target="form-eco"');
const ecoTabBtnEnd = newBuild.indexOf('</div>', ecoTabBtnStart);
let updatedBuild = newBuild.substring(0, ecoTabBtnStart) + aiTabBtns + newBuild.substring(ecoTabBtnEnd);

// Replace Ecommerce forms
const ecoFormStart = updatedBuild.indexOf('<!-- 3. Ecommerce Content Form');
const ecoFormEnd = updatedBuild.lastIndexOf('</section>');
updatedBuild = updatedBuild.substring(0, ecoFormStart) + aiForms + updatedBuild.substring(ecoFormEnd);

// Write it back to build_order_page.js
fs.writeFileSync('build_order_page.js', updatedBuild, 'utf8');
console.log('Replaced E-commerce with AI in build_order_page.js');
