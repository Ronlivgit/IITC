// // setTimeOut t1
// setTimeout(printMyName,7000)
// function printMyName(){
//     document.body.innerHTML += 
//     `<p>My name is : Ron .</p>`
// }


// // setTimeOut  t2
// setTimeout(printHello,5000)
// function printHello(){
//     document.body.innerHTML +=
//     `<p>Hello</p>`
// }
// document.body.innerHTML += `<p>Bye</p>`

// // setTimeOut  t3
// setTimeout(printHour,90000)
// function printHour(){
//     var myDate = new Date()
//     document.body.innerHTML +=
//     `<span>${myDate}</span>`
// }

// // setTimeOut  t4
// document.body.innerHTML += 
// `<button id="t4Btn">Disable task4 delay`
// t4Btn.addEventListener("click", function(){clearTimeout(t4Timeout)})
// var t4Timeout = setTimeout(printLoveTimers,10000)

// function printLoveTimers(){
//     document.body.innerHTML += 
//     `<p>I love timers!</p>`
// }

// // setTimeOut  t5
// document.body.innerHTML += 
// `<h1 id="h1T5">My Task 5 Headline</h1>`
// h1T5.style="color:blue"

// setTimeout(changeToRed,3000)
// function changeToRed(){
//     h1T5.style = "color:red"
// }

// // -----------------------------------------------------------------------------------------------------------


// // setInterval t1
// setInterval(printTextTimer,4000)
// function printTextTimer(){
//     document.body.innerHTML += 
//     `<span>Timer</span>`
// }

// // setInterval t2
// setInterval(printCounter, 6000)
// function printCounter(){
//     document.body.innerHTML += 
//     `<span>counter</span>`
// }

// // setInterval t3
// document.body.innerHTML += 
// `<button id="setT3" onclick='clearT3Interval()'>Disable task3 repeats</button>`
// var task3Interval = setInterval(LoveTimersPer5,5000)
// var setT3Btn = document.getElementById("setT3")

// function clearT3Interval(){
//     clearInterval(task3Interval)
// }

// function LoveTimersPer5(){
//     document.body.innerHTML += 
//     `<br><span>I love timers set - Interval t3</span>`
// }

// // setInterval t4
// setInterval(printHrPerSec,1000)
// function printHrPerSec(){
//     var newDate = new Date()
//     document.body.innerHTML+=
//     `<br>Time : ${newDate}`
// }
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // setInterval t5 NOT DONE!@#

// document.body.innerHTML += `<input id='t5Input' type='number' min='0' max='60' placeholder='Pick a num from 0-60'>`
// t5Input.style ="width:15vw ;"
// document.body.innerHTML += `<br><button id='t5Button'>Active Timer</button>`
// document.body.innerHTML += `<br><br><p id='t5Timer'></p>`

// timeInSeconds = t5Input.value * 60

// displayTime(timeInSeconds)


// function countDown(){
//     setInterval(countDown,1000)
//     timeInSeconds--;
//     displayTime(timeInSeconds);
//     if(timeInSeconds <=0){
//         clearInterval(countDown)
//     }
// }

// function displayTime(second){
//     var Minutes = Math.floor(second / 60)
//     var Seconds = Math.floor(second % 60)
//     t5Timer.innerHTML = `${Minutes <10? '0' : ''}${Minutes}:${Seconds <10?'0':''}${Seconds}`
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // setInterval t6

document.body.innerHTML=
`
<label for="">Set Alarm Clock</label>
<input id="timeInput" type="time">
<button id="triggerButton">Pause / Continue</button>
<h1 id=timeIndicator></h1>
`

triggerButton.addEventListener("click", CountdownTrigger)
timeInput.addEventListener("input",pauseTimer)


var timeInterval
var countDownUpDown = false;

function CountdownTrigger(){
    if(countDownUpDown == true){
        clearInterval(timeInterval)
        countDownUpDown = false;
    }
    else{
        timeInterval = setInterval(printTimer,1000)
        countDownUpDown = true;
    }
}

function pauseTimer(){
    clearInterval(timeInterval)
    countDownUpDown = false;
}

function printTimer(){
    timeIndicator.innerHTML = 
    `${timeCounter()}`
}


function timeCounter(){
    var loadTime = new Date()
    var userTime = new Date(loadTime)

    userTime.setHours(userHours(), userMinutes(),0)
    var timeDiff = userTime.getTime() - loadTime.getTime()

    var hrsDiff = Math.floor(timeDiff/1000/60/60)
    timeDiff -= hrsDiff*60*60*1000

    var minDiff = Math.floor(timeDiff/1000/60)
    timeDiff -= minDiff*60*1000

    var secDiff = Math.floor(timeDiff/1000)
    timeDiff -= secDiff*1000

    if(hrsDiff == 0 && minDiff == 0 && secDiff == 0){
        alert("Done")
        CountdownTrigger()
    }

    if(hrsDiff < 0){
        return `Error`
    }

    return `Timer : <br> ${hrsDiff<10? '0': ''}${hrsDiff}:${minDiff <10? '0' : ''}${minDiff}:${secDiff <10?'0':''}${secDiff}`
}


function userHours(){
    var userHrs = timeInput.value.substring(0,timeInput.value.indexOf(":"));
    return parseInt(userHrs)
}

function userMinutes(){
    var userMinutes = timeInput.value.substring(timeInput.value.indexOf(":")+1,timeInput.value.length);
    return parseInt(userMinutes)
}
// --------------------------------------------------------------------------------------------------------------------------------------

// // setInterval t7
// document.body.innerHTML +=
// `<button id='StartBtn' onclick="startPrint()">Press to start/Pause</button>`

// document.body.innerHTML +=
// `<button id='StartBtn' onclick="clearCounter()">Press to clear</button>`

// document.body.innerHTML +=
// `<p id='printField'></p>`

// var stopPrint = false
// var t7Interval
// var timeOnSite = 0

// function printFunction(){
//     timeOnSite += 1
//     printField.innerHTML =
//     `You're in the site for ${timeOnSite} seconds `
// }

// function startPrint(){
//     if(stopPrint == true){
//         clearInterval(t7Interval)
//         stopPrint = false
//     }

//     else {
//         t7Interval = setInterval(printFunction,1000)
//         stopPrint = true
//     }
// }

// function clearCounter(){
//     timeOnSite = 0
//     printField.innerHTML =
//     `You're in the site for ${timeOnSite} seconds `
//     stopPrint = true
//     startPrint()
// }


// // setInterval t8
// var classMatesArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// document.body.innerHTML +=
// `<button id='StartBtn' onclick="pauseT8Print()">Press to Pause</button>`

// document.body.innerHTML +=
// `<p id='printFieldT8'></p>`

// var i=0

// function t8Print(){
//     printFieldT8.innerHTML =
//     `Student's Name : ${classMatesArray[i]}`
//     i+=1
// }

// function pauseT8Print(){
//     printFieldT8.innerHTML =
//     `You have stopped the program :)`
//     clearInterval(t8Interval)
// }

// var t8Interval = setInterval(t8Print,4000)
