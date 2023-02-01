const spinner = document.querySelector(".spinner");
const circle = document.querySelector(".circle");
const speed = document.querySelector("#speed");
const color = document.querySelector("#color");
const size = document.querySelector("#size");

function changeSize() {
    size.parentNode.classList.toggle('checked');
    circleStop();
    size.closest('div').classList.toggle('checked');
    circle.classList.toggle('small');
}

function changeColor() {
    color.parentNode.classList.toggle('checked');
    color.closest('div').classList.toggle('checked');
    spinner.classList.toggle('violet');
}

function changeSpeed() {
    speed.parentNode.classList.toggle('checked');
    speed.closest('div').classList.toggle('checked');
    spinner.classList.toggle('fast');
}

function circleStop() {
    circle.classList.toggle('stop');
}

