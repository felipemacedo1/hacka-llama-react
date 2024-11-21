import React, { useState } from 'react';
import Sidebar from '../../components/lsidebar/LeftSideBar';
import PageContent from '../home/PageContent';
import { List, X } from '@phosphor-icons/react'; // Ícones para abrir/fechar

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-[300px]' : 'w-0'
        } bg-white border-r border-gray-200 shadow-lg flex-shrink-0 overflow-hidden transition-all duration-700`}
      >
        {isSidebarOpen && <Sidebar />}
      </div>

      {/* Conteúdo Principal */}
      <div
        className={`flex-1 flex flex-col overflow-y-auto p-6 transition-all duration-700 ${
          isSidebarOpen ? 'ml-0' : 'ml-4'
        }`}
      >
        {/* Cabeçalho do conteúdo com o botão */}
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            {isSidebarOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
          <h1 className="text-md font-bold text-gray-800">Questões Disponíveis</h1>
        </div>

        {/* Conteúdo principal */}
        <PageContent />
      </div>
    </div>
  );
}

export default Home;