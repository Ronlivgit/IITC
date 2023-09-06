var triesAmount = 0
var cdTimeLeft = 30
function checkForm(){
    var myDate = new Date()
    var firstNameIf = (firstNameInput.value[0] == firstNameInput.value[0].toUpperCase())
    var lastNameIf = (lastNameInput.value.length < 20)
    var birthDateIf = ((myDate.getFullYear() - Birthdate.value.substr(0,4)) > 16 && (myDate.getFullYear() - Birthdate.value.substr(0,4)) < 65)
    var userEmailValid = (userEmail.value.lastIndexOf(".com") == userEmail.value.length-4) || (userEmail.value.lastIndexOf(".co.il") == userEmail.value.length-6)
    var phoneNumIf = (userPhoneNum.value.length == 10 && userPhoneNum.value[0] == 0)
    console.log(firstNameIf);    
    console.log(lastNameIf);    
    console.log(birthDateIf);    
    console.log(userEmailValid);     
    console.log(phoneNumIf);     
    // console.log(calculateYear);
    if(firstNameIf && lastNameIf && birthDateIf && userEmailValid && phoneNumIf){
        return true
    }
    else{
        if(!firstNameIf){
            firstNameInput.style="border:1px solid tomato"
            fNameLabel.innerHTML =
            `First Name doesn't start with UpperCase`
        }
        else{
            firstNameInput.style=""
            fNameLabel.innerText =
            'First Name : '
        }
        if(!lastNameIf){
            lastNameInput.style="border:1px solid tomato"
            lNameLabel.innerHTML =
            `Last name can't be over 20 letters`
        }
        else{
            lastNameInput.style=""
            lNameLabel.innerHTML =
            `Last name : `
        }
        if(!birthDateIf){
            Birthdate.style="border:1px solid tomato"
            bDayLabel.innerHTML =
            `Should be over 16 and Under 65 years old`
        }
        else{
            Birthdate.style=""
            bDayLabel.innerHTML =
            `Birth Date :`
        }
        if(!userEmailValid){
            userEmail.style="border:1px solid tomato"
            emailLabel.innerHTML =
            `Email doesn't end with .com or .co.il`
        }
        else{
            userEmail.style=""
            emailLabel.innerHTML =
            `Email address : `
        }
        if(!phoneNumIf){
            userPhoneNum.style="border:1px solid tomato"
            phoneLabel.innerHTML =
            `Phone number has to start with 0 and be max 10 digits`
        }
        else{
            userPhoneNum.style=""
            phoneLabel.innerHTML =
            `Phone number : `
        }
        ++triesAmount
        // console.log("mainFunction" + triesAmount) test triesAmount per run
        if (triesAmount <= 4){
            cdTimeLeft = 30
            triesPreLock()
        }
        return false
    }
}


// Clock function
function clockTimer(){
    var currentTime = new Date()
    var hrs = currentTime.getHours()
    var mins = currentTime.getMinutes()
    var secs = currentTime.getSeconds()
    timerDiv.innerHTML =
    `<h1>Current time : ${hrs<10? '0': ''}${hrs}:${mins<10? '0': ''}${mins}:${secs<10? '0': ''}${secs}</h1>`
}

setInterval(clockTimer,1000)

// too many tries function
function triesPreLock(){
    var inputDisabler = document.getElementsByTagName("input")
    // console.log(triesAmount); -- test triesAmount per run
    if(triesAmount == 4){
        var cooldownInterval = setInterval(function(){
            if(cdTimeLeft > 0){
                cooldownDiv.innerHTML =
                `Time left to unlock : ${cdTimeLeft-=1}`
                inputDisabler.readOnly = true
                counter = 0
                do {
                    inputDisabler[counter].readOnly = true
                    counter++
                }
                while(inputDisabler.length > counter)
            }
            else{
                cooldownDiv.innerHTML =
                `Cooldown is over, Please try again`
                clearInterval(cooldownInterval)
                z = 0
                do {
                    inputDisabler[z].readOnly = false
                    z++
                }
                while(inputDisabler.length > z)
            }
    },1000)
    return triesAmount = 0
    }
}
