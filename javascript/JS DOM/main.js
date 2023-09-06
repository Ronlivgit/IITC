// t1
document.body.innerHTML += "<p id=task1>first dom app</p>"
var task1Elem = document.getElementById(task1)
// console.log(task1Elem.innerText);

// t2
var task2Elem = document.getElementById("myPara")
task2Elem.innerText = "my dom app"

// t3
console.log(document.getElementById("task3Text1"));
console.log(document.getElementById("task3Text2"));
console.log(document.getElementById("task3Text3"));
console.log(document.getElementById("task3Text4"));

// t4
var t4ElemsArray = []
var t4Elems = document.getElementsByClassName("task3General")
for(var i=0;i<t4Elems.length;i++){
    t4ElemsArray.push(t4Elems[i].innerText)
    console.log(t4Elems[i].innerText);
}

// t5
console.log(t4Elems[1]);

// t6
console.log(t4Elems[2].innerText);

// t7
var t7Elem = document.getElementsByClassName("task7")
for(var i=0;i<4;i++){
    t4ElemsArray.push(t7Elem[i].innerText)
    console.log(t7Elem[i].innerText);
}

// t8
var t8Element = document.getElementById("t8")
function takeUserName(){
    var userName = prompt("Whats ur name? : ")
    return t8Element.innerText = userName
}


// t9
var t9Elem = document.getElementById("t9")
function colorAndNum(){
    var userColor = prompt("Pick a Color : ")
    var userNum = +prompt("Pick a number : ")
    for(var i=0;i<userNum;i++){
        t9Elem.innerHTML += "<span>" + userColor + "</span>";
    }
}

// t10
function textAndTag(){
    var text = prompt("Write something : ")
    var userTag = prompt("Which tag u wanna use? : ")
    return document.body.innerHTML = "<" + userTag + ">" + text + "<" + userTag + ">"
}

// t11
function inputType(){
    var userInputType = prompt("What type of input? : ")
    return document.body.innerHTML += "<input type = " +  userInputType + "></input>"
}

// t12
function changeClassOutput(className,Text){
    var missingClass = document.getElementsByClassName(className)
    for(var i=0;i<className.length;i++){
        className[i].innerText = Text
    }
}

// t13
var task13Elem = document.getElementsByClassName("t13")
function spanEachPara(){
    for(var i=0;i<task13Elem.length;i++){
        task13Elem[i].innerHTML = "<span>TEXTEXTEXT</span>"
    }
}

// t14
function task14(){
    var firstName = prompt("Whats ur first name? : ")
    var lastName = prompt("Whats ur Last name? : ")
    var task14Age = +prompt("Whats ur Age? : ")

    if (task14Age > 18) {
        document.body.innerHTML += `First name : ${ firstName } Last name : ${ lastName } Age : ${ task14Age } `
        document.body.innerHTML += "<input>Over 18</input> "
    }
    else {
        document.body.innerHTML += `First name : ${ firstName } Last name : ${ lastName } Age : ${ task14Age } `
    }
}

// t15
t15Movie = {}
function createMovieObject(){
    t15Movie.movieName = prompt("Movie's Name : ")
    t15Movie.viewsNum = +prompt("Movie's amount of views : ")
    t15Movie.yearMade = +prompt("Year of creation? : ")
    t15Movie.moviePic = prompt("Movie's pic Link : ")
    var t15Elem = document.getElementById("task15Div")
    t15Elem.innerHTML += `<h1> Movie name :  ${t15Movie.movieName} </h1>`
    t15Elem.innerHTML += `<h2> Amount of views :  ${t15Movie.viewsNum} </h2>`
    t15Elem.innerHTML += `<h4> Year of creation :  ${t15Movie.yearMade} </h4>`
    t15Elem.innerHTML += `<h3> <img src="${t15Movie.moviePic}" alt="" srcset=""> </h3>`
}

