let baseDiceColor;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  baseDiceColor = document.querySelector("#base-dice-color");
  baseDiceColor.value = defaultColor;
  baseDiceColor.addEventListener("input", updateFirst, false);
  baseDiceColor.addEventListener("change", updateAll, false);
  baseDiceColor.select();
}


