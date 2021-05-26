import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '../actions/index.js'
import { withTranslation } from 'react-i18next'

class SingleCounter extends Component {
  constructor(props) {
    super(props);
  }

  addClick = (e) => {
    e.preventDefault();
    const { incrementCount } = this.props;
    incrementCount(1);
  }

  minusClick = (e) => {
    e.preventDefault();
    const { decrementCount } = this.props;
    decrementCount(-1);
  }

  render() {
    const { t } = this.props;
    const { counter } = this.props;
    return (
      <div className="single-counter page-content">
        <p>{t('example-lazy-inject')}</p>
        <p className="single-counter-val">{counter}</p>
        
        <button onClick={this.addClick}>{t('add')} +</button>
        <button onClick={this.minusClick}>{t('subtract')} -</button>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCount: c => dispatch(incrementCount(c)),
  decrementCount: c => dispatch(decrementCount(c)),

})
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(hot(SingleCounter)));