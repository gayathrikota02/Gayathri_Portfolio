// Sticky Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active Section Highlight in Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth Scrolling on Nav Click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeIcon.classList.toggle('fa-moon', !isDark);
  themeIcon.classList.toggle('fa-sun', isDark);
});

// Projects horizontal scroll buttons
const projectContainer = document.querySelector('.projects-container');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

btnLeft.addEventListener('click', () => {
  projectContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  projectContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

// Disable scroll buttons when at edges
function updateScrollButtons() {
  btnLeft.disabled = projectContainer.scrollLeft <= 0;
  btnRight.disabled = 
    projectContainer.scrollLeft + projectContainer.clientWidth >= projectContainer.scrollWidth;
}

projectContainer.addEventListener('scroll', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);
updateScrollButtons();







