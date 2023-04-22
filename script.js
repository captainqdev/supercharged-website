// Add JavaScript functionality here, if needed

// Example: Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    // Submit form data
    alert(`Thank you, ${name}! Your message has been submitted.`);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
