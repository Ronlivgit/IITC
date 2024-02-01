// import HighLightItem from "./Highlight";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import {highLightData} from './HighlightPrint'
import { useState } from "react";

function HighLightGraph({ props }) {

    const [userData, setUserData] = useState({
        labels: props.highLightData.map((data) => data.date),
        datasets: [
          {
            label: "Price",
            data: props.highLightData.map((data) => data.priceUsd),
          },
        ],
      });

      useState(()=>{})
    
      // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
    
      return (
        <>
          <div style={{ width: 700 }}>
            <LineChart chartData={highLightData} />
          </div>
        </>
      );
}

export default HighLightGraph;


