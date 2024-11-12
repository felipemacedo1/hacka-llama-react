import { Link } from "react-router-dom";
import { Bell, User } from '@phosphor-icons/react';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';  // Importando o DropdownMenu
import SubNavBar from "./SubNavBar";

function NavBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false); // Estado para controlar a visibilidade do dropdown

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Alterna a visibilidade do dropdown
  };

  return (
    <>
      <div className='w-full bg-custom-dark text-dark-60/100 flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold '>Explora+</Link>
          <div className='flex gap-4 cursor-pointer items-end'>
            <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Disciplinas</Link>
            <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Notas e Feedbacks</Link>
            <Link to='/categorias' className='hover:underline font-bold px-3 rounded-lg'>Dashboard</Link>
            <Link to='/cadastrarCategoria' className='hover:underline font-bold px-3 rounded-lg'>Apoio Socioemocional</Link>
          </div>
          <div className='flex gap-4 cursor-pointer mr-10'>
            <button className="flex items-end" style={{ marginBottom: "-0.5px" }}>
              <Bell color='gold' size={32} />
            </button>
            <div className="relative">
              <button onClick={toggleDropdown} className="flex gap-2 cursor-pointer">
                <div className="flex gap-1">
                  <span className="flex items-end mr-2" style={{ marginBottom: "-5.5px" }}></span>
                  <span className='hover:underline text-center rounded-full text-black bg-yellow-500 
                    p-1 hover:bg-yellow-400'>
                    <User size={22} />
                  </span>
                </div>
              </button>

              {/* Dropdown Menu */}
              {dropdownVisible && <DropdownMenu toggleDropdown={toggleDropdown} />}
            </div>
          </div>
        </div>
      </div>
      {/* SubNavBar Component */}
      <SubNavBar />
    </>
  );
}

export default NavBar;
