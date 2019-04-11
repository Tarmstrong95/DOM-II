// Your code goes here
let nav = document.querySelector('.nav') // Hover nav to change color
nav.addEventListener( "mouseover", y => {y.target.style.color = "red"; preventDefault()})


let img = document.querySelector('body') // Tap A to change opacity
img.addEventListener("keydown", x => {
    if(x.keyCode == 65){
        if(x.target.style.opacity == "1"){
                    x.target.style.opacity = ".5"
        }else{
            x.target.style.opacity = "1"
        }
    }
})

let navCont = document.querySelector('.nav-container')// if hovering FUN BUS and scroll, will enlarge font
navCont.addEventListener("wheel", x => {
    if(x.target.classList.contains("logo-heading")){
        x.preventDefault();
        x.target.style.transform = "scale(2)"
    }
})

window.addEventListener("load", x => alert("Page has been fully loaded, Master!")) // Alerts to page

var inputO = document.createElement('input')
var inputT = document.createElement('input')
document.querySelector('body').appendChild(inputO);
document.querySelector('body').appendChild(inputT);
inputO.addEventListener('focus', x => x.target.style.background = "green")// changes background color of input to green -> bottom left of page
inputT.addEventListener('select', x => x .target.style.background = "red")// changes bacground color of input to red when highlight text within
inputO.addEventListener('blur', x => x.target.style.background = ''); // will remove color of inputO background

window.addEventListener('resize', x => { // Alerts that th window has been resized
        alert("You resized")
})

window.addEventListener("scroll", x => { //Changes background color on scroll
    if(x){
            document.querySelector('body').style.background = '#ffdbd6';
    }
})

let body =  document.querySelector('img') // makes first image invisible
body.addEventListener('dblclick', x => {
    x.target.style.opacity = "0"
})


// Added proper stopPropogation
document.querySelector('body').addEventListener('click', () => console.log("Just a click"))
const imgs = document.querySelectorAll('img');
imgs.forEach(x => {
    x.addEventListener('click', () => {
        event.stopPropagation();
        x.style.border = "8px solid green"
    })
})