document.addEventListener('DOMContentLoaded', function() {
    
    // Arrays of field IDs for each section
    const academicFields = [
        'field_2_36', 'field_2_59', 'field_2_3', 'field_2_5', 'field_2_29', 
        'field_2_6', 'field_2_7', 'field_2_8', 'field_2_60', 'field_2_23', 
        'field_2_13', 'field_2_24', 'field_2_20', 'field_2_16', 'field_2_22'
    ];
    
    const jobHuntingFields = [
        'field_2_38', 'field_2_42', 'field_2_43', 'field_2_44', 
        'field_2_40', 'field_2_41', 'field_2_46', 'field_2_45'
    ];
    
    const ecommerceFields = [
        'field_2_47', 'field_2_49', 'field_2_50', 'field_2_51', 
        'field_2_52', 'field_2_53', 'field_2_54', 'field_2_55'
    ];
    
    const commonBottomFields = [
        'field_2_28', 'field_2_25', 'field_2_26', 'field_2_27', 'field_2_57', 'field_2_58'
    ];

    function hideAllFields() {
        const allFields = [...academicFields, ...jobHuntingFields, ...ecommerceFields, ...commonBottomFields];
        allFields.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = 'none';
            }
        });
    }

    function showFields(fieldsArray) {
        fieldsArray.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = 'block';
            }
        });
    }

    // Initialize: Hide all conditional sections
    hideAllFields();

    // Listen for category changes
    const categoryRadios = document.querySelectorAll('input[name="input_37"]');
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', function(e) {
            hideAllFields();
            
            const selectedCategory = e.target.value;
            
            if (selectedCategory === 'Academic Writing') {
                showFields(academicFields);
            } else if (selectedCategory === 'Job Hunting & CV Services') {
                showFields(jobHuntingFields);
            } else if (selectedCategory === 'E-commerce & Digital Services') {
                showFields(ecommerceFields);
            }
            
            // If any category is selected, show the common bottom fields
            if (selectedCategory) {
                showFields(commonBottomFields);
            }
        });
    });
});

// Re-implement the gformToggleRadioOther function for "Other" textboxes
window.gformToggleRadioOther = function(radioInput) {
    // Find the closest gchoice container
    const gchoice = radioInput.closest('.gchoice');
    if (!gchoice) return;
    
    // Find the text input inside this container (which is typically hidden)
    const textInput = gchoice.querySelector('input[type="text"]');
    
    // Check if the current radio is "gf_other_choice"
    if (radioInput.value === 'gf_other_choice' && radioInput.checked) {
        if (textInput) {
            textInput.style.display = 'inline-block';
            textInput.focus();
        }
    } else {
        // If they selected a different radio in this field, hide the "Other" inputs in the whole field
        const parentField = radioInput.closest('.gfield_radio');
        if (parentField) {
            const allOtherInputs = parentField.querySelectorAll('input[type="text"]');
            allOtherInputs.forEach(input => {
                input.style.display = 'none';
                input.value = ''; // clear it out
            });
        }
    }
};
