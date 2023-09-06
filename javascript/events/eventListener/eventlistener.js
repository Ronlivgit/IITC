// t1
document.body.innerHTML += 
`<h1 id="t1">Will push alert with welcome. </h1>`;

t1.addEventListener("mouseover", pushAlertT1)

function pushAlertT1(){
    alert("Welcome!!!")
}

// t2
document.body.innerHTML += 
`<div id="t2Div">This will print the hour to the log</div>`

t2Div.addEventListener("mouseover", HourToLog)

function HourToLog(){
    var myDate = new Date()
    console.log(myDate.getHours());
}


// t3
document.body.innerHTML += 
`<h3 id="t3H3">This will change color while mouse over</h3>`

t3H3.addEventListener("mouseover", changeColorT3)

function changeColorT3(){
    t3H3.style = "color:purple"
}


// t4
document.body.innerHTML += 
`<button id="btnT4">This will change width!</button>`

document.body.innerHTML += 
`<p id="paraT4">Press ME to change the width above!!</p>`

paraT4.addEventListener("click",changeWidth)

function changeWidth(){
    btnT4.style = "width:40vw"
}

// t5
document.body.innerHTML += 
`<p id="p1T5">This will change to the main text downstairs</p>`

document.body.innerHTML += 
`<p id="p2T5">This is the main text</p>`

p2T5.addEventListener("click",duplicateText)

function duplicateText(){
    p1T5.innerText = p2T5.innerText
}


// t6
document.body.innerHTML += 
`<input id="inputT6">`

document.body.innerHTML += 
`<button id="btnT6"></button>`

btnT6.addEventListener("click", printInputName)

function printInputName(){
    document.body.innerHTML += `<br><p>${inputT6.value}</p>`
}


function asd(){
    var counter =+ 1
    count.innerHTML += counter
}

setInterval(asd,1000)