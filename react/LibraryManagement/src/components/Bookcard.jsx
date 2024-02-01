import BookCards from '../pages/Books'

function BooksPrint (props){
    return (
        <>
            <div>
                <h1>Title : {props.book.title}</h1>
                <p>Description : {props.book.description}</p>
                <img src={props.book.cover} alt=""/>
            </div>
        </>
    )
}

export default BooksPrint 


