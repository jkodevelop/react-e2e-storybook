import React, { Component, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams
} from 'react-router-dom';

import store from '../../store.js';

// simple import of component
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Hi from '../pages/Hi.js';
import NotFound from '../pages/NotFound.js';

import './app.scss';

// for lazy loading placeholder
import SuspenseLoader from './common/SuspenseLoader.js';

// example of simple lazy loading
const EvenCounter = lazy(() => import(/* webpackChunkName: "EvenCounter" */'./EvenCounter.js'));

// example of lazy loading with injected reducer for the component
// - this injects reducer
const SingleCounter = lazy(() => 
  import(/* webpackChunkName: "reducerSingleCounter" */'../reducers/counter.js').then(reducer => {
    store.injectReducer('counter', (reducer.default ? reducer.default: reducer));
    return import(/* webpackChunkName: "SingleCounter" */'./SingleCounter.js')
  }));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    return (
      <Router>
        <Header />

        <div className="main-container">

          <div className="column left sidebar">
            <ul className="menu">
              <li><NavLink exact activeClassName="selected" to="/">{t('hi')}</NavLink></li>
              <li><NavLink activeClassName="selected" to="/single">{t('single-counter')}</NavLink></li>
              <li><NavLink activeClassName="selected" to="/even">{t('even-counter')}</NavLink></li>
            </ul>
          </div>
          <div className="column right content">
            <Suspense fallback={SuspenseLoader}>
            <Switch>
              <Route path="/single" component={SingleCounter} />
              <Route path="/even" component={EvenCounter} />
              <Route exact path="/">
                <Hi />
              </Route>
              <Route component={NotFound} />
            </Switch>
            </Suspense>
          </div>

        </div>

        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(hot(App)));