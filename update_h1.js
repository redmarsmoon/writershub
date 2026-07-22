const fs = require('fs');
const path = require('path');

const titles = {
  'about-us.html': 'About Us',
  'ai-seo\\index.html': 'Generative AI SEO Services',
  'ai-seo/index.html': 'Generative AI SEO Services',
  'ai-training\\index.html': 'AI Writers Training',
  'ai-training/index.html': 'AI Writers Training',
  'blog.html': 'WritersHub Plus Blog',
  'buyer-purchase-protection.html': 'Buyer Purchase Protection',
  'contact-us.html': 'Contact Us',
  'ecommerce-marketing.html': 'eCommerce Marketing Services',
  'emailmeessay.html': 'EmailMeEssay Merger',
  'essay-cave.html': 'Essay Cave Merger',
  'faq.html': 'Frequently Asked Questions',
  'how-it-works.html': 'How It Works',
  'how-to-order.html': 'How To Order',
  'index.html': 'Academic Writing, Career and Job Services',
  'job-hunting-services\\index.html': 'Job Hunting Services',
  'job-hunting-services/index.html': 'Job Hunting Services',
  'job-hunting-services\\linkedin-optimization.html': 'LinkedIn Profile Optimization',
  'job-hunting-services/linkedin-optimization.html': 'LinkedIn Profile Optimization',
  'order-now.html': 'Order Now',
  'pricing.html': 'Pricing',
  'privacy-policy.html': 'Privacy Policy',
  'research-paper.html': 'Research Paper Writing Services',
  'review-my-business.html': 'Business Reputation Management',
  'services.html': 'Our Services',
  'thank-you.html': 'Order Received',
  'verifime.html': 'VerifiMe Identity Verification',
  'writing-services\\dissertation-writing.html': 'Dissertation Writing Services',
  'writing-services/dissertation-writing.html': 'Dissertation Writing Services',
  'writing-services\\index.html': 'Academic Writing Services',
  'writing-services/index.html': 'Academic Writing Services'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory && f !== 'node_modules' && !f.startsWith('.')) {
      walkDir(dirPath, callback);
    } else if (!isDirectory && f.endsWith('.html')) {
      callback(dirPath);
    }
  });
}

walkDir('.', function(file) {
  // Normalize file path for lookup
  let normalizedFile = file.replace(/^[.\\/]+/, '').replace(/\\/g, '/');
  
  if (titles[normalizedFile]) {
    let newTitle = titles[normalizedFile];
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the first <h1> and replace its inner HTML
    let match = content.match(/(<h1[^>]*>)([\s\S]*?)(<\/h1>)/i);
    if (match) {
      let originalH1 = match[0];
      let newH1 = match[1] + newTitle + match[3];
      content = content.replace(originalH1, newH1);
      fs.writeFileSync(file, content);
      console.log('Updated ' + normalizedFile + ' -> ' + newTitle);
    } else {
      console.log('NO H1 FOUND in ' + normalizedFile);
    }
  } else {
    console.log('NO TITLE MAPPING FOUND for ' + normalizedFile);
  }
});
