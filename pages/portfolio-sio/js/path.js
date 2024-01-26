const lifePath = [
    {
        title: "Bac",
        year: "2022",
        description: "Bac NSI/Physique-Chimie au lycée labourdonnais (ile maurice)",
    },
    {
        title: "Licence 1",
        year: "2023",
        description: "Licence 1 Informatique à l'université de la réunion puis transfert à lUHA",
    },
    {
        title: "BTS",
        year: "2023-2025",
        description: "BTS SIO option SISR au CCI Campus Alsace",
    },
    {
        title: "Alternance",
        year: "2023-2025",
        description: "Alternance en tant que technicien informatique au sein des CHU de Colmar",
    },
]

document.addEventListener("DOMContentLoaded", function() {
    // Obtient la section parent
    const pathSection = document.querySelector(".path-section");

    // Crée une liste d'éléments
    // Pour chaque élément du tableau lifePath que on tri par l'année
    lifePath.sort((a, b) => a.year - b.year).forEach((element, index) => {
        // Crée un nouvel élément div
        const newElement = document.createElement("div");
        // Ajoute la classe "path" à l'élément div
        newElement.classList.add("path");
        // Ajoute le contenu HTML à l'élément div
        newElement.innerHTML = `
            <div class="path-content" style="margin-left: ${index * 5}vw;">
                <h3 class="path-title">${element.title}</h3>
                <p class="path-year">${element.year}</p>
                <p class="path-description">${element.description}</p>
            </div>
        `;

        // Ajoute le nouvel élément enfant à la section parent
        pathSection.appendChild(newElement);
    });
});
