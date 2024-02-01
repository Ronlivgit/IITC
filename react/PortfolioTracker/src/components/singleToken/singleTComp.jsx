import { useState } from "react";
import App from "../../App";
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'


function SingleTokenPrint(props){
    // console.log(useParams());
    const { tokenID } = useParams()
    const [showToken,newShowToken] = useState([])

    // fetch("https://api.coincap.io/v2/" + tokenName)
    // .then((res)=>{return res.json()})
    // .then((data)=> {

    // })
    // .catch((err) => {console.error(err)})
    
    return(
        <>
            <div className="singleToken" >
                <h2>Token's name : {props.watchedItem.name} ({props.watchedItem.symbol}) </h2>
                <h3>Price : {props.watchedItem.priceUsd.toFixed(2)}$ </h3>
                <h4>24hr change : {props.watchedItem.changePercent24Hr.toFixed(2)}% </h4>
                <h4>Token's Marketcap : {props.watchedItem.marketCapUsd.toFixed(2)} </h4>
                <h5>Token's rank : {props.watchedItem.rank} </h5>
                <button onClick={props.removeItem} itemIndex={props.watchedItem.rank} className="removerBTN">Press to return</button>
            </div>
        </>
    )
}

export default SingleTokenPrint