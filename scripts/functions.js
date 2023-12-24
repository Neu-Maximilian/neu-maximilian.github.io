//Functions file. All important functions are defined here. These are used for setup & operations

//Imports done
import config from "../config.js";
import {
  fetchGithubSocialStats,
  fetchLinkedInStats,
  fetchLeetCodeStats,
  fetchGithubStats,
  connections,
  githubStats,
  followers,
  following,
  ranking,
  totalSolved,
  easySolved,
  mediumSolved,
  hardSolved,
} from "./fetchStats.js";
import {
  getContributors,
  getIPDetails,
  getRepo,
  contributors,
  IpDetails,
  userRepos,
} from "./getDetails.js";
import { suggestFurtherCommand } from "./compare.js";
import {
  commandHistory,
  saveHistory,
  clearHistory,
  popInvalidCommand,
  runSpecificHistoryCmd,
} from "./history.js";

const app = document.querySelector("#app");
let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const resumeUrl = "docs/CV 2024 EN.pdf";

// localisation

let language = navigator.language;
if (language.includes("fr")) {
  language = "fr";
} else if (language.includes("de")) {
  language = "de";
} else {
  language = "en";
}

let text_flag = "";
let text_more = "";
let text_invalid = "";
let text_alternative = "";
let text_credit = "";
let text_no_expression = "";
let text_invalid_expression = "";
let text_contact_me = "";
let text_network = ["", "", "", "", "", ""]

switch (language) {
  case "fr":
    text_flag = "Ajouter le drapeau '-d' pour plus de description";
    text_more =
      "écrire help {nom de la commande} pour en savoir plus sur une commande spécifique comme 'help github'";
    text_invalid = "n'est pas une commande valide";
    text_alternative = "Êtes-vous à la recherche de ceci: ";
    text_credit = ["Ce terminal a été réalisé par", "puis modifié par moi."];
    text_no_expression = "Veuillez saisir une expression valide";
    text_invalid_expression = " n'est pas une expression valide";
    text_contact_me = "N'hésitez pas à me contacter";
    text_network = ["Adresse Ipv6", "Adresse réseau", "Ville", "FAI", "Région", "Code postal"];
    break;
  case "de":
    text_flag =
      "Fügen Sie die Flagge '-d' für eine detailliertere Beschreibung hinzu";
    text_more =
      "Schreiben Sie help {Befehlsname}, um weitere Informationen zu einem bestimmten Befehl zu erhalten, z. B. 'help github'";
    text_invalid = "ist kein gültiger Befehl";
    text_alternative = "Suchen Sie nach diesem: ";
    text_credit = ["Dieses Terminal wurde von", "dann von mir modifiziert."];
    text_no_expression = "Bitte geben Sie einen gültigen Ausdruck ein";
    text_invalid_expression = " ist kein gültiger Ausdruck";
    text_contact_me = "Zögern Sie nicht, mich zu kontaktieren";
    text_network = ["Ipv6 Adresse", "Netzwerkadresse", "Stadt", "ISP", "Region", "Postleitzahl"];
    break;
  default:
    text_flag = "add '-d' flag for more description";
    text_more =
      "write help {command name} to know about specific command like 'help github'";
    text_invalid = "is not a valid command";
    text_alternative = "Are you looking for this: ";
    text_credit = ["This terminal is made by", "then modified by me."];
    text_no_expression = "Please Enter a Valid Expression";
    text_invalid_expression = " is not a valid expression";
    text_contact_me = "Do not hesitate to contact me";
    text_network = ["Ipv6 address", "Network address", "City", "ISP", "Region", "Postal Code"];
}

//Defining the functions
function neofetch() {
  // read data from data.json
  const data = config.neofetch;
  console.log(data);

  const container = document.createElement("div");
  container.classList.add("fetch-container");

  const fimg = document.createElement("div");
  fimg.classList.add("fetch-img-container");
  fimg.innerHTML = "<img class='fetch-img' src='logo.svg' />";

  const info = document.createElement("div");
  info.classList.add("info");
  container.appendChild(fimg);
  container.appendChild(info);

  for (const [key, value] of Object.entries(data)) {
    const p = document.createElement("p");
    p.innerHTML = `<span class="key">${key}</span>: <span class="value">${
      value[language] ? value[language] : value
    }</span>`;
    info.appendChild(p);
  }

  app.appendChild(container);
}

function removeNeoFetch() {
  const element = document.querySelector(".fetch-container");
  if (element) element.remove();
}

