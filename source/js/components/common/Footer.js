import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { useTranslation } from 'react-i18next'

import './footer.scss';

// example of react Hook with translation
function Footer() {
  const { t } = useTranslation();
  // or const [t, i18n] = useTranslation();
  return (
    <footer>
      {t('Footer')}
    </footer>
  );
}

export default Footer