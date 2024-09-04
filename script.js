let container = document.querySelector(".container");
for(let i = 1; i<4681; i++){
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.textContent = i;
    if(i != 0 && i % 5 == 0){
        box.style["marginRight"] = "5px";
    } 
    container.appendChild(box);
}