async function getInputValue(history, remove = false, cmd = undefined) {
  const val = cmd || document.querySelector("input").value.trim().toLowerCase();
  saveHistory(val);
  const a = val.split(" ");
  const flag = a[1];
  const value = a[0];
  const flags = [...a];

  flags.shift(); // removes the first element
  if (value.substring(0, 5) === "cheer") {
    value.substring(0, 5).toLowerCase();
  } else {
    value.replace(/\s+/g, "").toLowerCase();
  }

  history.push(cmd || document.querySelector("input").value);

  if (remove) removeInput();

  switch (value) {
    case "help":
    case "ls":
      config.help.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      if (flag == "-d") {
        trueValue(val);
        for (let item of config.help) {
          await createText(`${item.title} :- ${item.description[language]}`);
        }
        break;
      }

      if (flag) {
        trueValue(val);
        let isCmd = false;
        for (let x of config.help) {
          if (flag === x.title) {
            for (let i = 0; i < x.info[language].length; i++)
              await createText(x.info[language][i]);
            isCmd = true;
            break;
          }
        }

        if (!isCmd) {
          await createText(`${flag} ${text_invalid}`);
          let commands = suggestFurtherCommand(flag);
          await createText(text_alternative + commands);
        }
        break;
      }

      trueValue(value);
      let titles = config.help.map((item) => item.title);
      let titlesString = titles.join(", ");
      await createText(titlesString);

      await createText(text_flag);
      await createText(text_more);
      break;
    case "neofetch":
      neofetch();
      break;
    case "about":
      trueValue(value);
      for (let i = 0; i < config.about[language].length; i++)
        await createText(config.about[language][i]);
      break;
    case "reset":
      trueValue(value);
      location.reload(true);
      break;
    case "social":
      if (flag == "-l") {
        trueValue(val);
        config.social.forEach((item) => {
          createText(
            `${item.title} :- <a href=${item.link} target="_blank">${item.link}</a>
            `,
            false
          );
        });
        break;
      } else if (flag == "-d") {
        trueValue(val);
        config.social.forEach(async (item) => {
          createText(
            `${item.title} Link :- <a href=${item.link} target="_blank">${item.link}</a>
            `,
            false
          );
          if (item.title == "Github") {
            createText(`Followers: ${followers}`);
            createText(`Following: ${following}`);
          }
        });
        break;
      }
      trueValue(value);
      config.social.forEach((item) => {
        createText(
          `<a href=${item.link} target="_blank">${item.title}</a>`,
          false
        );
      });
      break;
    case "projects":
      trueValue(value);
      config.projects.forEach(async (item) => {
        await createText(
          `<a href=${item.link} target="_blank">${item.title}</a> - ${item.description[language]}`,
          false
        );
      });
      break;
    case "contributors":
      trueValue(value);
      contributors.forEach((user) => {
        createText(
          `- <a href=${user.userProfile} target="_blank">${user.username}</a>`,
          false
        );
      });
      break;
    case "experience":
      trueValue(value);
      config.experience.forEach((item) => {
        createText(
          `${item.title[language] ? item.title[language] : item.title}`
        );
        for (let i = 0; i < item.description[language].length; i++)
          createText(
            `${
              item.description[language]
                ? item.description[language][i]
                : item.description[i]
            } `,
            true,
            "text-color-white"
          );
      });
      break;
    case "skills":
      trueValue(value);
      config.skills.forEach((item) => {
        createText(
          `${item.title[language] ? item.title[language] : item.title}`
        );
        createText(
          `${
            item.description[language]
              ? item.description[language]
              : item.description
          } `,
          true,
          "text-color-white"
        );
      });
      break;
    case "ipconfig":
      trueValue(value);
      const IP = IpDetails[0];
      await createText(`- ${text_network[0]} : ${IP.ip}`);
      await createText(`- ${text_network[1]} : ${IP.network}`);
      await createText(`- ${text_network[2]} : ${IP.city}`);
      await createText(`- ${text_network[3]} : ${IP.org}`);
      await createText(`- ${text_network[4]} : ${IP.region}`);
      await createText(`- ${text_network[5]} : ${IP.postal}`);
      break;
    case "repos":
      trueValue(value);
      userRepos[0].forEach((repo, index) => {
        createText(
          `- <a href=${repo.html_url} target="_blank">${
            repo.name
          }</a> | language: ${
            repo.language === null ? "no language" : repo.language
          }`,
          false
        );
        createText(
          ` ${
            repo.description === null ? "no description." : repo.description
          } `
        );
      });
      break;
    case "download":
      trueValue(value);
      downloadFile();
      break;
    case "clear":
    case "cls":
      document
        .querySelectorAll("p")
        .forEach((e) => e.parentNode.removeChild(e));
      document
        .querySelectorAll("section")
        .forEach((e) => e.parentNode.removeChild(e));
      removeNeoFetch();
      removeInput();
      await delay(150);
      break;
    case "contact":
      trueValue(value);
      await createText(text_contact_me);
      createText(
        `Email: <a href="mailto:${config.contact.email} target="_blank"> ${config.contact.email}</a>`
      );
      createText(
        `Telephone: <a href="tel:${config.contact.phone}" target="_blank"> ${config.contact.phone}</a>`
      );
      break;
    case "github":
      trueValue(value);
      await createText(`Github Username: ${githubStats.username}`);
      await createText(`Github Bio: ${githubStats.bio}`);
      await createText(`Number of repositories : ${githubStats.public_repos}`);
      await createText(`Number of gists: ${githubStats.public_gists}`);
      await createText(`Number of followers: ${githubStats.followers}`);
      await createText(`Number of following: ${githubStats.following}`);
      break;
    case "calc":
      calc(flags.join(""));
      break;
    case "history":
      if (flag === "--clear") {
        clearHistory();
      }
      if (Number(flag)) {
        await runSpecificHistoryCmd(Number(flag));
      } else {
        await commandHistory();
      }
      break;
    case "typing":
      await typingCmd(flag);
      break;
    case "exit":
      window.close();
    case "cheer":
      trueValue(value);
      const reply =
        config.cheer.responseArray[language][
          Math.floor(
            Math.random() * config.cheer.responseArray[language].length
          )
        ];
      await createText(reply);
      break;
    case "credit":
      trueValue(value);
      await createText(
        text_credit[0] +
          ` <a href=""http://github.com/techspiritss" target="_blank">TechSpiritss</a> ` +
          text_credit[1]
      );
      break;
    default:
      if (value == "") {
        falseValue(value);
      } else {
        falseValue(value);
        await createText(`${value} ${text_invalid}`);
        let commands = suggestFurtherCommand(value);
        await createText(text_alternative + commands);
      }
  }
}

