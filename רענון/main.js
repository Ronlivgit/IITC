//  שמים בפונקציה את התהליך בדיקה לסוג פעולה וחישוב בתוכו
// בגלל שזה בתוך פונקציה אפשר לשים ריטרן שיחזיר ערל סופי לפי סוג פעולה 
// או שאפשר לעשות משתנה שיקלוט את הפעולה ולשים ברייק אחרי כל פעולה וריטרן לתוצאה בסוף

function mathOperation(num1,num2,operator) {
    let result
    switch (operator) {
        case "plus" :
            result = num1 + num2
            break
            // return console.log(num1 + num2); >> return ONLY because its inside a function
        case "minus" :
            result = num1 - num2
            break
            // return console.log(num1 - num2); >> return ONLY because its inside a function
        case "multiply" :
            result = num1 * num2
            break
            // return console.log(num1 * num2); >> return ONLY because its inside a function
        case "divide" : 
            result = num1 / num2
            break
            // return console.log(num1 / num2); >> return ONLY because its inside a function
        default :
            console.log("Method not matched");
            break
    }
    return console.log(result);
}


// Fetch and API's 

const baseUrl = "https://restcountries.com/v3.1/all";
// then
// then
// catch


// first task - fetch data and print all countries name, flag,capital and neighbor countries
function getAllCountries(){
    fetch(baseUrl)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        // first Then = fetching the data and returns it into json 
        .then((data) => {
            data.forEach(element => {
                console.log(element.name.official);
                console.log(element.flags.png);
                console.log(element.capital);
                console.log(element.borders);
                document.body.innerHTML += 
                `
                <div class="countryDetails">
                <h1>Country's Name : ${element.name.official} </h1>
                <h2>Country's Flag : <br><img src="${element.flags.png}"></h2>
                <h3>Country's capital : ${element.capital} </h3>
                <h4>Country's borders : ${element.borders} </h4>
                </div>
                `
            });
        })
        // second Then = taking the json data and can use it to do actions, example : log, mapping, printing and etc. 
        .catch((error) => {
            console.log(error);
        })
        // catching the errors and printing them
    
    
    // todo : explain async - unarranged , sync : arranged 
    // todo : explain promises - placing a command in "hold" (pending) until its done running the "basic" and instant commands (the ones without pending) first.
    // todo : use fetch to fetch countries
    // todo : handle error
}


// second task - take 3 countries and print their name,flag,capital,"neighbors",google Map
function getThreeCountries(country1,country2,country3){
    let i = 1
    while (i <= 3){
        fetch(`https://restcountries.com/v3.1/name/${eval('country'+ i)}`)
            .then((res) => {
                return res.json()
            })
            .then((data) =>{
                data.forEach(elem =>{
                    console.log(elem.name.official);
                    console.log(elem.flags.png);
                    console.log(elem.capital);
                    console.log(elem.borders);
                    console.log(elem.borders);
                    console.log(elem.maps.googleMaps);
                    document.body.innerHTML += 
                    `
                    <div class="countryDetails">
                    <h1>Country's Name : ${elem.name.official} </h1>
                    <h2>Country's Flag : <br><img src="${elem.flags.png}"></h2>
                    <h3>Country's capital : ${elem.capital} </h3>
                    <h4>Country's borders : ${elem.borders} </h4>
                    <h4>Country's map : ${elem.maps.googleMaps} </h4>
                    </div>
                    `
                })
            })
            .catch((error)=>{
                console.log(error);
            })

        console.log(i);
        i++
        console.log(i);
    }
}