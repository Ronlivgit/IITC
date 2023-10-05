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

const optionsAuth = {
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


fetch('https://api.themoviedb.org/3/authentication', optionsAuth)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));



// Start of code : 
let moreThanSinglePage = false
let numOfReqMovPages = 1

// add <div class=displayerDiv> after the main Printing div, make it display none and when mouse on over make display true
function searchForMovie(movieName){
  searchMainDiv.innerHTML = ''
  fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&language=en-US&page=1`, optionsAuth)
    .then(response => response.json())
    .then(data => {
    if(data.total_pages > 1 || data.total_results > 1){
      console.log(data);
      printMultiplePages(data.total_pages,movieName)
    }
    else{
      console.log(data);
      data.results.map(item =>{
        searchMainDiv.innerHTML = 
        `
        <h1>Sorry, unable to identify any movies related to : ${movieName}</h1>
        `
      })
    }
    })
    .catch(err => console.error(err));
}
// add <div class=displayerDiv> after the main Printing div, make it display none and when mouse on over make display true
function printMultiplePages(numOfPages = 1,movieName = "spiderman"){
  searchMainDiv.innerHTML = ''
  let changeBackGround = false
    for(let i=1;i<=numOfPages;i++){
      fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&language=en-US&page=${i}`, optionsAuth)
      .then(response => response.json())
      .then(data => data.results.map(item => {
        if(item.poster_path != null & item.id != null){
          if(changeBackGround == false){
            document.querySelector("#searchBackground").style =`background-image:url("https://image.tmdb.org/t/p/w500${item.poster_path}")`
            changeBackGround = true
          }
          searchMainDiv.innerHTML+=
          `
          <div class="displayInfo" style="height:20vh;width:15vw;">
          <img style="height:14vh;width:12vw;" src="https://image.tmdb.org/t/p/w500${item.poster_path}"><br>
          <p style="font-weight:bold">${item.title}</p>
          <p class="popularItemsIDS" style="display:none">${item.id}</p>
          <span>Release Date : ${item.release_date}</span><br>
          <span>Vote score : ${item.vote_average}</span><br>
          ${createLikeBtn}
          </div>
          `
          activeLikeBtns()
        }
        else{
          console.log(item + "has null poster path");
        }
      }))
  }
}
// item.release_date + vote_average

searchForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  let userChoice = searchInput.value
  console.log(userChoice);
  searchForMovie(userChoice)
})

searchForMovie("spiderman")