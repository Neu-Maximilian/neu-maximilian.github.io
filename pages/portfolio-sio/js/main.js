document.addEventListener("DOMContentLoaded", function () {
  function checkWindowSize() {
    // On verifie si la largeur de la fenetre est inferieur ou egale à 1000px (mobile)
    if (window.innerWidth <= 1000) {
      // On cache l'ancien menu
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.add("hide");
      navLinks.style.height = "0px";
      // On créer un nouveau menu si il n'existe pas
      let burgerMenu = document.querySelector(".burger-menu");
      if (!burgerMenu) {
        burgerMenu = document.createElement("button");
        burgerMenu.classList.add("burger-menu");
        burgerMenu.textContent = "☰";
      }
      // On ajoute un event listener sur le nouveau menu
      burgerMenu.addEventListener("click", function () {
        // On affiche ou cache le menu
        navLinks.classList.toggle("hide");
        // On change le contenu du bouton
        if (navLinks.classList.contains("hide")) {
          burgerMenu.textContent = "☰";
          navLinks.style.height = "0vh"; // Set to collapsed height
        } else {
          burgerMenu.textContent = "✖";
          navLinks.style.height = "auto"; // Set to expanded height
        }
      });
      // On ajoute le nouveau menu au DOM
      const nav = document.querySelector("nav");
      nav.appendChild(burgerMenu);
    }
    // Si la largeur de la fenetre est superieur à 1000px
    else {
      // On supprime le nouveau menu
      const burgerMenu = document.querySelector(".burger-menu");
      if (burgerMenu) {
        burgerMenu.remove();
        // On affiche l'ancien menu
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.remove("hide");
      }
    }
  }

  window.addEventListener("load", checkWindowSize);
  window.addEventListener("resize", checkWindowSize);
  window.addEventListener("orientationchange", checkWindowSize);
  checkWindowSize();
});
