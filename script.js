// Mobile Menu Toggle Logic
function toggleMenu() {
  const mobileNav = document.querySelector(".mobile-nav");
  mobileNav.classList.toggle("open");
}

// Active Navigation State Management
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navlinks .nav-link");

  // Highlight active nav link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    
    // Header shadow on scroll
    const header = document.getElementById("header");
    if (window.scrollY > 0) {
      header.style.boxShadow = "var(--shadow-md)";
    } else {
      header.style.boxShadow = "var(--shadow-sm)";
    }

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 150) { // Offset for sticky header
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

// Note: Removed IntersectionObserver to comply with "No animations on page load" requirement.