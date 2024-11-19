import logoexplora from '../../imgs/logoexplora.png';

import React from 'react';

const Footer: React.FC = () => (
  <div className="w-full fixed bottom-0 max-h-[20vh] text-white p-4">
    <div className="mx-20 grid grid-cols-4 sm:grid-cols-5 text-start text-[12px] border-t border-white/40 py-3">
      {/* Primeira coluna */}
      <div className='flex flex-col items-center'>
      <img src={logoexplora} alt="Logo Explora" className="max-w-[100px]" />
      </div>
      <div className="flex flex-col pt-2">
        <a href="#" className="hover:underline text-dark-60 uppercase">SOBRE A EXPLORA+</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Dúvidas frequentes</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Sugira um curso</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Sugira uma funcionalidade</a>
      </div>

      {/* Segunda coluna */}
      <div className="flex flex-col pt-2">
        <a href="#" className="hover:underline text-dark-60 uppercase">Blog da explora+</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Discord explora+</a>
      </div>

      {/* Terceira coluna */}
      <div className="flex flex-col pt-2">
        <a href="#" className="hover:underline text-dark-60 uppercase">ENSINO FUNDAMENTAL</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">ENSINO MÉDIO</a>
      </div>

      {/* Quarta coluna com as imagens */}
      <div className="flex flex-col pt-2 space-y-2">
        <a href="#" className="hover:underline text-dark-60 uppercase">HACKATHON HOSTED</a>
        <div className='flex  flex-row space-x-2'>
        <div className="">
          <img src="https://imgur.com/hCCW2il.png" alt="Imagem 1" 
          className="max-w-[25px] " />
        </div>
        <div className="">
          <img src="https://i.imgur.com/bIW0MCl.png" alt="Imagem 2"
           className="max-w-[25px]" />
        </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
