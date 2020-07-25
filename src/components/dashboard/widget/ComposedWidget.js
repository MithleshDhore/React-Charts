import React, { PureComponent } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Color } from '../WidgetConfig';

export default class ComposedWidget extends PureComponent {
  render() {
    return (
      <div style={{ width: this.props.chartConfig.width, height: this.props.chartConfig.height }}>
        <ResponsiveContainer>
          <ComposedChart layout="vertical" width={this.props.chartConfig.width} height={this.props.chartConfig.height} data={this.props.data} margin={this.props.margin}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Area dataKey="Business" fill="#d6d6da" stroke="#d6d6da" />
            <Bar dataKey="Coach" barSize={20} fill={Color[1]} />
            <Line dataKey="Others" stroke={Color[2]} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

ComposedWidget.defaultProps = {
  chartConfig: {
    width: 500,
    height: 300,
    barCategoryGap: 8,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }
  }
};
