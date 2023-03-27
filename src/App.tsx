import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import routes from './routes';

// import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.name} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
