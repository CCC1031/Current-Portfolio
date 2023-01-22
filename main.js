const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar-menu ul a");

window.addEventListener("scroll", () => {
  const currentPosition = window.scrollY + window.innerHeight / 2;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop <= currentPosition && currentPosition <= sectionBottom) {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
    }
  });
});

// var carousel = document.querySelector('.carousel');
// var images = document.querySelectorAll('.carousel p');
// var current = 0;

// setInterval(() => {
//   images[current].classList.remove('current');
//   current = current !== images.length - 1 ? current + 1 : 0;
//   images[current].classList.add('current');
// }, 5000);



jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });