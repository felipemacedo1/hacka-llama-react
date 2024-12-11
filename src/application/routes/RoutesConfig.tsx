import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Login from '../../presentation/pages/login/Login';
import Dashboard from '../../presentation/pages/dashboard/Dashboard';
import Home from '../../presentation/pages/home/Home';

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
