import { Shipment } from "../ShipmentData";
import { Aggregator } from "./Types";

let uniqueCustomers: string[] | null = null;
let uniqueModes: string[] | null = null;
let uniqueStatus: string[] | null = null;
let uniqueDestinations: string[] | null = null;
let countsByStatus: Aggregator[] | null = null;
let countsByCustomer: Aggregator[] | null = null;
let countsByDestination: Aggregator[] | null = null;

export function getUniqueCustomers(shipmentData: Shipment[]): string[] {
    if (uniqueCustomers === null) {
        uniqueCustomers = getUniqueValues(shipmentData, 'Client Name');
    }

    return uniqueCustomers;
}

export function getUniqueModes(shipmentData: Shipment[]): string[] {
    if (uniqueModes === null) {
        uniqueModes = getUniqueValues(shipmentData, 'Mode');
    }

    return uniqueModes;
}

export function getUniqueStatus(shipmentData: Shipment[]): string[] {
    if (uniqueStatus === null) {
        uniqueStatus = getUniqueValues(shipmentData, 'Status');
    }

    return uniqueStatus;
}

export function getUniqueDestinations(shipmentData: Shipment[]): string[] {
    if (uniqueDestinations === null) {
        uniqueDestinations = getUniqueValues(shipmentData, 'Destination');
    }

    return uniqueDestinations;
}

export function getCountByStatus(shipmentData: Shipment[]): Aggregator[] {
    if (countsByStatus === null) {
        const countsByStatusMap: { [key: string]: number } = {};

        shipmentData.map((shipment: Shipment) => {
            if (!countsByStatusMap.hasOwnProperty(shipment.Status)) {
                countsByStatusMap[shipment.Status] = 0;
            }
    
            countsByStatusMap[shipment.Status] = countsByStatusMap[shipment.Status] + 1;
        });
    
        countsByStatus = Object.keys(countsByStatusMap).map((key: string) => {
            return { label: key, count: countsByStatusMap[key] };
        })
    
    }
    
    return countsByStatus;
}

export function getCountByCustomer(shipmentData: Shipment[]): Aggregator[] {
    if (countsByCustomer === null) {
        const countsByCustomerMap: { [key: string]: any } = {};

        shipmentData.map((shipment: Shipment) => {
            if (!countsByCustomerMap.hasOwnProperty(shipment['Client Name'])) {
                countsByCustomerMap[shipment['Client Name']] = [];
            }
    
            countsByCustomerMap[shipment['Client Name']].push(shipment);
        });
    
        countsByCustomer = Object.keys(countsByCustomerMap).map((key: string) => {
            return { 
                label: key, 
                count: countsByCustomerMap[key].length, 
                id: key, 
                warningLevel: getCustomerWarningLevel(shipmentData, key, 'Client Name') 
            };
        })
    
    }
    
    return countsByCustomer;
}

export function getCountByDestination(shipmentData: Shipment[]): Aggregator[] {
    if (countsByDestination === null) {
        const countsByDestionationMap: { [key: string]: any } = {};

        shipmentData.map((shipment: Shipment) => {
            if (!countsByDestionationMap.hasOwnProperty(shipment.Destination)) {
                countsByDestionationMap[shipment.Destination] = [];
            }
    
            countsByDestionationMap[shipment.Destination].push(shipment);
        });
    
        countsByDestination = Object.keys(countsByDestionationMap).map((key: string) => {
            return { 
                label: key, 
                count: countsByDestionationMap[key].length, 
                id: key, 
                warningLevel: getCustomerWarningLevel(shipmentData, key, 'Destination') 
            };
        })
    
    }
    
    return countsByDestination;
}

function getCustomerWarningLevel(shipmentData: Shipment[], value: string, propertyName: string): number {
    let warningLevel: number = 0;
    const clientData: Shipment[] = shipmentData.filter((shipment) => shipment[propertyName] === value)

    let totalWarningStatus = 0;
    const warningStatusLevels: string[] = ['transporterror', 'cancelled'];
    clientData.forEach((shipment: Shipment) => {
        if (warningStatusLevels.includes(shipment.Status.toLowerCase().trim())) {
            totalWarningStatus++;
        }
    })

    const warningPercent = totalWarningStatus / clientData.length;

    if (warningPercent > .25) {
        warningLevel = 1;
    }

    if (warningPercent > .4) {
        warningLevel = 2;
    }

    return warningLevel;
}

function getUniqueValues(data: any[], key: string) {
    const map: any = {};
    data.forEach((obj: any) => {
        if (!map.hasOwnProperty(obj[key])) {
            map[obj[key]] = true;
        }
    });

    return Object.keys(map);
}