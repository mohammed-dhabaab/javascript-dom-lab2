const cube = document.querySelector(".cube");

let positionX = 0
let positionY = 0
let colors = [  
    "Green",  
    "Blue",  
    "Cyan",  
    "Magenta",  
    "Orange",  
    "Purple",  
    "Pink",  
    "Lime"  
];
let fontWeights = ["400", "500", "600", "700", "800"]


function moveTheCube() {
    cube.style.backgroundColor = colors[getRandomInt(0, colors.length - 1)]
    cube.style.fontWeight = fontWeights[getRandomInt(0, fontWeights.length - 1)]
    cube.style.color = colors[getRandomInt(0, colors.length - 1)]
    
    positionX = getRandomInt(1, 200);  
    positionY = getRandomInt(1, 200);  
    cube.style.transform = `translate(${positionX}px, ${positionY}px)`;

    cube.style.width = getRandomInt(100, 300) + "px"
    cube.style.height = getRandomInt(100, 300) + "px"
}


function getRandomInt(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}  


setInterval(moveTheCube, 2000);