// t16 new objective loop
t16Worker = {}
function task16WithNewLoop(){
    var t16Elem = document.getElementById("task16Div")
    t16Worker.firstName = prompt("First name? : ")
    t16Worker.lastName = prompt("Last name? : ")
    t16Worker.Email = prompt("Email : ")
    t16Worker.Unit = prompt("Department : ")
    for (var key in t16Worker){
        t16Elem.innerHTML += `${key} : ${t16Worker[key]} <br>`
    }
}

// t16 no-loop
t16Worker = {}
function task16(){
    var t16Elem = document.getElementById("task16Div")
    t16Worker.firstName = prompt("First name? : ")
    t16Worker.lastName = prompt("Last name? : ")
    t16Worker.Email = prompt("Email : ")
    t16Worker.Unit = prompt("Department : ")

    t16Elem.innerHTML += `<span> First Name : ${t16Worker.firstName} <br></span>`
    t16Elem.innerHTML += `<span> Last Name : ${t16Worker.lastNameName} <br></span>`
    t16Elem.innerHTML += `<span> Email address : ${t16Worker.Email} <br></span>`
    t16Elem.innerHTML += `<span> Department Name : ${t16Worker.Unit} <br></span>`
}

// t17
t17Objects = []
function task17(){
    var t17Elem = document.getElementById("task17Div")
    var numOfRepeat = +prompt("How many objects do u want? : ")
    for(var i=0;i<numOfRepeat;i++){
        var tempObj = {}
        tempObj.OwnerName = prompt("Owner name : ")
        tempObj.CompanyName = prompt("Company name : ")
        tempObj.FloorsNum = +prompt("Floors Num : ")
        tempObj.ApartmentNum = +prompt("Apartment Num : ")
        t17Objects.push(tempObj)
    }
    var j=0
    do {
        t17Elem.innerHTML += `<span> Owner Name : ${t17Objects[j].OwnerName} <br></span>`
        t17Elem.innerHTML += `<span> Company Name : ${t17Objects[j].CompanyName} <br></span>`
        t17Elem.innerHTML += `<span> Amount of Floors : ${t17Objects[j].FloorsNum} <br></span>`
        t17Elem.innerHTML += `<span> Amount of Apartments : ${t17Objects[j].ApartmentNum} <br></span>`
        j++
    }
    while(j<numOfRepeat)
}


// t18
t18Objects = []
function task18(){
    var t18Elem = document.getElementById("task18Div")
    var numOfRepeat = +prompt("How many objects do u want? : ")
    for(var i=0;i<numOfRepeat;i++){
        var tempObj = {}
        tempObj.StoreName = prompt("Store name : ")
        tempObj.Address = prompt("Store Address : ")
        tempObj.numOfDivisions = +prompt("Num of Divisions : ")
        tempObj.numOfWorkers = +prompt("Num of Workers : ")
        t18Objects.push(tempObj)
    }
    var z=0
    do {
        if(t18Objects[z].numOfWorkers > 10){
        t18Elem.innerHTML += `<span> Store Name : ${t18Objects[z].StoreName} <br></span>`
        t18Elem.innerHTML += `<span> Store Address : ${t18Objects[z].Address} <br></span>`
        t18Elem.innerHTML += `<span> Num of divisions : ${t18Objects[z].numOfDivisions} <br></span>`
        t18Elem.innerHTML += `<span> Num of workers : ${t18Objects[z].numOfWorkers} <br></span>`
        } 
        z++
    }
    while(z<numOfRepeat)
}

// t19
function calculateNumOfElements(){
    console.log(t17Objects.length * 4);
}

// t20
t20Objects = []
function task20(){
    var t20Elem = document.getElementById("t20List")
    var numOfRepeat = +prompt("How many objects do u want? : ")
    for(var i=0;i<numOfRepeat;i++){
        var tempObj={}
        tempObj.fullName = prompt("Whats ur full name? : ")
        tempObj.CompanyName = prompt("What is the Company name? : ")
        tempObj.Email = prompt("What is the company's Email? : ")
        tempObj.phoneNum = prompt("What is the company's phone number?  : ")
        t20Objects.push(tempObj)
    }

    for(var j=0;j<numOfRepeat;j++){
        t20Elem.innerHTML += 
        `
        <li>${t20Objects[j].fullName}</li>
        `
    }

}

