import React from 'react';
import './OrderedList.css';
import { Link } from 'react-router-dom';
import { mediumWarningLevelPercent, highWarningLevelPercent } from '../helpers/ShipmentHelper';

export type OrderedListData = {
    label: string,
    count: number,
    link?: string,
    warningLevel?: number
}

export class OrderedList extends React.Component<{data: OrderedListData[]}> {

    getWarningLevelClass(warningLevel: number | undefined): string {
        if (warningLevel === 1) {
            return 'warning-medium';
        } else if (warningLevel === 2) {
            return 'warning-high';
        }

        return '';
    }

    getWarningLevelTooltip(warningLevel: number | undefined): string {
        if (warningLevel === 1) {
            return `${mediumWarningLevelPercent} percent of these shipments have a Transport Error or have been Cancelled.`;
        } else if (warningLevel === 2) {
            return `${highWarningLevelPercent} percent of these shipments have a Transport Error or have been Cancelled.`;
        }

        return '';
    }

    render() {
        const dataCopy: OrderedListData[] = JSON.parse(JSON.stringify(this.props.data));
        dataCopy.sort((a: OrderedListData, b: OrderedListData) => b.count - a.count)

        return <ol className="ordered-container">
            {
                dataCopy.map((listData: OrderedListData) => {
                return <li key={listData.label}>
                        <div className="orderedlist-item-container">
                            <span title={this.getWarningLevelTooltip(listData.warningLevel)}
                                className={"ordered-label " + this.getWarningLevelClass(listData.warningLevel)}>
                                    {
                                        listData.link ?
                                        <Link to={listData.link}>{listData.label}</Link>
                                        : <React.Fragment>{listData.label}</React.Fragment>
                                    }
                            </span>
                            <span className="ordered-count">
                                {listData.count}
                            </span>
                        </div>
                    </li>
                })
            }
            </ol>;
    }
}