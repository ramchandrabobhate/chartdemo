import React from 'react'
import {Bar} from 'react-chartjs-2'
import {chart as chartjs} from 'chart.js/auto'
// import {Barchart} from 'chart.js'
function Barchart({chartdata}) {
   
  return (
    <div style={{width:'60%'}}>
      <h1>Bar Chart</h1>
        <Bar data={chartdata} ></Bar>
        </div>
  )
}

export default Barchart