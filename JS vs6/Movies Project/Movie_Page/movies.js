//? guidelines for the project -
// -------------------------------- \\
//! (1-home page) use class collection for the pagination (changing movies with btns 1-5), 
//? using for loop to go through page's nums to find the user's movie name(?)
//! (1-home page) fetch data of popular (weekly+daily) through the site, change page based of btn presses.
//! (2-single movie page) override the previous movie with the newly valued input.
//! (3- about us page) about page = info about us (devs).
//! (4-search page) similar to the first page (design-wise and function-wise),display all results OF THE MOVIE SERIES
//! (5-favourite page) a page that will show the user's chosen movies from other pages (use array to push general wide info display with <list>)
//! Extra - solo learning it.

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFkYzc4OWJhNjAzYjA4ZTMzYTY1NDg5MWE3ODY5MiIsInN1YiI6IjY1MTZiOTBmOTNiZDY5MDBjNGRlNTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIEaKdBRYnB2ZqumD9brBNT6ze-AHQ6FPPi_nauIf_I'
    }
  };

// Imports :
import { createLikeBtn } from "../dataStorage.js";
import { activeLikeBtns } from "../dataStorage.js";
import { validateLikes } from "../dataStorage.js";


// Can't export, too many different changes for the Favorites page.
function fetchMovieAndActors(movieId = 578){
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(data => {
            if(data.poster_path != null){
                backgroundDiv.style =`background-image:url("https://image.tmdb.org/t/p/w500${data.poster_path}")`
                mainMovieDiv.innerHTML =
                `
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" style="width:32vw;height:62vh">
                <h1>Title : ${data.original_title}</h1>
                <p class="popularItemsIDS" style="display:none">${data.id}</p>
                ${createLikeBtn}
                <p>${data.tagline}</p>
                <p>Overview : ${data.overview}</p>
                `
            }
            else{"none"}
            activeLikeBtns()
        })
        .catch(err => console.error(err));
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(data => data.cast.map(item => {
            if(item.profile_path != null){
                document.querySelector("#mainActorsDiv").innerHTML +=
                `<div class="singleActorCred">
                <img src="https://image.tmdb.org/t/p/w500${item.profile_path}"><br>
                <p>Character's name : ${item.character}
                <br><br><span>Actor's name : ${item.original_name} </span>
                </p>
                </div>
                ` 
            }
            else{
                console.log(item + "is null");
            }
        }))
        .catch(err => console.error(err));
}
fetchMovieAndActors()

formById.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userChoise = idInput.value
    if(userChoise > 0 || userChoise.length >= 1){
        mainMovieDiv.innerHTML = ''
        mainActorsDiv.innerHTML=''
        fetchMovieAndActors(userChoise)
    }
    return console.log("BUG BUG BUG");
})
