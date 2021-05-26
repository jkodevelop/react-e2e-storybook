import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { useTranslation } from 'react-i18next'

import './footer.scss';

// example of react Hook with translation
function SuspenseLoader() {
  const { t } = useTranslation();
  return (<div>{t('loading')} ...</div>);
}

export default SuspenseLoader