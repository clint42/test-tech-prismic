import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs';
import moment from 'moment';

import { chartData } from '../utils/dataProcessing';

class ConsumptionCDN extends Component {
    render() {
        return (
            <div>
                <LineChart
                    data={chartData(this.props.clientLogs)}
                    options={{
                        fill: true,
                    }}
                    width="800" height="450"
                />
            </div>
        );
    }
}



export default ConsumptionCDN;