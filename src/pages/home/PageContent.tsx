import React from 'react';

const PageContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Título */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Ciência e Tecnologia &gt; INEP</h1>
      </div>

      {/* Conteúdo Principal */}
      <div className="space-y-6">
        {/* Questão */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="font-semibold text-lg">Sobre a utilização de recursos de informática...</h2>
          <p className="text-sm text-gray-600 mt-2">
            Marque a alternativa correta:
          </p>
          {/* Alternativas */}
          <div className="mt-4 space-y-2">
            <div className="p-2 bg-green-100 rounded-lg text-green-700">A. Alternativa Correta</div>
            <div className="p-2 bg-red-100 rounded-lg text-red-700">B. Alternativa Incorreta</div>
          </div>
        </div>

        {/* Explicação */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="font-semibold text-lg">Explicação</h2>
          <p className="text-sm text-gray-600 mt-2">
            Aqui você encontrará uma explicação detalhada sobre a questão.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
