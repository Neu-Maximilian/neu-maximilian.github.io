//Buttons are set up in this file.

function greenBtn() {
  const container = document.querySelector("#screenContainer");
  container.classList.contains("maximized")
    ? container.classList.remove("maximized")
    : container.classList.add("maximized");
}

function yellowBtn() {
  bodyContainer.classList.contains("minimized")
    ? bodyContainer.classList.remove("minimized")
    : bodyContainer.classList.add("minimized");
}

function redBtn() {
    bodyContainer.classList.contains("closed")
    ? bodyContainer.classList.remove("closed")
    : bodyContainer.classList.add("closed");
}

function themeBtn() {
  const dropdown = document.getElementsByClassName("theme-switches")[0];
  const close = document.getElementsByClassName("close")[0];
  dropdown.classList.toggle("hide");
  close.classList.toggle("hide");
}

export { greenBtn, yellowBtn, redBtn, themeBtn };
