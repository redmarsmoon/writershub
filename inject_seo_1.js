const fs = require('fs');

const seoData = {
    'index.html': `
<section class="py-16 bg-surface-container-lowest border-t border-outline-variant dark:border-outline">
    <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-display-md text-on-surface mb-6">Elevate Your Success with WritersHub Plus: Premium Academic and Career Services</h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                In today’s highly competitive academic and professional landscapes, standing out requires more than just hard work—it requires exceptional communication, rigorous research, and strategic positioning. At <strong>WritersHub Plus</strong>, we are dedicated to providing unparalleled <a href="/writing-services/index.html" class="text-primary hover:underline">academic writing services</a> and comprehensive <a href="/job-hunting-services/index.html" class="text-primary hover:underline">career coaching solutions</a>. Our mission is to bridge the gap between your current potential and your ultimate goals. Whether you are a doctoral candidate seeking dissertation support or a professional navigating a complex job market, our elite team of writers and strategists is here to ensure your success.
            </p>
            
            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Comprehensive Academic Writing Solutions</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Navigating the demands of higher education can be overwhelming. From intricate <a href="/research-paper.html" class="text-primary hover:underline">research papers</a> to full-scale dissertations, the pressure to deliver original, peer-reviewed, and structurally flawless content is immense. WritersHub Plus specializes in custom academic writing tailored to the exact specifications of your university guidelines. We employ subject-matter experts across diverse disciplines—ranging from the humanities and social sciences to STEM fields—ensuring that every piece of writing is authoritative and deeply researched. Our rigorous quality assurance process guarantees zero plagiarism, perfect formatting (APA, MLA, Chicago, Harvard), and nuanced argumentation that consistently earns top grades.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                We understand that academic integrity is paramount. That is why our services are designed not merely as a shortcut, but as a robust learning tool. By providing high-quality model papers and comprehensive literature reviews, we empower students to better understand their course material and improve their own analytical writing skills.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Strategic Career Coaching and Job Hunting Services</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Graduating with a degree is only the first step; entering the workforce requires a completely different skill set. Our <a href="/job-hunting-services/index.html" class="text-primary hover:underline">job hunting services</a> are meticulously designed to give you a competitive edge in the modern job market. Our career strategists begin by conducting a deep-dive analysis of your professional background, skills, and career aspirations. From there, we craft ATS-optimized resumes and compelling cover letters that capture the attention of recruiters and hiring managers. 
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                In addition to traditional resume writing, we offer advanced <a href="/job-hunting-services/linkedin-optimization.html" class="text-primary hover:underline">LinkedIn Profile Optimization</a>. In the digital age, your online presence is your most powerful networking tool. We transform static profiles into dynamic portfolios that naturally attract inbound recruitment opportunities. We also provide interview coaching, salary negotiation strategies, and long-term career mapping, ensuring you don't just find a job, but launch a fulfilling career.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Why Choose WritersHub Plus?</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                The internet is saturated with generic writing services, but WritersHub Plus stands apart through our unwavering commitment to quality, confidentiality, and personalized support. When you <a href="/order-now.html" class="text-primary hover:underline">order with us</a>, you are not simply purchasing a document; you are investing in a collaborative partnership. We offer 24/7 customer support, direct communication with your assigned expert, and unlimited revisions to ensure your complete satisfaction. Our transparent <a href="/pricing.html" class="text-primary hover:underline">pricing structure</a> ensures there are no hidden fees, making premium writing and coaching accessible to a wider audience.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Furthermore, we have integrated cutting-edge technology into our service delivery. For clients interested in the intersection of technology and writing, our <a href="/ai-training/index.html" class="text-primary hover:underline">AI training programs</a> and <a href="/ai-seo/index.html" class="text-primary hover:underline">Generative AI SEO</a> services demonstrate our commitment to staying ahead of industry trends. We blend the irreplaceable nuance of human expertise with the efficiency of modern tools to deliver results that consistently exceed expectations.
            </p>
            
            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Start Your Journey Today</h3>
            <p class="text-on-surface-variant leading-relaxed">
                Your future is too important to leave to chance. Whether you are aiming for academic distinction or professional advancement, WritersHub Plus provides the resources, expertise, and support you need to thrive. Explore our <a href="/how-it-works.html" class="text-primary hover:underline">seamless process</a>, read our verified client testimonials, and take the first step toward achieving your goals. 
            </p>
        </div>
    </div>
</section>
    `,
    'about-us.html': `
<section class="py-16 bg-surface-container-lowest border-t border-outline-variant dark:border-outline">
    <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-display-md text-on-surface mb-6">About WritersHub Plus: A Legacy of Academic and Professional Excellence</h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                At WritersHub Plus, our identity is forged by a profound commitment to educational advancement and career empowerment. Founded by a collective of seasoned educators, industry professionals, and elite writers, our company was built on a singular vision: to democratize access to high-tier <a href="/writing-services/index.html" class="text-primary hover:underline">academic writing assistance</a> and <a href="/job-hunting-services/index.html" class="text-primary hover:underline">career development strategies</a>. We believe that every student and professional possesses untapped potential, and our mission is to provide the expertly crafted tools—be it a rigorously researched dissertation or a highly optimized executive resume—necessary to unlock that potential.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Our Core Philosophy and Mission</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                The foundational philosophy of WritersHub Plus is rooted in absolute integrity and bespoke quality. In an industry often plagued by automated content and plagiarized materials, we stand out by strictly adhering to a 100% human-generated, custom-writing model. When a client approaches us for a <a href="/research-paper.html" class="text-primary hover:underline">research paper</a>, they are matched with a subject-matter expert who possesses advanced degrees in the relevant field. This ensures that every argument is nuanced, every citation is accurate, and the final deliverable reflects profound scholarly rigor.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Our mission extends beyond the classroom. Recognizing the intense competitiveness of the modern workforce, we expanded our offerings to include comprehensive job hunting support. We view career transitions not as simple transactions, but as pivotal life events. Therefore, our career coaches work intimately with clients to rebuild their professional narratives, optimizing their <a href="/job-hunting-services/linkedin-optimization.html" class="text-primary hover:underline">LinkedIn profiles</a> and aligning their resumes with the specific demands of Applicant Tracking Systems (ATS).
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">A Team of Unrivaled Experts</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                The strength of WritersHub Plus lies unequivocally in our talent pool. We maintain an incredibly rigorous vetting process for our writers, editors, and strategists. Fewer than 3% of applicants pass our multifaceted testing phases, which assess not only writing proficiency and subject-matter knowledge but also critical thinking and adherence to tight deadlines. Our team comprises former university professors, published researchers, certified resume writers, and corporate recruiters. This diverse amalgamation of expertise allows us to seamlessly handle everything from complex undergraduate <a href="/essay-cave.html" class="text-primary hover:underline">essay writing</a> to sophisticated <a href="/ecommerce-marketing.html" class="text-primary hover:underline">eCommerce marketing strategies</a>.
            </p>
            
            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Commitment to Confidentiality and Client Trust</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                We recognize that engaging external writing and career services requires a immense degree of trust. That is why WritersHub Plus has implemented state-of-the-art security protocols to protect our clients' data and privacy. All interactions, transactions, and final document deliveries are fully encrypted. We adhere to a strict non-disclosure agreement (NDA) policy across our entire organization. You can review our comprehensive <a href="/privacy-policy.html" class="text-primary hover:underline">Privacy Policy</a> and <a href="/buyer-purchase-protection.html" class="text-primary hover:underline">Buyer Purchase Protection</a> guidelines to understand the lengths we go to ensure your peace of mind.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Looking Toward the Future</h3>
            <p class="text-on-surface-variant leading-relaxed">
                As the digital landscape evolves, so do we. WritersHub Plus is continuously innovating its service delivery model. We are actively incorporating new methodologies in <a href="/ai-seo/index.html" class="text-primary hover:underline">Generative AI SEO</a> and expanding our capabilities to support emerging academic and professional fields. However, regardless of technological advancements, our core values remain unchanged: exceptional quality, unwavering integrity, and a profound dedication to our clients' success. <a href="/contact-us.html" class="text-primary hover:underline">Contact our team</a> today to learn more about how we can support your unique journey.
            </p>
        </div>
    </div>
</section>
    `,
    'services.html': `
<section class="py-16 bg-surface-container-lowest border-t border-outline-variant dark:border-outline">
    <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-display-md text-on-surface mb-6">Explore the Full Spectrum of WritersHub Plus Services</h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Welcome to the comprehensive directory of WritersHub Plus services. We have strategically developed a multi-disciplinary portfolio designed to support individuals and businesses at every stage of their academic and professional lifecycles. From securing top grades in complex university courses to landing executive-level roles and scaling online businesses, our customized solutions are tailored to deliver measurable, high-impact results. 
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Elite Academic Writing and Research Support</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                The cornerstone of our organization is our industry-leading <a href="/writing-services/index.html" class="text-primary hover:underline">academic writing division</a>. We provide comprehensive assistance across all academic levels—High School, Undergraduate, Master's, and Ph.D. Our specialized writers are adept at handling a vast array of assignments. For students facing tight deadlines on standard coursework, our <a href="/essay-cave.html" class="text-primary hover:underline">essay writing services</a> deliver perfectly structured, heavily researched papers that strictly adhere to grading rubrics. 
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                For advanced degree candidates, we offer deeply specialized support. Our <a href="/writing-services/dissertation-writing.html" class="text-primary hover:underline">dissertation and thesis writing</a> services cover everything from proposal drafting and literature reviews to complex statistical analysis (SPSS, R, Python) and final editing. Furthermore, our <a href="/research-paper.html" class="text-primary hover:underline">research paper assistance</a> is highly sought after by students and professionals who require publication-ready manuscripts, meticulously formatted in APA, MLA, or Harvard styles.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Career Advancement and Job Hunting Strategies</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Transitioning from academia to the corporate world, or navigating a mid-career shift, requires a highly strategic approach. Our <a href="/job-hunting-services/index.html" class="text-primary hover:underline">job hunting services</a> are led by former HR professionals and certified career coaches who understand exactly what modern recruiters are looking for. We go beyond basic resume templates; we construct compelling professional narratives. We ensure your resume is fully optimized to bypass Applicant Tracking Systems (ATS) while remaining engaging to human readers.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Recognizing the critical importance of digital networking, we offer targeted <a href="/job-hunting-services/linkedin-optimization.html" class="text-primary hover:underline">LinkedIn profile optimization</a>. We transform your profile from a static online resume into a dynamic, keyword-rich landing page that attracts inbound opportunities and headhunters. Additionally, we provide comprehensive interview preparation and salary negotiation tactics, equipping you with the confidence needed to secure the compensation you deserve.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Business Solutions: eCommerce and AI Integration</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                WritersHub Plus is also a trusted partner for entrepreneurs and businesses looking to scale their digital footprint. Our <a href="/ecommerce-marketing.html" class="text-primary hover:underline">eCommerce strategy services</a> encompass everything from high-converting product descriptions and compelling brand storytelling to comprehensive market analysis and sales funnel optimization. We help brands communicate their value proposition clearly and persuasively to their target audience.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                At the frontier of digital innovation, we offer highly specialized <a href="/ai-seo/index.html" class="text-primary hover:underline">Generative AI SEO</a> and <a href="/ai-training/index.html" class="text-primary hover:underline">Writers AI training</a>. The landscape of search engine optimization has fundamentally changed with the advent of large language models. Our team utilizes advanced AI tools to conduct predictive keyword research, generate semantic topic clusters, and execute content strategies that dominate search engine results pages (SERPs).
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Begin Your Project with Us</h3>
            <p class="text-on-surface-variant leading-relaxed">
                Whether you need immediate assistance with a challenging academic paper, a total overhaul of your professional portfolio, or a scalable content strategy for your business, WritersHub Plus is ready to execute. We invite you to review our straightforward <a href="/pricing.html" class="text-primary hover:underline">pricing structure</a>, understand our streamlined <a href="/how-it-works.html" class="text-primary hover:underline">process</a>, and <a href="/order-now.html" class="text-primary hover:underline">place your order</a> with confidence today.
            </p>
        </div>
    </div>
</section>
    `,
    'pricing.html': `
<section class="py-16 bg-surface-container-lowest border-t border-outline-variant dark:border-outline">
    <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-display-md text-on-surface mb-6">Transparent and Value-Driven Pricing at WritersHub Plus</h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                At WritersHub Plus, we believe that premium quality academic and professional services should be accessible, transparent, and completely free of hidden fees. We have meticulously structured our pricing models to reflect the true value of expertly researched, 100% human-generated content while remaining highly competitive within the industry. Whether you are a student utilizing our <a href="/writing-services/index.html" class="text-primary hover:underline">academic writing services</a> or a professional investing in our <a href="/job-hunting-services/index.html" class="text-primary hover:underline">career coaching</a>, you will always know exactly what you are paying for and the exceptional quality you will receive in return.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Understanding Our Academic Writing Rates</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Our academic pricing is fundamentally dynamic, calculated based on three primary variables: academic level, deadline urgency, and page count. A standard <a href="/essay-cave.html" class="text-primary hover:underline">high school essay</a> with a two-week deadline represents our most cost-effective tier, while a highly specialized <a href="/writing-services/dissertation-writing.html" class="text-primary hover:underline">doctoral dissertation chapter</a> requiring complex data analysis on a 48-hour turnaround will naturally command a higher rate. This sliding scale ensures fairness; you never overpay for standard assignments, and our specialized experts are fairly compensated for their advanced knowledge and rapid execution.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Every academic order includes standard features at no additional cost: comprehensive plagiarism reports, perfectly formatted title and reference pages (APA, MLA, Harvard, etc.), and unlimited revisions within the stated warranty period. Unlike many competitors, we do not upcharge for these essential components of a well-crafted <a href="/research-paper.html" class="text-primary hover:underline">research paper</a>. 
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Investment in Your Career: Job Hunting Packages</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Investing in your professional brand yields immediate and long-term financial returns. Our career services pricing is structured as comprehensive packages rather than a la carte fees, ensuring you receive holistic support. For example, our foundational <a href="/job-hunting-services/index.html" class="text-primary hover:underline">resume and cover letter package</a> is designed to bypass ATS systems and secure interviews. For clients looking for maximum impact, our executive packages include <a href="/job-hunting-services/linkedin-optimization.html" class="text-primary hover:underline">LinkedIn profile optimization</a>, personalized interview coaching, and strategic salary negotiation scripts.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                We view our career pricing as an investment with a rapid ROI. A professionally crafted resume can drastically reduce your job search time and position you to negotiate a significantly higher starting salary, paying for the service exponentially over the course of your first year in a new role.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Custom Quotes for Business and eCommerce</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                For our B2B clients, we understand that out-of-the-box pricing rarely fits complex strategic needs. Therefore, our <a href="/ecommerce-marketing.html" class="text-primary hover:underline">eCommerce strategy</a> and <a href="/ai-seo/index.html" class="text-primary hover:underline">Generative AI SEO</a> services are generally quoted on a custom, project-by-project basis. After an initial consultation to determine the scope of your content marketing needs, product descriptions, or SEO overhauls, we provide a detailed, itemized proposal. This ensures your budget is allocated strictly to deliverables that directly impact your conversion rates and digital visibility.
            </p>
            
            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Secure Transactions and Guarantees</h3>
            <p class="text-on-surface-variant leading-relaxed">
                Trust and security are paramount when making digital transactions. All payments processed through WritersHub Plus are secured by industry-leading encryption. Furthermore, every purchase is backed by our robust <a href="/buyer-purchase-protection.html" class="text-primary hover:underline">Buyer Purchase Protection</a> policy. If the final deliverable fails to meet your initial instructions, you are entitled to free revisions and, ultimately, our money-back guarantee. If you have specific questions regarding a custom project, we encourage you to review our <a href="/faq.html" class="text-primary hover:underline">FAQ section</a> or <a href="/contact-us.html" class="text-primary hover:underline">contact our support team</a> directly. Ready to begin? <a href="/order-now.html" class="text-primary hover:underline">Request a quote</a> today.
            </p>
        </div>
    </div>
</section>
    `,
    'how-it-works.html': `
<section class="py-16 bg-surface-container-lowest border-t border-outline-variant dark:border-outline">
    <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-display-md text-on-surface mb-6">How It Works: A Streamlined Path to Academic and Professional Success</h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                At WritersHub Plus, we have engineered our service delivery process to be as intuitive, transparent, and frictionless as possible. We understand that whether you are facing a looming deadline for a complex <a href="/writing-services/index.html" class="text-primary hover:underline">academic research paper</a> or urgently need a resume overhaul for an upcoming interview, the last thing you need is a convoluted ordering process. Our methodology is designed to move you from initial inquiry to final, polished deliverable in a few simple, highly communicative steps. 
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Step 1: Submit Your Detailed Requirements</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                The foundation of a successful project is clear communication. When you visit our <a href="/order-now.html" class="text-primary hover:underline">Order Now</a> page, you will be guided through a comprehensive, yet simple, intake form. For academic clients utilizing our <a href="/essay-cave.html" class="text-primary hover:underline">essay writing services</a>, you will specify your academic level, page count, formatting style (APA, MLA, etc.), and deadline. Most importantly, you can upload grading rubrics, lecture notes, and specific faculty instructions. The more context you provide, the more precisely our writers can tailor the final document to your unique voice and institutional standards.
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                For clients seeking <a href="/job-hunting-services/index.html" class="text-primary hover:underline">career and job hunting services</a>, this step involves uploading your current resume, links to target job descriptions, and completing a brief career history questionnaire. This foundational data allows our career strategists to immediately begin shaping a narrative that highlights your core competencies and leadership achievements.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Step 2: Secure Payment and Expert Matching</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Once your requirements are submitted, the system will generate a transparent, upfront quote based on our standardized <a href="/pricing.html" class="text-primary hover:underline">pricing matrix</a>. We utilize highly secure, encrypted payment gateways to process your transaction safely. Upon confirmation of payment, your project enters our proprietary matching system. 
            </p>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                We do not randomly assign orders. If you ordered a <a href="/writing-services/dissertation-writing.html" class="text-primary hover:underline">nursing dissertation literature review</a>, you are matched specifically with an expert holding an advanced degree in nursing or public health. If you requested <a href="/ecommerce-marketing.html" class="text-primary hover:underline">eCommerce SEO strategy</a>, your project is handed to a seasoned digital marketer. This meticulous matching process is the secret behind our industry-leading quality and client satisfaction rates.
            </p>

            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Step 3: Execution and Direct Collaboration</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                This is where the magic happens. Unlike opaque services that leave you in the dark, WritersHub Plus provides you with a dedicated client portal. Here, you can communicate directly with your assigned expert. You can track progress, clarify instructions, and request drafts (for larger projects). If your expert has a question about a specific <a href="/research-paper.html" class="text-primary hover:underline">research methodology</a> you want used, they will message you directly. This collaborative environment ensures the project stays perfectly aligned with your vision from day one.
            </p>
            
            <h3 class="text-2xl font-semibold text-on-surface mt-8 mb-4">Step 4: Quality Assurance and Final Delivery</h3>
            <p class="text-on-surface-variant leading-relaxed mb-4">
                Before any document reaches your inbox, it must pass through our internal Quality Assurance (QA) team. Our professional editors review the work against your original instructions, check for structural coherence, and run the text through advanced anti-plagiarism and AI-detection software. We guarantee 100% original, human-written content. 
            </p>
            <p class="text-on-surface-variant leading-relaxed">
                Once approved by QA, the final document is delivered to your portal ahead of your deadline. You then have the opportunity to review the work. If you feel any aspect of the document does not fully align with your initial instructions, you can request free revisions. We are fully committed to your success and are protected by our comprehensive <a href="/buyer-purchase-protection.html" class="text-primary hover:underline">Buyer Purchase Protection</a>. If you are ready to experience the WritersHub Plus difference, <a href="/how-to-order.html" class="text-primary hover:underline">start your order today</a>.
            </p>
        </div>
    </div>
</section>
    `
};

for (const [filename, content] of Object.entries(seoData)) {
    if (fs.existsSync(filename)) {
        let fileContent = fs.readFileSync(filename, 'utf8');
        // Insert right before <!-- Footer -->
        if (fileContent.includes('<!-- Footer -->')) {
            fileContent = fileContent.replace('<!-- Footer -->', content + '\n<!-- Footer -->');
            fs.writeFileSync(filename, fileContent);
            console.log('Added SEO block to ' + filename);
        }
    }
}
