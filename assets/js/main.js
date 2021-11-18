var count = 0;

function changeCounter() {
    const counter = document.getElementById("clickCounter");
    counter.textContent = count;
}

function addClick() {
    count++;
    changeCounter();
}

changeCounter();
