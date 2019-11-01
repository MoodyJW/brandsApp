import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react.js';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LineGraph2 extends Component {
    render() {
        const options = {
            animationEnabled: true,
            zoomEnabled: true,
            axisY: {
                title: "GHG emissions in millions of metric tons"
            },
            title: {
                text: "Scope 1 and 2 GHG Emission Totals"
            },
            legend: {
                fontSize: 20,
                itemmouseover: function(e){console.log(e.dataSeries.dataPoints)}
            },
            data: [{				
                type: "spline",
                name: "Coca Cola Inc",
                showInLegend: true,
                connectNullData: true,
                markerSize: 10,
                toolTipContent: "{label}<br/>{name}: {y}",
                dataPoints: [
                    { label: "2015",  y: 5.58  },
                    { label: "2016", y: 5.45  },
                    { label: "2017", y: 5.54  },
                    { label: "2018",  y: 5.55 },
                    { label: "2019", y: null },
                ]
            },
            {				
                type: "spline",
                name: "Procter & Gamble",
                showInLegend: true,
                connectNullData: true,
                toolTipContent: "{label}<br/>{name}: {y}",
                dataPoints: [
                    { label: "2015",  y: 5.1 },
                    { label: "2016", y: 4.8 },
                    { label: "2017", y: 4.6 },
                    { label: "2018",  y: null },
                    { label: "2019",  y: null }
                ]
            },
            {				
                type: "spline",
                name: "General Mills",
                showInLegend: true,
                connectNullData: true,
                toolTipContent: "{label}<br/>{name}: {y}",
                dataPoints: [
                    { label: "2015",  y: .945 },
                    { label: "2016", y: .882 },
                    { label: "2017", y: .831 },
                    { label: "2018",  y: .765 },
                    { label: "2019",  y: null }
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
                    { label: "2016", y: 1.15, indexLabel: "Scope 2 market-based emissions not included", indexLabelFontWeight: "bold" },
                    { label: "2017", y: 1.73 },
                    { label: "2018",  y: 1.68  },
                    { label: "2019",  y: null }
                ]
            },
            // {				
            //     type: "spline",
            //     name: "Coca Cola Inc",
            //     showInLegend: true,
            //     toolTipContent: "{label}<br/>{name}: {y}",
            //     dataPoints: [
            //         { label: "2015",  y: 10  },
            //         { label: "2016", y: 15  },
            //         { label: "2017", y: 25  },
            //         { label: "2018",  y: 30  },
            //         { label: "2019",  y: 28  }
            //     ]
            // },
            // {				
            //     type: "spline",
            //     name: "Coca Cola Inc",
            //     showInLegend: true,
            //     toolTipContent: "{label}<br/>{name}: {y}",
            //     dataPoints: [
            //         { label: "2015",  y: 10  },
            //         { label: "2016", y: 15  },
            //         { label: "2017", y: 25  },
            //         { label: "2018",  y: 30  },
            //         { label: "2019",  y: 28  }
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