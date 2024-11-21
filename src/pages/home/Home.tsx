import React, { useState } from 'react';
import Sidebar from '../../components/lsidebar/LeftSideBar';
import PageContent from '../home/PageContent';
import { Export, List, Printer, X } from '@phosphor-icons/react'; // Ícones para abrir/fechar

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
        <div className="flex items-center justify-between mb-6 bg-gray-200 rounded-xl px-4 py-2 shadow-md">
  {/* Botão para abrir/fechar o menu */}
  <div className="flex items-center space-x-4">
    <button
      onClick={toggleSidebar}
      className="bg-blue-500 text-white p-1 rounded-full shadow-lg hover:bg-blue-600 transition"
    >
      {isSidebarOpen ? (
        <X size={21} weight="bold" />
      ) : (
        <List size={21} weight="bold" />
      )}
    </button>
    <h1 className="text-lg font-bold text-gray-800/90">Questões Disponíveis</h1>
  </div>

  {/* Ícones do lado direito */}
    <div className="flex items-center space-x-3">
      {/* Ícone de impressão */}
      <button className="bg-gray-200 rounded-full hover:bg-gray-300 p-2 transition">
        <Printer size={22} />
      </button>

      {/* Ícone de exportar */}
      <button className="bg-gray-200 rounded-full hover:bg-gray-300 p-2 transition">
        <Export size={22} />
      </button>

      {/* Ícone adicional (se necessário) */}
      <button className="bg-gray-200 rounded-full hover:bg-gray-300 p-2 transition">
        {/* <SomeOtherIcon size={22} /> */}
      </button>
    </div>
  </div>


        {/* Conteúdo principal */}
        <PageContent />
      </div>
    </div>
  );
}

export default Home;