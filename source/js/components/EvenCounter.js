import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import { incrementCountEven, decrementCountEven } from '../actions/index.js'
import { withTranslation } from 'react-i18next'

// import('./evenCounter.scss');

class EvenCounter extends Component {
  constructor(props) {
    super(props);
  }

  addClick = (e) => {
    e.preventDefault();
    const { incrementCountEven } = this.props;
    incrementCountEven(1);
  }

  minusClick = (e) => {
    e.preventDefault();
    const { decrementCountEven } = this.props;
    decrementCountEven(1);
  }

  render() {
    const { t } = this.props;
    const { evenCounter } = this.props;
    return (
      <div className="even-counter page-content">
        <p>{t('example-lazy')}</p>
        <p className="even-counter-val">{evenCounter}</p>
        <button onClick={this.addClick}>+ {t('add')} 2</button>
        <button onClick={this.minusClick}>- {t('subtract')} 2</button>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  evenCounter: state.evenCounter
})

const mapDispatchToProps = dispatch => ({
  incrementCountEven: c => dispatch(incrementCountEven(c)),
  decrementCountEven: c => dispatch(decrementCountEven(c)),

})
export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(hot(EvenCounter)));