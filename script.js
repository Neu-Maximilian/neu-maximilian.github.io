//Main script file. All necessary script files are imported here

import { greenBtn, yellowBtn, redBtn, themeBtn } from "./scripts/buttons.js";
import {
  fetchGithubSocialStats,
  fetchGithubStats,
} from "./scripts/fetchStats.js";
import {
  getContributors,
  getIPDetails,
  getRepo,
} from "./scripts/getDetails.js";
import {
  new_line,
  createText,
  createCode,
} from "./scripts/functions.js";

import { setTheme } from "./scripts/themeSetter.js";

export let commandsList = [
  "help",
  "ls",
  "clear",
  "about",
  "social",
  "projects",
  "repos",
  "cheer",
  "ipconfig",
  "contributors",
  "neofetch",
  "download",
  "calc",
  "contact",
  "github",
  "experience",
  "skills",
  "history",
  "typing",
  "reset",
  "credit"
];

let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const greenButton = document.querySelector("#greenButton");
greenButton.addEventListener("click", greenBtn);

const yellowButton = document.querySelector("#yellowButton");
yellowButton.addEventListener("click", yellowBtn);

const redButton = document.querySelector("#redButton");
redButton.addEventListener("click", redBtn);

const themeButton = document.querySelector("#themeButton");
themeButton.addEventListener("click", themeBtn);

// get the navigator language
let language = navigator.language; // en or fr or de

//function to set up and start the terminal
async function openTerminal() {
  let welcome_text = "Welcome to the Terminal";
  let starting_text = "Starting up...";
  let start_text = "You can now interact with the Terminal";
  let help_text = ["Type help", "for a list of commands"];

  if (language.includes("fr")) {
    welcome_text = "Bienvenue sur le Terminal";
    starting_text = "Démarrage...";
    start_text = "Vous pouvez maintenant interagir avec le Terminal";
    help_text = ["Tapez help", "pour une liste de commandes"];
  } else if (language.includes("de")) {
    welcome_text = "Willkommen im Terminal";
    starting_text = "Starten...";
    start_text = "Sie können jetzt mit dem Terminal interagieren";
    help_text = ["Geben Sie help ein", "für eine Liste der Befehle"];
  }

  await delay(100);
  await createText(welcome_text);
  await delay(100);
  await createText(starting_text);
  await delay(300);
  await createText(start_text);
  await delay(100);
  await createCode(help_text[0], help_text[1]);
  await delay(200);
  new_line();
}

// function to localize the website (window frame and theme switcher)
function localize() {
  let lang = navigator.language;

  if (lang.includes("fr")) {
    document.title = "Terminal";
    document.getElementById("terminal-title").innerHTML = "Terminal";
    document.getElementById("themeButton").innerHTML = "Thèmes";
    document.getElementById("theme-light-label").innerHTML = "Thèmes clairs";
    document.getElementById("theme-dark-label").innerHTML = "Thèmes sombres";
    document.getElementById("theme-vibrant-label").innerHTML =
      "Thèmes vibrants";
  } else if (lang.includes("de")) {
    document.title = "Terminal";
    document.getElementById("terminal-title").innerHTML = "Terminal";
    document.getElementById("themeButton").innerHTML = "Themen";
    document.getElementById("theme-light-label").innerHTML = "Helle Themen";
    document.getElementById("theme-dark-label").innerHTML = "Dunkle Themen";
    document.getElementById("theme-vibrant-label").innerHTML =
      "Lebendige Themen";
  }
}

//fetch statisticss from ./scripts/fetchStats.js
fetchGithubSocialStats();
fetchGithubStats();

//localize the website
localize();

//open the terminal
openTerminal();

//get Details from ./scripts/getDetails.js
getContributors();
// ip lookup --> https://ipapi.co/json
getIPDetails();
// get user github repositories
getRepo();

// Themes Switcher
let switches = document.getElementsByClassName("main-switch");
let style = localStorage.getItem("style");

if (style == null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("dracula");
    } else {
        setTheme("sky");
    }
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener("click", function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}
