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
      cellDivs.dataset.num = length * i + j;
      cellDivs.dataset.row = i;
      cellDivs.dataset.column = j;
      rowCount[i].appendChild(cellDivs);
    }
  }
}
createCanvas(30,30);

//creates blank space between grids
// let emptySpace = document.createElement('h2');
// emptySpace.id = 'blank';
// pixelPainter.appendChild(emptySpace);

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
createColorGrid(2,16);


 //generates a random hex value and saves to color variable
function ran_col() {
  let color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0');
  return color;
}

//sets colors to swatch on page load
function setColors(){
  colorSelect = document.getElementsByClassName('colorCell');
  colorSelect[0].style.background = 'rgb(255,255,255)';
  colorSelect[1].style.background = 'rgb(0,0,0)';
  for(let i=2;i<colorSelect.length;i++){
  colorSelect[i].style.backgroundColor = ran_col();
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
  colorDisplay.style.backgroundColor = currentColor;
}

//applies current color to canvas
let canPaint = false;
let canvasButtons = document.getElementsByClassName('gridCell');
for(let i=0;i<canvasButtons.length;i++){
  canvasButtons[i].addEventListener('click', pointPaint);
  canvasButtons[i].addEventListener('mousedown', startPaint);
  canvasButtons[i].addEventListener('mousedown', pointPaint);
  canvasButtons[i].addEventListener('mouseover', placePaint);
  canvasButtons[i].addEventListener('mouseup', stopPaint);
  canvasButtons[i].addEventListener('click', doFill);
}
function startPaint(){
  canPaint = true; 
}
function stopPaint(){
  canPaint = false;
}
function pointPaint(){
  this.style.backgroundColor = currentColor;
  console.log(this.dataset);
}
function placePaint(){
  if(canPaint === true && canFill === false){
  this.style.backgroundColor = currentColor; 
  }
}
let gridElem = document.getElementById('pp-canvas');
gridElem.addEventListener('mouseleave', checkPaint);
function checkPaint(){
  if (canPaint === true){
    canPaint = false;
  }
}

//creates a clear canvas button
let clearElem = document.createElement('div');
let defaultGrid = '';
clearElem.id = 'clear';
pixelPainter.appendChild(clearElem);
clear.innerHTML = 'Clear Canvas';
clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCanvas);
function clearCanvas(event){
  defaultGrid = event.target.style.backgroundColor;
  let gridCells = document.getElementsByClassName('gridCell');
  for(let i=0;i<gridCells.length;i++){
  gridCells[i].style.backgroundColor = defaultGrid;
  }
}

//creates an erase button
let eraseElem = document.createElement('div');
eraseElem.id = 'erase';
pixelPainter.appendChild(eraseElem);
eraseElem.innerHTML = 'Erase';
eraseButton = document.getElementById('erase');
eraseButton.addEventListener('click', setErase);
function setErase(){
  defaultGrid = event.target.style.backgroundColor;
  currentColor = defaultGrid;
  colorDisplay.style.backgroundColor = currentColor;
}

//creates an element that displays selected color
let colorDisplay = document.createElement('div');
colorDisplay.id = 'display';
colorDisplay.style.backgroundColor = 'rgb(0,0,0)';
pixelPainter.appendChild(colorDisplay);
display.innerHTML = 'Current Color';

//creates a draw button
let drawElem = document.createElement('div');
drawElem.id = 'draw';
pixelPainter.appendChild(drawElem);
drawElem.innerHTML = 'Draw';
drawElem.addEventListener('click', stopFill);
function stopFill(){
  canFill = false;
}

//creates a fill button
let canFill = false;
let fillElem = document.createElement('div');
fillElem.id = 'fill';
pixelPainter.appendChild(fillElem);
fillElem.innerHTML = 'Fill';
fillElem.addEventListener('click', startFill)
function startFill(){
  canFill = true;
  canPaint = false;
}
// let selectCell = document.querySelectorAll(data)
let north = '';
let east = '';
let south = '';
let west = '';
function doFill(){
  currentRow = this.dataset.row;
  currentColumn = this.dataset.column;
  if(canFill === true){

  }
  console.log(currentRow);
  console.log(currentColumn);
  
}