// t22
function t22(){
    document.body.innerHTML += "<ol id='CountriesList'></ol>"
    var CountiresElem = document.getElementById("CountriesList")
    for(var i=0;i<5;i++){
        var country = prompt("Enter a country : ")
        CountiresElem.innerHTML += "<li>" + country + "</li>"
    }
}

// t23
function task23(){
    var sensei = {}
    sensei.fullName = prompt("Teacher's name : ")
    sensei.email = prompt("Teacher's email : ")
    sensei.profesion = prompt("Teacher's proffession : ")

    document.body.innerHTML +=
    `
    <tbody>
    <tr><td>${ sensei.fullName }</td><td>${ sensei.email }</td><td>${ sensei.proffesion }</td></tr>
    </tbody>
    `
}
// t24

carArray = [
    {carCompany:"Tesla",Color:"Red",forSale:"Yes"},
    {carCompany:"Hyundai",Color:"White",forSale:"Yes"},
    {carCompany:"Skoda",Color:"Black",forSale:"no"}
]

// function task24(){
    var tableBody =  document.getElementById("task24")
    for(var i=0;i<carArray.length;i++){
        tableBody.innerHTML += 
        `
        <tr>
        <td>${carArray[i].carCompany}</td>
        <td>${carArray[i].Color}</td>
        <td>${carArray[i].forSale}</td>
        </tr>
        `
    }
// }

// t24+25 (Table design)
var mainTable = document.getElementById("myMainTable")

mainTable.style = `
width:90vw;
height:50vh;
font-size:3rem;
font-weight:bold;
color:rgb(155,120,50);
border: 4px solid #000;
border-collapse:collapse;
margin:auto;
text-align:center;
`

var tdsArray = mainTable.getElementsByTagName("td")
var trsArray = mainTable.getElementsByTagName("tr")

for(var i=0;i<tdsArray.length;i++){
    tdsArray[i].style = `border:4px solid #000`
}

for(var i=0;i<trsArray.length;i++){
    trsArray[i].style = `border:4px solid #000`
}


// t25
managerObject = {
    FirstName:"Yosi",
    lastName:"Levi",
    age:32,
    Salary:12000
}
var t25div = document.getElementById("t25Div")
t25div.innerHTML += `First name : ${managerObject.FirstName},<br> Last Name :  ${managerObject.lastName},<br>
Age : ${managerObject.age},<br> Salary : ${managerObject.Salary}.`


// t26
workerObject = {
    fullName:"Ron Livne",
    birthYear:1999,
    Email:"ron.livne58@gmail.com",
    Address:"Torei Zahav"
}
var t26div = document.getElementById("t26Div")
t26div.innerHTML += `<br>Name : ${workerObject.fullName},<br> Year of birth :  ${workerObject.birthYear},<br>
Email : ${workerObject.Email},<br> Address : ${workerObject.Address}.`

// t27
fruit={
    name:"Pineapple",
    color:"Yellow",
    type:"Tropical"
}
var t27div = document.getElementById("t27Div")
t27div.innerHTML += `<span> Fruit's name : ${fruit.name}</span>`
t27div.innerHTML += `<span> Fruit's Color : ${fruit.color}</span>`
t27div.innerHTML += `<span> Fruit's type : ${fruit.type}</span>`

