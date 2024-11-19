import React from 'react';

const LeftSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white text-gray-800 p-6 border-r border-gray-200">
      {/* Perfil */}
      <div className="text-center mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-24 mx-auto"
        />
        <h3 className="font-semibold text-lg mt-4">Nível de Conhecimento</h3>
        <p className="text-sm text-gray-500">Intermediário</p>
      </div>

      {/* Informações */}
      <div className="space-y-4">
        <div className="text-left">
          <h4 className="text-sm font-semibold">Área de Interesse</h4>
          <p className="text-sm text-gray-500">Ciência e Tecnologia</p>
        </div>
        <div className="text-left">
          <h4 className="text-sm font-semibold">Instituição</h4>
          <p className="text-sm text-gray-500">INEP</p>
        </div>
        <div className="text-left">
          <h4 className="text-sm font-semibold">Código de Questões</h4>
          <p className="text-sm text-gray-500">10</p>
        </div>
      </div>

      {/* Botão */}
      <button className="mt-8 w-full bg-green-500 text-white py-2 rounded-lg">
        Gerar Questões
      </button>
    </aside>
  );
};

export default LeftSidebar;
