import React from 'react';
import { DotsThreeOutlineVertical, MagnifyingGlass, PaperPlaneTilt } from '@phosphor-icons/react';
import './Demo.css';  // Correção da importação do CSS

const ChatDemo: React.FC = () => {
  return (
    <div className="max-w-sm w-full gradientLlama text-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between p-3 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.imgur.com/z9qeKHy.png"
            alt="LLaMa Agent"
            className="w-8 h-8 shadow-lg rounded-full"
          />
          <span className="font-semibold text-sm">LLaMa Agent</span>
        </div>
        <div className="flex"  style={{marginRight:"-13px"}}>
          <button className="text-gray-400 w-8 h-8"><MagnifyingGlass weight="bold" /></button>
          <button className="text-gray-400 w-8 h-8"><DotsThreeOutlineVertical  weight="fill" /></button>
        </div>
      </div>

      {/* Chat Body */}
      <div className="p-3 space-y-2 gradientLlama rounded-b-lg">
        <div className="flex justify-start">
          <div className="max-w-xs bg-gray-700/60 text-white p-2 rounded-lg">
            Olá! Como posso te ajudar?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-xs bg-green-600/90 text-white p-2 rounded-lg">
            testando lhama
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xs bg-gray-700 text-white p-2 rounded-lg">
            Esta é uma resposta automática.
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="flex items-center p-3 gradientLlama rounded-b-lg border-t border-gray-700">
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          className="flex-1 p-2 bg-gray-700/10 text-white rounded-lg border border-gray-600 focus:outline-none"
        />
        <button className="ml-2 p-2 bg-green-600/90 text-white rounded-full hover:bg-green-700">
          <PaperPlaneTilt size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatDemo;
