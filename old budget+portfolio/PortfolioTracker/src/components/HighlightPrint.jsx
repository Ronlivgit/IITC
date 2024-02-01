import HighLightItem from "./Highlight";
import {React, PureComponent } from "react";
import { Link } from "react-router-dom";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function PrintHighLighted(props){


    return (
        <>
            <div className="highlightedToken" >
                <h2>Token's name : {props.highLighted.name} ({props.highLighted.symbol}) </h2>
                <h3>Price : {parseInt(props.highLighted.priceUsd).toFixed(2)}$ </h3>
                <h4>24hr change : {parseInt(props.highLighted.changePercent24Hr).toFixed(2)}% </h4>
                <h4>Token's Marketcap : {parseInt(props.highLighted.marketCapUsd).toFixed(2)} </h4>
                <h5>Token's rank : {props.highLighted.rank} </h5>
                <button ><Link to={"/tokens"}>Press to return back</Link></button>
            </div>
        </>
    )
}

export default PrintHighLighted