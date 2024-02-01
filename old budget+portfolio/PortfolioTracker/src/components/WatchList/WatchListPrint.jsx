import Watchlist from "../../pages/WatchList";
import App from "../../App";
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'

function WatchingPrint(props) {

    return (
        <>
            <div className="watchedToken" >
                <h2>Token's name : {props.watchedItem.name} ({props.watchedItem.symbol}) </h2>
                <h3>Price : {props.watchedItem.priceUsd.toFixed(2)}$ </h3>
                <h4>24hr change : {props.watchedItem.changePercent24Hr.toFixed(2)}% </h4>
                <h4>Token's Marketcap : {props.watchedItem.marketCapUsd.toFixed(2)} </h4>
                <h5>Token's rank : {props.watchedItem.rank} </h5>
                <button onClick={()=>{props.removeFromWatch(props.watchedItem,props.loggedUser)}} 
                itemIndex={props.watchedItem.rank} className="removerBTN">Press to remove</button>
                <button ><Link to={`/Watchlist/${props.watchedItem.id}`}>Press to highlight</Link></button>
            </div>
        </>
    )
}
// onClick={props.highlightToken} itemID={props.watchedItem.id} className="highlightBtn"
// x.name , x.symbol , x.priceUsd , x.changePercent24Hr , x.marketCapUsd , x.rank  


export default WatchingPrint