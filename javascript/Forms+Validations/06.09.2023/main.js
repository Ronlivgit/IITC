// // t1
// myForm.onsubmit = function identicalNums(){
//     if (t1Input.value == t1Input1.value){
//         return true
//     }
//     else {
//         myForm.innerHTML +=
//         `<span>Numbers aren't identical</span>`
//         return false
//     }
// }

// // t2
// myForm2.onsubmit = function num1IsBigger(){
//     if(t2Input.value > t2Input1.value){
//         return true
//     }
//     else {
//         myForm2.innerHTML +=
//         `<span>Num 2 is bigger than num 1</span>`
//         return false
//     }
// }

// // t3
// myForm3.onsubmit = function ifTextIdentical(){
//     if (t3Input.value == t3Input1.value){
//         return true
//     }
//     else{
//         myForm3.innerHTML +=
//         `<span>Texts aren't identical</span>`
//         return false
//     }
// }

// // t4
// myForm4.onsubmit = function ifSameLength(){
//     if(t4Input.value.length == t4Input1.value.length){
//         return true
//     }
//     else{
//         myForm4.innerHTML +=
//         `<span>Inputs have different length</span>`
//         return false
//     }
// }

// // t5
// myForm5.onsubmit = function ifFirstIndexIdentical(){
//     if(t5Input.value[0] == t5Input1.value[0]){
//         return true
//     }
//     else {
//         myForm5.innerHTML +=
//         `<span>First index isn't identical</span>`
//         return false
//     }
// }

// t6 done


// t7


function checkAge(){
    var myDate = new Date()
    var userDate = t7Age.value.substr(0,4)
    var currentYear = myDate.getFullYear()
    if(currentYear - userDate >= 18){
        return (currentYear - userDate)
    }
    else{
        return (currentYear - userDate)
    }
}

myForm7.onsubmit = function validate(event){
    var isFnameUnder10 = (t7Username.value.length < 10)
    var over18 = checkAge() >= 18
    var matchingPasses = (+t7Pass.value == +t7PassConfirmer.value)
    var validEmail = (t7Email.value.lastIndexOf(".com") == t7Email.value.length-4)
    // alert(isFnameUnder10)
    // alert(validEmail)
    // alert(over18)
    // alert(matchingPasses)
    if(isFnameUnder10 && validEmail && over18 && matchingPasses){
        return true
    }
    else{
        if(!isFnameUnder10){
            t7Username.style ="border:1px solid tomato"
            t7Username.innerHTML += 
            `<span> Username shouldn't be longer than 10 letters`
            console.log("username problem")
        }
        else{t7Username.style = ""}

        if(!validEmail){
            t7Email.style ="border:1px solid tomato"
            t7Email.innerHTML += 
            `<span> Email has to end with - '.com'`
            console.log("Email problem")
        }
        else{t7Email.style = ""}

        if(!over18){
            t7Age.style ="border:1px solid tomato"
            t7Age.innerHTML += 
            `<span> U have to be 18+ to sign up`
            console.log("age problem")
        }
        else{t7Age.style = ""}

        if(!matchingPasses){
            t7Pass.style = "border:1px solid tomato"
            t7PassConfirmer.style = "border:1px solid tomato"
            t7Pass.innerHTML+= 
            `<span> Passwords are not matching</span>`
            console.log("Password problem")
        }
        else{
        t7Pass.style = "" 
        t7PassConfirmer.style = ""
        }
        return false
    }
}
