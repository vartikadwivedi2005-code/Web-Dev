let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");

pen.fillStyle = 'yellow';

let cell = 50;
let cellQ = [[0, 0]];
let direction = "right"; 

document.addEventListener("keydown", function (e) {

    if (e.key == 'ArrowDown') {
        direction = 'down';
    } 
    else if (e.key == 'ArrowUp') {
        direction = 'up';
    }
    else if (e.key =='ArrowLeft') {
        direction = 'left';
    }
    else if (e.key == 'ArrowRight') {
        direction = 'right';
    }
});

function draw() {
    pen.clearRect(0, 0, 1000, 600);
    for (let i of cellQ) {
        pen.fillRect(i[0], i[1], cell, cell);
    }
}

function update() {
    let x = cellQ[cellQ.length - 1][0];
    let y = cellQ[cellQ.length - 1][1];

    let newX = x;
    let newY = y;

    if (direction == 'right') {
        newX = x + cell;
        newY=y
        if(newX==700){
            gameOver=true;
        }
    }
    else if (direction == 'left') {
        newX = x - cell;
        if(newX==700){
            gameOver=true;
        }
    }
    else if (direction == 'up') {
        newY = y - cell;
    }
    else if (direction == 'down') {
        newY = y + cell;
    }

    cellQ.push([newX, newY]);
    cellQ.shift();
}



setInterval(() => {
    update();
    draw();
}, 300);