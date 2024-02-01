import Tokens from "../../pages/Tokens";
import App from "../../App";
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'
import HighLightItem from '../Highlight'
import { useState } from "react";


function TokenPrint(props) {

    const [isMarked,setIsMarked] = useState(false)
    
    return (
        <>
        <div className="tokenBackground">
            <div className="tokenInfoDiv" >
                <h2>Token's name : {props.trInfo.name} ({props.trInfo.symbol}) </h2>
                <h3>Price : {props.trInfo.priceUsd.toFixed(2)}$ </h3>
                <h4>24hr change : {props.trInfo.changePercent24Hr.toFixed(2)}% </h4>
                <h4>Token's Marketcap : {props.trInfo.marketCapUsd.toFixed(2)} </h4>
                <h5>Token's rank : {props.trInfo.rank} </h5>
                <button className="watchBtn" onClick={()=>{props.addToWatch(props.trInfo,props.loggedUser),setIsMarked(!isMarked);}} itemToWatch={props.rankIndex}>Add to Watch list</button>
                <button className="highlightBtn" ><Link to={`/tokens/${props.trInfo.id}`}>Press to highlight</Link></button>
            </div>
        </div>
        </>
    )
}


// onClick={()=>{props.addToWatch(props.trInfo.id,props.loggedUser)}}
export default TokenPrint