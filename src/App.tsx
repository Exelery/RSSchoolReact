import './App.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Outlet />
      </>
    </Provider>
  );
}

export default App;
