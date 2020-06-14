import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import store from '../../redux/store';
import history from '../../shared/history';
import { Layout } from '../../containers/Layout';
import { Header } from '../Header';
import { Categories } from '../Categories';
import { Search } from '../Search';
import { NotFound } from '../NotFound';
import { Category } from '../Category';
import { TopNews } from '../TopNews';
import { Alerts } from '../common';

const alertOptions = {
  timeout: 3000,
  position: 'bottom center'
};

/**
 * Main app component.
 */
export const App = () => (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router history={history}>
        <Layout>
          <Header />
          <Alerts />
          <Routes />
        </Layout>
      </Router>
    </AlertProvider>
  </Provider>
);

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => (<Redirect to='/top-news' />)} />
    <Route exact path='/top-news' component={TopNews} />
    <Route exact path='/categories' component={Categories} />
    <Route exact path='/categories/:category' component={Category} />
    <Route exact path='/search' component={Search} />
    <Route component={NotFound} />
  </Switch>
);