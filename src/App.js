import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login/Login';
import Customers from './pages/customers/Customers';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/customers" element={ <Customers /> } />
      <Route
        path="/"
        element={ <Navigate replace to="/login" /> }
      />
    </Routes>
  );
}

export default App;
