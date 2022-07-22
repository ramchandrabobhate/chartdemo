import React from 'react'
import {Pie} from 'react-chartjs-2'
import  {chart as chartjs} from 'chart.js/auto'

function Pichart({chartdata}) {
  return (
    <div style={{marginTop:'5%',width:'40%'}}>
      <h2>Pi Chart</h2>
    <Pie data={chartdata} ></Pie>
    </div>
  )
}

export default Pichart