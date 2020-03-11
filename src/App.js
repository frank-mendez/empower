import React from 'react';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path='/' component={Dashboard} />
      </Router>
    </Provider>
  );
}

export default App;
