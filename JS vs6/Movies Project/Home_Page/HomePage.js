//? guidelines for the project -
// -------------------------------- \\
//! (1-home page) use class collection for the pagination (changing movies with btns 1-5), 
//! (1-home page) fetch data of popular (weekly+daily) through the site, change page based of btn presses.
//! (2-single movie page) override the previous movie with the newly valued input.
//? using for loop to go through page's nums to find the user's movie name(?)
//! (3- about us page) about page = info about us (devs).
//! (4-search page) similar to the first page (design-wise and function-wise),display all results OF THE MOVIE SERIES
//! (5-favourite page) a page that will show the user's chosen movies from other pages (use array to push general wide info display with <list>)
//! Extra - solo learning it.

// Home Page !@#

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
    

// Imports :
import { createLikeBtn } from "../dataStorage.js";
import { activeLikeBtns } from "../dataStorage.js";
import {displayMovieInfo} from '../dataStorage.js';

// Start of code 
let currPage = 1
let currSort = "general"

// add <div class=displayerDiv> after the main Printing div, make it display none and when mouse on over make display true
function fetchGeneralPopular(page = 1){
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,optionsAuth)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const popPrint = data.results.map(item =>{
            homeTrendingDiv.innerHTML+=
            `
            <div class="popularItems">
            <img class="popularImgs" src="https://image.tmdb.org/t/p/w500${item.poster_path}">
            <div class="homeDisplayDiv" style="display:none">
            <h1>${item.original_title}</h1>
            <p style="font-weight:bold">Average Vote Score : ${item.vote_average}</p><br>
            <p style="font-weight:bold;padding:8px;margin:1vw;">${item.overview}</p>
            <p class="popularItemsIDS" style="display:none">${item.id}</p><br>
            ${createLikeBtn}
            </div>
            `
        })
        displayMovieInfo(".popularItems",".popularImgs",".homeDisplayDiv")
        activeLikeBtns()
        return popPrint 
    })
    
    .catch(err => console.error(err))
}

fetchGeneralPopular()
// add <div class=displayerDiv> after the main Printing div, make it display none and when mouse on over make display true
function fetchTimedPopularity(page = 1,timeScale){
    if(timeScale == "day" || timeScale == "week"){
        let timeScaleUrl = `https://api.themoviedb.org/3/trending/movie/${timeScale}?language=en-US&page=${page}`
        fetch(timeScaleUrl,optionsAuth)
        .then(res => res.json())
        .then(data => {
            const timescalePrint = data.results.map(item => {
                homeTrendingDiv.innerHTML+=
                `
                <div class="popularTimeScaled">
                <img class="popularImgs" src="https://image.tmdb.org/t/p/w500${item.poster_path}">
                 <div class="homeDisplayDiv" style="display:none">
                    <h1>${item.original_title}</h1>
                    <p style="font-weight:bold">Average Vote Score : ${item.vote_average}</p><br>
                    <p style="font-weight:bold;padding:8px;margin:1vw;">${item.overview}</p>
                    ${createLikeBtn}
                    <p class="popularItemsIDS" style="display:none">${item.id}</p>
                 </div>
                </div>
                `
            })
            activeLikeBtns()
            displayMovieInfo(".popularTimeScaled",".popularImgs",".homeDisplayDiv")
            return timescalePrint 
        })
        .catch(err => console.error(err))
    }
    else{
        fetchGeneralPopular(page)
    }
}

function paginationBtns(numOfPages){
    paginationDiv.innerHTML = "";
    for(let i=1;i<= numOfPages;i++){
        const paginBtn = document.createElement("button");
        paginBtn.textContent = i;
        paginBtn.addEventListener("click", () => {
            currPage = i;
            homeTrendingDiv.innerHTML = ""
            fetchTimedPopularity(currPage, currSort);
        });
        paginationDiv.appendChild(paginBtn);
    }
}

paginationBtns(5)

// homePage buttons activation

homePopular.addEventListener("click",()=>{
    homeTrendingDiv.innerHTML =``
    fetchGeneralPopular()
})
homeDaily.addEventListener("click",()=>{
    homeTrendingDiv.innerHTML =``
    fetchTimedPopularity(1,"day")
})
homeWeekly.addEventListener("click",()=>{
    homeTrendingDiv.innerHTML =``
    fetchTimedPopularity(1,"week")
})
