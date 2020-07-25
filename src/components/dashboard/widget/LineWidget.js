import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const color = ['#41bee9', '#ee4422', '#bbcb50', '#5fbcbb', '#348779', '#85ba54']

export default class LineWidget extends PureComponent {

    render() {
        return (
            <div style={{ width: this.props.chartConfig.width, height: this.props.chartConfig.height }}>
                <ResponsiveContainer>
                    <LineChart
                        width={this.props.chartConfig.width}
                        height={this.props.chartConfig.height}
                        data={this.props.data}
                        margin={this.props.chartConfig.margin}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Domestic" stroke={color[0]} strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="International" stroke={color[1]} strokeDasharray="3 4 5 2" />
                        <Line type="monotone" dataKey="Volume" stroke={color[2]} strokeDasharray="7 9 3 1" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

LineWidget.defaultProps = {
    chartConfig: {
      width: '100%',
      height: 300,
      barCategoryGap: 15,
      margin: {
        top: 20, right: 30, left: 20, bottom: 5,
      }
    }
  };
