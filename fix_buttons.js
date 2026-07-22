const fs = require('fs');
const path = require('path');

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
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // 1. "View Sample" -> "Place your order"
  // Example matching: View Sample, View Samples, View Sample Library, View Sample Papers
  content = content.replace(/>View Sample Library</g, '>Place your order<');
  content = content.replace(/>View Samples</g, '>Place your order<');
  content = content.replace(/>View Sample Papers</g, '>Place your order<');
  content = content.replace(/>View Sample</g, '>Place your order<');
  
  // Update href for these buttons (we assume they might be anchors, or buttons without hrefs)
  // Let's replace any href="#" that is near "Place your order" or just globally fix broken links.
  
  // 2. "Explore Services" / "Explore Service" -> link to /services.html
  // E.g. <a ... href="#">Explore Service
  content = content.replace(/href="#"([^>]*>Explore Service)/gi, 'href="/services.html"$1');
  content = content.replace(/href="#"([^>]*>Explore Services)/gi, 'href="/services.html"$1');
  
  // 3. Fix specific broken links
  if (file.includes('research-paper.html')) {
    content = content.replace(/href="#"([^>]*>Learn about our data security)/gi, 'href="/privacy-policy.html"$1');
  }
  if (file.includes('review-my-business.html')) {
    content = content.replace(/href="#"([^>]*>Learn More)/gi, 'href="/contact-us.html"$1');
  }
  if (file.includes('ai-seo')) {
    content = content.replace(/href="#"([^>]*>Learn more about GEO)/gi, 'href="/contact-us.html"$1');
  }
  if (file.includes('blog.html')) {
    content = content.replace(/href="#"([^>]*>View All)/gi, 'href="/blog.html"$1');
  }
  if (file.includes('thank-you.html')) {
    content = content.replace(/href="#"/gi, 'href="/index.html"');
  }
  
  // For any remaining href="#" that represents buttons like "Place your order", change to /order-now.html
  // Actually, let's just make all remaining href="#" point to /order-now.html if they seem to be CTA buttons,
  // or /contact-us.html. A safe default for a writing service CTA is /order-now.html.
  content = content.replace(/href="#"/g, 'href="/order-now.html"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Fixed buttons and links on ' + file);
  }
});
