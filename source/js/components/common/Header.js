import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withTranslation } from 'react-i18next'

import Button from './Button.js';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t,i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    
    let enSelected = i18n.language == 'en';
    let frSelected = i18n.language == 'fr';

    return (
      <header className="shadow-bottom">
        <div className="header-comp header-msg">{t('Header Text')}</div>
        <div className="header-comp header-lang-buttons">
          <Button selected={frSelected} label={t('fr')} onClick={() => changeLanguage('fr')} />
          <Button selected={enSelected} label={t('en')} onClick={() => changeLanguage('en')} />
        </div>
      </header>
    );
  }
}

export default withTranslation()(Header)