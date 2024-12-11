import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';
import logoexplora from '../../imgs/logoexplora.png';
import ChatDemo from '../../components/chatlayout/ChatDemo';
import { useAuth } from '../../contexts/AuthContext';

function Login() {
  const { logarComGoogle, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Lógica de login com email e senha
      console.log('Login com email/senha não implementado.');
      navigate('/home');
    } catch (err) {
      console.error('Erro ao fazer login:', err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await logarComGoogle();
      console.log('Login com Google bem-sucedido!');
      navigate('/home');
    } catch (err) {
      console.error('Erro ao fazer login com Google:', err);
    }
  };

  return (
    <div className="fundoLogin bg-[#010101] grid grid-cols-1 lg:grid-cols-2 h-[80vh] place-items-center font-bold">
      {/* Formulário de Login */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col w-3/4 md:w-1/2 gap-4 gradientLogin px-8 py-3 rounded-lg"
      >
        <div className="w-full flex justify-end">
          <span className="rounded-lg p-1">
            <img
              src={logoexplora}
              className="w-20 flex-end"
              style={{ marginBottom: '-40px' }}
              alt="Logo Explora"
            />
          </span>
        </div>

        {/* Mensagem de erro */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex flex-col w-full">
          <h2 className="text-dark-60/80 text-[12px] mb-2">Faça seu login</h2>
          <label className="text-dark-60/80 text-[10px]" htmlFor="usuario">
            Seu Email: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 text-[12px] rounded p-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-dark-60/80 text-[10px]" htmlFor="senha">
            Sua Senha: <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border-2 text-[12px] rounded p-1"
          />
        </div>
        <button
          type="submit"
          className={`rounded bg-blue-600 hover:bg-blue-600/90 text-white w-full py-1 flex justify-center ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'Entrar'}
        </button>

        {/* Botão de Login com Google */}
        <button
          onClick={handleGoogleLogin}
          type="button"
          className={`mt-4 flex items-center justify-center gap-2 w-full py-2 bg-dark-60 text-black border border-gray-300 hover:bg-gray-100 rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? (
            'Carregando...'
          ) : (
            <>
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google Logo"
                className="rounded-full w-5 h-5"
              />
              <span className="text-dark-30">Entrar com Google</span>
            </>
          )}
        </button>

        <hr className="border-blue-600/20 w-full" />
        <p className="text-dark-60/80 text-[12px] mb-1">
          Não tem uma conta?{' '}
          <Link to="/#" className="text-blue-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>

      {/* ChatDemo - Escondido em telas pequenas */}
      <div className="hidden lg:flex place-items-center">
        <ChatDemo />
      </div>
    </div>
  );
}

export default Login;
