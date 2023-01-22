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

document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".single"); 
  const buttonsHTML = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
  });

  carousel.insertAdjacentHTML("beforeend", `
    <div class="casrousel-nav">
    ${buttonsHTML.join("")}
  </div>
  `);

  const buttons = carousel.querySelectorAll(".carousel-button"); 

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {

      items.forEach(item => item.classList.remove("single--selected"));
      buttons.forEach(button => button.classList.remove("carousel-button--selected"));

      items[i].classList.add("single--selected");
      button.classList.add("carousel-button--selected");
    });
  });
      //first item
      items[0].classList.add("single--selected");
      buttons[0].classList.add("carousel-button--selected");
});

//   

//   
//     
//       
      
//     
//   
// });


