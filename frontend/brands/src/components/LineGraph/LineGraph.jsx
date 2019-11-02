import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react.js';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LineGraph extends Component {
    render() {
        const options = {
            animationEnabled: true,
            zoomEnabled: true,
            axisY: {
                title: "Metric tons"
            },
            title: {
                text: "Estimated Scope 1 and 2 GHG Emission Totals"
            },
            subtitles:[
                {
                    text: "Click the legend to hide a data series",
                    fontColor: "gray"
                }
                ],
            legend: {
                fontSize: 16,
                cursor: "pointer",
                    itemclick: function (e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
                    e.chart.render();
                },
                // itemmouseover: function(e){e.dataSeries.dataPoints.set("markerSize, 20")}
            },
            data: [{				
                type: "spline",
                name: "Coca Cola Inc",
                showInLegend: true,
                connectNullData: true,
                // markerSize: 10,
                toolTipContent: "{label}<br/>{name}: {y}",
                dataPoints: [
                    
                    { label: "2015",  y: 5580000 },
                    { label: "2016", y: 5450000 },
                    { label: "2017", y: 5540000 },
                    { label: "2018",  y: 5550000 },
                    
                ]
            },
            {				
                type: "spline",
                name: "Procter & Gamble",
                showInLegend: true,
                connectNullData: true,
                toolTipContent: "{label}<br/>{name}: {y}",
                dataPoints: [
                    
                    { label: "2015",  y: 5100000 },
                    { label: "2016", y: 4800000 },
                    { label: "2017", y: 4600000 },
                    { label: "2018",  y: null },
                ]
            },
            {				
                type: "spline",
                name: "General Mills",
                showInLegend: true,
                connectNullData: true,
                toolTipContent: "{label}<br/>{name}: {y}",
                dataPoints: [
                    
                    { label: "2015",  y: 945000 },
                    { label: "2016", y: 882000 },
                    { label: "2017", y: 831000 },
                    { label: "2018",  y: 765000 },
                ]
            },
            {				
                type: "spline",
                name: "Johnson + Johnson",
                showInLegend: true,
                connectNullData: true,
                toolTipContent: "{label}<br/>{name}: {y}<br/>{indexLabel}",
                dataPoints: [
                    
                    { label: "2015",  y: null },
                    { label: "2016", y: 1150000, indexLabel: "Scope 2 market-based emissions not included", indexLabelFontWeight: "bold" },
                    { label: "2017", y: 1730000 },
                    { label: "2018",  y: 1680000  },
                ]
            },
            // {				
            //     type: "spline",
            //     name: "US Per Capita",
            //     showInLegend: true,
            //     connectNullData: true,
            //     toolTipContent: "{label}<br/>{name}: {y}",
            //     dataPoints: [
            //         { label: "2014", y: 16.5},
            //         { label: "2015",  y: null,},
            //         { label: "2016", y: null },
            //         { label: "2017", y: 15.7 },
            //         { label: "2018",  y: null },
            //     ]
            // },
        ]
            
        }  
            
        return (
            <div>
                <CanvasJSChart options = {options}
                    /* onRef = {ref => this.chart = ref} */
                />
            </div>
        );
    }
};