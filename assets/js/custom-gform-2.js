jQuery(document).ready(function($) {
    if ($('#gform_wrapper_2').length === 0) return;

    const $wrapper = $('#gform_wrapper_2');
    
    // Wrap the entire form in our grid layout
    const layoutHtml = `
    <div class="whp-quote-layout">
        <div class="whp-quote-form-col">
            <div class="whp-form-header">
                <h2>Order Now</h2>
                <div class="whp-steps" style="display: flex; gap: 1rem; align-items: center; display: none;">
                    <!-- Steps could go here if needed -->
                </div>
            </div>
            <div class="whp-quote-form-inner"></div>
        </div>
        <div class="whp-quote-side-col">
            <div class="whp-side-support">
                <h3>Why WritersHub Plus?</h3>
                <ul>
                    <li>
                        <div class="whp-side-icon"><span class="material-symbols-outlined">groups</span></div>
                        <div class="whp-side-text">
                            <h4>Expert Human Writers</h4>
                            <p>Rigorous vetting ensures your project is handled by industry pros.</p>
                        </div>
                    </li>
                    <li>
                        <div class="whp-side-icon"><span class="material-symbols-outlined">encrypted</span></div>
                        <div class="whp-side-text">
                            <h4>Secure Payment</h4>
                            <p>Protected transactions through our encrypted gateway.</p>
                        </div>
                    </li>
                    <li>
                        <div class="whp-side-icon"><span class="material-symbols-outlined">support_agent</span></div>
                        <div class="whp-side-text">
                            <h4>24/7 Support</h4>
                            <p>Human assistance whenever you need updates or help.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="whp-help-box">
                <div style="position: relative; z-index: 10;">
                    <h3>Need Help?</h3>
                    <p>Not sure which service fits your project? Chat with our experts now.</p>
                    <button class="whp-help-btn" type="button" onclick="if(window.Tawk_API) Tawk_API.toggle();">
                        <span class="material-symbols-outlined">chat</span>
                        Start Live Chat
                    </button>
                </div>
                <div style="position: absolute; right: -1rem; bottom: -1rem; opacity: 0.1;">
                    <span class="material-symbols-outlined" style="font-size: 120px; line-height: 1;">mark_chat_unread</span>
                </div>
            </div>
        </div>
    </div>
    `;

    $wrapper.wrap('<div class="whp-temp-wrapper"></div>');
    $('.whp-temp-wrapper').after(layoutHtml);
    $('.whp-quote-form-inner').append($wrapper);
    $('.whp-temp-wrapper').remove();

    // Map icons to radio buttons based on text
    const iconsMap = {
        'Academic Writing': 'description',
        'Job Hunting & CV Services': 'person_search',
        'E-commerce & Digital Services': 'business_center'
    };

    function processRadioIcons() {
        $('#gform_wrapper_2 .gfield--type-radio .gchoice').each(function() {
            const text = $(this).find('label').text().trim();
            if (iconsMap[text]) {
                if ($(this).find('.material-symbols-outlined').length === 0) {
                    $(this).find('label').prepend(`<span class="material-symbols-outlined" style="color: var(--whp-primary); font-size: 24px;">${iconsMap[text]}</span>`);
                }
            }
        });
    }

    processRadioIcons();
    
    function convertSelectToCounter(selectId, labelSuffix = '') {
        const $select = $('#' + selectId);
        if ($select.length === 0 || $select.next('.whp-counter-widget').length > 0) return;

        $select.hide();
        
        // Create UI
        const $ui = $('<div class="whp-counter-widget" style="display: flex; align-items: center; border: 1px solid var(--whp-border); border-radius: 0.5rem; overflow: hidden; background: white; width: 100%;"></div>');
        const $btnMinus = $('<button type="button" style="background: var(--whp-background); border: none; padding: 1rem 1.25rem; cursor: pointer; color: var(--whp-primary); display: flex; align-items: center; justify-content: center; border-right: 1px solid var(--whp-border); font-size: 24px; font-weight: bold; line-height: 1;">&minus;</button>');
        const $valueDisplay = $('<div style="flex: 1; text-align: center; font-weight: 600; font-family: \'Work Sans\', sans-serif; display: flex; flex-direction: column; line-height: 1.2;"></div>');
        const $btnPlus = $('<button type="button" style="background: var(--whp-background); border: none; padding: 1rem 1.25rem; cursor: pointer; color: var(--whp-primary); display: flex; align-items: center; justify-content: center; border-left: 1px solid var(--whp-border); font-size: 24px; font-weight: bold; line-height: 1;">&plus;</button>');

        $ui.append($btnMinus, $valueDisplay, $btnPlus);
        $select.after($ui);

        function updateDisplay() {
            const selectedOption = $select.find('option:selected');
            let text = selectedOption.text();
            let numMatch = text.match(/^(\d+)/);
            
            $valueDisplay.empty();
            if (numMatch) {
                $valueDisplay.append(`<span style="font-size: 1.25rem; color: var(--whp-text);">${numMatch[1]}</span>`);
                if (labelSuffix) {
                    $valueDisplay.append(`<span style="font-size: 0.75rem; color: var(--whp-text-muted); font-weight: normal;">${labelSuffix}</span>`);
                }
            } else {
                $valueDisplay.html(`<span style="font-size: 1rem; color: var(--whp-text-muted);">${text === 'Select Number of Pages' ? '0' : text}</span>`);
            }
        }

        $btnMinus.on('click', function(e) {
            e.preventDefault();
            let idx = $select.prop('selectedIndex');
            if (idx > 0) {
                $select.prop('selectedIndex', idx - 1).trigger('change');
                updateDisplay();
            }
        });

        $btnPlus.on('click', function(e) {
            e.preventDefault();
            let idx = $select.prop('selectedIndex');
            if (idx < $select.find('option').length - 1) {
                $select.prop('selectedIndex', idx + 1).trigger('change');
                updateDisplay();
            }
        });

        $select.on('change', updateDisplay);
        updateDisplay();
    }
    
    function applyCounters() {
        convertSelectToCounter('input_2_13', 'Pages');
        convertSelectToCounter('input_2_24', 'Pages');
        convertSelectToCounter('input_2_20', 'Slides');
        convertSelectToCounter('input_2_22', 'Sources');
    }
    
    applyCounters();

    // Gravity Forms re-renders via AJAX sometimes, we need to bind to its events to re-apply modifications if needed
    $(document).on('gform_post_render', function(event, form_id, current_page) {
        if (form_id == 2) {
            processRadioIcons();
            applyCounters();
        }
    });
});
