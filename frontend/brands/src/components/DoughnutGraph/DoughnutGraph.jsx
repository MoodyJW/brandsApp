import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react.js';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class DoughnutGraph extends Component {
    render() {
        const options = {
                title:{
                  text: "Estimated Scope 1 and 2 GHG Emission Totals for 2017"
                },
                data: [
                {
                 type: "doughnut",
                 showInLegend: true,
                 dataPoints: [
                 {  y: 5540000, indexLabel: "Coca Cola", legendText: "Coca Cola" },
                 {  y: 4600000, indexLabel: "Procter & Gamble", legendText: "Procter & Gamble"},
                 {  y: 1730000, indexLabel: "Johnson + Johnson", legendText: "Johnson + Johnson"},
                 {  y: 831000, indexLabel: "General Mills", legendText: "General Mills"},
                 ]
               }
               ]
             };
            
        return (
            <div>
                <CanvasJSChart options = {options}
                    /* onRef = {ref => this.chart = ref} */
                />
            </div>
        );
    }
};