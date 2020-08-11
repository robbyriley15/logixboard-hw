import React from 'react';
import { Shipment } from '../ShipmentData';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      'background-color': 'white'
    },
    header: {
        'font-weight': 'bold'
    }
  });

export type ShipmentDataTableProps = {
    shipmentData: Shipment[]
}

export function ShipmentDataTable(props: ShipmentDataTableProps) {
    
        const classes = useStyles();

    return <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell className={classes.header}>Client</TableCell>
            <TableCell className={classes.header} align="right">Status</TableCell>
            <TableCell className={classes.header} align="right">Origin</TableCell>
            <TableCell className={classes.header} align="right">Destination</TableCell>
            <TableCell className={classes.header} align="right">Mode</TableCell>
            <TableCell className={classes.header} align="right">Estimated Departure</TableCell>
            <TableCell className={classes.header} align="right">Estimated Arrival</TableCell>
            <TableCell className={classes.header}>Shipment ID</TableCell>

        </TableRow>
        </TableHead>
        <TableBody>
        {props.shipmentData.map((row) => (
            <TableRow key={row['Shipment ID']}>
                <TableCell scope="row">{row['Client Name']}</TableCell>
                <TableCell align="right">{row['Status']}</TableCell>
                <TableCell align="right">{row['Origin']}</TableCell>
                <TableCell align="right">{row['Destination']}</TableCell>
                <TableCell align="right">{row['Mode']}</TableCell>
                <TableCell align="right">{row['Estimated Departure']}</TableCell>
                <TableCell align="right">{row['Estimated Arrival']}</TableCell>
                <TableCell component="th">
                    {row['Shipment ID']}
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
}

