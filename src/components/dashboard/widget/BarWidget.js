import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Color } from '../WidgetConfig';

export default class BarWidget extends PureComponent {
  getBar = () => {
    const keysArr = Object.keys(this.props.data[0]).slice(1);
    const barArr = [];
    keysArr.forEach((item, index) => {
      barArr.push(<Bar dataKey={item} stackId="a" fill={Color[index]} />);
    });
    return barArr;
  };

  render() {
    return (
      <div style={{ width: this.props.chartConfig.width, height: this.props.chartConfig.height }}>
        <ResponsiveContainer>
          <BarChart
            width={this.props.chartConfig.width}
            height={this.props.chartConfig.height}
            margin={this.props.chartConfig.margin}
            barCategoryGap={this.props.chartConfig.barCategoryGap}
            data={this.props.data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {this.getBar()}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

BarWidget.defaultProps = {
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
