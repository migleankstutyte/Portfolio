"use strict";
let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 4;

let player1Score = 0;
let player2Score = 0;
const WINNING_SCORE = 3;

let showingWinScreen = false;

let paddle1Y = 250;
let paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

function calculateMousePosition(event) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = event.clientX - rect.left - root.scrollLeft;
    let mouseY = event.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
    
}
function handleMouseClick(event) {
    if(showingWinScreen) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
}

window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    let framesPerSecond = 30;
    //sets interval for movement
    setInterval(callBoth, 1000/framesPerSecond);
    //mousemove connects with paddle
    canvas.addEventListener("mousemove",
        function(event) {
            let mousePosition = calculateMousePosition(event);
            paddle1Y = mousePosition.y-(PADDLE_HEIGHT/2);
        });
    canvas.addEventListener("mousedown", handleMouseClick);
}

// create callBoth function
function callBoth () {
    moveEverything();
    drawEverything();
}
function ballReset() {
    if(player1Score >= WINNING_SCORE ||
       player2Score >= WINNING_SCORE) {
           showingWinScreen = true;
       }
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}

function computerMovement() {
    let paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
    if(paddle2YCenter < ballY+35) {
        paddle2Y += 6;
    } else if(paddle2YCenter > ballY+35) {
        paddle2Y -= 6;
    }
}

function moveEverything () {
    if(showingWinScreen) {
        return;
    }
    computerMovement();

    // let ball move right/left
    ballX += ballSpeedX;
    // let ball move up/down
    ballY += ballSpeedY;
    
    //bounce from left border
    if(ballX < 0) {
        if(ballY > paddle1Y &&
           ballY < paddle1Y+PADDLE_HEIGHT) {
                ballSpeedX = -ballSpeedX;

                //balls bouncing correction
                let deltaY = ballY-(paddle1Y+PADDLE_HEIGHT/2)
                ballSpeedY = deltaY * 0.35;
           } else {
               player2Score++; //must be before ballReset()
               ballReset();
           }
    }
    //bounce from right border
    if(ballX > canvas.width) {
        if(ballY > paddle2Y &&
            ballY < paddle2Y+PADDLE_HEIGHT) {
                 ballSpeedX = -ballSpeedX;

                 //balls bouncing correction
                let deltaY = ballY-(paddle2Y+PADDLE_HEIGHT/2)
                ballSpeedY = deltaY * 0.35;
            } else {
                player1Score++; //must be before ballReset()
                ballReset();
            }
    }
    
    //bounce from up
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    //bounce from down
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    
}

function drawNet() {
    for(let i=0; i<canvas.height; i+=40) {
        colorRect(canvas.width/2-1, i, 2, 20, "white");
    }
}
function drawEverything() {
    //black screen
    colorRect(0, 0, canvas.width, canvas.clientHeight, "black");

    if(showingWinScreen) {
        canvasContext.fillStyle = "red";
        canvasContext.font="20px Georgia";
        if(player1Score >= WINNING_SCORE) {
            canvasContext.fillText("LEFT PLAYER WON!", 300, 200);
        } else if (player2Score >= WINNING_SCORE) {
            canvasContext.fillText("RIGHT PLAYER WON!", 300, 200);
        }
        canvasContext.fillStyle = "yellow";
        canvasContext.fillText("click to continue", 330, 500);
        return;
    }

    drawNet();

    //left player paddle
    colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
    //draw the ball
    //right computer paddle
    colorRect(canvas.width-PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
    //draw the ball
    colorCircle(ballX, ballY, 10, "red");

    canvasContext.fillStyle = "yellow"; 
    canvasContext.font="20px Georgia";
    canvasContext.fillText("SCORE", 370, 75);
    canvasContext.fillText(player1Score, 200, 100);
    canvasContext.fillText(player2Score, canvas.width-200, 100);

}

function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);  
    canvasContext.fill();
}

function colorRect (leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}


function goBack() {
    window.history.back();
  }