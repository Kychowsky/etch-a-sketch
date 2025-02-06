/*Grid Function*/
let userInput = 16;


const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Set Grid";
button.classList.add("setGrid");
body.prepend(button);

/*Initialize first grid*/
createGrid();

button.addEventListener("click", () => {
    userInput = parseInt(prompt("Enter the desired pixel amount(MAX = 100 > x by x):"));
    if (!isNaN(userInput) && userInput > 0 && userInput <= 100){
        createGrid();
    } else {
        userInput = parseInt(prompt("Enter the desired pixel amount(MAX = 100 > x by x):"));
    }
});

function createGrid(){
    const existingContainer = document.querySelector(".container");
    if (existingContainer) {
        existingContainer.remove();
    }

    const container =document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

    for (let i = 0; i < userInput;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0;  j < userInput; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            let boxWidth = 960/userInput;
            let boxHeight = 960/userInput;
            box.style.width = `${boxWidth}px`;
            box.style.height = `${boxHeight}px`;
            box.addEventListener("mouseover",(event) => {
                event.target.style.backgroundColor = "black";
            });
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
