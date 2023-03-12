//Menu mobile

const menuMobile = document.querySelector(".navbar");
const navToggle = document.querySelector(".mobile-nav");
const opacity = document.querySelector(".shadow-menu");

  navToggle.addEventListener("click", () => {
  const visibility = menuMobile.getAttribute("data-visible");

  if (visibility === "false") {
    menuMobile.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true"){
    menuMobile.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  if (visibility === "true");
  opacity.classList.toggle('active');
});

