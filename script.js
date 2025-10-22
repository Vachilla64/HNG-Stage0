// --- New Code for Contact Form Validation ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is contact.html by looking for the form
    const form = document.getElementById('contact-form');
    if (!form) return; // Exit if not on the contact page

    const successMessage = document.getElementById('success-message');
    
    // Validation helper
    const validateField = (input, errorMessageId, validationFn, errorText) => {
        const errorElement = document.getElementById(errorMessageId);
        const isValid = validationFn(input.value.trim());

        if (!isValid) {
            errorElement.textContent = errorText;
            input.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            errorElement.textContent = '';
            input.removeAttribute('aria-invalid');
            return true;
        }
    };

    // Validation functions
    const isRequired = (value) => value.length > 0;
    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isMinLength = (value, min) => value.length >= min;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 1. Get input elements
        const nameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageTextarea = document.getElementById('message');

        // Reset success message
        successMessage.style.display = 'none';

        let formIsValid = true;

        // 2. Validate all fields
        // Full Name (Required)
        formIsValid &= validateField(
            nameInput, 'error-name', isRequired, 'Full Name is required.'
        );
        
        // Email (Required & Format)
        formIsValid &= validateField(
            emailInput, 'error-email', 
            (val) => isRequired(val) && isValidEmail(val), 
            'A valid email (e.g., name@example.com) is required.'
        );
        
        // Subject (Required)
        formIsValid &= validateField(
            subjectInput, 'error-subject', isRequired, 'Subject is required.'
        );

        // Message (Required & Min Length)
        formIsValid &= validateField(
            messageTextarea, 'error-message-text', 
            (val) => isRequired(val) && isMinLength(val, 10), 
            'Message is required and must be at least 10 characters long.'
        );
        
        // Final Submission
        if (formIsValid) {
            // In a real application, you'd send data to a server here.
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Clear the form
            form.reset(); 
            
            // Focus on the success message for screen reader users
            successMessage.focus();
        }
    });

    // Optional: Add blur listeners for instant feedback on each field
    document.getElementById('fullName').addEventListener('blur', () => {
        validateField(document.getElementById('fullName'), 'error-name', isRequired, 'Full Name is required.');
    });
    // Add similar listeners for other fields...
});
// --- End of New Code ---
