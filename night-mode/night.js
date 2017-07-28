function toggleMode() {
  var toggleButton = document.querySelector('#toggle-button')
  var bodyElement = document.querySelector('body')
  if (toggleButton.innerText == "Night mode") {
    toggleButton.innerText = "Day mode"
    //document.body.style.backgroundColor = "#000000"
    //bodyElement.setAttribute(class, "night center-night")
    bodyElement.style.backgroundColor = "#000d1a"
  } else {
    toggleButton.innerText = "Night mode"
    bodyElement.style.backgroundColor = "#FFFFFF"
  }
}
