//creates painting canvas
function createCanvas(height, length){
  let canvasGrid = document.createElement('div');
  canvasGrid.id = 'pp-canvas';
  pixelPainter.appendChild(canvasGrid);
  for(i=0;i<height;i++){
    let rowDivs = document.createElement('div');
    rowDivs.className = 'gridRow';
    canvasGrid.appendChild(rowDivs);
    let rowCount = document.getElementsByClassName('gridRow');
    for(j=0;j<length;j++){
      let cellDivs = document.createElement('div');
      cellDivs.className = 'gridCell';
      rowCount[i].appendChild(cellDivs);
    }
  }
}

createCanvas(30,30);

//creates blank space between grids
let emptySpace = document.createElement('h2');
emptySpace.id = 'blank';
pixelPainter.appendChild(emptySpace);

//creates color swatch
function createColorGrid(height, length){
  let colorGrid = document.createElement('div');
  colorGrid.id = 'pp-colors';
  pixelPainter.appendChild(colorGrid);
  for (i = 0; i < height; i++) {
    let colorRows = document.createElement('div');
    colorRows.className = 'colorRow';
    colorGrid.appendChild(colorRows);
    let colorCount = document.getElementsByClassName('colorRow');
    for (j = 0; j < length; j++) {
      let colorCells = document.createElement('div');
      colorCells.className = 'colorCell';
      colorCount[i].appendChild(colorCells);
    }
  }
}

createColorGrid(1,20);


 //generates a random hex value and saves to color variable
function ran_col() {
  let color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  return color;
}

//sets colors to swatch on page load
function setColors(){
  colorSelect = document.getElementsByClassName('colorCell');
  colorSelect[0].style.background = 'rgb(255,255,255)';
  colorSelect[1].style.background = 'rgb(0,0,0)';
  for(let i=2;i<colorSelect.length;i++){
  colorSelect[i].style.background = ran_col();
  }
}

setColors();

//changes selected color when clicking swatch buttons
let currentColor = 'rgb(0,0,0)';
let swatchButtons = document.getElementsByClassName('colorCell');
for(let i=0;i<swatchButtons.length;i++){
  swatchButtons[i].addEventListener('click', selectColor);
}
function selectColor(event){
  currentColor = event.target.style.backgroundColor;
  console.log(currentColor);
}



