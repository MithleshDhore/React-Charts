import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class DefaultLayout extends Component {
  static propTypes = {
    header: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired,
    footer: PropTypes.element.isRequired
  };

  static defaultProps = {};

  render() {
    return (
      <Layout>
        {this.props.sideMenu}
        <Layout>
          <Header>{this.props.header}</Header>
          <Content>{this.props.content}</Content>
          <Footer>{this.props.footer}</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
