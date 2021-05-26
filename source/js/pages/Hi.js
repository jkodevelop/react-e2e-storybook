import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { withTranslation } from 'react-i18next'

import './hi.scss';
import logo from '../../img/react-logo.png';

class Hi extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { t } = this.props;
    return (
      <>
        <img className="logo" src={logo} alt="Logo" />
        <h1>{t('Welcome to React')}</h1>
        <div className="hi">{t('hi-content')}</div>
      </>
    );
  }
}

export default withTranslation()(hot(Hi))