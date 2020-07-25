import React, { Component, Fragment } from 'react';
import { Card, Col, Row } from 'antd';
import isEmpty from 'lodash/isEmpty';
import PieWidget from './widget/PieWidget';
import BarWidget from './widget/BarWidget';
import ComposedWidget from './widget/ComposedWidget';
import intl from 'react-intl-universal';
import AreaWidget from './widget/AreaWidget';
import ReactTooltip from "react-tooltip";
import MapWidget from './widget/MapWidget';
import LineWidget from './widget/LineWidget';
import ScatterWidget from './widget/ScatterWidget';
import {
  AreaChartFillByValueConfig,
  VerticalComposedChartConfig,
  LineChartConfig,
  PositiveAndNegativeBarChartConfig,
  PositiveAndNegativeBarChartConfig2,
  TwoLevelPieChartConfig,
  MapChartConfig,
  ScatterChartConfig
} from './WidgetConfig'
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    content: '',
  }

  componentDidMount() {
    this.props.fetchAverageCost({})
    this.props.fetchBooking({})
    this.props.fetchBudget({})
    this.props.fetchDelayedFlight({})
    this.props.fetchFlightExpense({})
    this.props.fetchPopulation({})
    this.props.fetchRegionalLoad({})
    this.props.fetchsales({})
    this.props.fetchtrip({})
  }

  setContent = (data) => {
    this.setState({
      content: data
    })
  }

  render() {
    return (
      <Fragment>
        <div className="m-3">
          <Row>
            <Col span={10} md={10}>
              <Card title={intl.get('MAP_HEADER.REGIONAL')}>
                {!isEmpty(this.props.regionalLoad) && <BarWidget data={this.props.regionalLoad} />}
              </Card>
              <Card title={intl.get('MAP_HEADER.DELAYED_FLIGHT')}>
                {!isEmpty(this.props.delayedFlight) && <LineWidget data={this.props.delayedFlight} chartConfig={LineChartConfig} />}
              </Card>
            </Col>
            <Col span={7} md={7}>
              <Card title={intl.get('MAP_HEADER.SALES')}>
                {!isEmpty(this.props.sales) && <BarWidget data={this.props.sales} chartConfig={PositiveAndNegativeBarChartConfig} />}
              </Card>
              <Card title={intl.get('MAP_HEADER.AVERAGE_COST')}>
                {!isEmpty(this.props.averageCost) && <ComposedWidget data={this.props.averageCost} chartConfig={VerticalComposedChartConfig} />}
              </Card>
            </Col>
            <Col span={7} md={7}>
              <Card title={intl.get('MAP_HEADER.TRIP')}>
                {!isEmpty(this.props.trip) && <PieWidget data={this.props.trip} chartConfig={TwoLevelPieChartConfig} />}
              </Card>
              <Card title={intl.get('MAP_HEADER.POPULATION')} style={{ width: MapChartConfig.width, height: MapChartConfig.height }}>
                <MapWidget setTooltipContent={this.setContent} />
                <ReactTooltip backgroundColor='white' textColor='#ee4422'>{this.state.content}</ReactTooltip>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={7} md={7}>
              <Card title={intl.get('MAP_HEADER.FLIGHT_EXPENSE')}>
                {!isEmpty(this.props.flightExpense) && <AreaWidget data={this.props.flightExpense} chartConfig={AreaChartFillByValueConfig} />}
              </Card>
            </Col>
            <Col span={7} md={7}>
              <Card title={intl.get('MAP_HEADER.BOOKING')}>
                {!isEmpty(this.props.booking) && <ScatterWidget data={this.props.booking} chartConfig={ScatterChartConfig} />}
              </Card>
            </Col>
            <Col span={7} md={7}>
              <Card title={intl.get('MAP_HEADER.BUDGET')}>
                {!isEmpty(this.props.budget) && <BarWidget data={this.props.budget} chartConfig={PositiveAndNegativeBarChartConfig2} />}
              </Card>
            </Col>
            <Col span={3} md={3}>
              <Card title={intl.get('MAP_HEADER.VARIANCE')}>
                <div className="text-center f-32 p-16">($1.39M)</div>
              </Card>
              <Card title={intl.get('MAP_HEADER.COST')}>
                <div className="text-center f-32 p-16">$723.16</div>
              </Card>

            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;