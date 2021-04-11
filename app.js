const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    const menuFunction = () => {
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      burger.classList.toggle("toggle");
    };
  
    burger.addEventListener("click", menuFunction);
  
    navLinks.forEach((link) => {
      link.addEventListener("click", menuFunction);
    });
};

const mql = window.matchMedia('(max-width: 1200px)');

function windowMatch(e) {
  if (e.matches) {
    navSlide();
  }
}

mql.addEventListener('change', windowMatch);


