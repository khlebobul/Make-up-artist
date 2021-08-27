const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menuOverlay.classList.toggle("open");
  
});
const menuLinks = document.querySelectorAll('.menu-overlay');
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
      menuButton.classList.toggle("active", false);
      console.log(2);
      menuOverlay.classList.toggle("open", false);
      console.log(1);
    })
  })