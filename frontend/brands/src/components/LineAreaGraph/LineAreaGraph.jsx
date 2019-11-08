import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react.js';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LineAreaChart extends Component {
    render() {
		const options = {
			title: {
				text: "Coca Cola Total Water Withdrawn"
            },
            axisY: {
                suffix: " megaliters"
            },
            axisX2: {
                suffix: "megaliters"
            },
            animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "splineArea",
				dataPoints: [
                    { label: "2010",  y: 292920 },
					{ label: "2011", y: 292402 },
					{ label: "2012", y: 302103 },
					{ label: "2013",  y: 299756 },
					{ label: "2014",  y: 301068 },
					{ label: "2015",  y: 300733 },
					{ label: "2016", y: 294925 },
					{ label: "2017", y: 288990 },
					{ label: "2018",  y: 298797 },
				]
			}
			]
		}
		return (
            <CanvasJSChart options = {options}/>
		);
	}
}