import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
import { CanvasPoint } from '../helpers/Types';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class PieChart extends React.Component<{data: CanvasPoint[], title: string}> {

	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: this.props.title
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: this.props.data
			}]
		}
		return (
            <CanvasJSChart options = {options}/>
		);
	}
}