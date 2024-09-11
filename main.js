const cube = document.querySelector(".cube");

let positionX = 0
let positionY = 0

setInterval(moveTheCube, 2000);

let colors = ["blue", "green", "pink", "black"]

function moveTheCube() {
    cube.style.backgroundColor = colors[getRandomInt(0, 2)]
    
    positionX += getRandomInt(1, 200);  
    positionY += getRandomInt(1, 20);  
    cube.style.transform = `translate(${positionX}px, ${positionY}px)`;

    cube.style.width = getRandomInt(100, 400) + "px"
    cube.style.height = getRandomInt(100, 400) + "px"
}


function getRandomInt(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}  

