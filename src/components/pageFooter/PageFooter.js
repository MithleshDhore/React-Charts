import React, { Component, Fragment } from 'react';
import intl from 'react-intl-universal';
import './PageFooter.css'

class PageFooter extends Component {
  getYear() {
    return new Date().getFullYear();
  }
  render() {
    const defaultFooterText = intl.get('app.footer', {
      year: this.getYear()
    });
    return (
      <Fragment>{defaultFooterText}</Fragment>
    )
  }
}
export default PageFooter;
