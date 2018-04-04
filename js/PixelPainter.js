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

createCanvas(4,4);