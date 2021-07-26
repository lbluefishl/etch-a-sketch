let gridContainer = document.getElementById('grid-container');
let grids;
let resetButton = document.getElementById('reset');
let numberOfGrids = 16;
let randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

generateGrid();
grids.forEach(grid => grid.addEventListener('mouseover', activateGrid)); 
resetButton.addEventListener('click',reset);

function generateGrid() {
    for (i=0; i<numberOfGrids**2; i++) {

        let gridid = document.createElement('div');
        gridContainer.appendChild(gridid);
        gridid.classList.add('grid');
        gridid.setAttribute('id',`grid-${i}`);
        
    }
    gridContainer.style.setProperty('grid-template-columns',`repeat(${numberOfGrids}, auto)`);
    gridContainer.style.setProperty('grid-template-rows',`repeat(${numberOfGrids}, auto)`);  
    grids = document.querySelectorAll('div.grid')
}

function activateGrid() {

    if (this.className !== 'active') {
        this.classList.add('active');
        this.style.setProperty('background-color',randomColor);
    }
    let opacity;
    if (!this.style.opacity) {                  
        opacity = 1;
        this.style.setProperty('opacity',`${opacity/10}`);
    } else {
        opacity = this.style.opacity*10; 
        console.log(opacity);
        opacity += 1;
        this.style.setProperty('opacity',`${opacity/10}`);    
 
    }
}

function reset() {
    grids.forEach((grid) => { 
    grid.remove()
    });
    numberOfGrids = prompt('How many number of squares per side?');

    if (numberOfGrids>1 && numberOfGrids<100) {
        generateGrid();
        grids.forEach(grid => grid.addEventListener('mouseover', activateGrid)); 
        randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

    } else {
        alert('Please enter a valid number between 2 and 100.');
        reset();  
    } 
}