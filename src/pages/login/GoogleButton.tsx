import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig'; // Certifique-se de configurar o Firebase corretamente

interface GoogleButtonProps {
  onSuccess?: (user: any) => void; // Callback para tratar sucesso do login
  onFailure?: (error: any) => void; // Callback para tratar falhas do login
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onSuccess, onFailure }) => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (onSuccess) {
        onSuccess(user);
      }
      // Redirecione após login bem-sucedido
      navigate('/home');
    } catch (error) {
      if (onFailure) {
        onFailure(error);
      }
      console.error("Erro ao fazer login com Google:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="rounded bg-white text-black border border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-2 w-full py-2"
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google Logo"
        className="w-5 h-5"
      />
      Entrar com Google
    </button>
  );
};

export default GoogleButton;
