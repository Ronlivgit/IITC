//! NEW TASK !!! - Local storage + Json() - !!!

// !---Local storage : exists ONLY in the document(Explorer), ---!
//? Example of 2 different methods, Preferably to use the JSON.stringify Method (need to Parse later).
//! Example 1 : localStorage.setItem("booksArray",String(booksArray)) :
// ! Example 2 : localStorage.setItem("booksArray",JSON.stringify(booksArray))

//? Explanations and extra methods
// ! this code will keep the storage within the doc, the first String is a name defined,next is the use part
// ! JSON will return it as JSON.stringify (as stringed json) while the other will return it as Object
// ! localStorage.getItems("{string name}") is used to 'call' the saved item in a JSON formation
// ! JSON.parse() is used to turn 'JSONed' file into an array.
// ! localStorage.clear() clears the saved local storage
// ! localStorage.removeItem("{item name}") removes the saved Item.


//? t1 - create array of 3 books

const booksArray = [{title:"The Great Gatsby",pages: 200, author:"F. Scott Fitzgerald"}
,{title:"Sapiens: A Brief History of Humankind",pages: 420, author:" Yuval Noah Harari"}
,{title:"Dune",pages: 550, author:"Frank Herbert"}]


//? t2 - collect data from user through inputs

function createUserInputs(maxNumOfRepeat){
    mainDiv.innerHTML +=
    `
    <form action="" id="t2Form">
    <label for="nameInput">Book's Name : </label>
    <input type="text" id="nameInput" name="nameInput" placeholder="Book's name : ">
    <label for="pagesInput">Number of Pages : </label>
    <input type="number" id="pagesInput" placeholder="Num of pages : "> 
    <label for="authorInput">Author's Name : </label>
    <input type="text" id="authorInput" name="authorInput" placeholder="Author's name : ">
    <button type="submit">Submit</button>
    </form>
    `

    t2Form.addEventListener("submit",(e) => {
        e.preventDefault()
        --maxNumOfRepeat
        if(maxNumOfRepeat >= 0){
            if(nameInput.value.length > 0 & pagesInput.value.length > 0 & authorInput.value.length > 0){
                booksArray.push({
                    title:nameInput.value,
                    pages:pagesInput.value,
                    author:authorInput.value,
                })
                console.log(booksArray);
                console.log("asd");
            }
            else{
                return console.log("Error, invalid input value.");
            }    
        }
        else{
            t2Form.querySelector("button").disabled = true
            return console.log("Error, u got 0 tries left");
        }
    })
}

const catchArray = localStorage.setItem("booksArray", JSON.stringify(booksArray))
const callArray = localStorage.getItem("booksArray")


// 