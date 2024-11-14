import React from 'react';

const LeftSideBar = () => {
  return (
    <div className="p-4">
      {/* Imagem de perfil */}
      <img
        src="https://i.imgur.com/dQP9Zmd.gif"
        alt="Profile picture of a llama"
        className="rounded-full mx-auto mb-4 max-w-[150px] max-h-[150px] shadow-md"
      />

      {/* Nível de conhecimento */}
      <div className="mb-4">
        <label className="block text-gray-700">NÍVEL DE CONHECIMENTO</label>
        <select className="bg-gray-200 text-gray-900 rounded w-full p-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-300">
          <option>Intermediário</option>
          <option>Iniciante</option>
          <option>Avançado</option>
        </select>
      </div>

      {/* Área de interesse */}
      <div className="mb-4">
        <label className="block text-gray-700">ÁREA DE INTERESSE</label>
        <select className="bg-gray-200 text-gray-900 rounded w-full p-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-300">
          <option>Ciência e Tecnologia</option>
          <option>Artes</option>
          <option>Humanidades</option>
        </select>
      </div>

      {/* Quantidade de questões */}
      <div className="mb-4">
        <label className="block text-gray-700">QTDE DE QUESTÕES</label>
        <select className="bg-gray-200 text-gray-900 rounded w-full p-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-300">
          {[...Array(50).keys()].map((num) => (
            <option key={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>

      {/* Instituição */}
      <div className="mb-4">
        <label className="block text-gray-700">INSTITUIÇÃO</label>
        <select className="bg-gray-200 text-gray-900 rounded w-full p-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-300">
          <option>INEP</option>
          <option>USP</option>
          <option>Unicamp</option>
        </select>
      </div>

      {/* Botão de gerar questões */}
      <button className="bg-green-200 text-green-700 px-4 py-2 rounded-full w-full transition duration-300 ease-in-out hover:bg-green-300">
        Gerar Questões
      </button>
    </div>
  );
};

export default LeftSideBar;
