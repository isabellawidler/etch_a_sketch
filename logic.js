const container = document.querySelector(".container");

//let numberGrids = window.prompt("Enter the grid size (max 100)");
let numberInput = document.querySelector(".input");
let buttonSubmit = document.querySelector(".submit");

// TODO create function to make grid with numberDivs

function changeDivNumber() {
    container.innerHTML = "";
    let numberDivs = numberInput.value;
    if (numberDivs <= 0 || numberDivs > 100) {
        alert("Please choose a size between 1 and 100");
    }
    else {
        let divSize = 800 / numberDivs;
        for (let i = 0; i < numberDivs; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.style.width = `${divSize}px`;
            rowDiv.style.height = `${divSize}px`;
            rowDiv.classList.add("gridDiv");
            container.appendChild(rowDiv);
            
            for (let y = 0; y < numberDivs; y++) {
                const columnDiv = document.createElement("div");
                columnDiv.style.width = `${divSize}px`;
                columnDiv.style.height = `${divSize}px`;
                columnDiv.classList.add("gridDiv");
                container.appendChild(columnDiv);
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
    }
}

buttonSubmit.addEventListener("click", changeDivNumber);


