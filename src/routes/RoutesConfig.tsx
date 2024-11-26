import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import ListaCategorias from "../components/categorias/listaCategorias/ListaCategorias";
import FormularioCategoria from "../components/categorias/formularioCategoria/FormularioCategoria";
import DeletarCategoria from "../components/categorias/deletarCategorias/DeletarCategoria";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";

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
    <Route
      path="/categorias"
      element={<ProtectedRoute element={<ListaCategorias />} />}
    />
    <Route
      path="/cadastrarCategoria"
      element={<ProtectedRoute element={<FormularioCategoria />} />}
    />
    <Route
      path="/editarcategoria/:id"
      element={<ProtectedRoute element={<FormularioCategoria />} />}
    />
    <Route
      path="/deletarCategoria/:id"
      element={<ProtectedRoute element={<DeletarCategoria />} />}
    />
  </Routes>
);
