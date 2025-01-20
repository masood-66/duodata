// carousel

document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons and slides
    const buttons = document.querySelectorAll("button[id^='btn']");
    const slides = document.querySelectorAll("div[id^='slide']");
  
    // Loop through each button and add event listener
    buttons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        // Hide all slides
        slides.forEach(function(slide) {
          slide.classList.remove("active");
        });
  
        // Show the corresponding slide
        slides[index].classList.add("active");
      });
    });
  });
  