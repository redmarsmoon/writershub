jQuery(document).ready(function($) {
    function calculateTotal() {
        let total = 0;

        // Find all checked radios and selected options in the form
        $('#gform_wrapper_2 input[type="radio"]:checked, #gform_wrapper_2 select option:selected').each(function() {
            // Check if the element is visible (its closest gfield is not display: none)
            const $gfield = $(this).closest('.gfield');
            if ($gfield.length && $gfield.css('display') !== 'none') {
                const value = $(this).val() || '';
                
                // Gravity Forms product/option values often use the format "Label|Price"
                const parts = value.split('|');
                if (parts.length > 1) {
                    const pricePart = parts[parts.length - 1];
                    const price = parseFloat(pricePart);
                    if (!isNaN(price)) {
                        total += price;
                    }
                }
            }
        });

        // Update the total field
        const $totalField = $('#input_2_57');
        if ($totalField.length) {
            // Format as currency $0.00
            $totalField.val('$' + total.toFixed(2));
        }
    }

    // Attach event listeners using jQuery to catch both native and jQuery triggered events
    $('#gform_wrapper_2').on('change', 'input[type="radio"], select', function() { setTimeout(calculateTotal, 50); });
    
    // Fallback click listener for radios just in case
    $('#gform_wrapper_2').on('click', 'input[type="radio"]', function() { setTimeout(calculateTotal, 50); });
    
    // Listen for custom change events that might be fired by conditional logic
    $('#gform_wrapper_2').on('change', function() { setTimeout(calculateTotal, 50); });
    
    // Run initial calculation with a slight delay to allow all custom JS to initialize
    setTimeout(calculateTotal, 250);
});
