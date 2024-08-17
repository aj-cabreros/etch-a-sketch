
/* N and n is number of rows & columns */
const DEFAULT_N = 16;
const DEFAULT_COLOR = "blue";

let n = DEFAULT_N;
console.log(typeof(DEFAULT_N));


let grid = document.querySelector(".container");
let columns;
let rows;
let tileNumber = 1;


createGrid();



function createGrid(){
    
    for( let i = 1 ; i <= n ; i++){
        columns = document.createElement("div");
        columns.classList.add("column");
        grid.appendChild(columns);
    
        for (let j = 1 ; j <= n ; j++){
            rows = document.createElement("div");
            rows.classList.add("tile");
            rows.setAttribute("id", "tile" + tileNumber);
            rows.setAttribute("onmouseover", "colorTile(this.id)");
            tileNumber++;
            columns.appendChild(rows);
            
        }
    }
}

function colorTile(ID){
    console.log(ID);
    let currentTile = document.querySelector("#" + ID);
    currentTile.style.backgroundColor = DEFAULT_COLOR;


}








