import { X } from '@phosphor-icons/react';  // Importando o ícone de fechar
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  closeSidebar: () => void;  // Função para fechar a sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <aside className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-6 space-y-6 transform transition-all duration-900 ease-in-out">
      {/* Ícone de Fechar */}
      <button
        onClick={closeSidebar}
        className="flex justify-center items-center w-full bg-gray-700 p-2 rounded-md"
      >
        <span className='rounded-lg'>
          <X size={31} weight="bold" />
        </span>
      </button>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Explora+</h2>
        <p className="text-sm">Bem-vindo de volta!</p>
      </div>

      {/* Navegação Principal */}
      <nav className="space-y-4">
        <Link to="/" className="block text-lg hover:bg-gray-700 p-2 rounded-md">
          Dashboard
        </Link>
        <Link to="/disciplinas" className="block text-lg hover:bg-gray-700 p-2 rounded-md">
          Disciplinas
        </Link>
        <Link to="/notas" className="block text-lg hover:bg-gray-700 p-2 rounded-md">
          Notas e Faltas
        </Link>
        <Link to="/carreira" className="block text-lg hover:bg-gray-700 p-2 rounded-md">
          Minha Carreira
        </Link>
        <Link to="/avaliacao" className="block text-lg hover:bg-gray-700 p-2 rounded-md">
          Avaliação de Desafios
        </Link>
        <Link to="/apoio-socioemocional" className="block text-lg hover:bg-gray-700 p-2 rounded-md">
          Apoio Socioemocional
        </Link>
        <Link to="/comunidade" className="block text-lg hover:bg-gray-700 p-2 rounded-md">
          Comunidade
        </Link>
      </nav>

      {/* Perfil do Usuário */}
      <div className="mt-8 p-4 bg-gray-700 rounded-lg">
        <p className="text-sm">Perfil</p>
        <p className="text-lg font-semibold">Nome do Usuário</p>
        <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md w-full">
          Editar Perfil
        </button>
      </div>

      {/* Logout */}
      <div className="mt-6">
        <button className="w-full text-red-500 hover:bg-gray-700 p-2 rounded-md">
          Sair
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;