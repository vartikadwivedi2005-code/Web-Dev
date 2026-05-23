// 1. Setup: Grabbing the HTML canvas and its drawing tool (the 'pen')
let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");

// 2. Initial State: Starting position of the snake and cell size
let snakeCell = [[0, 0]]; // An array of coordinates representing the snake's body
let cell = 50;            // The size of each square in pixels
let direction = "right";  // The initial moving direction

// 3. Input Handling: Listen for key presses to change direction
document.addEventListener("keydown", (e) => {
    // Note: This logic currently changes direction to 'right' for ANY key that isn't Up/Down/Left
    if (e.key == "ArrowUp") {
        direction = 'up';
    } else if (e.key == 'ArrowDown') {
        direction = 'down';
    } else if (e.key == 'ArrowLeft') {
        direction = "left";
    } else {
        direction = 'right';
    }
});

// 4. Rendering: This function clears the board and draws the snake
function draw() {
    pen.fillStyle = "red";
    // Clear the previous frame so the snake doesn't leave a "trail"
    pen.clearRect(0, 0, 1000, 600); 
    
    // Loop through the snake body array and draw each segment
    for (let a of snakeCell) {
        pen.fillRect(a[0], a[1], cell, cell);
    }
}

// 5. Logic: This function calculates where the snake goes next
function update() {
    // Get the current coordinates of the snake's head
    let headX = snakeCell[snakeCell.length - 1][0];
    let headY = snakeCell[snakeCell.length - 1][1];

    let newX;
    let newY;

    // Determine new head position based on current direction
    if (direction == 'right') {
        newX = headX + cell;
        newY = headY;
    } else if (direction == "left") {
        newX = headX - cell;
        newY = headY;
    } else if (direction == "down") {
        newX = headX;
        newY = headY + cell;
    } else { // Direction is 'up'
        newX = headX;
        newY = headY - cell;
    }

    // Move the snake: Add a new head segment and remove the oldest tail segment
    snakeCell.push([newX, newY]);
    snakeCell.shift();
}

// 6. The Game Loop: Run the draw and update functions every 200ms
setInterval(() => {
    draw();   // Render the current state
    update(); // Prepare the state for the next frame
}, 200);