import React from 'react'
import { useState } from 'react'
import { Userdata } from '../Data.js'
import Barchart from './Barchart.js';
import Linechart from './Linechart.js';
import Pichart from './Pichart.js';
import UserData from '../Data.js'

function Viewchart() {
    const [userdata, setUserdata] = useState(
        {
            labels: Userdata.map((data) => data.year),
            datasets: [{
                label: "Rxber count",
                data: Userdata.map((data) => data.rxbercount),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    "#FFC0CB"
                ],
                borderColor: "black",
                borderWidth: 2,

            }]
        }
    );
    return (

        <div style={{ alignItems: 'center', margin: '0', top: '20%', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{top:'0'}}>
                <h4>Design develop for learning purpose by @ramchandra Bobhate  </h4>
            </div>
            <Barchart chartdata={userdata}></Barchart>
            <Linechart chartdata={userdata}></Linechart>
            <Pichart chartdata={userdata}></Pichart>
        </div>

    )
}

export default Viewchart