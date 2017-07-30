function toggleMode() {
  var moreButton = document.querySelector('#more-button')
  var toggleButton = document.querySelector('#toggle-button')
  var donateButton = document.querySelector('#donate-button')
  var bodyElement = document.querySelector('body')
  if (toggleButton.innerText == "Night mode") {
    moreButton.setAttribute(action, "https://chain-counter.github.io/night-more.html")
    toggleButton.innerText = "Day mode"
    donateButton.setAttribute(action, "https://chain-counter.github.io/night-donate.html")
    bodyElement.style.backgroundColor = "#000d1a"
    bodyElement.style.color = "white"
  } else {
    moreButton.setAttribute(action, "https://chain-counter.github.io/more.html")
    toggleButton.innerText = "Night mode"
    donateButton.setAttribute(action, "https://chain-counter.github.io/donate.html")
    bodyElement.style.backgroundColor = "#FFFFFF"
    bodyElement.style.color = "black"
  }
}
