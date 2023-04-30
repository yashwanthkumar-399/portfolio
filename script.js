// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // You can add your own logic for form submission here
    alert('Your message has been sent!');
  });
  