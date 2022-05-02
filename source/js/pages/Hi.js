import React from 'react'
import './hi.scss';
import { withTranslation } from 'react-i18next';

const Hi = (props) => {
  const { t } = props;
  return (
    <>
      <h1>{t('Welcome to React')}</h1>
      <h3>Date : {new Date().toDateString()}</h3>
      <div className="hi">{t('hi-content')}</div>
    </>
  );
};

export default withTranslation()(Hi)