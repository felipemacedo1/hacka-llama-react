import React from 'react';

const QuestionCards = ({ handleDownload, handlePrint, handleEdit }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">DISCIPLINAS</h2>
        <div className="flex items-center space-x-2">
          <button
            className="bg-gray-200 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300"
            onClick={handleDownload}
          >
            <i className="fas fa-download"></i>
          </button>
          <button
            className="bg-gray-200 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300"
            onClick={handlePrint}
          >
            <i className="fas fa-print"></i>
          </button>
          <button className="bg-gray-200 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {[1, 2].map((item, index) => (
          <div key={index} className="bg-green-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Ciência e Tecnologia - INEP</h3>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300"
                  onClick={handleEdit}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button className="bg-gray-200 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <p className="text-gray-700 mb-2">
              Sobre a utilização de recursos de informática em diagnósticos e
              pesquisas, marque a alternativa CORRETA.
            </p>

            <ul className="space-y-2 mb-2">
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`option-a-${index}`}
                  className="transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <label htmlFor={`option-a-${index}`} className="flex-1">
                  Plataformas como R e Python fornecem acesso a vastas
                  quantidades de dados genéticos e proteicos para pesquisa e
                  desenvolvimento de novas terapias.
                </label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`option-b-${index}`}
                  className="transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <label htmlFor={`option-b-${index}`} className="flex-1">
                  Equipamentos como o PCR e o FACS são prementes na análise de
                  propriedades físicas e químicas de células ou partículas,
                  sendo amplamente utilizados em imunologia e hematologia para
                  classificar células e medir sua resposta a tratamentos.
                </label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`option-c-${index}`}
                  className="transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <label htmlFor={`option-c-${index}`} className="flex-1">
                  Human Histo e Ion Torrent utilizam software para análise de
                  dados biológicos, como o alinhamento de sequências, análise
                  filogenética e análise de expressão gênica.
                </label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`option-d-${index}`}
                  className="transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <label htmlFor={`option-d-${index}`} className="flex-1">
                  PCR em Tempo Real (qPCR) é um software avançado para melhor
                  visualização, análise e interpretação de imagens.
                </label>
              </li>
              <li className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`option-e-${index}`}
                  className="transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <label htmlFor={`option-e-${index}`} className="flex-1">
                  Softwares como SPAdes e ABYSS são usados para quantificar a
                  expressão gênica e detectar patógenos.
                </label>
              </li>
            </ul>

            <div className="flex justify-between items-center">
              <button className="bg-blue-200 text-blue-700 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-300">
                Responder
              </button>
              <span
                className={`text-white px-4 py-2 rounded-full ${
                  index === 0 ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {index === 0 ? 'Correta!' : 'Incorreta!'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCards;
