// //  -------- forEach loops --------
// // t1
// const t1Array = ["One","Two","Three","Four","Five"]

// t1Array.forEach((value)=>{console.log(value);})

// // t2
// const t2Array = [20,28,35,12,26,56,16,92,82,63]
// t2Array.forEach((value) =>{
//     if(value > 25){
//         console.log(value);
//     }
// })

// // t3
// const t3Array = ["Levi","Lewandowski","Messi","Fati","Yamal","Hernandez"]
// const t3NewArray = []

// t3Array.forEach((value,index)=>{
//     t3Array[index] = value.toUpperCase()
// })

// t3Array.forEach((value,index)=>{
//     t3NewArray.push(value.toUpperCase()) 
// })

// console.log(t3Array);
// console.log(t3NewArray);


// //  -------- for of loops --------
// // t4
// const t4Array = t1Array

// for (const name of t4Array) {
//     console.log(name);
// }

// // t5
// const t5Array = t2Array

// for (const age of t5Array) {
//     if(age > 25){
//         console.log(age)
//     }
// }

// // t6
// const t6Array = t3Array
// const t6NewArray = []

// for (const famName of t6Array) {
//     t6NewArray.push(famName.toUpperCase())
// }
// console.log(t6NewArray);

// // t7
// const nationsClass = document.getElementsByClassName("li")
// mainDiv.innerHTML+=
// `<button id='t7Btn'>UpperCaseIt</button>`
// const t7Button = document.getElementById("t7Btn")
// t7Button.addEventListener("click",() =>{
//     for (const nation of nationsClass) {
//         nation.innerHTML = nation.textContent.toUpperCase()
//         console.log(nation.innerHTML = nation.textContent.toUpperCase());
//     }
// })


// // -------- for in loops --------

// // t8
// const t8Obj = {
//     street:"Torei Zahav",
//     city:"Rosh Haayin",
//     country:"Israel",
//     numOfRooms:4,
//     hasTenants:true,
// }

// for(let key in t8Obj){
//     console.log(t8Obj);
// }

// for(let key in t8Obj){
//     console.log(key);
// }

// for(let key in t8Obj){
//     mainDiv.innerHTML +=
//     `<p class="t8ObjPs">${t8Obj[key]}</p>`
// }


// -------- Mix all loops --------

// t9
const t9Array = [
    {
        name:"Lukso",
        age: 0.5,
        type:"Boston Terrier",
    },
    {
        name:"Leo",
        age: 3,
        type:"Maltez",
    },
    {
        name:"Ray",
        age: 2,
        type:"Melinoa",
    }
]

function printEachDogObj(){
    t9Array.forEach((value,index) => {
        console.log(value);
    })
}
// printEachDogObj()

function secondDogValues(){
    for(let key in t9Array[1]){
        console.log(t9Array[1][key]);
    }
}

// secondDogValues()

function printAllDogs(){
    t9Array.forEach((value,index) => {
        mainDiv.innerHTML +=
        `<div id="divNum${index}"></div>`
        for(let key in t9Array[index]){
            console.log(key + " " + t9Array[index][key]);
            let currentDiv = document.getElementById(`divNum${index}`)
            currentDiv.innerHTML += 
            `<p class="dataParas">${key} : ${t9Array[index][key]}</p>`
        }
    })
}

// printAllDogs()

// t10
const t10Array = [
    {
        fullName : "Ron livne",
        birthDate : "4.5.1999",
        Email : "ron.livne58@gmail.com",
        passedTest : true,
    },
    {
        fullName : "Laroy",
        birthDate : "12.9.1999",
        Email : "genLaroy@gmail.com",
        passedTest : false,
    },
    {
        fullName : "ASD",
        birthDate : "1.1.2000",
        Email : "ASDASD@gmail.com",
        passedTest : false,
    },
    {
        fullName : "DSA",
        birthDate : "12.12.1999",
        Email : "DSADSA@gmail.com",
        passedTest : true,
    },
]

function printEachStudent(){
    t10Array.forEach((value,index) => {
        console.log(value)
    });
}

// printEachStudent()

function printThirdStudent(){
    for(let key in t10Array[2]){
        console.log(t10Array[2][key]);
    }
}

// printThirdStudent()

function printAllStudents(){
    t10Array.forEach((value,index) => {
        mainDiv.innerHTML += 
        `<div id="t10Div${index}"></div>`
        for(let key in t10Array[index]){
            let currentDiv = document.getElementById(`t10Div${index}`)
            currentDiv.innerHTML +=
            `<p class="t10Ps">${key} : ${t10Array[index][key]}</p>`
        }
    })
}

// printAllStudents()

// t11
const t11Obj = {
    department : "Batlanim",
    numOfWorkers : 32,
    officeManager : "Num1BullshitGuy",    
}
mainDiv.innerHTML+=
`
<form action="">
<input class="t11Input" type="text" placeholder="department : "><br>
<input class="t11Input" type="number" placeholder="num of workers : "><br>
<input class="t11Input" type="text" placeholder="Manager's name : "><br>
<button type="submit" id="subBtn">Submit Form</button>
</form>
`
let t11InClass = document.getElementsByClassName("t11Input")
let t11Btn = document.getElementById("subBtn")

t11Btn.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log(t11InClass);
})

// function t11CreateObj(){

// }