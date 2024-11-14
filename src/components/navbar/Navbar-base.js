import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link

const NavBar = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);

    const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
    const toggleNotificationMenu = () => setNotificationMenuOpen(!notificationMenuOpen);

    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">Explora+</h1>
            </div>
            <nav className="flex-1 text-center space-x-4">
                {/* Substitua as âncoras por Link */}
                <Link to="/" className="hover:underline">Disciplinas</Link>
                <Link to="/notas" className="hover:underline">Notas e Faltas</Link>
                <Link to="/carreira" className="hover:underline">Minha Carreira</Link>
                <Link to="/avaliacoes" className="hover:underline">Avaliação de Desafios</Link>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                <Link to="/apoio" className="hover:underline">Apoio Socioemocional</Link>
                <Link to="/comunidade" className="hover:underline">Comunidade</Link>
            </nav>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        className="bg-gray-800 text-white rounded-full px-4 py-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Search"
                    />
                    <i className="fas fa-search absolute right-3 top-2 text-white"></i>
                </div>
                <div className="relative">
                    <i className="fas fa-bell text-xl cursor-pointer" onClick={toggleNotificationMenu}></i>
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">3</span>
                    {notificationMenuOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20">
                            <p className="block px-4 py-2 text-gray-800">Você tem 3 tarefas pendentes:</p>
                            <Link to="/tarefa1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tarefa 1: Estudar React</Link>
                            <Link to="/tarefa2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tarefa 2: Completar exercícios de matemática</Link>
                            <Link to="/tarefa3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tarefa 3: Ler capítulo 4 do livro de história</Link>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <i className="fas fa-user-circle text-2xl cursor-pointer" onClick={toggleUserMenu}></i>
                    {userMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                            <Link to="/perfil" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Perfil</Link>
                            <Link to="/editar-perfil" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Editar Perfil</Link>
                            <Link to="/dados-matricula" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dados da Matricula</Link>
                            <Link to="/sair" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sair</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default NavBar;
