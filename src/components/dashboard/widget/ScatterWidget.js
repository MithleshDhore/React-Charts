import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Color } from '../WidgetConfig';

export default class ScatterWidget extends PureComponent {
  render() {
    return (
      <div style={{ width: this.props.chartConfig.width, height: this.props.chartConfig.height }}>
        <ResponsiveContainer>
          <ScatterChart width={this.props.chartConfig.width} height={this.props.chartConfig.height} margin={this.props.chartConfig.margin}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="minutes" />
            <YAxis type="number" dataKey="y" name="Reports" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="booking" data={this.props.data} fill={Color[0]} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

ScatterWidget.defaultProps = {
  chartConfig: {
    width: '100%',
    height: 300,
    barCategoryGap: 15,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
};
