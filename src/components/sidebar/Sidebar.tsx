import { CaretDoubleRight, CaretRight, X } from '@phosphor-icons/react';  // Importando o ícone de fechar
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  closeSidebar: () => void;  // Função para fechar a sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <aside className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-6 space-y-6 transform transition-all duration-900 ease-in-out">
      {/* Ícone de Fechar */}
      <div className='flex'>
        <div className='fixed top-0 left-0'>
        <button
          onClick={closeSidebar}
          className="flex justify-center items-center w-[32px] h-[32px] bg-gray-700 p-2"
          style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '8px' }}
        >
            <span className=''>
            <CaretDoubleRight size={22} weight="regular" />
            </span>
          </button>
        </div>
      </div>
        <div className="text-center" style={{ marginTop: '15px' }}>
          <h2 className="text-md font-bold">Explora+</h2>
          {/* <p className="text-[14px]">Bem-vindo de volta!</p> */}
        </div>
      {/* Navegação Principal */}
      <nav className="space-y-1" style={{ marginTop: '15px' }}>
        <Link to="/" className="block text-sm hover:bg-gray-700 p-2 rounded-md">
          Dashboard
        </Link>
        <Link to="/disciplinas" className="block text-sm hover:bg-gray-700 p-2 rounded-md">
          Disciplinas
        </Link>
        <Link to="/notas" className="block text-sm hover:bg-gray-700 p-2 rounded-md">
          Notas e Faltas
        </Link>
        <Link to="/carreira" className="block text-sm hover:bg-gray-700 p-2 rounded-md">
          Minha Carreira
        </Link>
        <Link to="/avaliacao" className="block text-sm hover:bg-gray-700 p-2 rounded-md">
          Avaliação de Desafios
        </Link>
        <Link to="/apoio-socioemocional" className="block text-sm hover:bg-gray-700 p-2 rounded-md">
          Apoio Socioemocional
        </Link>
        <Link to="/comunidade" className="block text-sm hover:bg-gray-700 p-2 rounded-md">
          Comunidade
        </Link>
      </nav>
       {/* Perfil do Usuário */}
       <div className="p-4 bg-gray-700 rounded-lg" style={{marginTop:'10px'}}>
        <p className="text-sm">Perfil</p>
        <p className="text-sm font-semibold">Nome do Usuário</p>
        <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md w-full">
          Editar Perfil
        </button>
      </div>
      {/* Logout */}
      <div className="" style={{marginTop:'10px'}}>
        <button className="w-full text-red-500 hover:bg-gray-700 p-2 rounded-md">
          Sair
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;