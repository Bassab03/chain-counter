function toggleMode() {
  var toggleButton = document.querySelector('#toggle-button')
  var bodyElement = document.querySelector('body')
  if (toggleButton.innerText == "Night mode") {
    toggleButton.innerText = "Day mode"
    bodyElement.style.backgroundColor = "#000d1a"
    bodyElement.style.color = "white"
  } else {
    toggleButton.innerText = "Night mode"
    bodyElement.style.backgroundColor = "#FFFFFF"
    bodyElement.style.color = "black"
  }
}
