window.addEventListener('load', function() {
    // On verifie si la largeur de la fenetre est inferieur ou egale à 1000px (mobile)
    if (window.innerWidth <= 1000) {
        console.log('Mobile device detected');
        // On cache l'ancien menu
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.add('hide');
        navLinks.style.height = '0px';
        // On créer un nouveau menu
        const burgerMenu = document.createElement('button');
        burgerMenu.textContent = '☰';
        burgerMenu.classList.add('burger-menu');
        // On ajoute un event listener sur le nouveau menu
        burgerMenu.addEventListener('click', function() {
            // On affiche ou cache le menu
            navLinks.classList.toggle('hide');
            // On change le contenu du bouton
            if (burgerMenu.textContent === '☰') {
                burgerMenu.textContent = '✖';
            } else {
                burgerMenu.textContent = '☰';
            }
            // On change la hauteur du menu
            if (navLinks.classList.contains('hide')) {
                navLinks.style.height = '0px';
            } else {
                navLinks.style.height = 'auto';
            }
        });
        // On ajoute le nouveau menu au DOM
        const nav = document.querySelector('nav');
        nav.appendChild(burgerMenu);
    }
});
