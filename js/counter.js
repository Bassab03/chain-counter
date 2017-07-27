var best = 70;
var none = 0;
var max = Number.MAX_SAFE_INTEGER
var min = Number.MIN_SAFE_INTEGER

function clickPlus() {
  incrementCounterValueBy(1)
  updateMessage()
}

function clickMinus() {
  var currentValue
  incrementCounterValueBy(-1)
  updateMessage()
}

function clickReset() {
  getCounterElement().innerText = 0
}

function incrementCounterValueBy(amount) {
  var currentValue = getCounterValue();
  if (currentValue === max || currentValue === min) {
    return;
  }
  currentValue += amount;
  if (currentValue > 255 || currentValue < 0) {
    currentValue = 0;
  }
  getCounterElement().innerText = currentValue;
}

function getCounterElement() {
  return document.querySelector('#counterValue')
}

function getCounterValue() {
  var counterElement = getCounterElement()
  return Number(counterElement.innerText)
}

function displayMessage(msg) {
  var messageBox = document.querySelector('#messageBox')
  if(messageBox.innerText !== msg) {
    messageBox.innerText = msg
  }  
}

function updateMessage() {
  var counterValue = getCounterValue()
  var msg = getMessageFor(counterValue)
  displayMessage(msg)
}

function getMessageFor(counterValue) {
  if (counterValue === max || counterValue === min) {
    return "LIMIT reached!"
  } else if (counterValue >= best) {
    return "4 perfect IVs, 15% HA chance, 1/1024 shiny chance"
  } else if (counterValue < none) {
    return "No guaranteed IVs, 0% HA Chance, 1/4096 shiny chance"
  } else if (counterValue >= 0 && counterValue < 5) {
    return "No guaranteed IVs, 0% HA Chance, 1/4096 shiny chance"
  } else if (counterValue > 4 && counterValue < 10) {
    return "1 guaranteed IV, 0% HA Chance, 1/4096 shiny chance"
  } else if (counterValue > 9 && counterValue < 20) {
    return "2 guaranteed IVs, 5% HA Chance, 1/4096 shiny chance"
  } else if (counterValue > 19 && counterValue < 30) {
    return "3 guaranteed IVs, 10% HA Chance, 1/4096 shiny chance"
  } else if (counterValue > 29 && counterValue < best) {
    return "4 guaranteed IVs, 15% HA Chance, 1/4096 shiny chance"
  } else if (counterValue === 255) {
    return "4 guaranteed IVs, 15% HA Chance, 1/1024 shiny chance\nYour chain will reset to 0 when the next ally is summoned"
  }
}
