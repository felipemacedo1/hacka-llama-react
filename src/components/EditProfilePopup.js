import React from 'react';

const EditProfilePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Editar Perfil</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input type="text" className="bg-gray-200 rounded w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="bg-gray-200 rounded w-full p-2" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-full mr-2"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePopup;
