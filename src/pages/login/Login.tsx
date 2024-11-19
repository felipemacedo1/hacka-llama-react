import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

// import { AuthContext } from '../../contexts/AuthContext';
// import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import logoexplora from '../../imgs/logoexplora.png';
import ChatDemo from '../../components/chatlayout/ChatDemo';



function Login() {
  let navigate = useNavigate();

//   const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
//     {} as UsuarioLogin
//   );

//   const { usuario, handleLogin } = useContext(AuthContext);

//   const {isLoading} = useContext(AuthContext) 

//   useEffect(() => {
//     if (usuario.token !== "") {
//         navigate('/home')
//     }
// }, [usuario])

// function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
//   setUsuarioLogin({
//       ...usuarioLogin,
//       [e.target.name]: e.target.value
//   })
// }

// function login(e: ChangeEvent<HTMLFormElement>) {
//   e.preventDefault()
//   handleLogin(usuarioLogin)
// }

  return (
    <>
      <div className="fundoLogin bg-[#010101] grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center
         flex-col w-1/2 gap-4 gradientLogin px-8 py-3 rounded-lg"
         /* onSubmit={login} */style={{marginTop:'-80px'}}>
            <div className='w-full flex justify-end'>
                <span className='rounded-lg p-1'>
                    <img src={logoexplora} className='w-20 flex-end' style={{marginBottom:'-40px'}}
                    alt="" />
                </span>
            </div>
          <div className="flex flex-col w-full">
          <h2 className="text-dark-60/80 text-[12px] mb-2 ">Faça seu login</h2>
            <label className="text-dark-60/80 text-[10px] " htmlFor="usuario">Seu Email: <span className='text-red-500'>*</span></label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu email"
              className="border-2 text-[12px] rounded p-1"
            //   value={usuarioLogin.usuario} 
            //   onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-dark-60/80 text-[10px]" htmlFor="senha">Sua Senha: <span className='text-red-500'>*</span></label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua Senha"
              className="border-2 text-[12px] rounded p-1"
            //   value={usuarioLogin.senha} 
            //   onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button  type='submit' className="rounded bg-blue-600 hover:bg-blue-600/90 text-white w-full py-1 flex justify-center">
           {/* {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> : */}
            <span>Entrar</span>
            {/*  } */}
          </button>

          <button  type='submit' 
          className="rounded bg-dark-60/0 border border-blue-500 hover:border-white hover:border-blue-600/70 text-dark-60 w-full py-1 flex justify-center">
           {/* {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> : */}
            <span>Entrar com Google</span>
            {/*  } */}
          </button>

          <hr className="border-blue-600/20 w-full" />

          <p className="text-dark-60/80 text-[12px] mb-1 ">
            Não tem uma conta?{' '}
            <Link to="/cadastro" className="text-blue-600 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="flex  place-items-center" style={{marginTop:'-80px'}}>
        <ChatDemo />
        </div>
      </div>
    </>
  );
}

export default Login;