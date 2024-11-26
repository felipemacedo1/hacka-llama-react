import React from "react";
import logoexplora from "../../imgs/logoexplora.png";

const Footer: React.FC = () => (
  <div className="w-full  bg-[#010101] text-white p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-start text-[12px] border-t border-white/40 py-3">
      {/* Primeira coluna */}
      <div className="flex flex-col items-center">
        <img src={logoexplora} alt="Logo Explora" className="max-w-[80px] md:max-w-[100px]" />
      </div>

      {/* Segunda coluna */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <a href="#" className="hover:underline text-dark-60 uppercase">Sobre a Explora+</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Dúvidas Frequentes</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Sugira um Curso</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Sugira uma Funcionalidade</a>
      </div>

      {/* Terceira coluna */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <a href="#" className="hover:underline text-dark-60 uppercase">Blog da Explora+</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Discord Explora+</a>
      </div>

      {/* Quarta coluna */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <a href="#" className="hover:underline text-dark-60 uppercase">Ensino Fundamental</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Ensino Médio</a>
        <a href="#" className="hover:underline text-dark-60 uppercase">Hackathon Hosted</a>
        <div className="flex flex-row justify-center md:justify-start space-x-4">
          <img
            src="https://imgur.com/hCCW2il.png"
            alt="Imagem 1"
            className="max-w-[25px]"
          />
          <img
            src="https://i.imgur.com/bIW0MCl.png"
            alt="Imagem 2"
            className="max-w-[25px]"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
