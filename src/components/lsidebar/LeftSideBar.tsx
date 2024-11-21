import React, { useState } from 'react';

const LeftSideBar = () => {
  const [knowledgeLevelDropdownOpen, setKnowledgeLevelDropdownOpen] = useState(false);
  const [selectedKnowledgeLevel, setSelectedKnowledgeLevel] = useState('Intermediário');

  const [interestAreaDropdownOpen, setInterestAreaDropdownOpen] = useState(false);
  const [selectedInterestArea, setSelectedInterestArea] = useState('Ciência e Tecnologia');

  const [institutionDropdownOpen, setInstitutionDropdownOpen] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState('INEP');

  const [questionCount, setQuestionCount] = useState(10);

  // Funções para alternar os dropdowns
  const toggleKnowledgeLevelDropdown = () => {
    setKnowledgeLevelDropdownOpen(!knowledgeLevelDropdownOpen);
  };

  const toggleInterestAreaDropdown = () => {
    setInterestAreaDropdownOpen(!interestAreaDropdownOpen);
  };

  const toggleInstitutionDropdown = () => {
    setInstitutionDropdownOpen(!institutionDropdownOpen);
  };

  // Função para ajustar o número de questões
  const adjustQuestionCount = (amount: number) => {
    setQuestionCount((prev) => Math.max(1, prev + amount)); // Garante que o valor mínimo seja 1
  };

  return (
    <div className="px-6 bg-white rounded-lg shadow-md w-[300px] max-w-sm mx-auto">
      {/* Imagem de perfil */}
      <img
        src="https://i.imgur.com/lCq8fMu.gif"
        alt="Profile picture of a llama"
        className="mx-auto mb-5 w-50 h-50 object-cover rounded-[50px]" style={{ marginTop: '-90px' }}
      />

      {/* Nível de conhecimento */}
      <div className="mb-4 relative">
        <label className="block text-[12px] font-semibold text-gray-600 mb-2">
          NÍVEL DE CONHECIMENTO
        </label>
        <div
          className="bg-gray-100 h-9 text-gray-800 rounded-full px-4 py-2 flex items-center justify-between cursor-pointer"
          onClick={toggleKnowledgeLevelDropdown}
        >
          {selectedKnowledgeLevel}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {knowledgeLevelDropdownOpen && (
          <div className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-full shadow-lg z-10">
            <ul className="py-2">
              {['Intermediário', 'Iniciante', 'Avançado'].map((level) => (
                <li
                  key={level}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedKnowledgeLevel(level);
                    setKnowledgeLevelDropdownOpen(false);
                  }}
                >
                  {level}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Área de interesse */}
      <div className="mb-4 relative">
        <label className="block text-[12px] font-semibold text-gray-600 mb-2">
          ÁREA DE INTERESSE
        </label>
        <div
          className="bg-gray-100 h-9 text-gray-800 rounded-full px-4 py-2 flex items-center justify-between cursor-pointer"
          onClick={toggleInterestAreaDropdown}
        >
          {selectedInterestArea}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {interestAreaDropdownOpen && (
          <div className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-full shadow-lg z-10">
            <ul className="py-2">
              {['Ciência e Tecnologia', 'Artes', 'Humanidades'].map((area) => (
                <li
                  key={area}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedInterestArea(area);
                    setInterestAreaDropdownOpen(false);
                  }}
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Quantidade de questões */}
      <div className="mb-4">
        <label className="block text-[12px] font-semibold text-gray-600 mb-2">
          QTDE DE QUESTÕES
        </label>
        <div className="flex h-9 items-center space-x-1">
          <button
            className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
            onClick={() => adjustQuestionCount(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
          </button>
          <input
            type="text"
            value={questionCount}
            onChange={(e) => setQuestionCount(Math.max(1, Number(e.target.value)))}
            className="bg-gray-100 h-9 text-gray-800 rounded-full px-4 py-2 w-full text-center"
          />
          <button
            className="bg-gray-200  text-gray-700 rounded-full p-2 hover:bg-gray-300"
            onClick={() => adjustQuestionCount(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Instituição */}
      <div className="mb-4 relative">
        <label className="block text-[12px] font-semibold text-gray-600 mb-2">
          INSTITUIÇÃO
        </label>
        <div
          className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 flex items-center justify-between cursor-pointer"
          onClick={toggleInstitutionDropdown}
        >
          {selectedInstitution}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {institutionDropdownOpen && (
          <div className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-full shadow-lg z-10">
            <ul className="py-2">
              {['INEP', 'USP', 'Unicamp'].map((institution) => (
                <li
                  key={institution}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedInstitution(institution);
                    setInstitutionDropdownOpen(false);
                  }}
                >
                  {institution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Botão de gerar questões */}
      <button className="bg-green-200 text-green-700 px-6 py-2 rounded-full w-full flex items-center justify-center border border-green-400 hover:bg-green-300 transition duration-300">
        <span className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16.88 3.549l3.567 3.567a1 1 0 010 1.415L7.707 21.293a1 1 0 01-.48.26l-5.658 1.416a.25.25 0 01-.316-.317l1.416-5.658a1 1 0 01.26-.48L16.88 3.549z"
            />
          </svg>
          <span>Gerar Questões</span>
        </span>
      </button>
    </div>
  );
};

export default LeftSideBar;
