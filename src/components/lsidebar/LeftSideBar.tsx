import React, { useState } from 'react';

const LeftSideBar = () => {
  const [knowledgeLevelDropdownOpen, setKnowledgeLevelDropdownOpen] = useState(false);
  const [selectedKnowledgeLevel, setSelectedKnowledgeLevel] = useState('Intermediário');
  const [interestAreaDropdownOpen, setInterestAreaDropdownOpen] = useState(false);
  const [selectedInterestArea, setSelectedInterestArea] = useState('Ciência e Tecnologia');
  const [institutionDropdownOpen, setInstitutionDropdownOpen] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState('INEP');
  const [questionCount, setQuestionCount] = useState(10);

  // Funções para alternar dropdowns
  const toggleDropdown = (setState: React.Dispatch<React.SetStateAction<boolean>>, currentState: boolean) =>
    setState(!currentState);

  const adjustQuestionCount = (amount: number) =>
    setQuestionCount((prev) => Math.max(1, prev + amount)); // Garante que o valor mínimo seja 1

  return (
    <div className="p-6">
      {/* Imagem de perfil */}
      <img
        src="https://i.imgur.com/lCq8fMu.gif"
        alt="Profile picture of a llama"
        className="mx-auto mb-5 w-24 h-24 object-cover rounded-full"
      />

      {/* Nível de Conhecimento */}
      <Dropdown
        label="NÍVEL DE CONHECIMENTO"
        value={selectedKnowledgeLevel}
        options={['Intermediário', 'Iniciante', 'Avançado']}
        isOpen={knowledgeLevelDropdownOpen}
        onToggle={() => toggleDropdown(setKnowledgeLevelDropdownOpen, knowledgeLevelDropdownOpen)}
        onSelect={(level) => {
          setSelectedKnowledgeLevel(level);
          setKnowledgeLevelDropdownOpen(false);
        }}
      />

      {/* Área de Interesse */}
      <Dropdown
        label="ÁREA DE INTERESSE"
        value={selectedInterestArea}
        options={['Ciência e Tecnologia', 'Artes', 'Humanidades']}
        isOpen={interestAreaDropdownOpen}
        onToggle={() => toggleDropdown(setInterestAreaDropdownOpen, interestAreaDropdownOpen)}
        onSelect={(area) => {
          setSelectedInterestArea(area);
          setInterestAreaDropdownOpen(false);
        }}
      />

      {/* Quantidade de Questões */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600 mb-2">QTDE DE QUESTÕES</label>
        <div className="flex items-center space-x-2">
          <button
            className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
            onClick={() => adjustQuestionCount(-1)}
          >
            -
          </button>
          <input
            type="text"
            value={questionCount}
            onChange={(e) => setQuestionCount(Math.max(1, Number(e.target.value)))}
            className="bg-gray-100 text-gray-800 rounded-full px-4 py-1 w-full text-center"
          />
          <button
            className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
            onClick={() => adjustQuestionCount(1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Instituição */}
      <Dropdown
        label="INSTITUIÇÃO"
        value={selectedInstitution}
        options={['INEP', 'USP', 'Unicamp']}
        isOpen={institutionDropdownOpen}
        onToggle={() => toggleDropdown(setInstitutionDropdownOpen, institutionDropdownOpen)}
        onSelect={(institution) => {
          setSelectedInstitution(institution);
          setInstitutionDropdownOpen(false);
        }}
      />

      {/* Botão Gerar Questões */}
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition">
        Gerar Questões
      </button>
    </div>
  );
};

// Componente reutilizável para Dropdown
const Dropdown = ({
  label,
  value,
  options,
  isOpen,
  onToggle,
  onSelect,
}: {
  label: string;
  value: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
}) => (
  <div className="mb-4 relative">
    <label className="block text-sm font-semibold text-gray-600 mb-2">{label}</label>
    <div
      className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 flex items-center justify-between cursor-pointer"
      onClick={onToggle}
    >
      {value}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    {isOpen && (
      <div className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-full shadow-lg z-10">
        <ul className="py-2">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default LeftSideBar;