// t28
classRoom = {
    classNum :3,
    numOfStudent:24,
    studentsName:["Ron","Yitzhak","Ben","Matan","Maya"]
}
var t28div = document.getElementById("t28Div")
t28div.innerHTML += `<br>Class Number : ${classRoom.classNum} Num of students : ${classRoom.numOfStudent}`
t28div.innerHTML += 
`
<ol>
    <li>${classRoom.studentsName[0]}</li>
    <li>${classRoom.studentsName[1]}</li>
    <li>${classRoom.studentsName[2]}</li>
    <li>${classRoom.studentsName[3]}</li>
    <li>${classRoom.studentsName[4]}</li>
</ol>
`

// t29
function task29(){
    kinderGarten ={
        senseiName:"Dvora",
        numOfKids:30,
        kidsNames:["Avi","Yuval","Ben","Dani","Stav","Omer","Omri","Dotan","Yehonatan","Nofar"]
    }

    var t29div = document.getElementById("t29Div")
    t29div.innerHTML += `<br>Teacher's name : ${kinderGarten.senseiName} <br>Num of Kids : ${kinderGarten.numOfKids}`
    t29div.innerHTML += 
    `
    <ol>
        <li>${kinderGarten.kidsNames[0]}</li>
        <li>${kinderGarten.kidsNames[1]}</li>
        <li>${kinderGarten.kidsNames[2]}</li>
        <li>${kinderGarten.kidsNames[3]}</li>
        <li>${kinderGarten.kidsNames[4]}</li>
        <li>${kinderGarten.kidsNames[5]}</li>
        <li>${kinderGarten.kidsNames[6]}</li>
        <li>${kinderGarten.kidsNames[7]}</li>
        <li>${kinderGarten.kidsNames[8]}</li>
        <li>${kinderGarten.kidsNames[9]}</li>
    </ol>
    `
    var userKey = prompt("Which key u wanna print? : ")
    t29div.innerHTML +=  `<span>The value is : ${kinderGarten[userKey]}</span>`
}

// t30
function task30(){
    city = {
        cityName:prompt("Whats ur city's name? : "),
        cityPopulation:+prompt("How many people live in there? : "),
        cityPic:prompt("Find a photo of the city and drop a link : ")
    }

    var t30div = document.getElementById("t30Div")
    t30div.innerHTML += `City's name is : ${city.cityName}<br>`
    t30div.innerHTML += `City's Population is : ${city.cityPopulation}<br>`
    t30div.innerHTML += `<img src="${t15Movie.moviePic}" alt="" srcset="">`
}

// t31
function task31(){
    userObject = {
    firstName : prompt("Whats ur first name? : "),
    lastName : prompt("Whats ur last name? : "),
    profPicture : prompt("Paste a link to a picture of urs : "),
    email : prompt("Whats ur email address? : "),
    password : +prompt("Give me a password : ")
    }

    var t31div = document.getElementById("t31Div")
    t31div.innerHTML += `<div> First name : ${userObject.firstName}</div><br>`
    t31div.innerHTML += `<div> Last name : ${userObject.lastName}</div><br>`
    t31div.innerHTML += `<div> Profile picture : <img src="${userObject.profPicture}" alt=""></div><br>`
    t31div.innerHTML += `<div> Email address : ${userObject.email}</div><br>`
    t31div.innerHTML += `<div> Password : ${userObject.password}</div><br>`
}

// t32
t32Array = []
var t32div = document.getElementById("t32Div")
function createObjectsT32(){
    for(var i=0;i<4;i++){
        tempObj = {
            carCompany:prompt("Which company? : "),
            carColor:prompt("Which color? : "),
            carEngineCapacity:prompt("Whats the Engine capacity? : "),
            carYear:prompt("What year is the car? : "),
        }
        t32Array.push(tempObj)
    }
}

function pushObjectsT32(){
    t32tHead.innerHTML +=
    `
    <tr>
        <th>Company</th>
        <th>Color</th>
        <th>Engine Capacity</th>
        <th>Year of creation</th>
    </tr>`
    for(var i=0;i<t32Array.length;i++){
        t32tBody.innerHTML +=
        `
        <tr>
            <td>${t32Array[i].carCompany}</td>
            <td>${t32Array[i].carColor}</td>
            <td>${t32Array[i].carEngineCapacity}</td>
            <td>${t32Array[i].carYear}</td>
        </tr
        `
    }
    
}