function new_line() {
  const p = document.createElement("p");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = config.terminal.user + " ";
  span.textContent = config.terminal.host + " ";
  span2.textContent = config.terminal.path + " ";
  p.appendChild(span);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  if (div) app.removeChild(div);
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const msg = document.createElement("h2");
  msg.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(msg);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const msg = document.createElement("h2");
  msg.setAttribute("class", "error");
  msg.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(msg);
  app.appendChild(div);
}

async function createText(text, typingOn = true, color = "") {
  const p = document.createElement("p");
  p.id = color;
  app.appendChild(p);
  p.scrollIntoView({ behavior: "smooth" });

  const typing = localStorage.getItem("typing");

  if (!typingOn || (typing && typing === "off")) {
    p.innerHTML = text;
    return;
  }

  const typingSpeed = localStorage.getItem("typingSpeed") || 20;

  let index = 0;
  async function writeText() {
    while (index < text.length) {
      p.innerHTML += text[index++];
      await new Promise((writeText) => setTimeout(writeText, typingSpeed));
    }
    return;
  }

  await writeText();
}

async function createCode(code, text, typingOn = true) {
  const p = document.createElement("p");
  app.appendChild(p);

  const typing = localStorage.getItem("typing");

  if (!typingOn || (typing && typing === "off")) {
    p.innerHTML = `<span class="code">${code} =></span> ${text}`;
    return;
  }

  const typingSpeed = localStorage.getItem("typingSpeed") || 20;

  const span = document.createElement("span");
  span.className = "code";
  p.appendChild(span);
  p.scrollIntoView({ behavior: "smooth" });
  let index = 0;
  async function writeCode() {
    while (index < code.length) {
      span.innerHTML += code[index++];
      await new Promise((writeCode) => setTimeout(writeCode, typingSpeed));
    }
    return;
  }
  await writeCode();

  p.innerHTML += " ";

  index = 0;
  async function writeText() {
    while (index < text.length) {
      p.innerHTML += text[index++];
      await new Promise((writeText) => setTimeout(writeText, typingSpeed));
    }
    return;
  }

  await writeText();
}

function downloadFile() {
  let link = document.createElement("a");
  link.href = resumeUrl;
  link.click();
  const p = document.createElement("p");
  p.innerHTML = "<span class='blink'>###############<span />";
  app.appendChild(p);
  setTimeout(() => {
    app.removeChild(p);
  }, 2500);
  document.body.removeChild(link);
}

async function calc(flag) {
  console.log(text_no_expression);
  console.log(text_invalid_expression);
  try {
    if (flag === "" || flag === " " || flag === undefined) {
      falseValue(flag);
      await createText(text_no_expression);
    } else {
      trueValue(flag);
      function parse(str) {
        return Function(`'use strict'; return (${str})`)();
      }
      await createText(flag + " = " + parse(flag));
    }
  } catch (e) {
    await createText(flag + text_invalid_expression);
  }
}

// all functions exported
export {
  neofetch,
  removeNeoFetch,
  getInputValue,
  new_line,
  removeInput,
  trueValue,
  falseValue,
  createText,
  createCode,
  downloadFile,
  calc,
};

const typingCmd = async (flag) => {
  const typing = localStorage.getItem("typing");
  let typingSpeed = localStorage.getItem("typingSpeed");

  if (flag == "-on") {
    localStorage.setItem("typing", "on");
    createText("Typing animation is turned on");
  } else if (flag == "-off") {
    localStorage.setItem("typing", "off");
    createText("Typing animation is turned off");
  } else if (Number(flag)) {
    localStorage.setItem("typingSpeed", Number(flag));
    typingSpeed = localStorage.getItem("typingSpeed");
    await createText(
      `Typing animation speed is set to ${typingSpeed ? typingSpeed : 20}ms`
    );
  } else {
    await createText(
      `Typing animation is currently ${
        typing ? typing : "on"
      } and speed is set to ${typingSpeed ? typingSpeed : 20}ms`
    );
    await createText(
      "Turn typing animation on and off by adding -on or -off flags respectively"
    );
    await createText(
      "Also u can write a number(in ms) to set typing custom animation speed"
    );
  }
};
