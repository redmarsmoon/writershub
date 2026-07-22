const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'order-now.html');
let content = fs.readFileSync(targetFile, 'utf8');

// Ensure order-engine.js is included in head
if(!content.includes('order-engine.js')) {
    content = content.replace('</head>', '    <script src="/assets/js/order-engine.js"></script>\n</head>');
}

const headerSplit = content.split('<!-- Form Section -->');
const header = headerSplit[0];
const footerSplit = headerSplit[1].split('<!-- Social Proof -->');
const footer = '<!-- Social Proof -->' + footerSplit[1];

const newBody = `<!-- Form Section -->
<section class="py-16 md:py-8 bg-surface-container-lowest">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    
    <!-- Top Level Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button data-target="form-academic" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-primary bg-primary-container/10 text-primary transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">school</span> Academic Writing
        </button>
        <button data-target="form-career" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">business_center</span> Career Services
        </button>
        <button data-target="form-training" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">model_training</span> AI Training
        </button>
        <button data-target="form-seo" class="tab-btn px-6 py-3 rounded-full font-label-lg border-2 border-transparent text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors flex items-center gap-2">
            <span class="material-symbols-outlined">search_insights</span> AI SEO & LLM
        </button>
    </div>

    <!-- 1. Academic Writing Wizard -->
    <div id="form-academic" class="form-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Main Wizard Area -->
            <div class="lg:col-span-8 bg-white border border-border-low-contrast rounded-xl overflow-hidden shadow-lg">
                <div class="bg-surface-container p-6 border-b border-border-low-contrast relative">
                    <h2 class="font-headline-sm text-headline-sm text-on-surface mb-4">Academic Order Wizard</h2>
                    
                    <!-- Progress Bar -->
                    <div class="w-full bg-surface-variant rounded-full h-2 mb-6 overflow-hidden">
                        <div id="wizard-progress" class="bg-primary h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
                    </div>
                    
                    <!-- Step Indicators -->
                    <div class="flex justify-between items-center px-2">
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-primary bg-primary text-white flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm" data-step="1">1</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300" data-step="2">2</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300 hidden md:flex" data-step="3">3</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2 hidden md:block"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300 hidden md:flex" data-step="4">4</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2 hidden md:block"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300 hidden md:flex" data-step="5">5</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2 hidden md:block"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300 hidden md:flex" data-step="6">6</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2 hidden md:block"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300" data-step="7">7</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300" data-step="8">8</div>
                        <div class="h-0.5 flex-grow bg-border-low-contrast mx-2"></div>
                        <div class="step-indicator w-8 h-8 rounded-full border-2 border-border-low-contrast bg-surface text-text-muted flex items-center justify-center font-bold text-sm transition-all duration-300" data-step="9"><span class="material-symbols-outlined text-sm">payment</span></div>
                    </div>
                </div>

                <form id="academic-wizard" class="p-8">
                    <!-- Step 1: Academic Level & Paper Type -->
                    <div id="step-1" class="wizard-step-content space-y-8">
                        <h3 class="font-headline-sm text-lg text-primary mb-2">Step 1: Core Details</h3>
                        <div class="space-y-4">
                            <label class="block font-label-md text-on-surface-variant">Academic Level</label>
                            <div class="grid grid-cols-2 md:grid-cols-5 gap-3 option-group">
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-3 rounded-lg text-sm hover:border-primary transition-all">High School</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-3 rounded-lg text-sm hover:border-primary transition-all">Undergrad (1-2)</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-3 rounded-lg text-sm hover:border-primary transition-all">Undergrad (3-4)</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-3 rounded-lg text-sm hover:border-primary transition-all">Master's</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-3 rounded-lg text-sm hover:border-primary transition-all">PhD</button>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Type of Paper</label>
                                <select class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                                    <option>Essay (any type)</option>
                                    <option>Research Paper</option>
                                    <option>Dissertation</option>
                                    <option>Case Study</option>
                                </select>
                            </div>
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Discipline</label>
                                <select class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                                    <option>Select...</option>
                                    <option>Computer Science</option>
                                    <option>Business & Management</option>
                                    <option>Nursing</option>
                                    <option>History</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2: Topic & Instructions -->
                    <div id="step-2" class="wizard-step-content space-y-8 hidden">
                        <h3 class="font-headline-sm text-lg text-primary mb-2">Step 2: Paper Information</h3>
                        <div>
                            <label class="block font-label-md text-on-surface-variant mb-2">Topic</label>
                            <input type="text" value="Writer's choice" class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"/>
                        </div>
                        <div>
                            <label class="block font-label-md text-on-surface-variant mb-2">Paper Instructions</label>
                            <textarea rows="5" class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Write anything you feel is important for the writer to consider..."></textarea>
                        </div>
                    </div>

                    <!-- Step 3: Requirements & Formatting -->
                    <div id="step-3" class="wizard-step-content space-y-8 hidden">
                        <h3 class="font-headline-sm text-lg text-primary mb-2">Step 3: Requirements</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Pages</label>
                                <div class="flex items-center border border-border-low-contrast rounded-lg overflow-hidden">
                                    <button type="button" class="qty-btn minus w-12 h-12 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-pages">-</button>
                                    <input type="number" id="qty-pages" value="1" min="1" class="w-full text-center border-none focus:ring-0" readonly/>
                                    <button type="button" class="qty-btn plus w-12 h-12 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-pages">+</button>
                                </div>
                                <p class="text-xs text-text-muted mt-2 text-center" id="word-count-display">~275 words</p>
                            </div>
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Spacing</label>
                                <div class="flex option-group h-12">
                                    <button type="button" class="option-btn spacing-btn flex-1 border border-border-low-contrast rounded-l-lg bg-surface text-on-surface" data-value="single">Single</button>
                                    <button type="button" class="option-btn spacing-btn flex-1 border border-border-low-contrast rounded-r-lg bg-primary text-white border-primary" data-value="double">Double</button>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block font-label-md text-on-surface-variant mb-2">Paper Format</label>
                            <div class="grid grid-cols-3 md:grid-cols-6 gap-2 option-group">
                                <button type="button" class="option-btn bg-primary text-white border border-primary p-2 rounded-lg text-sm">APA</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">Chicago</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">Harvard</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">MLA</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">None</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">Other</button>
                            </div>
                        </div>
                    </div>

                    <!-- Step 4: Deadline & Extras Counts -->
                    <div id="step-4" class="wizard-step-content space-y-8 hidden">
                        <h3 class="font-headline-sm text-lg text-primary mb-2">Step 4: Timeline & Assets</h3>
                        <div>
                            <label class="block font-label-md text-on-surface-variant mb-2">Deadline</label>
                            <div class="grid grid-cols-3 md:grid-cols-7 gap-2 option-group">
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">8 hrs</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">24 hrs</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">48 hrs</button>
                                <button type="button" class="option-btn bg-primary text-white border border-primary p-2 rounded-lg text-sm">3 days</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">5 days</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">7 days</button>
                                <button type="button" class="option-btn bg-surface border border-border-low-contrast p-2 rounded-lg text-sm">14 days</button>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Sources to cite</label>
                                <div class="flex items-center border border-border-low-contrast rounded-lg overflow-hidden">
                                    <button type="button" class="qty-btn minus w-10 h-10 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-sources">-</button>
                                    <input type="number" id="qty-sources" value="0" min="0" class="w-full text-center border-none focus:ring-0" readonly/>
                                    <button type="button" class="qty-btn plus w-10 h-10 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-sources">+</button>
                                </div>
                            </div>
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Charts</label>
                                <div class="flex items-center border border-border-low-contrast rounded-lg overflow-hidden">
                                    <button type="button" class="qty-btn minus w-10 h-10 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-charts">-</button>
                                    <input type="number" id="qty-charts" value="0" min="0" class="w-full text-center border-none focus:ring-0" readonly/>
                                    <button type="button" class="qty-btn plus w-10 h-10 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-charts">+</button>
                                </div>
                            </div>
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">PowerPoint Slides</label>
                                <div class="flex items-center border border-border-low-contrast rounded-lg overflow-hidden">
                                    <button type="button" class="qty-btn minus w-10 h-10 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-slides">-</button>
                                    <input type="number" id="qty-slides" value="0" min="0" class="w-full text-center border-none focus:ring-0" readonly/>
                                    <button type="button" class="qty-btn plus w-10 h-10 bg-surface hover:bg-surface-variant flex items-center justify-center font-bold" data-target="qty-slides">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 5: Writer Category -->
                    <div id="step-5" class="wizard-step-content space-y-8 hidden">
                        <h3 class="font-headline-sm text-lg text-primary mb-4">Step 5: Writer Category</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 option-group">
                            <button type="button" class="option-btn bg-primary text-white border border-primary p-6 rounded-xl text-left transition-all relative overflow-hidden">
                                <h4 class="font-bold text-lg mb-2">Best Available</h4>
                                <p class="text-sm opacity-90">Standard price</p>
                            </button>
                            <button type="button" class="option-btn bg-surface border border-border-low-contrast p-6 rounded-xl text-left hover:border-primary transition-all">
                                <div class="flex justify-between items-center mb-2">
                                    <h4 class="font-bold text-lg text-on-surface">Advanced</h4>
                                    <span class="text-xs font-bold text-primary bg-primary-container/20 px-2 py-1 rounded">+25%</span>
                                </div>
                                <p class="text-sm text-on-surface-variant">High-rank professional writer.</p>
                            </button>
                            <button type="button" class="option-btn bg-surface border border-border-low-contrast p-6 rounded-xl text-left hover:border-primary transition-all">
                                <div class="flex justify-between items-center mb-2">
                                    <h4 class="font-bold text-lg text-on-surface">ENL</h4>
                                    <span class="text-xs font-bold text-primary bg-primary-container/20 px-2 py-1 rounded">+30%</span>
                                </div>
                                <p class="text-sm text-on-surface-variant">English native language writer (US, UK, CA, AU).</p>
                            </button>
                        </div>
                    </div>

                    <!-- Step 6: Additional Services -->
                    <div id="step-6" class="wizard-step-content space-y-4 hidden">
                        <h3 class="font-headline-sm text-lg text-primary mb-4">Step 6: Additional Services</h3>
                        
                        <label class="flex items-start gap-4 p-4 border border-border-low-contrast rounded-lg cursor-pointer hover:bg-surface-variant transition-colors bg-green-50 border-green-200">
                            <input type="checkbox" class="extra-service w-5 h-5 mt-1 text-primary focus:ring-primary rounded border-border-low-contrast" data-price="5.00" data-name="Writer Samples" checked>
                            <div class="flex-grow">
                                <h4 class="font-bold text-on-surface uppercase text-sm">Get Writer Samples</h4>
                                <p class="text-sm text-text-muted">3 samples of works previously completed by your writer.</p>
                            </div>
                            <span class="font-bold text-primary">$5.00</span>
                        </label>
                        
                        <label class="flex items-start gap-4 p-4 border border-border-low-contrast rounded-lg cursor-pointer hover:bg-surface-variant transition-colors">
                            <input type="checkbox" class="extra-service w-5 h-5 mt-1 text-primary focus:ring-primary rounded border-border-low-contrast" data-price="24.75" data-name="Expert Proofreading">
                            <div class="flex-grow">
                                <h4 class="font-bold text-on-surface uppercase text-sm">Expert Proofreading</h4>
                                <p class="text-sm text-text-muted">Get your paper checked by an expert proofreader.</p>
                            </div>
                            <span class="font-bold text-on-surface-variant">$24.75</span>
                        </label>

                        <label class="flex items-start gap-4 p-4 border border-border-low-contrast rounded-lg cursor-pointer hover:bg-surface-variant transition-colors bg-green-50 border-green-200">
                            <input type="checkbox" class="extra-service w-5 h-5 mt-1 text-primary focus:ring-primary rounded border-border-low-contrast" data-price="9.99" data-name="VIP Support" checked>
                            <div class="flex-grow">
                                <h4 class="font-bold text-on-surface uppercase text-sm">VIP Support</h4>
                                <p class="text-sm text-text-muted">Personal 24/7 VIP manager responsible for tracking your order.</p>
                            </div>
                            <span class="font-bold text-primary">$9.99</span>
                        </label>

                        <label class="flex items-start gap-4 p-4 border border-border-low-contrast rounded-lg cursor-pointer hover:bg-surface-variant transition-colors bg-green-50 border-green-200">
                            <input type="checkbox" class="extra-service w-5 h-5 mt-1 text-primary focus:ring-primary rounded border-border-low-contrast" data-price="9.99" data-name="Plagiarism Report" checked>
                            <div class="flex-grow">
                                <h4 class="font-bold text-on-surface uppercase text-sm">Get Plagiarism Report</h4>
                                <p class="text-sm text-text-muted">Official report alongside your paper.</p>
                            </div>
                            <span class="font-bold text-primary">$9.99</span>
                        </label>

                        <label class="flex items-start gap-4 p-4 border border-border-low-contrast rounded-lg cursor-pointer hover:bg-surface-variant transition-colors bg-green-50 border-green-200">
                            <input type="checkbox" class="extra-service w-5 h-5 mt-1 text-primary focus:ring-primary rounded border-border-low-contrast" data-price="14.95" data-name="Copy of Sources" checked>
                            <div class="flex-grow">
                                <h4 class="font-bold text-on-surface uppercase text-sm">Get Copy of Sources</h4>
                                <p class="text-sm text-text-muted">Selection of related articles and books cited in your paper.</p>
                            </div>
                            <span class="font-bold text-primary">$14.95</span>
                        </label>
                    </div>

                    <!-- Step 7: File Upload -->
                    <div id="step-7" class="wizard-step-content space-y-8 hidden">
                        <h3 class="font-headline-sm text-lg text-primary mb-2">Step 7: Additional Materials</h3>
                        <div class="p-8 border-2 border-dashed border-border-low-contrast rounded-xl bg-surface-container-low text-center hover:bg-surface-container transition-colors cursor-pointer group">
                            <span class="material-symbols-outlined text-5xl text-outline mb-4 group-hover:text-primary transition-colors">cloud_upload</span>
                            <p class="font-body-md text-on-surface mb-2">Drag and drop files here</p>
                            <p class="text-sm text-text-muted mb-4">or</p>
                            <button type="button" class="bg-surface border border-border-low-contrast text-on-surface px-6 py-2 rounded-full font-bold hover:border-primary transition-colors">Browse Files</button>
                            <p class="text-xs text-outline mt-4">Max file size: 50MB per file. Supports PDF, DOCX, JPG, PNG.</p>
                        </div>
                    </div>

                    <!-- Step 8: Customer Information -->
                    <div id="step-8" class="wizard-step-content space-y-8 hidden">
                        <h3 class="font-headline-sm text-lg text-primary mb-2">Step 8: Contact Details</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Full Name</label>
                                <input type="text" class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="John Doe">
                            </div>
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Email Address</label>
                                <input type="email" class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="john@example.com">
                            </div>
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Phone Number</label>
                                <input type="tel" class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="+1 (555) 000-0000">
                            </div>
                            <div>
                                <label class="block font-label-md text-on-surface-variant mb-2">Country</label>
                                <select class="w-full border border-border-low-contrast p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>Canada</option>
                                    <option>Australia</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Step 9: Payment Placeholder -->
                    <div id="step-9" class="wizard-step-content space-y-8 hidden text-center py-12">
                        <span class="material-symbols-outlined text-6xl text-primary mb-4">lock</span>
                        <h3 class="font-headline-lg text-2xl text-on-surface mb-2">Secure Checkout</h3>
                        <p class="text-on-surface-variant max-w-md mx-auto mb-8">You are about to be redirected to our secure payment gateway to finalize your order.</p>
                        <div class="flex justify-center gap-4 opacity-70 grayscale">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" class="h-8" alt="Visa">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" class="h-8" alt="MasterCard">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" class="h-8" alt="Amex">
                        </div>
                    </div>

                    <!-- Navigation Buttons -->
                    <div class="flex justify-between mt-12 pt-6 border-t border-border-low-contrast">
                        <button type="button" id="btn-prev" class="px-6 py-3 rounded-lg font-button font-bold text-on-surface-variant border border-border-low-contrast hover:bg-surface-variant transition-colors hidden flex items-center gap-2">
                            <span class="material-symbols-outlined">arrow_back</span> Back
                        </button>
                        <div class="flex-grow"></div>
                        <button type="button" id="btn-next" class="px-8 py-3 rounded-lg font-button font-bold bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
                            Next Step <span class="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button type="button" id="btn-submit" class="px-8 py-3 rounded-lg font-button font-bold bg-secondary text-white hover:scale-105 transition-transform shadow-xl hidden flex items-center gap-2">
                            <span class="material-symbols-outlined">lock</span> Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>

            <!-- Sticky Right Sidebar: Live Pricing Summary -->
            <div class="lg:col-span-4 space-y-6">
                <div class="bg-surface-container-low p-6 rounded-xl border border-border-low-contrast shadow-sm sticky top-24">
                    <div class="border-b border-border-low-contrast pb-4 mb-4">
                        <h3 class="font-headline-sm text-lg text-primary mb-1">Writer's choice</h3>
                        <p class="text-sm text-on-surface-variant">High school</p>
                        <p class="text-sm text-on-surface-variant">Essay (any type)</p>
                    </div>
                    
                    <div class="space-y-3 mb-6 border-b border-border-low-contrast pb-4">
                        <div class="flex justify-between text-on-surface" id="summary-base">
                            1 page x $11.00 = <strong class="ml-2">$11.00</strong>
                        </div>
                        <div id="summary-extras">
                            <!-- Populated via JS -->
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center mb-6">
                        <span class="font-bold text-on-surface text-lg">Total price</span>
                        <span class="font-display-sm text-2xl text-[#2ecc71] font-bold" id="summary-total">$0.00</span>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg border border-border-low-contrast mb-6">
                        <p class="text-xs text-text-muted italic mb-2">Enter coupon code and click 'Apply'.</p>
                        <div class="flex gap-2">
                            <input type="text" placeholder="Coupon Code" class="w-full border border-border-low-contrast p-2 rounded focus:ring-1 focus:ring-primary outline-none text-sm">
                            <button type="button" class="bg-surface-variant text-on-surface-variant px-4 py-2 rounded text-sm font-bold hover:bg-border-low-contrast transition-colors">Apply</button>
                        </div>
                    </div>
                    
                    <button class="w-full bg-[#1A365D] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#2A4A7F] transition-colors shadow-lg">
                        <span class="material-symbols-outlined">lock</span> Safe checkout
                    </button>
                    
                    <div class="flex justify-center mt-6 gap-4 opacity-50 grayscale">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" class="h-4" alt="Visa">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" class="h-4" alt="MasterCard">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" class="h-4" alt="Amex">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. Career Services Order Form (Hidden by default) -->
    <div id="form-career" class="form-container hidden">
        <div class="bg-white border border-border-low-contrast rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-8 text-center">Career Services Order Form</h2>
            <form class="space-y-8">
                <!-- Implementation for Career Form (Condensed) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Full Name</label>
                        <input type="text" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="Full Name">
                    </div>
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Email</label>
                        <input type="email" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="Email Address">
                    </div>
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Career Level</label>
                        <select class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary">
                            <option>Entry Level</option>
                            <option>Mid Level</option>
                            <option>Senior Level</option>
                            <option>Executive Level</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Industry</label>
                        <select class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary">
                            <option>Information Technology</option>
                            <option>Finance</option>
                            <option>Healthcare</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label class="block font-label-md text-on-surface-variant mb-4">Service Selection</label>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="border border-border-low-contrast p-4 rounded-xl hover:border-primary cursor-pointer transition-colors bg-surface">
                            <h4 class="font-bold text-on-surface mb-1">Resume Writing</h4>
                            <p class="text-sm text-text-muted mb-2">Professional ATS-friendly resume.</p>
                            <span class="font-bold text-primary">$120.00</span>
                        </div>
                        <div class="border border-border-low-contrast p-4 rounded-xl hover:border-primary cursor-pointer transition-colors bg-surface">
                            <h4 class="font-bold text-on-surface mb-1">LinkedIn Optimization</h4>
                            <p class="text-sm text-text-muted mb-2">Complete profile overhaul.</p>
                            <span class="font-bold text-primary">$80.00</span>
                        </div>
                        <div class="border border-border-low-contrast p-4 rounded-xl hover:border-primary cursor-pointer transition-colors bg-surface">
                            <h4 class="font-bold text-on-surface mb-1">Cover Letter</h4>
                            <p class="text-sm text-text-muted mb-2">Tailored to your target job.</p>
                            <span class="font-bold text-primary">$50.00</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <label class="block font-label-md text-on-surface-variant mb-2">Career Objectives & Instructions</label>
                    <textarea rows="4" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="Describe your target roles, companies, etc."></textarea>
                </div>
                
                <button type="button" class="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    Proceed to Order
                </button>
            </form>
        </div>
    </div>

    <!-- 3. AI Training Enrollment Form (Hidden by default) -->
    <div id="form-training" class="form-container hidden">
        <div class="bg-white border border-border-low-contrast rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-8 text-center">AI Training Enrollment</h2>
            <form class="space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Full Name</label>
                        <input type="text" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="Full Name">
                    </div>
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Email Address</label>
                        <input type="email" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="Email Address">
                    </div>
                </div>
                
                <div>
                    <label class="block font-label-md text-on-surface-variant mb-4">Training Program</label>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> ChatGPT Mastery</label>
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> Prompt Engineering</label>
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> AI for Business</label>
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> AI SEO & Optimization</label>
                    </div>
                </div>

                <div>
                    <label class="block font-label-md text-on-surface-variant mb-2">Learning Objectives</label>
                    <textarea rows="4" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="What do you hope to achieve after completing this training?"></textarea>
                </div>
                
                <button type="button" class="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-secondary/20">
                    Enroll Now
                </button>
            </form>
        </div>
    </div>

    <!-- 4. AI SEO Form (Hidden by default) -->
    <div id="form-seo" class="form-container hidden">
        <div class="bg-white border border-border-low-contrast rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-8 text-center">AI SEO & LLM Optimization Service Request</h2>
            <form class="space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Company Name</label>
                        <input type="text" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="Company Name">
                    </div>
                    <div>
                        <label class="block font-label-md text-on-surface-variant mb-2">Company Website</label>
                        <input type="url" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="https://">
                    </div>
                </div>
                
                <div>
                    <label class="block font-label-md text-on-surface-variant mb-4">Services Required</label>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> AI SEO Audit</label>
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> LLM Optimization</label>
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> ChatGPT Visibility</label>
                        <label class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 text-primary rounded border-border-low-contrast"> Semantic SEO</label>
                    </div>
                </div>

                <div>
                    <label class="block font-label-md text-on-surface-variant mb-2">Goals & Challenges</label>
                    <textarea rows="4" class="w-full border border-border-low-contrast p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="Describe your business goals and current visibility challenges..."></textarea>
                </div>
                
                <button type="button" class="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    Request Consultation
                </button>
            </form>
        </div>
    </div>

</div>
</section>
`;

const finalContent = header + newBody + footer;

fs.writeFileSync(targetFile, finalContent);
console.log('Successfully rebuilt order-now.html');
