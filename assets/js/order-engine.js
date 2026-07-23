document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const formContainers = document.querySelectorAll('.form-container');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from all
            tabBtns.forEach(b => {
                b.classList.remove('border-primary', 'text-primary', 'bg-primary-container/10');
                b.classList.add('border-transparent', 'text-on-surface-variant', 'hover:text-primary', 'hover:border-primary-container');
            });
            formContainers.forEach(fc => fc.classList.add('hidden'));

            // Add active state to clicked
            btn.classList.remove('border-transparent', 'text-on-surface-variant', 'hover:text-primary', 'hover:border-primary-container');
            btn.classList.add('border-primary', 'text-primary', 'bg-primary-container/10');
            
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.remove('hidden');
            
            calculatePrice();
        });
    });

    // --- Academic Writing Wizard Logic ---
    let currentStep = 1;
    const totalSteps = 9;
    
    const updateWizard = () => {
        const wizardForm = document.getElementById('academic-wizard');
        if (!wizardForm) return;

        document.querySelectorAll('.wizard-step-content').forEach(el => el.classList.add('hidden'));
        const stepEl = document.getElementById(`step-${currentStep}`);
        if(stepEl) stepEl.classList.remove('hidden');
        
        // Update progress bar
        const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
        const progEl = document.getElementById('wizard-progress');
        if(progEl) progEl.style.width = `${progress}%`;
        
        // Update Step indicators
        document.querySelectorAll('.step-indicator').forEach((el, idx) => {
            if (idx + 1 === currentStep) {
                el.classList.add('bg-primary', 'text-white', 'border-primary');
                el.classList.remove('bg-surface', 'text-text-muted', 'border-border-low-contrast');
            } else if (idx + 1 < currentStep) {
                el.classList.add('bg-primary', 'text-white', 'border-primary');
                el.classList.remove('bg-surface', 'text-text-muted', 'border-border-low-contrast');
            } else {
                el.classList.remove('bg-primary', 'text-white', 'border-primary');
                el.classList.add('bg-surface', 'text-text-muted', 'border-border-low-contrast');
            }
        });
        
        // Update buttons
        const prevBtn = document.getElementById('btn-prev');
        const nextBtn = document.getElementById('btn-next');
        const submitBtn = document.getElementById('btn-submit');
        
        if(prevBtn) prevBtn.classList.toggle('hidden', currentStep === 1);
        if(currentStep === totalSteps) {
            if(nextBtn) nextBtn.classList.add('hidden');
            if(submitBtn) submitBtn.classList.remove('hidden');
        } else {
            if(nextBtn) nextBtn.classList.remove('hidden');
            if(submitBtn) submitBtn.classList.add('hidden');
        }
    };

    const nextBtn = document.getElementById('btn-next');
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateWizard();
            }
        });
    }

    const prevBtn = document.getElementById('btn-prev');
    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateWizard();
            }
        });
    }

    // Interactive Option Selection
    const optionGroups = document.querySelectorAll('.option-group');
    optionGroups.forEach(group => {
        const buttons = group.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if(!group.classList.contains('multi-select')) {
                    buttons.forEach(b => {
                        b.classList.remove('bg-primary', 'text-white', 'border-primary', 'shadow-md');
                        b.classList.add('bg-surface', 'text-on-surface', 'border-border-low-contrast');
                    });
                }
                btn.classList.toggle('bg-primary');
                btn.classList.toggle('text-white');
                btn.classList.toggle('border-primary');
                btn.classList.toggle('shadow-md');
                btn.classList.toggle('bg-surface');
                btn.classList.toggle('text-on-surface');
                btn.classList.toggle('border-border-low-contrast');
                
                calculatePrice();
            });
        });
    });

    const calculatePrice = () => {
        const activeForm = document.querySelector('.form-container:not(.hidden)');
        if (!activeForm) return;

        if (activeForm.id === 'form-academic') {
            let total = 0;
            
            // 1. Pages (Base price is $12/page)
            let pages = parseInt(document.getElementById('qty-pages')?.value || 1);
            let pagePrice = pages * 12.00;
            
            // 2. Spacing
            let spacingEl = activeForm.querySelector('#spacing-group .option-btn.bg-primary');
            let spacingVal = spacingEl ? spacingEl.getAttribute('data-value') : 'double';
            if (spacingVal === 'single') {
                pagePrice *= 2; // Double the page price for single spacing
            }

            // 3. Academic Level
            let levelEl = activeForm.querySelector('#academic-level-group .option-btn.bg-primary');
            let levelPrice = levelEl ? parseFloat(levelEl.getAttribute('data-price') || 0) : 0;
            
            // 4. Deadline
            let deadlineEl = activeForm.querySelector('#deadline-group .option-btn.bg-primary');
            let deadlinePrice = deadlineEl ? parseFloat(deadlineEl.getAttribute('data-price') || 0) : 0;

            // 5. Writer Category
            let writerEl = activeForm.querySelector('#writer-category-group .option-btn.bg-primary');
            let writerPrice = writerEl ? parseFloat(writerEl.getAttribute('data-price') || 0) : 0;

            // 6. Extras
            let extrasTotal = 0;
            let extrasHtml = '';
            activeForm.querySelectorAll('.extra-service').forEach(extra => {
                if(extra.checked || extra.classList.contains('bg-primary')) {
                    const price = parseFloat(extra.getAttribute('data-price') || 0);
                    const name = extra.getAttribute('data-name') || extra.value || 'Extra';
                    extrasTotal += price;
                    extrasHtml += `<div class="flex justify-between text-sm mb-2"><span class="text-on-surface-variant">${name}</span><span>$${price.toFixed(2)}</span></div>`;
                }
            });

            total = pagePrice + levelPrice + deadlinePrice + writerPrice + extrasTotal;

            // Update UI
            const summaryTotal = document.getElementById('summary-total');
            if(summaryTotal) summaryTotal.textContent = `$${total.toFixed(2)}`;

            const summaryBase = document.getElementById('summary-base');
            if(summaryBase) {
                summaryBase.innerHTML = `
                    <div class="flex justify-between text-sm mb-2"><span class="text-on-surface-variant">${pages} pages (${spacingVal})</span><span>$${pagePrice.toFixed(2)}</span></div>
                    ${levelPrice > 0 ? `<div class="flex justify-between text-sm mb-2"><span class="text-on-surface-variant">Academic Level</span><span>$${levelPrice.toFixed(2)}</span></div>` : ''}
                    ${deadlinePrice > 0 ? `<div class="flex justify-between text-sm mb-2"><span class="text-on-surface-variant">Deadline Premium</span><span>$${deadlinePrice.toFixed(2)}</span></div>` : ''}
                    ${writerPrice > 0 ? `<div class="flex justify-between text-sm mb-2"><span class="text-on-surface-variant">Writer Category</span><span>$${writerPrice.toFixed(2)}</span></div>` : ''}
                `;
            }

            const summaryExtras = document.getElementById('summary-extras');
            if(summaryExtras) summaryExtras.innerHTML = extrasHtml;

            const topicVal = document.getElementById('topic')?.value || "Writer's choice";
            const paperType = document.getElementById('type-of-paper')?.value || "Essay";
            const levelText = levelEl ? levelEl.innerText.trim() : "High School";
            if (document.getElementById('summary-topic')) document.getElementById('summary-topic').textContent = topicVal;
            if (document.getElementById('summary-level')) document.getElementById('summary-level').textContent = levelText;
            if (document.getElementById('summary-paper')) document.getElementById('summary-paper').textContent = paperType;
            
        } else if (activeForm.id === 'form-career') {
            let careerTotal = 0;
            activeForm.querySelectorAll('.career-service').forEach(extra => {
                if(extra.checked) {
                    careerTotal += parseFloat(extra.getAttribute('data-price') || 0);
                }
            });
            let appsDropdown = document.getElementById('career-job-apps');
            if(appsDropdown && appsDropdown.options[appsDropdown.selectedIndex]) {
                careerTotal += parseFloat(appsDropdown.options[appsDropdown.selectedIndex].getAttribute('data-price') || 0);
            }
            
            const careerTotalEl = document.getElementById('career-total');
            if (careerTotalEl) careerTotalEl.textContent = `$${careerTotal.toFixed(2)}`;
            
        } else if (activeForm.id === 'form-ecommerce') {
            let ecoTotal = 0;
            activeForm.querySelectorAll('.eco-service').forEach(extra => {
                if(extra.checked) {
                    ecoTotal += parseFloat(extra.getAttribute('data-price') || 0);
                }
            });
            const ecoTotalEl = document.getElementById('eco-total');
            if (ecoTotalEl) ecoTotalEl.textContent = `$${ecoTotal.toFixed(2)}`;
        }
    };

    // Increment/Decrement logic
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = document.getElementById(btn.getAttribute('data-target'));
            if(!input) return;
            let val = parseInt(input.value) || 0;
            if (btn.classList.contains('minus') && val > 1) {
                input.value = val - 1;
            } else if (btn.classList.contains('plus')) {
                input.value = val + 1;
            }
            calculatePrice();
        });
    });

    // Form inputs change trigger price calculation
    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.addEventListener('change', calculatePrice);
        el.addEventListener('keyup', () => {
            if (el.id === 'topic') calculatePrice();
        });
    });

    // Submit Logic - Academic
    const submitBtn = document.getElementById('btn-submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('order-email');
            if(emailInput && !emailInput.value) {
                alert('Please provide an email address in the final step.');
                return;
            }
            
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Processing...';
            submitBtn.disabled = true;

            const formData = {
                category: 'Academic Writing',
                email: emailInput ? emailInput.value : 'guest@example.com',
                total: document.getElementById('summary-total')?.textContent.replace('$', ''),
            };
            
            try {
                const response = await fetch('/?rest_route=/wh/v1/orders/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                
                if (result.success) {
                    submitBtn.innerHTML = 'Success!';
                    submitBtn.classList.replace('bg-secondary', 'bg-green-600');
                    window.location.href = `/checkout/?order_id=${result.order_id}`;
                } else {
                    alert('Error: ' + (result.message || 'Unknown error'));
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred submitting the order.');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Submit Logic - Career
    const submitBtnCareer = document.getElementById('btn-submit-career');
    if (submitBtnCareer) {
        submitBtnCareer.addEventListener('click', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('career-email');
            if(emailInput && !emailInput.value) {
                alert('Please provide an email address.');
                return;
            }
            
            const originalText = submitBtnCareer.innerHTML;
            submitBtnCareer.innerHTML = 'Processing...';
            submitBtnCareer.disabled = true;

            const formData = {
                category: 'Job Hunting & CV Services',
                email: emailInput ? emailInput.value : 'guest@example.com',
                total: document.getElementById('career-total')?.textContent.replace('$', ''),
            };
            
            try {
                const response = await fetch('/?rest_route=/wh/v1/orders/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                if (result.success) {
                    window.location.href = `/checkout/?order_id=${result.order_id}`;
                } else {
                    alert('Error: ' + (result.message || 'Unknown error'));
                    submitBtnCareer.innerHTML = originalText;
                    submitBtnCareer.disabled = false;
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred submitting the order.');
                submitBtnCareer.innerHTML = originalText;
                submitBtnCareer.disabled = false;
            }
        });
    }

    // Submit Logic - Ecommerce
    const submitBtnEco = document.getElementById('btn-submit-ecommerce');
    if (submitBtnEco) {
        submitBtnEco.addEventListener('click', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('eco-email');
            if(emailInput && !emailInput.value) {
                alert('Please provide an email address.');
                return;
            }
            
            const originalText = submitBtnEco.innerHTML;
            submitBtnEco.innerHTML = 'Processing...';
            submitBtnEco.disabled = true;

            const formData = {
                category: 'E-commerce & Digital Services',
                email: emailInput ? emailInput.value : 'guest@example.com',
                total: document.getElementById('eco-total')?.textContent.replace('$', ''),
            };
            
            try {
                const response = await fetch('/?rest_route=/wh/v1/orders/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                if (result.success) {
                    window.location.href = `/checkout/?order_id=${result.order_id}`;
                } else {
                    alert('Error: ' + (result.message || 'Unknown error'));
                    submitBtnEco.innerHTML = originalText;
                    submitBtnEco.disabled = false;
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred submitting the order.');
                submitBtnEco.innerHTML = originalText;
                submitBtnEco.disabled = false;
            }
        });
    }

    // Initialize
    updateWizard();
    calculatePrice();
});
