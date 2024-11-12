import React from 'react';
import { Link } from 'react-router-dom';

interface DropdownMenuProps {
  toggleDropdown: () => void;
}

function DropdownMenu({ toggleDropdown }: DropdownMenuProps) {
  return (
    <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-20">
      <Link to="/perfil" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Perfil</Link>
      <Link to="/opcao1" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Opção 1</Link>
      <Link to="/opcao2" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Opção 2</Link>
      <button 
        className="block w-full px-4 py-2 text-left rounded-lg hover:bg-red-200" 
        onClick={() => {
          alert('Sair');
          toggleDropdown();  // Fecha o dropdown ao clicar em "Sair"
        }}
      >
        Sair
      </button>
    </div>
  );
}

export default DropdownMenu;
