import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { withTranslation } from 'react-i18next'

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { t } = this.props;
    return (
      <h1>{ t('Not Found') }</h1>
    );
  }
}

export default withTranslation()(hot(NotFound))