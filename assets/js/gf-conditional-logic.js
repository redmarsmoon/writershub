document.addEventListener('DOMContentLoaded', function() {
    
    // Arrays of field IDs for each section
    const acGroup1 = ['field_2_36', 'field_2_59']; // Title, Academic Level
    const acGroup2 = ['field_2_3']; // Type of Paper
    const acGroup3 = ['field_2_5']; // Discipline
    const acGroup4 = ['field_2_29', 'field_2_6', 'field_2_7', 'field_2_8', 'field_2_60', 'field_2_23']; // Instructions, Topic, Format, Spacing
    const acGroup5 = ['field_2_13', 'field_2_24', 'field_2_20']; // Pages, Slides, Charts
    const acGroup6 = ['field_2_16', 'field_2_22']; // Deadline, Price
    
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

    const allAcademicGroups = [acGroup1, acGroup2, acGroup3, acGroup4, acGroup5, acGroup6];

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
        allAcademicGroups.forEach(group => hideFields(group));
        hideFields(jobHuntingFields);
        hideFields(ecommerceFields);
        hideFields(commonBottomFields);
    }
    
    resetAll();

    // Listen for category changes
    const categoryRadios = document.querySelectorAll('input[name="input_37"]');
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', function(e) {
            resetAll();
            const selectedCategory = e.target.value;
            
            if (selectedCategory === 'Academic Writing') {
                showFields(acGroup1);
            } else if (selectedCategory === 'Job Hunting & CV Services') {
                showFields(jobHuntingFields);
                showFields(commonBottomFields);
            } else if (selectedCategory === 'E-commerce & Digital Services') {
                showFields(ecommerceFields);
                showFields(commonBottomFields);
            }
        });
    });

    // Progressive Disclosure for Academic Writing
    // 1. Academic Level -> Shows Type of Paper
    document.querySelectorAll('input[name="input_59"]').forEach(radio => {
        radio.addEventListener('change', () => showFields(acGroup2));
    });

    // 2. Type of Paper -> Shows Discipline
    const typeSelect = document.getElementById('input_2_3');
    if(typeSelect) {
        typeSelect.addEventListener('change', () => {
            if(typeSelect.value) showFields(acGroup3);
        });
    }

    // 3. Discipline -> Shows Instructions & Spacing
    const discSelect = document.getElementById('input_2_5');
    if(discSelect) {
        discSelect.addEventListener('change', () => {
            if(discSelect.value) showFields(acGroup4);
        });
    }

    // 4. Spacing -> Shows Pages, Slides, Charts
    document.querySelectorAll('input[name="input_23"]').forEach(radio => {
        radio.addEventListener('change', () => showFields(acGroup5));
    });

    // 5. Pages -> Shows Deadline & Bottom Fields
    const pagesSelect = document.getElementById('input_2_13');
    if(pagesSelect) {
        pagesSelect.addEventListener('change', () => {
            if(pagesSelect.value) {
                showFields(acGroup6);
                showFields(commonBottomFields);
            }
        });
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
