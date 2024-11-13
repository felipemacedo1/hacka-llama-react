import React, { useState } from 'react';


// TODO: Implement header with a functional dropdowns and real datas and routes 
const Header = () => {
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
        <a href="#" className="hover:underline">Disciplinas</a>
        <a href="#" className="hover:underline">Notas e Faltas</a>
        <a href="#" className="hover:underline">Minha Carreira</a>
        <a href="#" className="hover:underline">Avaliação de Desafios</a>
        <a href="#" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">Apoio Socioemocional</a>
        <a href="#" className="hover:underline">Comunidade</a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-800 text-white rounded-full px-4 py-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Search"
          />
          <i className="fas fa-search absolute right-3 top-2 text-gray-400"></i>
        </div>
        <div className="relative">
          <i className="fas fa-bell text-xl cursor-pointer" onClick={toggleNotificationMenu}></i>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">3</span>
          {notificationMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20">
              <p className="block px-4 py-2 text-gray-800">Você tem 3 tarefas pendentes:</p>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tarefa 1: Estudar React</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tarefa 2: Completar exercícios de matemática</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tarefa 3: Ler capítulo 4 do livro de história</a>
            </div>
          )}
        </div>
        <div className="relative">
          <i className="fas fa-user-circle text-2xl cursor-pointer" onClick={toggleUserMenu}></i>
          <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full text-xs px-1">5</span>
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Perfil</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Editar Perfil</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dados da Matricula</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sair</a>
            </div>
          )}
        </div>
        <div className="relative flex items-center">
          <i className="fas fa-tree text-2xl"></i>
          <span className="ml-2 text-yellow-400">43.5k</span>
        </div>
      </div>

      {/* Question Form adicionado no Header */}
    </header>
  );
};

export default Header;