// new tasks 1 == Point 1
// var colorInput = document.getElementById("inputColor1")
function changeColor(chosenColor) {
    console.log(chosenColor);
}

// new task 2 == Point 2 (NOT!!!!! done)
var t2Input = document.getElementById("inputTask2")
var t2Div = document.getElementById("divTask2")
function pasteToDiv(){
    document.getElementById("divTask2") = document.getElementById("inputTask2").value
}


// t1
function alertIfOn(){
    alert("Welcome")
}


// t2
function printTime(){
    console.log(new Date().getHours());
}


// t3
function changeToPurple(){
    var t3Elem = document.getElementById("t3")
    t3Elem.style="color:purple"
}


// t4
var t4btnElem = document.getElementById("t4Button")
t4btnElem.innerHTML += "<p onclick='increaseWidth()' id='increaser'> INCREASE WIDTH </p>"

function increaseWidth(){
    t4btnElem.style = "width:30vw"
}


// t5
var t5Elem = document.getElementById("t5")
t5Elem.innerHTML += "<p onclick='duplicateText()' id='duplicator'> INCREASE WIDTH </p>"
var t5Duplicator = document.getElementById("duplicator")

function duplicateText(){
    t5Duplicator.innerHTML = "lorem lorem lorem"
}


// t6
function clickPrintName(){
    document.body.innerHTML += `<p>${t6Input.value}</p> ` 
}

// t7
function autoLoadDate(){
    var myDate = new Date()
    if(myDate.getHours()<13){
        document.body.style = "background:yellow"
        document.body.innerHTML += "<p>Good Morning</p>"
    }
    else {
        document.body.style = "background:blue"
        document.body.innerHTML += "<p>Good Evening</p>"
    }
}

// t8
var t8Age = document.body.innerHTML += "<br><br><input type='number' onblur='task8()'>What's ur age? "
function task8(){
    if(t8Age.value > 18){
        document.body.innerHTML += "<h1 id='t8Outcome' onmouseover='task8onOver()'>Welcome</h1>"
        t8Outcome.style = "color:red"
    }
    else {
        document.body.innerHTML += "<h1 id='t8Outcome2' onmouseover='task8onOver()'>Welcome</h1>"
        t8Outcome2.style = "color:blue"
    }
}

function task8onOver(){
    document.body.style = "color:green"
}


// t9
t9LotteryUser = []
function t9Lottery(){
    var randomNum = Math.floor((Math.random() * 56));
    console.log(randomNum);
    for(var i=1;i<=5;i++){
        userNum = +prompt("Pick a Number from 0 to 56 : ")
        document.body.innerHTML += `<br><br><span> Guess Number ${i} : ${userNum} </span>`
        t9LotteryUser.push(userNum)
    }

    for(var j=1;j<=5;j++){
        if(t9LotteryUser[j-1] == randomNum){
            return document.body.innerHTML += `<br><br><span>Nice! The random num was :  ${randomNum}</span>`
        }
    }
    return document.body.innerHTML += `<br><br><span>Unlucky :( , The random num was :  ${randomNum}</span>`
}

// t10
t10LotteryUser = []
t10LotteryRandoms = []
function t10Lottery(){
    var randomNum 
    for(var i=1;i<=5;i++){
        userNum = +prompt("Pick a Number from 0 to 56 : ")
        document.body.innerHTML += `<br><br><span> Guess Number ${i} : ${userNum} </span>`
        t10LotteryUser.push(userNum)
    }
    var z = 0
    do {
        randomNum = Math.floor((Math.random() * 56));
        t10LotteryRandoms.push(randomNum)
        z++
    }
    while (z<5)
    console.log(t10LotteryRandoms);
}

function t10LotteryConfirmer(){
    var guessIsTrue = false
    for(var i=0;i<t10LotteryUser.length;i++){
        for(var j=0;j<t10LotteryUser.length;j++){
            if(t10LotteryUser[i] == t10LotteryRandoms[j]){
                guessIsTrue == true
                return document.body.innerHTML += `<br><br><span>Nice! The random num was :  ${t10LotteryRandoms[j]}</span>`
            }
        }
    }
    return document.body.innerHTML += `<br><br><span>Unlucky :( , The random nums were :  ${t10LotteryRandoms}</span>`
}

// t11
var userIsLegit = false
function getAge(){
    userName = prompt("What's ur name? : ")
    userAge = prompt("What's ur birth date? use this example's format : 04.05.1999 : ")
    var currentDate = new Date()
    var calcMonth = ((currentDate.getMonth() + 1) - userAge.substr(3,2)) ;
    var calcYear = (currentDate.getFullYear() - userAge.substr(6,5));
    var currentAge = calcYear + " " + calcMonth
    if(calcYear > 18 || calcYear >= 18 && calcMonth >= 0 ){
        t11Div.innerText += `Welcome! ${userName}`;
        t11Div.style = "color:blue"
        console.log(currentAge);
        userIsLegit = true
    }
    else {
        document.body.innerHTML = `Sry! ${userName} u are not 18 years old yet
        <img src='https://qotoqot.com/sad-animations/img/150/sobbing/sobbing.gif' alt="">
        `;
        console.log(currentAge);
        setTimeout(() => {
            document.location.reload();
          }, 5000);
    }
}

var t11NameArray = []

function Task11p1(){
    getAge()
    var famName = prompt("What's ur family name? : ")
    if(userIsLegit == true){
        for(var i=1;i<=4;i++){
            askName = prompt(`Name number ${i}`)
            t11NameArray.push(askName)
        }
        document.body.innerHTML += `<br><br><button id='t11Btn' onclick="printNames()">PRESS ME</button>`
    }
    t11NameArray.push(famName) // famName turns into index 5 in t11NameArray
}

function printNames(){
    for(var i=0;i<4;i++){
        if(t11NameArray[i].value[0] == t11NameArray[4][0]){
            var colorize = t11Div.innerHTML += `<p>First name : ${t11NameArray[i]},<br> Last name : ${t11NameArray[4]}</p>`
            colorize.style = "color:green"
        }
        else {
            t11Div.innerHTML += `<p>First name : ${t11NameArray[i]},<br> Last name : ${t11NameArray[4]}</p>`
        }
    }
}

