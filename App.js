import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/reducers';
import Routes from './src/Routes';

const store = configureStore;

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