// t33
t33Array = []
function createObjectsT33(){
    for(var i=0;i<3;i++){
        tempObj = {
            catName:prompt("Whats the cat's name? : "),
            catBirthYear:+prompt("Cat's born year? : "),
            catType:prompt("Cat's type : "),
            catWeight:+prompt("Cat's weight : ")
        }
        t33Array.push(tempObj)
    }
    for(var j=0;j<t33Array.length;j++){
        t33Div.innerHTML+=
        `<h1>
        Name : ${t33Array[j].catName},
        BirthYear : ${t33Array[j].catBirthYear}, 
        Type : ${t33Array[j].catType} ,
        Weight : ${t33Array[j].catWeight}
        </h1>`
    }
}

// t34
t34Array = []
function createObjectsT34(numOfRepeat){
    numOfRepeat = +prompt("Num of objects : ")
    for(var i=0;i<numOfRepeat;i++){
        tempObj = {
            dogName:prompt("Dog's name? : "),
            dogAge:+prompt("Dog's Age : "),
            dogType:prompt("Dog's type : "),
            dogsOwner:prompt("Owner's name : ")
        }
        t34Array.push(tempObj)
    }
    for(var j=0;j<t34Array.length;j++){
        t34Div.innerHTML+=
        `<p>
         Name : ${t34Array[j].dogName} ,
         Age : ${t34Array[j].dogAge} , 
         Type : ${t34Array[j].dogType} ,
         Owner : ${t34Array[j].dogsOwner}
        </p>`
    }
}

// t35
t35Array = []
function createObjectsT35(numOfRepeat){
    numOfRepeat = +prompt("Num of objects : ")
    for(var i=0;i<numOfRepeat;i++){
        tempObj = {
            bugName:prompt("Bug's name? : "),
            bugType:prompt("Bug's type : "),
            bugNumOfLegs:+prompt("Bug's Amount of legs : "),
            bugWings:confirm("Has Wings? ")
        }
        t35Array.push(tempObj)
    }

    for(var j=0;j<t35Array.length;j++){
        if(t35Array[j].bugWings == true){
            t35Div.innerHTML+=
            `<h3>
             Name : ${t35Array[j].bugName} ,
             Age : ${t35Array[j].bugType} , 
             Type : ${t35Array[j].bugNumOfLegs} ,
             Owner : ${t35Array[j].bugWings}
            </h3>`
        }
    }
}

// t36
t36Array = []
function createObjectsT36(numOfRepeat){
    numOfRepeat = +prompt("Num of objects : ")
    for(var i=0;i<numOfRepeat;i++){
        tempObj = {
            kidName:prompt("Bug's name? : "),
            kidAge:+prompt("Bug's type : "),
            kidInGan:confirm("In kindergarten? ")
        }
        t36Array.push(tempObj)
    }
    for(var j=0;j<numOfRepeat;j++){
        if(t36Array[j].kidAge > 4){
            t36Div.innerHTML+=
            `<p>
             Kid's Name : ${t36Array[j].kidName} ,
             Kid's Age : ${t36Array[j].kidAge} , 
             In Kindergarten? : ${t36Array[j].kidInGan} .
            </p>`
        }
    }
}

// t37
var t37Objects = []
var t37Elem = document.getElementById("t37Div")
function createObjectsT37(numOfObjects){
    for(var i=0;i<numOfObjects;i++){
        var tempObj={
            pcCompany:prompt("Which company is the pc from? : "),
            pcModel:prompt("Pc model? : "),
            pcWeight:+prompt("Whats the pc weight? write in Kilos : "),
            pcSupply:prompt("Is it in stock? (answer with yes or no): "),
        }
        t37Objects.push(tempObj)
    }
}
function pushObjectsT37(){
    for(var j=0;j<t37Objects.length;j++){
        if(t37Objects[j].pcSupply > "true" && t37Objects[j].pcWeight > 2) {
            t37Elem.innerHTML +=
            `
            <p> Pc Company : ${t37Objects[j].pcCompany}
                Pc Model : ${t37Objects[j].pcModel}
                Pc Weight : ${t37Objects[j].pcWeight}
                Pc Supply : ${t37Objects[j].pcSupply}</p><br>
            `
        }
    }
}

