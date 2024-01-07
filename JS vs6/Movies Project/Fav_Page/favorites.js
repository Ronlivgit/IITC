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

fetch('https://api.themoviedb.org/3/authentication', optionsAuth)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// Imports
import {likedItems} from '../dataStorage.js'
import {validateLikes} from '../dataStorage.js'
import {displayMovieInfo} from '../dataStorage.js'


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
    <img class="favMoviesImgs" src="https://image.tmdb.org/t/p/w500${data.poster_path}" style="width:30vw;height:60vh">
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
    displayMovieInfo(".favMoviesDivs",".favMoviesImgs",".displayerDiv")
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


// function displayMovieInfo(sectionClass,imgClass,displayerClass){
//   let sectionDiv = document.querySelectorAll(sectionClass)
//   let imagesDiv = document.querySelectorAll(imgClass)
//   let displayDiv = document.querySelectorAll(displayerClass)
//   for(let i=0;i<sectionDiv.length;i++){
//     sectionDiv[i].addEventListener("mouseover",(event)=> {
//       imagesDiv[i].style.opacity = "60%"
//       displayDiv[i].style.display = "block"
//     })

//     sectionDiv[i].addEventListener("mouseout",(event)=>{
//       imagesDiv[i].style.opacity = "100%"
//       displayDiv[i].style.display = "none"
//     })
//   }
// }


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

