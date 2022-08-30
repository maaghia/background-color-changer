let hexarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
let color = '#'

const getRandomNumberBetween = (min,max) => {return Math.floor(Math.random()*(max-min+1)+min);}
//console.log(hexarr[getRandomNumberBetween(0,15)]) 

const generateColor = () => {
    color = '#'
    for (let i=0 ; i<6 ; i++){
        color = color + hexarr[getRandomNumberBetween(0,15)];
    }    
    return color;
}

let btn = document.querySelector("#btn");
let bodyy = document.querySelector(".body");
let colorCode = document.querySelector(".color");

btn.addEventListener('click', event => {
    generateColor();
    bodyy.style.background = generateColor();
   //console.log(bodyy.style.backgroudcolor)
    colorCode.innerHTML = `${color}`
   //console.log(color)
});



