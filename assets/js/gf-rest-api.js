document.addEventListener('DOMContentLoaded', function() {
    const gfForm = document.getElementById('gform_2');
    
    if (gfForm) {
        gfForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(gfForm);
            let payload = {};
            
            for (let [key, value] of formData.entries()) {
                // Gravity Forms expects inputs like input_2_3 to be keyed as "3" or "input_3" in the REST API payload.
                // E.g., for 'input_37', the key should be '37'
                if (key.startsWith('input_')) {
                    let fieldId = key.replace('input_', '');
                    payload[fieldId] = value;
                }
            }

            // --- IMPORTANT: REPLACE THESE WITH YOUR ACTUAL API CREDENTIALS ---
            const consumerKey = 'ck_028f09c6d3e1e759a99c82fda8eb42925fb0e554';
            const consumerSecret = 'cs_87c085915b00293c0f0fbfb6de3bbb8fa30fbd59';
            // ------------------------------------------------------------------

            const authHeader = 'Basic ' + btoa(consumerKey + ':' + consumerSecret);
            
            // Show loading state (you can customize this)
            const submitBtn = document.getElementById('gform_submit_button_2');
            const originalBtnText = submitBtn.value;
            submitBtn.value = "Submitting...";
            submitBtn.disabled = true;

            // Submit to live domain
            fetch('https://orders.writershubplus.com/wp-json/gf/v2/forms/2/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authHeader
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                if (data.is_valid) {
                    alert("Order submitted successfully!");
                    gfForm.reset();
                } else {
                    console.error("Validation Errors:", data.validation_messages);
                    alert("There was an error submitting your order. Please check the fields.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred while submitting the order.");
            })
            .finally(() => {
                // Restore button
                submitBtn.value = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});
