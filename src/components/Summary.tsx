import React from 'react';
import { Aggregator } from '../helpers/Types';
import './Summary.css';

export class Summary extends React.Component<{ countByStatus: Aggregator[], total: number }> {

    getCountClassForStatus(aggregator: Aggregator) {
        const sanitizedLabel = aggregator.label.trim().toLowerCase();
        switch (sanitizedLabel) {
            case 'arrived':
                return 'arrived-count';
            case 'transporterror':
                return 'transporterror-count';
            case 'in transit':
                return 'intransit-count';
            case 'roll-over':
                return 'roll-over-count';
            case 'cancelled':
                return 'cancelled-count';
            case 'customs hold':
                return 'customs-hold-count';
            default:
                return '';
          }
    }

    render() {
        return <div className="summary">
            <div className="summary-row total-row">
                <span>{this.props.total}</span>
                <span>Total Shipments</span>
            </div>
            {
                this.props.countByStatus.map((aggregator: Aggregator) => {
                    return <div className="summary-row">
                        <span className={this.getCountClassForStatus(aggregator) + ' count-circle'}>{aggregator.count}</span>
                        <span className="summary-label">{aggregator.label}</span>
                    </div>
                })
            }
        </div>
    }
}