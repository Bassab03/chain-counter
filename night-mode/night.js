function toggleMode() {
  var toggleButton = document.querySelector('#toggle-button')
  if (toggleButton.innerText == "Night mode") {
    toggleButton.innerText = "Day mode"
    document.body.style.backgroundColor = "#000000"
  } else {
    toggleButton.innerText = "Night mode"
    document.body.style.backgroundColor = "#FFFFFF"
  }
}
