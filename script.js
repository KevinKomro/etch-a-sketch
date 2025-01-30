const container = document.querySelector(".container");

for(let i = 0; i <= 255; i++) {
    let div = document.createElement("div");
    div.classList.add("gridDiv");
    container.appendChild(div);
};

