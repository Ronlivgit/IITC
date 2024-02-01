import HighLightItem from "./Highlight";
import {React, PureComponent, useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, useNavigate, Link, useParams} from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import HighLightGraph from "./HighlightGraph";


function PrintHighLighted(props){

    const {tokenID} = useParams()

    const [userData, setUserData] = useState({})

    const highLightData = async ()=>{
        try{
            // api.coincap.io/v2/assets/bitcoin/history?interval=d1
            const resp = await fetch(`https://api.coincap.io/v2/assets/${tokenID}/history?interval=d1`)
            const data = await resp.json()
            setUserData({
                labels: data.data.map((data) => data.date),
                datasets: [
                  {
                    label: "Price",
                    data: data.data.map((data) => data.priceUsd),
                    backgroundColor: [
                        "rgba(75,192,192,1)"
                      ],
                      borderColor: "black",
                      borderWidth: 2,
                  },
                ],
              });
        }
        
        catch(err){
            console.error(err);
        }
    }
    
    console.log(userData);
    useEffect(()=>{
        highLightData()
    },[])

    return (
        <>
            <div className="highlightedDiv" >
                <h2>Token's name : {props.highLighted.name} ({props.highLighted.symbol}) </h2>
                <h3>Price : {parseInt(props.highLighted.priceUsd).toFixed(2)}$ </h3>
                <h4>24hr change : {parseInt(props.highLighted.changePercent24Hr).toFixed(2)}% </h4>
                <h4>Token's Marketcap : {parseInt(props.highLighted.marketCapUsd).toFixed(2)} </h4>
                <h5>Token's rank : {props.highLighted.rank} </h5>
                <button ><Link to={"/tokens"}>Press to return back</Link></button>
                <div style={{ width: 700 }}>
                    <LineChart chartData={userData} />
                </div>
            </div>
        </>
    )
}

export default PrintHighLighted