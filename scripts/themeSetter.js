//Theme setter file.

function setTheme(theme) {
  const chosenTheme = "./themes/" + theme + ".css";
  document.getElementById("switcher-id").href = chosenTheme;

  localStorage.setItem("style", theme);
  switch (theme) {
    case "beige":
      document.documentElement.setAttribute("data-theme", "beige");
      break;
    case "nature":
      document.documentElement.setAttribute("data-theme", "nature");
      break;
    case "metalic":
      document.documentElement.setAttribute("data-theme", "metalic");
      break;
    case "matrix":
      document.documentElement.setAttribute("data-theme", "matrix");
      break;
    case "sky":
      document.documentElement.setAttribute("data-theme", "sky");
      break;
    case "dracula":
      document.documentElement.setAttribute("data-theme", "dracula");
      break;
    case "vibrant":
      document.documentElement.setAttribute("data-theme", "vibrant");
      break;
    case "galaxy":
      document.documentElement.setAttribute("data-theme", "galaxy");
      break;
    default:
      document.documentElement.setAttribute("data-theme", "sky");
      break;
  }
  localStorage.setItem("style", theme);
}

export {
  //function exported
  setTheme,
};
