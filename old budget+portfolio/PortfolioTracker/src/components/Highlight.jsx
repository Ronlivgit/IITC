import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc, query , where} from 'firebase/firestore'
import { dataBase , fireAuth } from '../config/firebaseConfig'
import { useEffect, useState } from "react";
import App from "./../App";
// import { Line } from 'react-chartjs-2';
import PrintHighLighted from './HighlightPrint'


function HighLightItem() {

    const { tokenID } = useParams()
    
    const [item,newItem] = useState()

    useEffect(()=>{
        const fetchItemData = async () =>{
            try{
                const resp = await fetch(`https://api.coincap.io/v2/assets/${tokenID}`)
                const data = await resp.json()
                console.log(data);
                newItem(data.data)
                console.log(item);
            }
            
            catch(err){
                console.error(err);
            }
        }
        
        fetchItemData()
    },[tokenID])

    
    
    console.log(item);
    if(item != null){
        return(
            <>
            <section className='highlightedToken'>
                <h1>Highlight Single token :</h1>
                <PrintHighLighted highLighted={item} />

            </section>
            </>
        )
    }
    else{
        return (
            <h1>asd</h1>
        )
    }

}

export default HighLightItem
