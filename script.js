// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Array of section IDs to scroll to (same as before)
  const sections = ['#about-me', '#portfolio', '#experience', '#photography'];
  let currentSectionIndex = 0;
  
  // Smooth Scroll for Button on PC (same as before)
  document.getElementById("scroll-down-btn").addEventListener("click", function() {
    const nextSection = sections[currentSectionIndex];
    document.querySelector(nextSection).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  });
  
  // Hide the scroll-down button after scrolling down a bit (same as before)
  window.addEventListener('scroll', function() {
    const scrollDownBtn = document.getElementById("scroll-down-btn");
    if (window.scrollY > 100) {
      scrollDownBtn.style.display = "none";
    } else {
      scrollDownBtn.style.display = "flex";
    }
  });
  
  // Implement Smooth Scrolling on Mobile (for smoother touch scrolling)
  if (window.innerWidth <= 768) {
    document.body.style.scrollBehavior = "smooth"; // Enable smooth scrolling on mobile by default
  }
  
