import React from 'react';
import { PieChart } from '../components/PieChart';
import { shipmentData, Shipment } from '../ShipmentData';
import './DashboardPage.css';
import { Summary } from '../components/Summary';
import { getCountByStatus, getCountByClient, getCountByDestination } from '../helpers/ShipmentHelper';
import { OrderedList } from '../components/OrderedList';
import { BarChart } from '../components/BarChart';

export class DashboardPage extends React.Component {

    getModePieChartData() {
        const modeCountMap: any = {};
        shipmentData.forEach((shipment: Shipment) => {
            if (!modeCountMap.hasOwnProperty(shipment.Mode)) {
                modeCountMap[shipment.Mode] = 0;
            }

            modeCountMap[shipment.Mode] = modeCountMap[shipment.Mode] + 1;
        });

        return Object.keys(modeCountMap).map((key: string) => {
            return {label: key, y: modeCountMap[key]};
        });
    }

    getArrivalDateBarChartData() {
        const estimatedArrivalKey = 'Estimated Arrival';
        const arrivalsOnDateMap: any = {};

        shipmentData.forEach((shipment: Shipment) => {
            if (!arrivalsOnDateMap.hasOwnProperty(shipment[estimatedArrivalKey])) {
                arrivalsOnDateMap[shipment[estimatedArrivalKey]] = 0;
            }

            arrivalsOnDateMap[shipment[estimatedArrivalKey]] = arrivalsOnDateMap[shipment[estimatedArrivalKey]] + 1;
        });

        return Object.keys(arrivalsOnDateMap).map((key: string) => {
            return {label: key, y: arrivalsOnDateMap[key]};
        }).sort((a, b) => {
            const aDate = new Date(a.label);
            const bDate = new Date(b.label);
            return aDate < bDate ? -1 : 1;
        });
    }

    render() {
        return <div>
            <div className="content-row">
                <div className="message-container tile-container">
                    <div className="user-welcome">Welcome User!</div> 
                    <span>
                        Announcements, news, releases, great insights into the world etc.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                    </div>
            </div>

            <div className="content-row">
                <div className="summary-container tile-container">
                    <Summary countByStatus={getCountByStatus(shipmentData)} total={shipmentData.length}/>
                </div>
                <div className="shipping-mode-border tile-container">
                    <div className="shipping-mode-container">
                        <PieChart data={this.getModePieChartData()} title='Shipping Modes'/>
                    </div>
                </div>
                <div className="customer-tile-container tile-container">
                    <div className="customer-container">
                        <div className="customer-list-title"><span>Client</span><span>Shipments</span></div>
                        <OrderedList data={getCountByClient(shipmentData)} />
                    </div>
                </div>
            </div>
            <div className="content-row">
                <div className="arrival-chart-border tile-container">
                    <div className="arrival-chart-container">
                        <BarChart 
                            data={this.getArrivalDateBarChartData()} 
                            title='Estimated Arrivals' 
                            yTitle='Shipments'
                            xTitle='Estimated Arrival Date'/>
                    </div>
                </div>
                <div className="destination-tile-container tile-container">
                    <div className="destination-container">
                        <div className="customer-list-title"><span>Destination</span><span>Shipments</span></div>
                        <OrderedList data={getCountByDestination(shipmentData).slice(0, 10)} />
                    </div>
                </div>
            </div>
        </div>;
    }
}