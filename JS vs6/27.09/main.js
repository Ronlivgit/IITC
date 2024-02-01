// -! Overall subject = Fetching and API usage -! \\

// Class's example about Fetch : 
// .then is a method used to start taking action after the data's fetching is done
// After the first then (which ends with response.json() that is being used to return the data), ==>>
// we use the second then to withdraw the data's of the first then and use it.
// .catch (mainly used with argument of Error) , being used to alert if there is an error on the link.


fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{return response.json();})

// using data[index] to render a specific index's key:valueץ
// .then(data => {return mainDiv.innerHTML+=
//     `
//     <img src="${data[0].url}" alt="" id="asddsa">
//     `;
// })

// using map to go through each item in the object and render all items with mapping.
// .then(data =>{
//     const userMapping = data.map(item => {
//         mainDiv.innerHTML += 
//         `
//         <p>${item.username}</p>
//         <p>${item.email}</p>
//         `
//     })
//     return (userMapping)
// })
.catch(error => {console.log(error);})


// random jokes function, triggered by button.

function randomJokes(){
    fetch("https://api.chucknorris.io/jokes/random")
    // using .then to return the value of the json file withdrawn from the fetch (or fetched)
        .then(response =>{return response.json()})
    
        .then(data => {
            return (
                mainDiv.innerHTML = 
                `
                <p>${data.value}</p>
                <p>${data.created_at}</p>
                `)
        })
}

const jokesBtn = document.querySelector("#jokesButton")

jokesBtn.addEventListener("click", () =>{
    randomJokes()
})


// multiple random jokes (if part of array.)
    // .then(data =>{
    //     const jokesMapping = data.map(post => {
    //         console.log(post.value) 
    //         mainDiv.innerHTML +=
    //         `
    //         <p>${post.value}</p>
    //         `
    // return jokesMapping
    //     })


//  NEW SUBJECT!! !-- API => Application programming interface --!
// IMPORTANT!!!!! - while working with API's, turn off auto-save/use function and call through the console of document
// Using argument of city over let userCity is recommended to provide more generic code, x(city), in url : ${city} 
const fetchWeather = () =>{
    let userCity = cityInput.value
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=ca6e8a046fe6067f19b317b78d104cce&units=metric`
    ;
    fetch(url)
    // arrow function can be used to finish with a return, good replacement to .then(res=> {return res.json()})
    // If its over few lines we need to use {Blocks} and finish with return.
        .then(res => res.json())

        .then(data => {
            console.log(data);
            mainDiv.innerHTML +=
            `
            <p>City : ${data.name}</h1>
            <p>Temp : ${data.main.temp}</p>
            <p>Minimum Temp : ${data.main.temp_min}</p>
            <p>Maximum Temp : ${data.main.temp_max}</p>
            `
        })

        .catch(Error => {
            console.log(Error);
        })
}

weatherButton.addEventListener("click",()=>{
    if(cityInput.value.length > 1){
        fewDaysWeather(cityInput.value)
    }
    else{
        return console.log("didn't work");
    }
})

let daysWeathArray = []
const fewDaysWeather = (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=6b294da62742a7655359185e07193571&units=metric`;
    fetch(apiUrl)
    
        .then(res => res.json())

        .then(data => {
            daysWeathArray = data.list
            printElems()
        })

        .catch(error => {
            console.log(error);
        })
}

function printElems(){
    if(daysWeathArray.length == 40){
        for(let i=0;i<40;i++){
            console.log(i);
            daysDiv.innerHTML +=
            `<div class="weatherDiv">
            <h1>Weather right now : ${daysWeathArray[i].main.temp}</h1>
            <p>Weather in 3 hours : ${daysWeathArray[i+1].main.temp}</p>
            <p>Weather description : ${(daysWeathArray[i].weather[0].description)}</p>
            <img src="https://openweathermap.org/img/wn/${daysWeathArray[i].weather[0].icon}@2x.png">
            </div>`
            i+=7
        }
    }
    else{
        return console.log("Not matching the IF");
    }
}
// fetchWeather()


//     const url =
// `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=ca6e8a046fe6067f19b317b78d104cce&units=metric`
// ;