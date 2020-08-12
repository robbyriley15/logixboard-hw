import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
import { CanvasPoint } from '../helpers/Types';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class BarChart extends React.Component<{data: CanvasPoint[], title: string, xTitle: string, yTitle: string}> {

    render() {
        const options = {
			title: {
				text: this.props.title
            },
            axisY:{
                title: this.props.yTitle,
            },
            axisX:{
                title: this.props.xTitle,
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
			<CanvasJSChart options = {options}/>
		);
	}
}