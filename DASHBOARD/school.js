document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      // You can add code here to handle form submission, like sending the data to a server
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // For demonstration purposes, I'm just logging the form data to the console
      alert('Form submitted successfully!'); // Displaying an alert for demonstration
      form.reset(); // Clearing the form after submission
    });
  });
  