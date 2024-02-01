const personArray = []

function Person(firstName,lastName,Birthdate,profileImage){
    this.firstName = firstName
    this.lastName = lastName
    this.Birthdate = Birthdate
    this.profileImage = profileImage

    this.getFullName = function(){
        let fullName = `${this.firstName} ${this.lastName}`
        return console.log(fullName)
    }

    this.getAge = function(){
        let nowDate = new Date()
        const userAge = praseInt(this.Birthdate.substr(6,3)) - +nowDate.getFullYear()
        return console.log(userAge)
    }

    this.canClub = function(){
        if (userAge>18){
            return true
        }
        else {return false}
    }

    this.render = function (){
        let renderOutPut = 
        `<div class="personDiv">
        <h1>firstName : ${this.firstName}</h1><br>
        <p>lastName : ${this.lastName}</p><br>
        <span>Birthdate: ${this.Birthdate}</span><br>
        <img src="${this.profileImage}"><br>
        </div>`
        return mainDiv.innerHTML += `${renderOutPut}`
    }
}


personArray.push(new Person("Avi","Athol","1.1.2000","https://shorturl.at/gpBT7"))
personArray.push(new Person("Shiri","Athol","1.1.1985","https://shorturl.at/gpBT7"))
personArray.push(new Person("Elihu","Athol","1.1.1990","https://shorturl.at/gpBT7"))
personArray.push(new Person("ASDIT","Athol","1.1.2002","https://shorturl.at/gpBT7"))
personArray.push(new Person("asmdk","Athol","1.1.2005","https://shorturl.at/gpBT7"))
personArray.push(new Person("gmfkgm","Athol","1.1.2001","https://shorturl.at/gpBT7"))

personArray.forEach((person)=>{
    person.render()
})

// t2

class Car{
    constructor(Model,Year,Brand,Price,MaxSpeed,Img,CurrSpeed){
        this.Model = Model
        this.Year = Year
        this.Brand = Brand
        this.Price = Price
        this.MaxSpeed = MaxSpeed
        this.Img = Img
        this.CurrSpeed = CurrSpeed
    }

    Accelerate(){
        if((this.CurrSpeed + 20) < this.MaxSpeed){
            return this.CurrSpeed = this.CurrSpeed + 20
        }
        else{
            return "Cannot accelerate, will go over speed limit."
        }
    }

    Stop(){
        this.CurrSpeed = 0;
        return "Car has stopped"
    }

    get carModel(){
        return this.Model
    }
    set carNewModel(newModel){
        return this.Model = this.newModel
    }
    get carYear(){
        return this.Year
    }
    set carNewYear(newYear){
        return this.Year = this.newYear
    }
    get carBrand(){
        return this.Brand
    }
    set carNewBrand(newBrand){
        return this.Brand = this.newBrand
    }
    get carPrice(){
        return this.Price
    }
    set carNewPrice(newPrice){
        return this.Price = this.newPrice
    }
    get carMaxSpeed(){
        return this.MaxSpeed
    }
    set newMaxSpeed(newMaxSpeed){
        return this.MaxSpeed = this.newMaxSpeed
    }
    get carImg(){
        return this.Img
    }
    set carNewImg(newImg){
        return this.Img = this.newImg
    }
    get carCurrSpeed(){
        return this.CurrSpeed
    }
    set carNewCurrSpeed(carNewCurrSpeed){
        return this.CurrSpeed = this.carNewCurrSpeed
    }
}

const carArray = []
carArray.push(new Car("Yaris",2010,"Toyota",50000,220,"img",120))
carArray.push(new Car("Corolla",2020,"Toyota",150000,290,"img",150))

mainDiv.innerHTML +=
`
    <form action="" id="t2Part2Form">
    <label for="Model">Model : </label>
    <input type="text" name="Model" class="thirdCarClass"><br>
    <label for="Year">Year : </label>
    <input type="number" name ="Year" class="thirdCarClass"><br>
    <label for="Brand">Brand : </label>
    <input type="text" name="Brand" class="thirdCarClass"><br>
    <label for="Price">Price : </label>
    <input type="number" name="Price" class="thirdCarClass"><br>
    <label for="maxSpeed">Maximum Speed : </label>
    <input type="text" name="maxSpeed" class="thirdCarClass"><br>
    <label for="Img">Image : </label>
    <input type="text" name="Img" class="thirdCarClass"><br>
    <label for="currentSpeed">Current Speed : </label>
    <input type="text" name="currentSpeed" class="thirdCarClass"><br>
    <button id="t2p2Button" type="submit">Submit</button>
    </form>
`;

const t2P2Form2 = document.getElementById("t2Part2Form")
const t2P2Btn = document.getElementById("t2p2Button")


t2P2Form2.addEventListener("submit", (e)=>{
    console.log(t2P2Form2[0].value);
    e.preventDefault()
    carArray.push(new Car(t2P2Form2[0].value,t2P2Form2[1].value,t2P2Form2[2].value,
        t2P2Form2[3].value,t2P2Form2[4].value,t2P2Form2[5].value,t2P2Form2[6].value))
})


// t3
class Student extends Person{
    constructor(firstName,lastName,Birthdate,profileImage,currentCourse,Grades){
        super(firstName,lastName,Birthdate,profileImage)
        this.currentCourse = currentCourse
        this.Grades = Grades
    }
    get calcAvgGrade(){
        let avgGrade = 0 ;
        this.Grades.map(function(grade){
            return avgGrade =+ grade
        })
        console.log(avgGrade/avgGrade.length);
    }
}

class Teacher extends Person{
    constructor(firstName,lastName,Birthdate,profileImage,Students){
        super(firstName,lastName,Birthdate,profileImage)
        this.Students = Students
    }
}

function createFormForTeacher(numOfStudents){
    mainDiv.innerHTML +=
    `<form id="t3Form"></form>`
    const myForm = document.getElementById("t3Form")
    for(let i=0;i<numOfStudents;i++){
        myForm.innerHTML +=
        `
        <input class="studentInput" placeholder="Student number : ${i}">
        `
    }
    myForm.innerHTML +=`<button>Submit Button</button>`
    myForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let studentsInput = document.getElementsByClassName("studentInput")
        const newStudentsArray = []
        for (const iterator of studentsInput) {
            console.log(iterator.value);
            newStudentsArray.push(iterator.value)
        }
        Teacher.Students = newStudentsArray
    })
}


// Setter is being used to Set new value of a chosen key, equal to this.x = new value of x
// Getter is used to return the value of the chosen key

