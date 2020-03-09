import React from 'react';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>

      <GlobalStyle />
    </Provider>
  );
}

export default App;
