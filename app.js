const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    const menuFunction = () => {
      if (window.innerWidth < 1200) {
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
      }
    };
  
    burger.addEventListener("click", menuFunction);
  
    navLinks.forEach((link) => {
      link.addEventListener("click", menuFunction);
    });
};

navSlide();

// const mql = window.matchMedia('(max-width: 1200px)');


// // let initialWidth = (function() {
// //   let executed = false;
// //   return function() {
// //     if (!executed) {
// //       executed = true;
// //       navSlide();
// //     }
// //   }
// // })

// // initialWidth();



// // if (window.innerWidth < 1200) {
// //   navSlide();
// // }

// function windowMatch(e) {
//   if (e.matches) {
//     navSlide();
//   }

// }

// mql.addEventListener('change', windowMatch);



