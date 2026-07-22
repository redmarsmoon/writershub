const fs = require('fs');

const TEMPLATE = `<!DOCTYPE html>
<html class="light" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>{title} | WritersHub Plus</title>
    <meta name="description" content="{description}">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="{depth}assets/css/styles.css">
    <script src="{depth}assets/js/tailwind-config.js"></script>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
</head>
<body class="bg-background text-on-background antialiased">
    <!-- TopNavBar -->
    <nav class="docked full-width top-0 sticky z-50 bg-surface dark:bg-surface-container-low border-b border-outline-variant dark:border-outline flat no shadows h-16">
        <div class="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div class="text-headline-sm font-headline-md font-bold text-primary dark:text-primary-fixed"><a href="{depth}index.html">WritersHub Plus</a></div>
            <div class="hidden md:flex items-center space-x-gutter">
                <a class="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="{depth}writing-services/index.html">Writing Services</a>
                <a class="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="{depth}job-hunting-services/index.html">Job Hunting</a>
                <a class="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="{depth}ai-training/index.html">AI Training</a>
                <a class="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="{depth}ai-seo/index.html">AI SEO</a>
            </div>
            <div class="flex items-center space-x-4">
                <button class="hidden md:block font-label-md text-label-md text-primary dark:text-primary-fixed hover:opacity-80">Login</button>
                <a href="#" class="bg-primary text-on-primary px-6 py-2 rounded-lg font-button text-button active:scale-95 duration-150 transition-transform">Order Now</a>
            </div>
        </div>
    </nav>
    
    <main class="hero-gradient relative overflow-hidden">
        <!-- Hero Section -->
        <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 flex flex-col justify-center text-center items-center">
            <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background leading-tight mb-6 max-w-3xl">
                {title}
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
                {description}
            </p>
            <a href="#" class="btn-hover bg-primary text-on-primary px-8 py-4 rounded-lg font-button text-button inline-flex items-center justify-center">
                Get Started
                <span class="material-symbols-outlined ml-2" style="font-size: 20px;">arrow_forward</span>
            </a>
        </section>

        <!-- Benefits Section -->
        <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 bg-surface-elevated rounded-xl border border-border-low-contrast my-12">
            <h2 class="font-headline-lg text-headline-lg text-center text-primary mb-12">Why Choose Us?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <span class="material-symbols-outlined text-accent-vibrant text-5xl mb-4">star</span>
                    <h3 class="font-headline-md text-xl font-bold mb-2">Expert Professionals</h3>
                    <p class="text-on-surface-variant">Our team consists of industry veterans and academic experts.</p>
                </div>
                <div class="text-center">
                    <span class="material-symbols-outlined text-accent-vibrant text-5xl mb-4">timer</span>
                    <h3 class="font-headline-md text-xl font-bold mb-2">On-Time Delivery</h3>
                    <p class="text-on-surface-variant">We never miss a deadline. Get your work when you need it.</p>
                </div>
                <div class="text-center">
                    <span class="material-symbols-outlined text-accent-vibrant text-5xl mb-4">support_agent</span>
                    <h3 class="font-headline-md text-xl font-bold mb-2">24/7 Support</h3>
                    <p class="text-on-surface-variant">We're always here to answer your questions and assist you.</p>
                </div>
            </div>
        </section>

        <!-- Pricing Overview Section -->
        <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
            <h2 class="font-headline-lg text-headline-lg text-center text-primary mb-12">Pricing Overview</h2>
            <div class="bg-surface-elevated rounded-xl border border-border-low-contrast p-8 max-w-2xl mx-auto text-center card-shadow">
                <h3 class="font-headline-md text-2xl font-bold mb-4">Transparent Pricing</h3>
                <p class="text-on-surface-variant mb-6">Our pricing is clear, upfront, and competitive. Proceed to our order form to get an exact quote based on your requirements.</p>
                <a href="#" class="btn-hover bg-accent-vibrant text-on-primary px-6 py-3 rounded-lg font-button text-button inline-flex items-center justify-center">
                    View Full Pricing & Order
                </a>
            </div>
        </section>

        <!-- FAQs Section -->
        <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 bg-surface-subtle mb-16 rounded-xl">
            <h2 class="font-headline-lg text-headline-lg text-center text-primary mb-12">Frequently Asked Questions</h2>
            <div class="max-w-3xl mx-auto space-y-6">
                <div class="bg-surface-elevated p-6 rounded-lg border border-border-low-contrast">
                    <h3 class="font-bold text-lg mb-2">How fast can you deliver?</h3>
                    <p class="text-on-surface-variant">We offer various delivery speeds, starting from just 24 hours depending on the complexity of the task.</p>
                </div>
                <div class="bg-surface-elevated p-6 rounded-lg border border-border-low-contrast">
                    <h3 class="font-bold text-lg mb-2">Is the process confidential?</h3>
                    <p class="text-on-surface-variant">Absolutely. We use enterprise-grade encryption and strict privacy policies to protect your data.</p>
                </div>
                <div class="bg-surface-elevated p-6 rounded-lg border border-border-low-contrast">
                    <h3 class="font-bold text-lg mb-2">What if I need revisions?</h3>
                    <p class="text-on-surface-variant">We offer free revisions within a specified period to ensure you are 100% satisfied with the final result.</p>
                </div>
            </div>
        </section>
    </main>
    
    <!-- Footer -->
    <footer class="full-width bg-inverse-surface dark:bg-surface-container-lowest text-surface-variant">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div class="col-span-1 md:col-span-1">
                <div class="text-headline-sm font-headline-md text-primary-fixed dark:text-primary mb-4">WritersHub Plus</div>
                <p class="font-body-md text-body-md opacity-70">
                    Elevating communication through professional research and high-impact writing.
                </p>
            </div>
            <div>
                <h4 class="font-label-lg text-label-lg text-white mb-4">Services</h4>
                <ul class="space-y-2">
                    <li><a class="font-label-sm text-label-sm hover:text-secondary-fixed transition-colors" href="{depth}writing-services/index.html">Academic Services</a></li>
                    <li><a class="font-label-sm text-label-sm hover:text-secondary-fixed transition-colors" href="{depth}job-hunting-services/index.html">Career Coaching</a></li>
                    <li><a class="font-label-sm text-label-sm hover:text-secondary-fixed transition-colors" href="{depth}ai-training/index.html">AI Training</a></li>
                    <li><a class="font-label-sm text-label-sm hover:text-secondary-fixed transition-colors" href="{depth}ai-seo/index.html">AI SEO</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-label-lg text-label-lg text-white mb-4">Company</h4>
                <ul class="space-y-2">
                    <li><a class="font-label-sm text-label-sm hover:text-secondary-fixed transition-colors" href="#">Pricing Plans</a></li>
                    <li><a class="font-label-sm text-label-sm hover:text-secondary-fixed transition-colors" href="#">Contact Us</a></li>
                    <li><a class="font-label-sm text-label-sm hover:text-secondary-fixed transition-colors" href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-label-lg text-label-lg text-white mb-4">Newsletter</h4>
                <div class="flex space-x-2">
                    <input class="bg-surface/10 border-none text-white rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary" placeholder="Email address" type="email"/>
                    <button class="bg-primary px-4 py-2 rounded-lg">
                        <span class="material-symbols-outlined text-white">send</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="border-t border-white/10 py-6 text-center font-label-sm text-label-sm opacity-50">
            © 2024 WritersHub Plus. All rights reserved.
        </div>
    </footer>
    <script src="{depth}assets/js/main.js"></script>
</body>
</html>`;

