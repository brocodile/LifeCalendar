// let container = document.querySelector(".container");
// for(let i = 1; i<4681; i++){
//     const box = document.createElement("div");
//     box.setAttribute("class", "box");
//     // box.textContent = i;
//     if(i != 0 && i % 5 == 0){
//         box.style["marginRight"] = "5px";
//     } 
//     container.appendChild(box);
// }

// const boxes = document.querySelectorAll(".box");

// const date = document.querySelector("#dateTime");
// const submit = document.querySelector("#btn");

// submit.addEventListener("click", ()=>{
//   let birth = date.value;
//   let newB = birth.slice(5,7) + "/" + birth.slice(8,11) + "/" + birth.slice(0,4);
//   const toDdate = new Date();

//   let day = toDdate.getDate();
//   let month = toDdate.getMonth() + 1;
//   let year = toDdate.getFullYear();

//   let currentDate = `${month}/${day}/${year}`;

//   let totDays = dateCalc(newB,currentDate);
//   colorBox(totDays);

// })

// function dateCalc(d1,d2){
//     let date1 = new Date(d1);  
//     let date2 = new Date(d2);  
//     let time_difference = date2.getTime() - date1.getTime();  
//     let days_difference = time_difference / (1000 * 60 * 60 * 24);
//     return days_difference;
// }

// function colorBox(days) {
//     let weeks = Math.floor(days / 7);
//     let boxesLength = boxes.length;
//     let i = 0;
//     let mapper = 1;
//     for (let j = 0; j < weeks; j++) {
//         if (i >= boxesLength) {
//             i = mapper;
//             mapper++;
//         }
//         boxes[i].style["background-color"] = "crimson";
//         i += 90;
//     }
// }

const container = document.querySelector(".container");
const table = document.querySelector(".tabler");
for(let i = 0; i < 18; i++){
    const tablecol = document.createElement("div");
    for(let k = 0; k < 52; k++){
        const tablerow = document.createElement("tr");
        for(let j = 0; j < 5; j++){
            const elem = document.createElement("td");
            elem.textContent = j;
            tablerow.appendChild(elem);
        }
        tablecol.appendChild(tablerow);
    }
    table.appendChild(tablecol);
}