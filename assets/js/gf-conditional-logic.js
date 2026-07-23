document.addEventListener('DOMContentLoaded', function() {
    
    // Arrays of field IDs for each section
    const academicFields = [
        'field_2_36', 'field_2_59', 'field_2_3', 'field_2_5',
        'field_2_29', 'field_2_6', 'field_2_7', 'field_2_8', 'field_2_60', 'field_2_23',
        'field_2_16', 'field_2_22'
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

    function hideFields(fieldsArray) {
        fieldsArray.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    }

    function showFields(fieldsArray) {
        fieldsArray.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'block';
        });
    }

    // Initialize: Hide all conditional sections
    function resetAll() {
        hideFields(academicFields);
        hideFields(jobHuntingFields);
        hideFields(ecommerceFields);
        hideFields(commonBottomFields);
        hideFields(['field_2_13', 'field_2_24', 'field_2_20']); // Pages, Slides, Charts
    }
    
    resetAll();

    // Listen for category changes
    const categoryRadios = document.querySelectorAll('input[name="input_37"]');
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', function(e) {
            resetAll();
            // Use includes to safely match values with &amp; encoded differently
            const val = e.target.value || '';
            
            if (val.includes('Academic Writing')) {
                showFields(academicFields);
                showFields(commonBottomFields);
                updateAcademicDynamicFields();
            } else if (val.includes('Job Hunting')) {
                showFields(jobHuntingFields);
                showFields(commonBottomFields);
            } else if (val.includes('E-commerce')) {
                showFields(ecommerceFields);
                showFields(commonBottomFields);
            }
        });
    });
    
    function updateAcademicDynamicFields() {
        const typeSelect = document.getElementById('input_2_3');
        const val = typeSelect ? typeSelect.value : '';
        
        const spacingChecked = document.querySelector('input[name="input_23"]:checked');
        const spacingVal = spacingChecked ? spacingChecked.value : '';
        
        // Hide all specific ones first
        hideFields(['field_2_13', 'field_2_24', 'field_2_20']);
        
        if (val === 'PowerPoint Presentation') {
            showFields(['field_2_20']); // Slides
            hideFields(['field_2_23']); // Hide Spacing for slides
        } else {
            showFields(['field_2_23']); // Show Spacing
            if (spacingVal.includes('Single')) {
                showFields(['field_2_24']); // Single spaced pages
            } else {
                showFields(['field_2_13']); // Double spaced pages
            }
        }
    }

    // Listen for Type of Paper changes to toggle Pages/Slides/Charts
    const typeSelect = document.getElementById('input_2_3');
    if(typeSelect) {
        typeSelect.addEventListener('change', updateAcademicDynamicFields);
    }

    // Listen for Spacing changes to toggle Single/Double Pages
    const spacingRadios = document.querySelectorAll('input[name="input_23"]');
    spacingRadios.forEach(radio => {
        radio.addEventListener('change', updateAcademicDynamicFields);
    });
    
    // Check if any category is already checked on load
    const checkedCategory = document.querySelector('input[name="input_37"]:checked');
    if (checkedCategory) {
        checkedCategory.dispatchEvent(new Event('change'));
    }
});

// Re-implement the gformToggleRadioOther function for "Other" textboxes
window.gformToggleRadioOther = function(radioInput) {
    const gchoice = radioInput.closest('.gchoice');
    if (!gchoice) return;
    const textInput = gchoice.querySelector('input[type="text"]');
    if (radioInput.value === 'gf_other_choice' && radioInput.checked) {
        if (textInput) {
            textInput.style.display = 'inline-block';
            textInput.focus();
        }
    } else {
        const parentField = radioInput.closest('.gfield_radio');
        if (parentField) {
            parentField.querySelectorAll('input[type="text"]').forEach(input => {
                input.style.display = 'none';
                input.value = ''; 
            });
        }
    }
};
