import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import PageFooter from '../pageFooter/PageFooter';
import PageSideMenu from '../pageSideMenu';
import PageHeader from '../pageHeader/PageHeader';

class App extends Component {

  render() {
    return <DefaultLayout
      header={<PageHeader context={this.props.context} />}
      sideMenu={<PageSideMenu />}
      content={this.props.children}
      footer={<PageFooter />}
    />;
  }
}

export default App;
