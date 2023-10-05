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

// Imports
import {likedItems} from '../dataStorage.js'
import {validateLikes} from '../dataStorage.js'


const createUnlikeBtn = `
<button class="Unlike__btn">
   <span id="icon"><i class="far fa-thumbs-down"></i></span> Unlike
</button>
`

// add <div class=displayerDiv> after the main Printing div, make it display none and when mouse on over make display true

function searchById(movieID){
  fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, optionsAuth)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    favMoviesSect.innerHTML +=
    `
    <div class="favMoviesDivs">
    <img class="favMoviesImgs" src="https://image.tmdb.org/t/p/w500${data.poster_path}" style="width:30vw;height:70vh">
    <div class="displayerDiv" style="display:none">
      <h1>Title : ${data.original_title}</h1>
      <p>Released : ${data.release_date}</p><br>
      <p>${data.tagline}</p><br><br>
      <p>Overview : ${data.overview}</p><br><br>
      ${createUnlikeBtn}
    </div>
    </div>`
    backgroundImgDiv.style = `background-image:url(https://image.tmdb.org/t/p/w500${data.poster_path})`
    activeUnlikeBtns()
    displayMovieInfo()
    // printMyTarget()
  })
  .catch(err => console.error(err));
}

likedItems.map(item => {
  let filterDupes = likedItems.filter((item,index) => likedItems.indexOf(item) != index)
  console.log(filterDupes);
  console.log(item);
  if(item == null){
    likedItems.splice(likedItems.indexOf(item),1)
  }
  searchById(item)
})


function displayMovieInfo(){
  let favMovies = document.querySelectorAll(".favMoviesDivs")
  let displayDiv = document.querySelectorAll(".displayerDiv")
  let favImages = document.querySelectorAll(".favMoviesImgs")
  for(let i=0;i<favMovies.length;i++){
    favMovies[i].addEventListener("mouseover",(event)=> {
      favImages[i].style.opacity = "60%"
      displayDiv[i].style.display = "block"
    })

    favMovies[i].addEventListener("mouseout",(event)=>{
      favImages[i].style.opacity = "100%"
      displayDiv[i].style.display = "none"
    })
  }
}


function activeUnlikeBtns(){
  let displayDiv = document.querySelectorAll(".displayerDiv")
  let myUnlikeBtn = document.querySelectorAll(".Unlike__btn")
  for(let i=0;i<myUnlikeBtn.length;i++){
      myUnlikeBtn[i].addEventListener("click", (e) => {
          if (myUnlikeBtn[i].innerText.includes("Unlike")) {
            displayDiv[i].parentElement.style.display='none'
            console.log(likedItems);
            likedItems.splice(i,1);
            console.log(likedItems);
          } else {
              console.log("active unlike didn't work well");
          }
      });
  }
}
























































// Nothing pretty much 

// let sliderContainer = document.querySelectorAll(".slider-container")
// function buildSliderLayout(){
//   likedItems.map(item => {
//     let i=1
//     document.querySelector(".slider-container").innerHTML +=
//     `
//     <div class="slides">
//     <div class="slider-numbers">${i}/${likedItems.length}</div>
//     <div class="slider-image"><img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="background_${i}"></div>
//     <div class="slider-captions">
//       <h1 class="movie-title">${data.original_title}}</h1>
//       <p class="movie-para">${data.overview}</p>
//     </div>
//     </div>
//     `

//     document.querySelector(".slider-bullets").innerHTML +=
//     `
//     <span class="dots" onclick="currentSlide(${i})"></span>
//     `

//     i++
//   })
// }



// function searchById(movieID){
//   fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, optionsAuth)
//   .then(response => response.json())
//   .then(data => {
//     favMoviesSect.innerHTML +=
//     `
//     <div class="favMoviesDivs">
//     <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" style="width:15vw;height:18vh">
//     <h1>Title : ${data.original_title}</h1>
//     <p>${data.tagline}</p>
//     <p>Overview : ${data.overview}</p><br>
//     ${createUnlikeBtn}
//     </div>`
//     backgroundImgDiv.style = `background-image:url(https://image.tmdb.org/t/p/w500${data.poster_path})`
//     activeUnlikeBtns()
//   })
//   .catch(err => console.error(err));
// }
