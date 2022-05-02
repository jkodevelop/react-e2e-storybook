import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '../actions/index.js'
import { withTranslation } from 'react-i18next'

const SingleCounter = (props) => {

  function addClick(e) {
    e.preventDefault();
    const { incrementCount } = props;
    incrementCount(1);
  }

  function minusClick(e){
    e.preventDefault();
    const { decrementCount } = props;
    decrementCount(-1);
  }

  const { counter,t } = props;
  return (
    <div className="single-counter page-content">
      <p>{t('example-lazy-inject')}</p>
      <p className="single-counter-val">{counter}</p>
      <button onClick={addClick}>{t('add')} +</button>
      <button onClick={minusClick}>{t('subtract')} -</button>
    </div>  
  );
  
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCount: c => dispatch(incrementCount(c)),
  decrementCount: c => dispatch(decrementCount(c)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SingleCounter));