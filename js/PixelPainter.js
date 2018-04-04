function createCanvas(num1, num2){
  let canvasGrid = document.createElement('div');
  canvasGrid.className = 'grid';
  pixelPainter.appendChild(canvasGrid);
  for(i=0;i<num1;i++){
    let rowDivs = document.createElement('div');
    rowDivs.className = 'gridRow';
    canvasGrid.appendChild(rowDivs);
    let rowCount = document.getElementsByClassName('gridRow');
    for(j=0;j<num2;j++){
      let cellDivs = document.createElement('div');
      cellDivs.className = 'gridCell';
      rowCount[i].appendChild(cellDivs);
    }
  }
}

createCanvas(30,30);


let emptySpace = document.createElement('h2');
emptySpace.id = 'blank';
pixelPainter.appendChild(emptySpace);


function createColorGrid(num1, num2){
  let colorGrid = document.createElement('div');
  colorGrid.className = 'colors';
  pixelPainter.appendChild(colorGrid);
  for (i = 0; i < num1; i++) {
    let colorRows = document.createElement('div');
    colorRows.className = 'colorRow';
    colorGrid.appendChild(colorRows);
    let colorCount = document.getElementsByClassName('colorRow');
    for (j = 0; j < num2; j++) {
      let colorCells = document.createElement('div');
      colorCells.className = 'colorCell';
      colorCount[i].appendChild(colorCells);
    }
  }
}

createColorGrid(1,8);

function ran_col() { //function name
  // var color = '#'; // hexadecimal starting symbol
  // var letters = ['000000', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0']; //Set your colors here
  let color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  return color;
}

function setColors(){
  colorSelect = document.getElementsByClassName('colorCell');
  for(let i=0;i<colorSelect.length;i++){
  colorSelect[i].style.background = ran_col();
  }
}

setColors();
