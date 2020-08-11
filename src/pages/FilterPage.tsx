import React from 'react';
import { shipmentData } from '../ShipmentData';
import { ShipmentDataTableFilters } from '../components/ShipmentDataTableFilters';

export function FilterPage() {
    return (
        <div>
            <ShipmentDataTableFilters shipmentData={shipmentData} />
        </div>
    );
  }