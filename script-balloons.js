const balloons = document.getElementById("balloons-container");
const puffUp = document.getElementById("puff-up");
const letGo = document.getElementById("let-go");

puffUp.onclick = () => changeBalloons(puffUp.getAttribute("data"));
letGo.onclick = () => changeBalloons(letGo.getAttribute("data"));

const changeBalloons = (attr) => balloons.classList.toggle(attr);