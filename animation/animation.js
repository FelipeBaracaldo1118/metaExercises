let canvas = document.getElementById("my_canvas");
//lockn up the 2d canvas context.
let context = canvas.getContext("2d")
//variable to track speeed, position, movement and radius
const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

//responsible for moving the ball accross the screen and changing it direction when touching the limtis
function moveBall(){
    if(positon + radius > 640){
        moveSpeed = -speed;
    }else if(positon + radius < 0){
        moveSpeed = speed;
    }
    position += moveSpeed;
}


function drawBall(){
    //clears the canvas area using clearRect
    context.clearRect(0,0,640,480)


    context.fillStyle = "#62687f";
    //draw the ball at the begin position using the next 3 arguments
    context.beignPath();
    context.arc(position, 50, radius, 0,2 * Math.PI);
    context.fill;
}

function animate(){
    moveBall();
    drawBall();
    //this is the frame to schedule the animate function to be called again at the end of the file. 
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)