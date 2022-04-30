import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { incrementCountEven, decrementCountEven } from '../actions/index.js'
// import { withTranslation } from 'react-i18next'

// import('./evenCounter.scss');

const EvenCounter = (props) => {

  function addClick(e) {
    e.preventDefault();
    const { incrementCountEven } = props;
    incrementCountEven(1);
  }

  function minusClick(e) {
    e.preventDefault();
    const { decrementCountEven } = props;
    decrementCountEven(1);
  }

  const { evenCounter } = props;
  return (
    <div className="even-counter page-content">
      <p>example-lazy</p>
      <p className="even-counter-val">{evenCounter}</p>
      <button onClick={addClick}>+ add 2</button>
      <button onClick={minusClick}>- subtract 2</button>
    </div> 
  );
  
}

const mapStateToProps = state => ({
  evenCounter: state.evenCounter
})

const mapDispatchToProps = dispatch => ({
  incrementCountEven: c => dispatch(incrementCountEven(c)),
  decrementCountEven: c => dispatch(decrementCountEven(c)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EvenCounter);