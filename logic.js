const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");
    container.appendChild(gridDiv);
    for (let i = 0; i < 16; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        container.appendChild(gridDiv);
    }
}

const gridDivs = document.querySelectorAll(".gridDiv");

gridDivs.forEach(div => {
    div.style.filter = ("brightness(1.0)");
    div.dataset.brightness = "1.0";
});

function handleGridColor(event) {
    let currentDiv = event.target;
    let currentBrightness = parseFloat(currentDiv.dataset.brightness);
    let newBrightness = Math.max(currentBrightness - 0.1, 0);
    currentDiv.style.filter = `brightness(${newBrightness})`;
    currentDiv.dataset.brightness = newBrightness.toString();
}

gridDivs.forEach(div => {
    div.addEventListener("mouseover", handleGridColor);
});