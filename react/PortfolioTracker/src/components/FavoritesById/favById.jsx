import { getAuth, createUserWithEmailAndPassword,   } from "firebase/auth";
import App from "../../App.jsx";
import { dataBase , fireAuth } from '../../config/firebaseConfig.js'
import { useEffect, useState } from "react";
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc, query , where} from 'firebase/firestore'


function FavoriteById(){

    const userRef = collection(dataBase,"UserData");
    const watchRef = collection(dataBase,"Watchlist");
    const asdasdRef = collection(dataBase,"asdasd");
    const [asdToken,setasdToken] = useState({})
    const [isUpdated,setUpdated] = useState(false)
    const [userArray, setUserArray] = useState([])
    
    const asddsaasd = async (props) =>{
        try{
            //! getDocs will print all the items inside the fireStore database. (querySnapshot)
            const dsa = await getDocs(asdasdRef)
            //* querySnapshot (let x = await getDocs(xyz).forEach((doc)=>{restOfCode}))
            //* dsa.forEach((doc)=>{
            //*     console.log(doc);
            //* })
            setUserArray(dsa.docs[0].id)
            // const asd = await getDocs(userRef)
            // asd.forEach((doc)=>{
            //     console.log(doc);
            // })
            // console.log(asd);
        }
        catch(err){
            console.error(err);
        }
    }

    const asd2 = async (props) =>{
        try{
            const whichItemQuery = query(userRef ,where("uid","!=",null));
            const abc = await getDocs(whichItemQuery)
            console.log(whichItemQuery);
            abc.forEach((doc) =>{
                console.log(doc);
            })
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        asddsaasd()
        asd2()
        console.log(userArray);
    },[userArray])
    

    // useEffect(()=>{
    //     const fetchItemData = async () =>{
    //         try{
    //             const resp = await fetch(`https://api.coincap.io/v2/assets`)
    //             const data = await resp.json()
    //             console.log(data);
    //             const asdasd = await getDocs(doc(asdasdRef,))
    //         }
            
    //         catch(err){
    //             console.error(err);
    //         }
    //     }
        
    //     fetchItemData()
    // },[])
}

export default FavoriteById