import React from 'react';
import { useParams } from 'react-router-dom';
import { ShipmentDataTable } from '../components/ShipmentDataTable';
import { filterByClient } from '../helpers/ShipmentHelper';
import { shipmentData } from '../ShipmentData';


export function ClientPage() {
    let { clientName } = useParams();
 
    return <div>
        <h1>Shipments for {clientName}</h1>
        <ShipmentDataTable shipmentData={filterByClient(shipmentData, clientName)} />
    </div>;
}