let fontDiceColor;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  fontDiceColor = document.querySelector("#font-dice-color");
  fontDiceColor.value = defaultColor;
  fontDiceColor.addEventListener("input", updateFirst, false);
  fontDiceColor.addEventListener("change", updateAll, false);
  fontDiceColor.select();
}
/*
function updateFontColour(event) {
  document.querySelectorAll("h4").forEach((h4) => {
    h4.style.color = event.target.value;
  });
}*/