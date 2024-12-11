import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Home';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import ProtectedRoute from './ProtectedRoute';

export const RoutesConfig = () => (
  <Routes>
    {/* Rotas Públicas */}
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />

    {/* Rotas Protegidas */}
    <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
    <Route
      path="/dashboard"
      element={<ProtectedRoute element={<Dashboard />} />}
    />
  </Routes>
);
