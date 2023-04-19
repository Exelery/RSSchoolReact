import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import routes from './routes';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element()} key={el.name} />
        ))}
      </Routes>
    </Provider>
  );
}

export default App;
