import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import store from './store.js';

import NotFound from './js/NotFound.js';
import Hi from './js/pages/Hi.js';
import Header from './js/components/common/Header.js';
import Footer from './js/components/common/Footer.js';

// for lazy loading placeholder
import SuspenseLoader from './js/components/common/SuspenseLoader.js';

// import store from './store.js';
const EvenCounter = lazy(() => import(/* webpackChunkName: "EvenCounter" */'./js/components/EvenCounter.js'));

const SingleCounter = lazy(() => 
  import(/* webpackChunkName: "reducerSingleCounter" */'./js/reducers/counter.js').then(reducer => {
    store.injectReducer('counter', (reducer.default ? reducer.default: reducer));
    return import(/* webpackChunkName: "SingleCounter" */'./js/components/SingleCounter.js')
  }));

import './app.scss';

const App = (props) => {
  
  const { t } = props;

  return (<Router>
    <Header />
    <div className="main-container">

      <div className="column left sidebar">
        <ul className="menu">
          <li><Link to="/">{t('hi')}</Link></li>
          <li><Link to="single">{t('single-counter')}</Link></li>
          <li><Link to="even">{t('even-counter')}</Link></li>
        </ul>
      </div>
      <div className="column right content">
        <Suspense fallback={<SuspenseLoader />}>
          <Routes>
            <Route path="/" element={<Hi />} />
            <Route path="single" element={<SingleCounter />} />
            <Route path="even" element={<EvenCounter />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
      </div>

    </div>
    <Footer />

  </Router>)
};

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(App));
