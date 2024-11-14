import { Link } from "react-router-dom";
import { Bell, User, List, X } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import SubNavBar from "./Header";
import DropdownMenu from "./DropdownMenu";

function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);  

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='w-full bg-custom-dark text-dark-60/100 flex justify-center py-4'>
        <div className="container flex justify-between items-center text-lg">
          <Link to='/home' className='text-2xl font-bold '>Explora+</Link>

          {/* Links de Navegação */}
          <div className='hidden lg:flex gap-4 cursor-pointer items-end'>
            <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Disciplinas</Link>
            <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Notas e Feedbacks</Link>
            <Link to='/dashboard' className='hover:underline font-bold px-3 rounded-lg'>Dashboard</Link>
            <Link to='/cadastrarCategoria' className='hover:underline font-bold px-3 rounded-lg'>Apoio Socioemocional</Link>
          </div>

          {/* Ícones de Notificações e Perfil */}
          <div className='flex gap-4 cursor-pointer mr-10 relative'> {/* Adicionando 'relative' aqui */}
            {/* Ícone Bell */}
            <button className="flex items-end" onClick={toggleDropdown} style={{ marginBottom: "-0.5px" }}>
              <Bell color='gold' size={32} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                ref={dropdownRef} 
                className="absolute right-0 mt-6 w-48 z-20">
                <DropdownMenu toggleDropdown={toggleDropdown} />
              </div>
            )}

            {/* Ícone de usuário em Desktop */}
            <div className="relative">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-white flex items-end"
              >
                <List size={32} />
              </button>
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
      <div>
        {sidebarVisible && <Sidebar closeSidebar={closeSidebar}/>}
      </div>

      {/* SubNavBar */}
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