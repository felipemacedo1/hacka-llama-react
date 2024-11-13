import React from 'react';
import { Link } from 'react-router-dom';

interface DropdownMenuProps {
  toggleDropdown: () => void;
}

function DropdownMenu({ toggleDropdown }: DropdownMenuProps) {
  return (
    <div className="absolute right-0 mt-2 bg-gray-800 text-dark-60/100 rounded-lg shadow-lg w-48 z-20">
      <Link to="/perfil" className="block px-4 py-2 rounded-lg text-lg hover:bg-gray-700">Notificação</Link>
      <Link to="/opcao1" className="block px-4 py-2 rounded-lg text-lg hover:bg-gray-700">Notificação 1</Link>
      <Link to="/opcao2" className="block px-4 py-2 rounded-lg text-lg hover:bg-gray-700">Notificação 2</Link>
      <Link to="/opcao3" className="block px-4 py-2 rounded-lg text-lg hover:bg-gray-700">Notificação 3</Link>
      {/* Botão para sair */}
      {/* <button 
        className="block w-full px-4 py-2 text-left rounded-lg hover:text-lg hover:bg-gray-700" 
        onClick={() => {
          alert('Sair');
          toggleDropdown();  // Fecha o dropdown ao clicar em "Sair"
        }}
      >
        Sair
      </button> */}
    </div>
  );
}

export default DropdownMenu;
