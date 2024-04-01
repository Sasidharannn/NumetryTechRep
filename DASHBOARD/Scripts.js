document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card');
  
    card.addEventListener('click', function() {
      this.classList.toggle('clicked');
    });
  });
  