import React from 'react'
import { useTranslation } from 'react-i18next'

// example of react Hook with translation, instead of HOC wrapper
function SuspenseLoader() {
  const { t } = useTranslation();
  return (<div>{t('loading')} ...</div>);
}

export default SuspenseLoader