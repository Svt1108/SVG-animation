const pig = document.getElementById("pig");
const color = document.getElementById("change-color");
const moveEyelashes = document.getElementById("move-eyelashes");
const moveEars = document.getElementById("move-ears");
const confusion = document.getElementById("confusion");

color.onclick = () => changePigExterior(color.getAttribute("data"));
confusion.onclick = () => changePigExterior(confusion.getAttribute("data"));
moveEars.onclick = () => changePigExterior(moveEars.getAttribute("data"));
moveEyelashes.onclick = () =>
    changePigExterior(moveEyelashes.getAttribute("data"));

const changePigExterior = (attr) => pig.classList.toggle(attr);

const list = ["change-color", "move-ears", "move-eyelashes"];

pig.onclick = () => list.map((item) => pig.classList.toggle(item));

const listDouble = [
    "change-color",
    "confusion",
    "move-ears",
    "move-eyelashes",
    "move-pig",
];

pig.ondblclick = () => listDouble.map((item) => pig.classList.toggle(item));