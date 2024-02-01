import { useEffect, useState } from 'react'
import BooksPrint from '../components/Bookcard'

// title category amount type(income or expenses) 

function Books (props) {
    const [books,setBooks] = useState([
        // { title:"first book", description:"That's the first book", cover:"https://shorturl.at/bjNY7"},
        // { title:"second book", description:"That's the second book", cover:"https://shorturl.at/bjNY7"},
        // { title:"third book", description:"That's the third book", cover:"https://shorturl.at/bjNY7"},
    ])

    const [newBook,setNewBook] = useState({})

    const changeInput = (e) => {
        newBook[e.target.name] = e.target.value
        setNewBook({...newBook})
    }

    const submitChange = (e) => {
        e.preventDefault()
        setBooks([...books, {...newBook}])
    }

    useEffect ( () => {
        const booksData = JSON.parse(localStorage.getItem("booksArray"))
        if (booksData) {
            setBooks(booksData)
        }
    },
    [])
    
    useEffect ( () => {
        localStorage.setItem("booksArray",JSON.stringify(books))
    },
    [books])


    return (
        <>
            <form onSubmit={submitChange}>
                <input type="text" onChange={changeInput} placeholder="Book's title?" name="title" />
                <input type="text" onChange={changeInput} placeholder="Book's description?" name="description" />
                <input type="text" onChange={changeInput} placeholder="Book's image?" name="cover" />
                <button type="submit">Submit</button>
            </form>
            {
                books.map((item,index) => {
                    return <BooksPrint book={item} key={index} />
                })
            }
        </>
    )
}

export default Books
