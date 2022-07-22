import React from 'react'
import {Line} from 'react-chartjs-2'
import {chart as chartjs} from 'chart.js/auto'

function Linechart({chartdata}) {
  return (
    <div style={{width:'60%'}}>
      <h1>Line Chart</h1>
    <Line data={chartdata} ></Line>
    </div>
  )
}

export default Linechart