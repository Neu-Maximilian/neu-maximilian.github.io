const config = {
  help: [
    {
      title: "help",
      description: {
        en: "for a list of commands (add flags '-d' for commands description)",
        de: "für eine Liste der Befehle (fügen Sie Flags '-d' für Befehlsbeschreibung hinzu)",
        fr: "pour une liste de commandes (ajoutez des indicateurs '-d' pour la description des commandes)",
      },
      info: {
        en: [
          "help or ls command gives the list of commands",
          "add '-d' flag for description of all commands also",
          "write a command after help to get info about that specific command like 'help typing'",
        ],
        de: [
          "help oder ls Befehl gibt die Liste der Befehle",
          "fügen Sie das Flag '-d' für die Beschreibung aller Befehle hinzu",
          "schreiben Sie einen Befehl nach Hilfe, um Informationen zu diesem bestimmten Befehl zu erhalten, z. B. 'Hilfe beim Tippen'",
        ],
        fr: [
          "la commande help ou ls donne la liste des commandes",
          "ajoutez l'indicateur '-d' pour la description de toutes les commandes également",
          "écrivez une commande après help pour obtenir des informations sur cette commande spécifique comme 'help typing'",
        ],
      },
    },
    {
      title: "clear",
      description: {
        en: "clears the terminal",
        de: "löscht das Terminal",
        fr: "efface le terminal",
      },
      info: {
        en: ["clear or cls command clears the terminal"],
        de: ["clear oder cls Befehl löscht das Terminal"],
        fr: ["la commande clear ou cls efface le terminal"],
      },
    },
    {
      title: "about",
      description: {
        en: "to learn more about me",
        de: "um mehr über mich zu erfahren",
        fr: "pour en savoir plus sur moi",
      },
      info: {
        en: ["about command gives you information about me"],
        de: ["Über Befehl gibt Ihnen Informationen über mich"],
        fr: ["la commande about vous donne des informations sur moi"],
      },
    },
    {
      title: "social",
      description: {
        en: "to see my social links (add flags '-l' for links and '-d' for detailed results)",
        de: "um meine Social-Media-Links zu sehen (fügen Sie die Flags '-l' für Links und '-d' für detaillierte Ergebnisse hinzu)",
        fr: "pour voir mes liens sociaux (ajoutez des indicateurs '-l' pour les liens et '-d' pour les résultats détaillés)",
      },
      info: {
        en: [
          "use social command to see my social links",
          "add '-l' flag for links and '-d' flag for detailed results",
        ],
        de: [
          "Verwenden Sie den Befehl social, um meine Social-Media-Links zu sehen",
          "fügen Sie das Flag '-l' für Links und das Flag '-d' für detaillierte Ergebnisse hinzu",
        ],
        fr: [
          "utilisez la commande sociale pour voir mes liens sociaux",
          "ajoutez l'indicateur '-l' pour les liens et l'indicateur '-d' pour les résultats détaillés",
        ],
      },
    },
    {
      title: "projects",
      description: {
        en: "to see my projects",
        de: "um meine Projekte zu sehen",
        fr: "pour voir mes projets",
      },
      info: {
        en: ["use projects command to see my projects"],
        de: ["Verwenden Sie den Befehl projects, um meine Projekte zu sehen"],
        fr: ["utilisez la commande projects pour voir mes projets"],
      },
    },
    {
      title: "contact",
      description: {
        en: "to contact me",
        de: "um mich zu kontaktieren",
        fr: "pour me contacter",
      },
      info: {
        en: ["use contact command to contact me"],
        de: ["Verwenden Sie den Befehl contact, um mich zu kontaktieren"],
        fr: ["utilisez la commande contact pour me contacter"],
      },
    },
    {
      title: "cheer",
      description: {
        en: "to cheer you up",
        de: "um dich aufzuheitern",
        fr: "pour vous remonter le moral",
      },
      info: {
        en: ["use cheer command to cheer you up"],
        de: ["Verwenden Sie den Befehl cheer, um Sie aufzuheitern"],
        fr: ["utilisez la commande cheer pour vous remonter le moral"],
      },
    },
    {
      title: "repos",
      description: {
        en: "to see my github repositories",
        de: "um meine Github-Repositories zu sehen",
        fr: "pour voir mes dépôts github",
      },
      info: {
        en: ["use repos command to see my github repositories"],
        de: [
          "Verwenden Sie den Befehl repos, um meine Github-Repositories zu sehen",
        ],
        fr: ["utilisez la commande repos pour voir mes dépôts github"],
      },
    },
    {
      title: "ipconfig",
      description: {
        en: "to see information about your network connection",
        de: "um Informationen über Ihre Netzwerkverbindung zu sehen",
        fr: "pour voir des informations sur votre connexion réseau",
      },
      info: {
        en: [
          "use ipconfig command to see information about your network connection",
        ],
        de: [
          "Verwenden Sie den Befehl ipconfig, um Informationen über Ihre Netzwerkverbindung zu sehen",
        ],
        fr: [
          "utilisez la commande ipconfig pour voir des informations sur votre connexion réseau",
        ],
      },
    },
    {
      title: "github",
      description: {
        en: "to see my github profile",
        de: "um mein Github-Profil zu sehen",
        fr: "pour voir mon profil github",
      },
      info: {
        en: ["use github command to see my github profile"],
        de: ["Verwenden Sie den Befehl github, um mein Github-Profil zu sehen"],
        fr: ["utilisez la commande github pour voir mon profil github"],
      },
    },
    {
      title: "download",
      description: {
        en: "to download my pdf resume",
        de: "um meinen PDF-Lebenslauf herunterzuladen",
        fr: "pour télécharger mon CV pdf",
      },
      info: {
        en: ["use download command to download my pdf resume"],
        de: [
          "Verwenden Sie den Befehl download, um meinen PDF-Lebenslauf herunterzuladen",
        ],
        fr: ["utilisez la commande download pour télécharger mon CV pdf"],
      },
    },
    {
      title: "calc",
      description: {
        en: "evaluates a mathematical expression",
        de: "bewertet einen mathematischen Ausdruck",
        fr: "évalue une expression mathématique",
      },
      info: {
        en: ["use calc command to evaluate a mathematical expression"],
        de: [
          "Verwenden Sie den Befehl calc, um einen mathematischen Ausdruck zu bewerten",
        ],
        fr: [
          "utilisez la commande calc pour évaluer une expression mathématique",
        ],
      },
    },
    {
      title: "experience",
      description: {
        en: "to see my work experience",
        de: "um meine Arbeitserfahrung zu sehen",
        fr: "pour voir mon expérience professionnelle",
      },
      info: {
        en: ["use experience command to see my work experience"],
        de: [
          "Verwenden Sie den Befehl experience, um meine Arbeitserfahrung zu sehen",
        ],
        fr: [
          "utilisez la commande experience pour voir mon expérience professionnelle",
        ],
      },
    },
    {
      title: "history",
      description: {
        en: "shows the last 10 valid commands performed, use --clear flag to clear the history",
        de: "zeigt die letzten 10 ausgeführten gültigen Befehle an. Verwenden Sie das Flag --clear, um die Historie zu löschen",
        fr: "affiche les 10 dernières commandes valides exécutées, utilisez l'indicateur --clear pour effacer l'historique",
      },
      info: {
        en: [
          "use history command to show your last 10 commands history",
          "use --clear flag to clear the history",
          "use history {id} command to run command of that id in your history",
        ],
        de: [
          "Verwenden Sie den Befehl history, um Ihre letzten 10 Befehlshistorien anzuzeigen",
          "Verwenden Sie das Flag --clear, um die Historie zu löschen",
          "Verwenden Sie den Befehl history {id}, um den Befehl dieser ID in Ihrer Historie auszuführen",
        ],
        fr: [
          "utilisez la commande history pour afficher l'historique de vos 10 dernières commandes",
          "utilisez l'indicateur --clear pour effacer l'historique",
          "utilisez la commande history {id} pour exécuter la commande de cet identifiant dans votre historique",
        ],
      },
    },
    {
      title: "skills",
      description: {
        en: "to see my skills",
        de: "um meine Fähigkeiten zu sehen",
        fr: "pour voir mes compétences",
      },
      info: {
        en: ["use skills command to see my skills"],
        de: ["Verwenden Sie den Befehl skills, um meine Fähigkeiten zu sehen"],
        fr: ["utilisez la commande skills pour voir mes compétences"],
      },
    },
    {
      title: "typing",
      description: {
        en: "shows typing animation status",
        de: "zeigt den Status der Tippanimation an",
        fr: "affiche l'état de l'animation de saisie",
      },
      info: {
        en: [
          "use typing command to see typing animation status",
          "Turn typing animation on and off by adding -on or -off flags respectively",
          "Also u can write a number(in ms) to set typing custom animation speed",
        ],
        de: [
          "Verwenden Sie den Befehl typing, um den Status der Tippanimation anzuzeigen",
          "Aktivieren und deaktivieren Sie die Tippanimation, indem Sie die Flags -on oder -off hinzufügen",
          "Sie können auch eine Zahl (in ms) schreiben, um die Geschwindigkeit der benutzerdefinierten Tippanimation festzulegen",
        ],
        fr: [
          "utilisez la commande de saisie pour voir l'état de l'animation de saisie",
          "Activez et désactivez l'animation de saisie en ajoutant respectivement les indicateurs -on ou -off",
          "Vous pouvez également écrire un nombre (en ms) pour définir la vitesse d'animation de saisie personnalisée",
        ],
      },
    },
    {
      title: "reset",
      description: {
        en: "to reload site",
        de: "um die Seite neu zu laden",
        fr: "pour recharger le site",
      },
      info: {
        en: ["use reset command to reload site"],
        de: ["Verwenden Sie den Befehl reset, um die Seite neu zu laden"],
        fr: ["utilisez la commande reset pour recharger le site"],
      },
    },
    {
      title: "credit",
      description: {
        en: "to see the credits",
        de: "um die Credits zu sehen",
        fr: "pour voir les crédits",
      },
      info: {
        en: ["use credit command to see the credits"],
        de: ["Verwenden Sie den Befehl credit, um die Credits zu sehen"],
        fr: ["utilisez la commande credit pour voir les crédits"],
      },
    },
    {
      title: "neofetch",
      description: {
        en: "linux style neofetch",
        de: "Linux-Stil Neofetch",
        fr: "neofetch style linux",
      },
      info: {
        en: ["use neofetch command to see a linux style neofetch"],
        de: [
          "Verwenden Sie den Befehl neofetch, um einen Neofetch im Linux-Stil zu sehen",
        ],
        fr: [
          "utilisez la commande neofetch pour voir un neofetch de style linux",
        ],
      },
    },
  ],
  terminal: {
    user: "$Maximilian",
    host: "NEU-CLI",
    path: "~/guest",
  },
  cheer: {
    responseArray: {
      en: [
        "You are awesome",
        "You are a great person",
        "May the lord bless you",
        "Have a great day",
      ],
      de: [
        "Sie sind großartig",
        "Sie sind eine großartige Person",
        "Möge der Herr Sie segnen",
        "Haben Sie einen schönen Tag",
      ],
      fr: [
        "Vous êtes génial",
        "Vous êtes une personne formidable",
        "Que le Seigneur vous bénisse",
        "Passez une bonne journée",
      ],
    },
  },
  about: {
    en: [
      "First-year apprentice in the BTS “Service Informatique aux Organisations (SIO) option Systèmes et Réseaux (SISR)” at the CCI Campus Alsace.",
      "I am currently looking for a work-study contract in the field of IT, in order to complete my training.",
      "I am passionate about new technologies and I am constantly looking for new knowledge to improve my skills.",
      "I am also passionate about classical music, tinkering and traveling.",
      "I am a very curious person and I like to discover new things.",
      "Feel free to contact me for more information.",
    ],
    de: [
      "Erster Lehrling im BTS “Service Informatique aux Organisations (SIO) option Systèmes et Réseaux (SISR)” am CCI Campus Alsace.",
      "Ich suche derzeit einen Arbeitsvertrag im IT-Bereich, um meine Ausbildung abzuschließen.",
      "Ich bin leidenschaftlich an neuen Technologien interessiert und suche ständig nach neuen Erkenntnissen, um meine Fähigkeiten zu verbessern.",
      "Ich bin auch leidenschaftlich an klassischer Musik, Basteln und Reisen interessiert.",
      "Ich bin eine sehr neugierige Person und ich mag es, neue Dinge zu entdecken.",
      "Zögern Sie nicht, mich für weitere Informationen zu kontaktieren.",
    ],
    fr: [
      "Apprenti de première année en BTS “Service Informatique aux Organisations (SIO) option Systèmes et Réseaux (SISR)” au CCI Campus Alsace.",
      "Je suis actuellement à la recherche d’un contrat d’alternance dans le domaine de l’informatique, afin de compléter ma formation.",
      "Je suis passionné par les nouvelles technologies et je suis constamment à la recherche de nouvelles connaissances pour améliorer mes compétences.",
      "Je suis également passionné par la musique classique, le bricolage et les voyages.",
      "Je suis une personne très curieuse et j’aime découvrir de nouvelles choses.",
      "N’hésitez pas à me contacter pour plus d’informations.",
    ],
  },
  social: [
    {
      title: "Github",
      link: "https://github.com/neu-maximilian",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/neu-maximilian",
    },
  ],
  projects: [
      {
        title: "neu-maximilian.github.io",
        link: "https://neu-maximilian.github.io",
        description: {
          en: "My personal website",
          de: "Meine persönliche Website",
          fr: "Mon site personnel",
        },
      },
      {
        title: "Portfolio-SIO",
        link: "/pages/portfolio-sio/home.html",
        description: {
          en: "My portfolio for my BTS SIO",
          de: "Mein Portfolio für meinen BTS SIO",
          fr: "Mon portfolio pour mon BTS SIO",
        },
      },
      {
        title: "Portfolio-3D",
        link: "/pages/portfolio-3d/home.html",
        description: {
          en: "My 3D portfolio (Abandoned)",
          de: "Mein 3D-Portfolio (Abandoned)",
          fr: "Mon portfolio 3D (Abandoned)",
        },
      },
  ],
  contact: {
    email: "neu.maximilian@proton.me",
    phone: "+33 7 69 69 40 36",
  },
  experience: [
    {
      title: {
        en: "Apprentice IT Technician",
        de: "Lehrling IT-Techniker",
        fr: "Apprenti technicien informatique",
      },
      company: "HCC, Colmar",
      date: "2023 - 2024",
      description: {
        en: [
          "HCC Colmar is an important hospital center in Colmar, France. While working there I learned :",
          "- Network administration",
          "- Systems administration",
          "- Scripting",
          "- IT Support",
        ],
        de: [
          "HCC Colmar ist ein wichtiges Krankenhauszentrum in Colmar, Frankreich. Während meiner Arbeit dort habe ich gelernt :",
          "- Netzwerkadministration",
          "- Systemadministration",
          "- Scripting",
          "- IT-Support",
        ],
        fr: [
          "HCC Colmar est un important centre hospitalier de Colmar, en France. Pendant mon travail là-bas, j'ai appris :",
          "- Administration réseau",
          "- Administration des systèmes",
          "- Scripting",
          "- Support informatique",
        ],
      },
    },
    {
      title: {
        en: "Order Picker",
        de: "Kommissionierer",
        fr: "Préparateur de commandes",
      },
      company: "U Logistique, Mulhouse",
      date: "2023 - 2023",
      description: {
        en: [
          "U Logistique is a logistics company in Mulhouse, France. While working there I learned :",
          "- Order picking",
          "- Respect of safety rules",
          "- Teamwork",
        ],
        de: [
          "U Logistique ist ein Logistikunternehmen in Mulhouse, Frankreich. Während meiner Arbeit dort habe ich gelernt :",
          "- Kommissionierung",
          "- Einhaltung der Sicherheitsregeln",
          "- Teamarbeit",
        ],
        fr: [
          "U Logistique est une entreprise de logistique à Mulhouse, en France. Pendant mon travail là-bas, j'ai appris :",
          "- Préparation de commandes",
          "- Respect des règles de sécurité",
          "- Travail d'équipe",
        ],
      },
    },
  ],
  skills: [
    {
      title: {
        en: "Programming Languages :",
        de: "Programmiersprachen :",
        fr: "Langages de programmation :",
      },
      description:
        "Python, Perl, Bash, Powershell, C++, Javascript, Visual Basic, SQL, mongoDB",
    },
    {
      title: {
        en: "Tools :",
        de: "Werkzeuge :",
        fr: "Outils :",
      },
      description:
        "Git, VsCode, Vim, copilot, Trend, McAfee, Office 365, Intune suite, mecm, rdp, realvnc, aws",
    },
    {
      title: {
        en: "Operating Systems :",
        de: "Betriebssysteme :",
        fr: "Systèmes d'exploitation :",
      },
      description: "Windows, Linux (openSUSE, nixos, debian), MacOS",
    },
    {
      title: {
        en: "Networks :",
        de: "Netzwerke :",
        fr: "Réseaux :",
      },
      description:
        "DNS, DHCP, TCP/IP, VLAN, VPN, Firewall, Routing, Switching, Proxy, Load Balancer, WAF, SSL, TLS",
    },
    {
      title: {
        en: "Virtualization :",
        de: "Virtualisierung :",
        fr: "Virtualisation :",
      },
      description: "VMware, KVM, Hyper-V, VirtualBox, Docker, Kubernetes",
    },
  ],
  neofetch: {
    name: "Maximilian Neu",
    title: {
      en: "IT Technician",
      de: "IT-Techniker",
      fr: "Technicien informatique",
    },
    skills: {
      en: "Systems/Network Administration, Scripting",
      de: "System-/Netzwerkadministration, Scripting",
      fr: "Administration des systèmes/réseaux, Scripting",
    },
    shell: "zsh",
    languages:
      "Python, Perl, Bash, Powershell, C++, Javascript, Visual Basic, SQL, mongoDB",
  },
};
export default config;
