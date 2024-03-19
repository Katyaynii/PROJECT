document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("mainHeader");
    header.addEventListener("click", function() {
        // Generate a random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        header.style.color = randomColor; // Change the color of the header text
    });
});
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contact-form');

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const formDataJSON = {};
            formData.forEach(function (value, key) {
                formDataJSON[key] = value;
            });

            // Send formDataJSON to your backend for processing
            console.log(formDataJSON);

            // Optional: Show a success message or redirect the user after form submission
            // For example:
            alert('Message sent successfully!');
            contactForm.reset(); // Reset the form after submission
        });
    });
</script>
