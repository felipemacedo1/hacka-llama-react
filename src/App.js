import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Não use BrowserRouter aqui

// Importando os componentes
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full pb-8">
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>     
      
    </div>
  );
}

export default App;
