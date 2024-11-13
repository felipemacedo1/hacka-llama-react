import React from 'react';

const ProfilePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Perfil do Usuário</h2>
        <p><strong>Nome:</strong> Nome do Usuário</p>
        <p><strong>Email:</strong> usuario@exemplo.com</p>
        <p><strong>Instituição:</strong> INEP</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ProfilePopup;
