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

