import { getAuth, createUserWithEmailAndPassword,   } from "firebase/auth";
import { dataBase , fireAuth } from '../config/firebaseConfig'
import NavBar from '../NavBar';
import { useState, useEffect } from 'react'
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc, query , where} from 'firebase/firestore'
import WatchingPrint from '../components/WatchList/WatchListPrint'
import { useParams } from "react-router-dom";

    // e.target.getAttribute (used to get the attribute given to the btn)
    //! Query(fireStore path , where{the query}("trait{rank/id}" , "{==/!=}" , newItem.trait))
    // dupeChecker takes the dupequery and checks it out, if value isn't empty that means its dupe, if it is, not a dupe
    
function Watchlist(props){
    
    // const { tokenID } = useParams()
    // const [chosenToken,setChosenToken] = useState()   

    const [watchedItemsID,newWatchItemID] = useState([])
    const myWatchRef = collection(dataBase,"Watchlist")

    const [chosenHighlight,setChosenHighlight] = useState(null)

    const getAllWatched = async () =>{
        try{
            const thisUserTokens = query(props.WatchlistRef,where("userId","==",props.loggedUser.uid))
            const addTokens = await getDocs(thisUserTokens)
            console.log(addTokens);
            let tr = []
            addTokens.forEach((doc)=>{
                console.log(doc.data());
                tr.push({...doc.data()})
            })
            const sortToAscending = [...tr].sort((a, b) => a.rank - b.rank);
            newWatchItemID(sortToAscending)
            console.log(watchedItemsID);
        }
        catch(err){
            console.error(err);
        }
    }


    
    useEffect(()=>{
        getAllWatched()
    },[props.loggedUser])

    useEffect(()=>{
        console.log(watchedItemsID);
        console.log("asdasd");
    },[watchedItemsID])

    

    // const highlightItem = async (e) => {
    //     let chosenItem = e.target.getAttribute("itemID")
    //     console.log(chosenItem);
    //     setChosenHighlight(chosenItem);
    // } 
    
    return(
            props.isLoggedIn ?
        <>
            {watchedItemsID.map((item,index) =>{
                return <WatchingPrint watchedItem={item} key={`asd_${index}`} watchedIndex={index} removeFromWatch={props.removeFromWatch} 
                chosenHighlight={chosenHighlight} watchedItemsID={watchedItemsID} loggedUser={props.loggedUser}/>
            })}
        </>
        :
        <h1>You can't use Watch List until you're logged in, please log in and then try again.</h1>
    )
    
}

export default Watchlist