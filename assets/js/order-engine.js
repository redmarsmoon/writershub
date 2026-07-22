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

    // Dynamic Pricing Engine
    const calculatePrice = () => {
        let basePrice = 11.00;
        let pages = parseInt(document.getElementById('qty-pages')?.value || 1);
        let spacing = document.querySelector('.spacing-btn.bg-primary')?.getAttribute('data-value') || 'double';
        
        if (spacing === 'single') {
            basePrice *= 2;
        }

        let total = basePrice * pages;
        
        // Extras
        const extras = document.querySelectorAll('.extra-service');
        let extrasTotal = 0;
        let extrasHtml = '';
        
        extras.forEach(extra => {
            if(extra.checked || extra.classList.contains('bg-primary')) {
                const price = parseFloat(extra.getAttribute('data-price') || 0);
                const name = extra.getAttribute('data-name') || extra.value || 'Extra';
                extrasTotal += price;
                extrasHtml += `<div class="flex justify-between text-sm mb-2"><span class="text-on-surface-variant">${name}</span><span>$${price.toFixed(2)}</span></div>`;
            }
        });
        
        total += extrasTotal;
        
        // Update UI
        const summaryTotal = document.getElementById('summary-total');
        if(summaryTotal) summaryTotal.textContent = `$${total.toFixed(2)}`;
        
        const summaryBase = document.getElementById('summary-base');
        if(summaryBase) summaryBase.innerHTML = `${pages} pages x $${basePrice.toFixed(2)} = <strong class="ml-2">$${(basePrice * pages).toFixed(2)}</strong>`;
        
        const summaryExtras = document.getElementById('summary-extras');
        if(summaryExtras) summaryExtras.innerHTML = extrasHtml;
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
    document.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('change', calculatePrice);
    });

    // Initialize
    updateWizard();
    calculatePrice();
});
