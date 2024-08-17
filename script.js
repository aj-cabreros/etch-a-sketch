
/* N and n is number of rows & columns */
const DEFAULT_N = 16;
let n = DEFAULT_N;
console.log(typeof(DEFAULT_N));


let grid = document.querySelector(".container");


let columns;
let rows;
let tileNumber = 1;

for( let i = 1 ; i <= n ; i++){
    columns = document.createElement("div");
    columns.classList.add("column");
    grid.appendChild(columns);

    for (let j = 1 ; j <= n ; j++){
        rows = document.createElement("div");
        rows.classList.add("tile");
        columns.appendChild(rows);
        
    }

}

