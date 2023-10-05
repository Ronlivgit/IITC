// t1
mainDiv.innerHTML +=
    `<input placeholder="Pick a num from 1-10" id="userInputT1">`
mainDiv.innerHTML +=
    `<button id="btnT1">Submit</button>`
const t1Input = document.getElementById("userInputT1");
const t1Btn = document.getElementById("btnT1")
t1Btn.addEventListener("click",askUserForNum)

function askUserForNum() {
    const userVal = +t1Input.value
    switch (userVal) {
        case 3:
            console.log("Hello");
            return;
        case 5:
            console.log("Goodbye");
            return;
        case 7:
            console.log("Thanks");
            return;

        default:
            console.log("No match...");
    }
}


// t2
mainDiv.innerHTML +=
    `<br><input placeholder="Whats ur name?" id="userInputT2">`
mainDiv.innerHTML +=
    `<button id="btnT2">Submit</button>`
const t2Input = document.getElementById("userInputT2");
const t2Btn = document.getElementById("btnT2")
t2Btn.addEventListener("click",askUsersName)
function askUsersName(){
    const userName = t2Input.value
    switch (userName) {
        case "jacob":
            mainDiv.innerHTML +=
            `<p>${userName} </p>`
            return;
        case "Nathan":
            mainDiv.innerHTML +=
            `<p>${userName.toUpperCase()} </p>`
            return;
        case "DALYA":
            mainDiv.innerHTML +=
            `<p>${userName.toLowerCase()} </p>`
            return;
        default:
            mainDiv.innerHTML +=
            `<p>No match</p>`
    }
}

// t3
