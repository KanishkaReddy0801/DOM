window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("container");
const changeColorButton = document.getElementById("changeColorButton");
const addChildButton = document.getElementById("addChildButton");
const removeChildButton = document.getElementById("removeChildButton");

const changeColor = () => {
    const colorList = ["lightblue", "red", "green", "yellow", "purple"];
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    container.style.backgroundColor = randomColor;
};

const addChild = () => {
    const child = document.createElement("div");
    child.classList.add("child");
    container.appendChild(child);
};

const removeChild = () => {
    container.removeChild(container.lastChild);
};

changeColorButton.addEventListener('click', changeColor);
addChildButton.addEventListener('click', addChild);
removeChildButton.addEventListener('click', removeChild);
});