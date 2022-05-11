import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login/Login';
import Customers from './pages/customers/Customers';
import CustomerDetails from './pages/customerDetails/CustomerDetails';
import UpdateCustomer from './pages/updateCustomer/UpdateCustomer';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/customers" element={ <Customers /> } />
      <Route path="/customer/:id" element={ <CustomerDetails /> } />
      <Route path="/customer/:id/update" element={ <UpdateCustomer /> } />
      <Route
        path="/"
        element={ <Navigate replace to="/login" /> }
      />
    </Routes>
  );
}

export default App;
