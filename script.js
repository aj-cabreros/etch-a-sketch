
/* N and n is number of rows & columns */
const DEFAULT_N = 16;
const DEFAULT_COLOR = "blue";

let n = DEFAULT_N;
console.log(typeof(DEFAULT_N));


let grid = document.querySelector(".container");
let columns;
let rows;
let tileNumber = 1;

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

createGrid();






// Below this are all function definitons
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

function resetGrid(){

    /* Grab user-input of grid size and put into let n*/
    do{
        n = window.prompt("Type number of tiles per side");
        Math.floor(n);

        if(!(n > 0 && n <= 100) || isNaN(n)){
            alert("Must be a number from 1 to 100");
        }

    }while(!(n > 0 && n <= 100) || isNaN(n));
    

    /* Destory grid by removing all chilfrend from container div */
    grid = document.querySelector(".container");
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }

    /* new grid with newly defined n value */
    createGrid();


}

function colorTile(ID){
    
    let currentTile = document.querySelector("#" + ID);
    
    let opacityValue = Number(currentTile.style.opacity);

    /* To check values: */
    console.log(opacityValue);
    console.log(typeof(currentTile.style.opacity));


    if(opacityValue){

        opacityValue = Number(currentTile.style.opacity);

        if(opacityValue < 1){
            currentTile.style.backgroundColor = randomColor();
            opacityValue += 0.1;
        }else{ /* Tile is fully colored, don't do anything */}
        
         currentTile.style.opacity = opacityValue;

    } else {
        currentTile.style.backgroundColor = randomColor();
        opacityValue = 0.1;
        currentTile.style.opacity = opacityValue;
    }
}

function randomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0 ; i < 6 ; i++)
        color += letters[(Math.floor(Math.random() * 16))];

    return color;
}






