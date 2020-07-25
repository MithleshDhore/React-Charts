import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Color } from '../WidgetConfig';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PieWidget extends PureComponent {
  render() {
    return (
      <div style={{ width: this.props.chartConfig.width, height: this.props.chartConfig.height }}>
        <ResponsiveContainer>
          <PieChart width={this.props.chartConfig.width} height={this.props.chartConfig.height}>
            <Pie data={this.props.data[0]} dataKey="value" cx={200} cy={90} outerRadius={45} fill={Color[0]} label={renderCustomizedLabel} labelLine={false} />
            {this.props.data[0].map((entry, index) => (
              <Cell fill={Color[1]} />
            ))}
            <Pie data={this.props.data[1]} dataKey="value" cx={200} cy={90} innerRadius={50} outerRadius={65} fill={Color[5]} label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
