import React from 'react';
import { MultipleSelectDropdown } from './MultiSelectDropdown'
import { Shipment } from '../ShipmentData';
import { getUniqueCustomers, getUniqueModes, getUniqueStatus, getUniqueDestinations } from '../helpers/ShipmentHelper';
import { ShipmentDataTable } from './ShipmentDataTable';
import './ShipmentDataTableFilters.css';

export class ShipmentDataTableFilters extends React.Component<{shipmentData: Shipment[]}, {filters: any}> {

    constructor(props: any) {
        super(props);
        this.state = { filters: {} };
        this.filterShipments.bind(this);
        this.onFilterChange.bind(this);
    }

    onFilterChange(values: string[], key: string) {
        this.setState((state) => {
            const newState: any = {...state};
            newState.filters[key] = values;

            if (values.length === 0) {
                delete newState.filters[key];
            }

            return newState;
        })
    }

    filterShipments(shipmentData: Shipment[]) {
        return shipmentData.filter((shipment: any) => {
            let isMatch = true;

            Object.keys(this.state.filters).forEach((key: string) => {
                if (!this.state.filters[key].includes(shipment[key])) {
                    isMatch = false;
                    return;
                }
            })

            return isMatch;
        })
    }

    render() {
        return <div>
            <div className="filter-container">
                <div className="filters-label">Filters:</div>
                <MultipleSelectDropdown 
                    label='Client' 
                    values={getUniqueCustomers(this.props.shipmentData)} 
                    onChange={(values) => this.onFilterChange(values, 'Client Name')} />
                <MultipleSelectDropdown 
                    label='Mode' 
                    values={getUniqueModes(this.props.shipmentData)} 
                    onChange={(values) => this.onFilterChange(values, 'Mode')} />
                <MultipleSelectDropdown 
                    label='Status' 
                    values={getUniqueStatus(this.props.shipmentData)} 
                    onChange={(values) => this.onFilterChange(values, 'Status')} />
                <MultipleSelectDropdown 
                    label='Destination' 
                    values={getUniqueDestinations(this.props.shipmentData)} 
                    onChange={(values) => this.onFilterChange(values, 'Destination')} />
            </div>
            <ShipmentDataTable shipmentData={this.filterShipments(this.props.shipmentData)} />
        </div>
    }
}