import { PencilSimple, Trash } from '@phosphor-icons/react';
import React from 'react';

interface QuestionProps {
  question: string;
  testQuestion: string
  description: string;
  options: string[];
  correctIndex: number;
  questionIndex: number;
  isCorrect: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  testQuestion,
  description,
  options,
  correctIndex,
  questionIndex,
  isCorrect,
}) => {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
      <p> 
        <span className="text-[10px] font-bold text-gray-700/80">
        {question}
        <span> &gt; </span>
        </span> 
        <span className='text-[10px] font-bold text-black-700/10'>{testQuestion}</span>
        </p>
        
        <div className="flex items-center space-x-2">
          <button
            className="bg-gray-200 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300"
            onClick={() => alert('Editar funcionalidade')}
          >
            <PencilSimple size={20} weight="bold" className="text-gray-700" />
          </button>
          <button
            className="bg-gray-200 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300"
            onClick={() => alert('Excluir funcionalidade')}
          >
            <Trash size={20} weight="bold" className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-gray-800 mb-4">{description}</p>

      {/* Alternativas */}
      <ul className="space-y-3">
        {options.map((option, index) => (
          <li key={index} className="flex items-center space-x-4">
            {/* Caixa de Seleção */}
            <input
              type="radio"
              name={`question-${questionIndex}`}
              id={`option-${index}-${questionIndex}`}
              className="hidden peer"
            />
            <label
              htmlFor={`option-${index}-${questionIndex}`}
              className={`flex items-center justify-center min-w-10 min-h-10 text-center font-bold rounded-md cursor-pointer transition duration-300 ease-in-out
                ${
                  index === correctIndex
                    ? 'peer-checked:bg-green-500 peer-checked:text-white'
                    : 'peer-checked:bg-red-500 peer-checked:text-white'
                } bg-green-100 text-green-800 hover:bg-green-300`}
            >
              {String.fromCharCode(65 + index)} {/* Converte o índice em letras A, B, C, etc. */}
            </label>
            <p className="text-gray-700">{option}</p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => alert('Responder questão')}
        >
          Responder
        </button>
        <span
          className={`text-white px-4 py-2 rounded-full ${
            isCorrect ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {isCorrect ? 'Correta!' : 'Incorreta!'}
        </span>
      </div>
    </div>
  );
};

export default Question;
