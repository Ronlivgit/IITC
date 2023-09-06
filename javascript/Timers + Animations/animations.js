// // Trailer
// var IntervalID = setInterval(moveRight,10)
// var counter = 0
// function moveRight(){
//     box.style.left = `${++counter}px`
//     if(counter == 150){
//         clearInterval(IntervalID)
//         counter = 0
//         IntervalID = setInterval(moveDown,10)
//     }
// }

// function moveDown(){
//     box.style.top=`${++counter}px`
//     if(counter ==150){
//         clearInterval(IntervalID)
//         IntervalID = setInterval(moveLeft,10)
//     }
// }

// function moveLeft(){
//     box.style.left=`${--counter}px`
//     if(counter == 0){
//         clearInterval(IntervalID)
//         counter = 150
//         IntervalID = setInterval(moveUp,10)
//     }
// }

// function moveUp(){
//     box.style.top = `${--counter}px`
//     if (counter == 0){
//         clearInterval(IntervalID)
//         counter = 0
//     }
// }

// Animations T1

document.body.innerHTML +=
`<div id="t1Div"></div>`
var Increaser = 0
var t1Interval

function increaseHeightWidth(){
    t1Div.style = `width:${30 + Increaser}vw ; height:${30 + Increaser}vh; background-color:aqua`
    if (Increaser == 20){
        clearInterval(t1Interval)
    }
    Increaser += 1
}

// Animations T2 + 3 + 4
document.body.innerHTML +=
`<button id='triggerOnOff' onclick="triggerAnimation()" onkeypress="handle(event)">Press to Start / Pause</button>`

var startAnimation = false

function triggerAnimation(){
    if(startAnimation == true){
        clearInterval(t1Interval)
        startAnimation = false
    }

    else {
        t1Interval = setInterval(increaseHeightWidth,1000)
        startAnimation = true
    }
}

function cancelAnimation(){
    t1Div.style = `width:30vw ; height:30vh; background-color:aqua`
    startAnimation = true
    triggerAnimation()
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        cancelAnimation()
    }
}


// Animations T5
document.body.innerHTML +=
`<div id="t5Div">Medium size Color changer</div>`

t5Div.style="width:30vw;height:10vh;background:aqua"

t5Div.addEventListener("click",randomizeRgb)

function randomizeRgb(){
    var redRan = Math.floor((Math.random() * 255))
    var blueRan = Math.floor((Math.random() * 255))
    var greenRan = Math.floor((Math.random() * 255))
    t5Div.style = `width:30vw;height:10vh;color:rgb(${redRan},${blueRan}, ${greenRan});`
}


// Animations T6
document.body.innerHTML +=
`
<input id="t6Height" type="number" min="1" max="100" placeholder="Pick height from 1 to 100" onchange="growByUserInfo()">
<input id="t6Width" type="number" min="1" max="100" placeholder="Pick width from 1 to 100" onchange="growByUserInfo()">
`
document.body.innerHTML +=
`<div id="t6Div">Dynamic element</div>`


var userHeight
var userWidth 
var widthGrowth = 1
var heightGrowth = 1
var continueGrowth
var T6Interval

function growByUserInfo(){
    if(t6Height.value > 0 && t6Width.value > 0){
        userWidth = t6Width.value
        userHeight = t6Height.value
        growWidth()
        growHeight()
        console.log(userWidth + " " + userHeight);
        console.log(widthGrowth + " " + heightGrowth);
        if(userHeight >= heightGrowth && userWidth >= widthGrowth){
            continueGrowth = false
            T6Animation()
            return console.log("Should be done");
        }
        else {
            continueGrowth = true
            T6Animation()
        }
    }
}

function growWidth(){
    userWidth = t6Width.value
    userHeight = t6Height.value
    if(widthGrowth < userWidth){
        document.getElementById("t6Div").style = `width:${widthGrowth}vw`
        widthGrowth += 1
    }
    else{
        return widthGrowth
    }
}

function growHeight(){
    userWidth = t6Width.value
    userHeight = t6Height.value
    if(heightGrowth < userHeight){
        document.getElementById("t6Div").style = `height:${heightGrowth}vh`
        heightGrowth += 1
    }
    else{
        return heightGrowth
    }
}

function T6Animation(){
    if(continueGrowth == true) {
        T6Interval = setInterval(growByUserInfo,500)
    }
    else {
        clearInterval(T6Interval)
        continueGrowth = false
    }
}

// Animations T7
