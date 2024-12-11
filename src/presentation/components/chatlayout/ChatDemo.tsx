import React from 'react';
import {
  Checks,
  DotsThreeOutlineVertical,
  MagnifyingGlass,
  PaperPlaneTilt,
} from '@phosphor-icons/react';
import './Demo.css'; // Correção da importação do CSS

const ChatDemo: React.FC = () => {
  return (
    <div className="max-w-sm w-full text-white cursor-pointer rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center gradientLlama-header justify-between p-3 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.imgur.com/z9qeKHy.png"
            alt="LLaMa Agent"
            className="w-8 h-8 shadow-lg rounded-full"
          />
          <span className="font-semibold text-sm">LLaMa Agent</span>
        </div>
        <div className="flex" style={{ marginRight: '-13px' }}>
          <button className="text-gray-400 w-8 h-8">
            <MagnifyingGlass weight="bold" />
          </button>
          <button className="text-gray-400 w-8 h-8">
            <DotsThreeOutlineVertical weight="fill" />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      <div className="p-3 space-y-2 gradientLlama-container rounded-b-lg">
        {' '}
        {/* Transparência isolada no container */}
        <div className="flex justify-start">
          <div className="max-w-md bg-gray-700 text-white text-[12px] p-2 rounded-lg">
            {' '}
            {/* Cor sólida no balão */}A Explora+ é ideal para estudantes,
            oferecendo ferramentas que facilitam o aprendizado para
            vestibulares, concursos e provas, com abordagens modernas e
            eficientes.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-xs bg-green-600 text-dark-60 text-[12px] p-2 rounded-lg relative">
            {' '}
            {/* Cor sólida no balão */}
            Sim! Além disso, usamos a IA Llama 3 para analisar seu desempenho e
            criar um painel que destaca áreas para melhorar, tornando os estudos
            mais direcionados e eficientes.
            <div className="absolute bottom-1 right-1 text-xs flex items-center space-x-1">
              <Checks size={16} className="text-blue-600 z-1" />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xs bg-gray-700 text-white text-[12px] p-2 rounded-lg">
            {' '}
            {/* Cor sólida no balão */}
            Isso deixa o aprendizado mais envolvente e personalizado, ajudando a
            construir conhecimento sólido e as competências necessárias para
            cada etapa educacional.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;
