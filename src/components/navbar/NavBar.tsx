import { Link } from "react-router-dom";
import { Bell, User, List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';  // Importando a Sidebar
import SubNavBar from "./SubNavBar";

function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false); // Estado para controlar a visibilidade da Sidebar
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu hambúrguer

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Alterna a visibilidade da Sidebar
  };

  const closeSidebar = () => {
    setSidebarVisible(false); // Função para fechar a Sidebar
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna o estado do menu hambúrguer
  };

  return (
    <>
      <div className='w-full bg-custom-dark text-dark-60/100 flex justify-center py-4'>
        <div className="container flex justify-between items-center text-lg">
          <Link to='/home' className='text-2xl font-bold '>Explora+</Link>

          {/* Links de Navegação - Visível apenas em Desktop */}
          <div className='hidden lg:flex gap-4 cursor-pointer items-end'>
            <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Disciplinas</Link>
            <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Notas e Feedbacks</Link>
            <Link to='/categorias' className='hover:underline font-bold px-3 rounded-lg'>Dashboard</Link>
            <Link to='/cadastrarCategoria' className='hover:underline font-bold px-3 rounded-lg'>Apoio Socioemocional</Link>
          </div>

          {/* Icones de Notificações e Perfil */}
          <div className='flex gap-4 cursor-pointer mr-10'>
            <button className="flex items-end" style={{ marginBottom: "-0.5px" }}>
              <Bell color='gold' size={32} />
            </button>

            {/* Ícone de usuário em Desktop e ícone hambúrguer em Mobile */}
            <div className="relative">
              {/* Menu Hambúrguer - visível apenas em dispositivos móveis */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-white flex items-end"
              >
                <List size={32} />
              </button>

              {/* Ícone de usuário - visível apenas em Desktop */}
              <button className="hidden lg:flex gap-2 cursor-pointer" onClick={toggleSidebar}>
                <div className="flex gap-1">
                  <span className="flex items-end mr-2" style={{ marginBottom: "-5.5px" }}></span>
                  <span className='hover:underline text-center rounded-full text-black bg-yellow-500 
                    p-1 hover:bg-yellow-400'>
                    <User size={22} />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Exibe a Sidebar quando o Menu Hambúrguer ou o ícone de usuário é clicado */}
      {sidebarVisible && <Sidebar closeSidebar={closeSidebar} />}
      
      {/* SubNavBar (se necessário) */}
      <SubNavBar />

      {/* Menu Hambúrguer (Visível apenas em dispositivos móveis) */}
      {menuOpen && (
        <div className="lg:hidden fixed h-full w-64 bg-gray-800 text-white p-6 space-y-6 z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white bg-red-800"
          >
            <X size={22} weight="bold" />
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Explora+</h2>
            <p className="text-sm">Bem-vindo de volta!</p>
          </div>

          {/* Links de Navegação do Menu Hambúrguer */}
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

          {/* Logout no Menu Hambúrguer */}
          <div className="mt-6">
            <button className="w-full text-red-500 hover:bg-gray-700 p-2 rounded-md">
              Sair
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
