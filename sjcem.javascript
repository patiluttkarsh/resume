document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Your message has been sent!';
        document.getElementById('form-message').style.color = 'green';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill in all fields.';
        document.getElementById('form-message').style.color = 'red';
    }
});
