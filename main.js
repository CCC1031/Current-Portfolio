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

document.querySelectorAll(".quoteWrap").forEach(quoteWrap => {
  const items = quoteWrap.querySelectorAll(".single"); 
  const buttonQuote = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
  });
    console.log(buttonQuote);
});


