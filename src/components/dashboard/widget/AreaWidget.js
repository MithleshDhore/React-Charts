import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const color = ['#41bee9', '#ee4422', '#bbcb50', '#5fbcbb', '#348779', '#85ba54']

export default class AreaWidget extends PureComponent {

    render() {
        return (
            <div style={{ width: this.props.chartConfig.width, height: this.props.chartConfig.height }}>
                <ResponsiveContainer>
                    <AreaChart
                        width={this.props.chartConfig.width}
                        height={this.props.chartConfig.height}
                        data={this.props.data}
                        margin={this.props.margin}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop stopColor={color[0]} stopOpacity={1} />
                                <stop stopColor={color[1]} stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="averageCost" stroke={color[1]} fill="url(#splitColor)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
