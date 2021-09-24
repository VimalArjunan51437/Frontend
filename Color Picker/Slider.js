let colors = [ 'red', 'blue', 'green', 'pink', 'white' ,'orange', 'purple', 'black', 'yellow'];

//change the background of BG when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);
    //grab the canvas
    let canvas = document.getElementById('background');

    canvas.style.background = `${colors[index]}`
})