// t38
t38Array = []
function teacherInformation(numOfObjects){
    for(var i=0;i<numOfObjects;i++){
        var tempObj={
            teacherName:prompt("Teacher's name? : "),
            teacherSalary:+prompt("Teacher's salary per hr? : "),
            teacherEmail:prompt("Teacher's Email : "),
            teacherBirthYear:+prompt("Teacher's Birthyear "),
        }
        t38Array.push(tempObj)
    }
    for(var j=0;j<numOfRepeat;j++){
        if(t38Array[j].teacherSalary > 100 || t38Array[j].teacherBirthYear < 1990 ){
            t38Div.innerHTML+=
            `<span>
             Teacher's Name : ${t38Array[j].teacherName} ,
             Teacher's Salary : ${t38Array[j].teacherSalary} , 
             Teacher's Email : ${t38Array[j].teacherEmail} , 
             Teacher's BirthYear : ${t38Array[j].teacherBirthYear} .
            </span>`
        }
    }
}

// t39
t39Array = []
function ikeaFunction(numOfObjects){
    for(var i=0;i<numOfObjects;i++){
        var tempObj={
            furnitureName:prompt("Furniture's name? : "),
            furnitureBrand:prompt("Furniture's Brand : "),
            furnitureShops: [
                prompt("Purchaseable in Store num 1 : "),
                prompt("Purchaseable in Store num 2 : "),
                prompt("Purchaseable in Store num 3 : "),
            ],
            furniturePrice:+prompt("Furniture's Price "),
        }
        t39Array.push(tempObj)
        t39Div.innerHTML +=
        `
        Furniture Name : ${t39Array[i].furnitureName}
        Purchaseable in : ${t39Array[i].furnitureShops}
        `
    }
}

// t40
t40Array = []
function housesTask(numOfObjects){
    for(var i=0;i<numOfObjects;i++){
        var tempObj={
            houseAddress:prompt("House's Address : "),
            houseRent:prompt("House's rent price : "),
            houseInterested: [
                prompt("Interested customer 1 : "),
                prompt("Interested customer 2 : "),
                prompt("Interested customer 3 : "),
            ],
            housePrice:+prompt("House's purchase price : "),
            houseAgent:confirm("Any middle man?"),
        }
        t40Array.push(tempObj)
    }
    for(var j=0;j<numOfObjects;j++){
        if(t40Array[j].houseAgent == false){
            t40Div.innerHTML +=`
            <p>House Address : ${t40Array[j].houseAddress} ,<br>
            Interested in the house : ${t40Array[j].houseInterested}
            </p>`
        }
    }
}


// t41
t41Array=[]
function betHabad(numOfObjects){
    numOfObjects = +prompt("How many objects? : ")
    for(var i=0;i<numOfObjects;i++){
        var tempObj={
            betCountry:prompt("Country's name : "),
            betNumOfCitizens:+prompt("Number of citizens : "),
            betCities: [
                prompt("City number 1 : "),
                prompt("City number 2 : "),
                prompt("City number 3 : "),
            ],
            beitHabad:confirm("Has Bet-Habad?"),
        }
        t41Array.push(tempObj)
    }

    for(var j=0;j<numOfObjects;j++){
        if(t41Array[j].beitHabad == true){
            t41Div.innerHTML +=`
            <p>Country's name : ${t41Array[j].betCountry} ,<br>
            Citiez in ${t41Array[j].betCountry} : ${t41Array[j].betCities}
            </p>`
        }
    }
}