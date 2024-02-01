export const likedItems = JSON.parse(localStorage.getItem('fetchedLikes')) || [];
export const removedLikedItems = JSON.parse(localStorage.getItem('fetchedUnlikes')) || [];
export const createLikeLogo = `<span id="icon"><i class="far fa-thumbs-up"></i></span>`
export const myLikeBtn = document.querySelectorAll(".like__btn");


export const createLikeBtn =`
<button class="like__btn">
   <span id="icon"><i class="far fa-thumbs-up"></i></span> Like
</button>`

export function activeLikeBtns(){
    const myLikeBtn = document.querySelectorAll(".like__btn");
    let chosenItemID = document.querySelectorAll(".popularItemsIDS")
    for(let i=0;i<myLikeBtn.length;i++){
        myLikeBtn[i].addEventListener("click", (e) => {
            if (myLikeBtn[i].innerText != "Unlike") {
                likedItems.push(chosenItemID[i].innerText);
                myLikeBtn[i].innerHTML = createLikeLogo + "Unlike"
                console.log(likedItems);
            } else {
                likedItems.splice(likedItems.indexOf(chosenItemID[i].innerText),1)
                removedLikedItems.push(chosenItemID[i].innerText)
                myLikeBtn[i].innerHTML = createLikeLogo + "Like"
                console.log(removedLikedItems);
            }
        });
    }
}


window.addEventListener("beforeunload", () => {
    localStorage.setItem("fetchedLikes", JSON.stringify(likedItems));
    localStorage.setItem("fetchedUnlikes", JSON.stringify(removedLikedItems));
    validateLikes()
    console.log("window onunload worked");
});


export function validateLikes(){
    likedItems.filter((item,index) =>likedItems.indexOf(item) != index) 
    removedLikedItems.filter((item,index) =>removedLikedItems.indexOf(item) != index)
    for(let i=0;i<removedLikedItems.length;i++){
        for(let j=likedItems.length;j>0;j--){
            if(removedLikedItems[i] == likedItems[j]){
                likedItems.splice(j,1)
            }
        }
        removedLikedItems.splice(i,1)
    }
} 

export function displayMovieInfo(sectionClass,imgClass,displayerClass){
    let sectionDiv = document.querySelectorAll(sectionClass)
    let imagesDiv = document.querySelectorAll(imgClass)
    let displayDiv = document.querySelectorAll(displayerClass)
    for(let i=0;i<sectionDiv.length;i++){
      sectionDiv[i].addEventListener("mouseover",(event)=> {
        imagesDiv[i].style.opacity = "30%"
        displayDiv[i].style.display = "block"
      })
  
      sectionDiv[i].addEventListener("mouseout",(event)=>{
        imagesDiv[i].style.opacity = "100%"
        displayDiv[i].style.display = "none"
      })
    }
  }