import React, { useState } from 'react';
import { PaperPlaneTilt, Check, CheckCircle } from '@phosphor-icons/react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  read: boolean;
}

const ChatLayout: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Olá! Como posso te ajudar?', sender: 'bot', read: true },
  ]);
  const [input, setInput] = useState('');

  // Function to send a message
  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: input,
        sender: 'user',
        read: false,
      };

      setMessages([...messages, newMessage]);
      setInput('');

      // Simulate the user's message being read before the bot responds
      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.sender === 'user' && !msg.read ? { ...msg, read: true } : msg
          )
        );

        // Simulate bot response
        setTimeout(() => {
          const botMessage: Message = {
            id: Date.now(),
            text: 'Esta é uma resposta automática.',
            sender: 'bot',
            read: false,
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);

          // Simulate the bot's message being read after some time
          setTimeout(() => {
            setMessages((prevMessages) =>
              prevMessages.map((msg) =>
                msg.sender === 'bot' && msg.id === botMessage.id
                  ? { ...msg, read: true }
                  : msg
              )
            );
          }, 1000);
        }, 1000);
      }, 500); // Delay to update the user's message as read
    }
  };

  return (
    <div
      className="flex flex-col max-w-md mx-auto bg-gray-800 text-white shadow-lg rounded-lg h-[80vh]"
      style={{ marginTop: '-90px' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.imgur.com/z9qeKHy.png"
            alt="LLaMa Agent"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">lLaMa Agent</span>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-300">i</button>
          <button className="text-gray-300">...</button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-700">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {/* Avatar */}
            {message.sender === 'bot' && (
              <img
                src="https://i.imgur.com/z9qeKHy.png"
                alt="LLaMa Agent"
                className="w-8 h-8 rounded-full mr-2"
              />
            )}

            {/* Message Bubble */}
            <div
              className={`relative max-w-sm p-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-green-500 text-white rounded-br-none'
                  : 'bg-gray-600 text-white rounded-bl-none'
              }`}
            >
              {message.text}

              {/* Read Indicator */}
              {message.sender === 'user' && (
                <div className="absolute bottom-0 right-0 text-xs flex items-center space-x-1">
                  {message.read ? (
                    <CheckCircle size={16} className="text-blue-500" />
                  ) : (
                    <Check size={16} className="text-gray-300" />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input and Send */}
      <div className="flex items-center p-4 bg-gray-900 rounded-b-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma mensagem..."
          className="flex-1 p-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
        >
          <PaperPlaneTilt size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatLayout;
