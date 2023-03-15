import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import React from 'react';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout content={MainPage} />} />
        <Route path="/about" element={<Layout content={AboutPage} />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
