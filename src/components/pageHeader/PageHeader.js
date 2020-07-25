import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import {
  SettingOutlined,
  QuestionOutlined,
  UserOutlined
} from '@ant-design/icons';
import './PageHeader.css';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (
      <Fragment>
        <Row className="mr-160">
          <Col span={12} md={3}>Travel Analysis</Col>
          <Col md={18} className="">
            <div className="float-right cursor-pointer">
              <SettingOutlined className="mr-20"/>
              <QuestionOutlined className="mr-20"/>
              <UserOutlined />
            </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default PageHeader;
