import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
import { CanvasPoint } from '../helpers/Types';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class BarChart extends React.Component<{data: CanvasPoint[], title: string}> {

    render() {
        const options = {
			title: {
				text: this.props.title
            },
            axisY:{
                title: "Shipments",
            },
            axisX:{
                title: "Estimated Arrival Date",
            },
            width: 700,
			data: [
			{
				type: "column",
				dataPoints: this.props.data
			}
            ]
        }
        
		return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
	}
}