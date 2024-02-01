import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import App from "../App";
import { dataBase, fireAuth } from '../config/firebaseConfig'
import TokenPrint from '../components/Tokens/TokensPrint'
import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, setDoc, doc, getDoc, getDocs, deleteDoc, query, where } from 'firebase/firestore'
import NavBar from '../NavBar';
import '../components/Tokens/Tokens.css'


// Tokens page == HOME PAGE, NO HOME PAGE

function Tokens(props) {

    const [assets, setAsset] = useState([])
    const [isAdded, setIsAdded] = useState(false)

    // USE EFFECT on assets list, useState to render.
    //! my props : `tokenList` , addNewToken , WatchlistStorage

    const fetchFunct = () => {
        fetch("https://api.coincap.io/v2/assets")
            .then((res) => { return res.json() })
            .then((data) => {
                data.data.map((item, index) => {
                    item.priceUsd = parseFloat(item.priceUsd)
                    item.changePercent24Hr = parseFloat(item.changePercent24Hr)
                    item.marketCapUsd = parseFloat(item.marketCapUsd)
                })
                console.log(data);
                setAsset(data.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }


    // e.target.getAttribute (used to get the attribute given to the btn)
    //! Query(fireStore path , where{the query}("trait{rank/id}" , "{==/!=}" , newItem.trait))
    // dupeChecker takes the dupequery and checks it out, if value isn't empty that means its dupe, if it is, not a dupe


    const addToWatch = async (tokenInfo, userObj) => {

        try {
            console.log(tokenInfo);
            console.log(userObj);
            const WatchRef = collection(dataBase, "Watchlist");

            const checkIfExist = await getDocs(
                query(WatchRef,
                    where('id', "==", tokenInfo.id),
                    where('userId', "==", userObj.uid)
                ));
            console.log(checkIfExist);
            if (checkIfExist.docs.length == 0) {
                console.log(checkIfExist, " Is empty, can add new WatchItem");
                console.log("Placing the add doc.");
                const printAddedDoc = await addDoc(props.WatchlistRef,{
                    id:tokenInfo.id,
                    rank:tokenInfo.rank,
                    name:tokenInfo.name,
                    symbol:tokenInfo.symbol,
                    priceUsd:tokenInfo.priceUsd,
                    changePercent24Hr:tokenInfo.changePercent24Hr,
                    marketCapUsd:tokenInfo.marketCapUsd,
                    userId:userObj.uid
                })
                console.log(printAddedDoc);
            }

            else {
                checkIfExist.forEach((doc) => {
                    alert("Item is already in watchlist")
                    console.log("Item exists already, info : " ,doc);
                })

            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchFunct()
    }, [])


    return (
        <>
            {/* <h2 className="tokensWelc">Welcome to Crypto Token Tracker</h2> */}
            <div className="allTokensSection">
                {assets.map((item, index) => {
                    return <TokenPrint addToWatch={addToWatch} trInfo={item} rankIndex={index} 
                    removeFromWatch={props.removeFromWatch}loggedUser={props.loggedUser} />
                })}
            </div>


        </>
    )
}

export default Tokens





//! BACKUP
// if (dupeChecker.empty) {
//     console.log("No dupes have been found, adding to collection on : " + userObj.uid);
// await addDoc(props.WatchlistRef,{
//     id:tokenInfo.id,
//     rank:tokenInfo.rank,
//     name:tokenInfo.name,
//     symbol:tokenInfo.symbol,
//     priceUsd:tokenInfo.priceUsd,
//     changePercent24Hr:tokenInfo.changePercent24Hr,
//     marketCapUsd:tokenInfo.marketCapUsd,
//     userId:userObj.uid
// })
// }

// else {
//     console.log("Dupe found with token " +  tokenInfo.id +  "on uid" + userObj.uid + "and not : "  + tokenInfo.userId)
// }