const pages = [
    {path: "writing-services/index.html", title: "Academic Writing Services", description: "Professional writing support for essays, research papers, dissertations, and more.", depth: "../"},
    {path: "writing-services/essay-writing.html", title: "Essay Writing Services", description: "High-quality, plagiarism-free essays written by academic experts.", depth: "../"},
    {path: "writing-services/dissertation-writing.html", title: "Dissertation Writing", description: "Comprehensive Ph.D.-level dissertation assistance and research.", depth: "../"},
    {path: "writing-services/proofreading.html", title: "Proofreading & Editing", description: "Meticulous proofreading to ensure your documents are flawless.", depth: "../"},
    {path: "writing-services/programming-assignments.html", title: "Programming Assignments", description: "Expert help with coding, software development, and technical assignments.", depth: "../"},
    {path: "writing-services/lab-reports.html", title: "Lab Reports", description: "Accurate, scientifically sound lab reports across various disciplines.", depth: "../"},
    {path: "writing-services/case-studies.html", title: "Case Studies", description: "In-depth case study analysis and writing for business and academia.", depth: "../"},

    {path: "job-hunting-services/index.html", title: "Job Hunting Services", description: "Career advancement services including resumes, cover letters, and LinkedIn optimization.", depth: "../"},
    {path: "job-hunting-services/resume-writing.html", title: "Resume Writing", description: "ATS-optimized resumes designed to land you interviews.", depth: "../"},
    {path: "job-hunting-services/cover-letter-writing.html", title: "Cover Letter Writing", description: "Compelling cover letters tailored to specific job applications.", depth: "../"},
    {path: "job-hunting-services/linkedin-optimization.html", title: "LinkedIn Optimization", description: "Elevate your professional brand with an optimized LinkedIn profile.", depth: "../"},
    {path: "job-hunting-services/job-application-assistance.html", title: "Job Application Assistance", description: "End-to-end support for applying to your dream jobs.", depth: "../"},

    {path: "ai-training/index.html", title: "AI Training", description: "Master AI tools and integrate them into your workflow for maximum productivity.", depth: "../"},
    {path: "ai-seo/index.html", title: "AI SEO Services", description: "Leverage generative AI to dominate search engine rankings.", depth: "../"},
    
    // Additional Missing Pages
    {path: "verifime.html", title: "VerifiMe", description: "Verify your credentials and enhance your professional reputation.", depth: ""},
    {path: "gen-ai-seo-generative-engine-optimization.html", title: "Gen AI SEO", description: "Generative Engine Optimization services for the modern web.", depth: ""},
    {path: "review-my-business.html", title: "Review My Business", description: "Get a comprehensive review of your business strategy and web presence.", depth: ""},
    {path: "writers-ai.html", title: "Writers AI", description: "Leverage AI to enhance your writing productivity and quality.", depth: ""},
    {path: "ecommerce-marketing.html", title: "eCommerce Marketing", description: "Grow your online store with our proven eCommerce marketing strategies.", depth: ""},
    {path: "job-hunters.html", title: "Job Hunters", description: "Comprehensive resources and services for job seekers.", depth: ""},
    {path: "research-paper.html", title: "Research Paper Services", description: "Expert assistance with academic research papers.", depth: ""},
    {path: "essay-cave.html", title: "Essay Cave", description: "Your sanctuary for high-quality, custom-written essays.", depth: ""},
    {path: "emailmeessay.html", title: "Email Me Essay", description: "Fast, reliable essay delivery straight to your inbox.", depth: ""},
    {path: "essay-writing-service.html", title: "Essay Writing Service", description: "Top-tier essay writing services tailored to your academic needs.", depth: ""},
    {path: "about-us.html", title: "About Us", description: "Learn more about WritersHub Plus and our mission.", depth: ""},
    {path: "thank-you.html", title: "Thank You", description: "Thank you for your order. We are processing your request.", depth: ""},
    {path: "services.html", title: "Our Services", description: "Explore the wide range of writing and career services we offer.", depth: ""},
    {path: "pricing.html", title: "Pricing", description: "Transparent, competitive pricing for all our professional services.", depth: ""},
    {path: "order-now.html", title: "Order Now", description: "Place your order today and get started with WritersHub Plus.", depth: ""},
    {path: "new-order.html", title: "New Order", description: "Start a new order for writing, editing, or career services.", depth: ""},
    {path: "how-to-order.html", title: "How to Order", description: "A simple, step-by-step guide on how to place an order with us.", depth: ""},
    {path: "how-it-works.html", title: "How It Works", description: "Understand our process from order placement to final delivery.", depth: ""},
    {path: "faq.html", title: "FAQ", description: "Frequently asked questions about our services, pricing, and process.", depth: ""},
    {path: "contact-us.html", title: "Contact Us", description: "Get in touch with our support team for any inquiries.", depth: ""},
    {path: "buyer-purchase-protection.html", title: "Buyer Purchase Protection", description: "Our commitment to secure payments and guaranteed satisfaction.", depth: ""},
    {path: "blog.html", title: "Blog", description: "Insights, tips, and news on writing, career growth, and more.", depth: ""},
    {path: "essay-writers.html", title: "Essay Writers", description: "Meet our team of professional academic writers.", depth: ""},
    {path: "privacy-policy.html", title: "Privacy Policy", description: "How we protect your data and ensure your confidentiality.", depth: ""}
];

pages.forEach(p => {
    let content = TEMPLATE
        .replace(/{title}/g, p.title)
        .replace(/{description}/g, p.description)
        .replace(/{depth}/g, p.depth);
    fs.writeFileSync(p.path, content, 'utf8');
});

console.log("Pages generated successfully.");
