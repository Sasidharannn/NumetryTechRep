// Function to toggle module visibility
function toggleModule(moduleId) {
    var module = document.getElementById(moduleId);
    module.style.display = module.style.display === 'none' ? 'block' : 'none';
  }
  
  // Add click event listener to each module to toggle visibility
  document.querySelectorAll('.module').forEach(module => {
    module.addEventListener('click', function() {
      toggleModule(this.id);
    });
  });
  