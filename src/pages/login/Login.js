import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link se estiver usando o react-router-dom
import baloesImage from '../../imgs/baloes-removebg.png';
import './Login.css';
import Footer from '../../components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-background flex items-center justify-center min-h-screen bg-black bg-opacity-50">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-4">

        {/* Formulário de login */}
        <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-2xl font-bold mb-2">FAÇA O SEU LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block mb-2">Seu e-mail *</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password" className="block mb-2">Sua senha *</label>
            <input
              id="password"
              type="password"
              className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">Lembrar de mim</label>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-4">
              ENTRAR
            </button>
            <button
              type="button"
              className="w-full bg-white text-black py-2 rounded border border-gray-700 flex items-center justify-center"
            >
              <i className="fab fa-google mr-2"></i> ENTRAR COM GOOGLE
            </button>
            <div className="mt-4 text-center">
              <Link to="/esqueci-minha-senha" className="text-blue-400">Primeiro acesso / Esqueci minha senha</Link>
              <br />
              <Link to="/inscreva-se" className="text-blue-400">Inscreva-se</Link>
            </div>
          </form>
        </div>
        {/* Conteúdo à direita (imagem e chamada para ação) */}
        <div className="items-center justify-end min-h-screen" >
           <div className="box-size pl-10  rounded-lg text-white w-full h-full rounded-lg pl-8 ">
            <img src={baloesImage} alt="Balões" className="" />
            <div className='force-div-centralization' >
            <button className="w-80 items-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded m-auto ">
              INSCREVA-SE JÁ!
            </button>
            </div>
           </div>
            {/* Botão de inscrição */}
        </div>
      
      </div>
    </div>
  );
}

export default Login;
