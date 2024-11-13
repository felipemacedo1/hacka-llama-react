import { Link } from "react-router-dom";
import { Trophy } from '@phosphor-icons/react';

function Header() {
  return (
    <div className='w-full bg-blue-900/20 text-dark-60/100 flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <Link to='/home' className='text-2xl font-bold '>Dashboard  </Link>
        
        {/* Uncomment to add links to this header */}
        {/* <div className='flex gap-4 cursor-pointer items-end'>
          <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Disciplinas</Link>
          <Link to='/home' className='hover:underline font-bold px-3 rounded-lg'>Notas e Feedbacks</Link>
          <Link to='/categorias' className='hover:underline font-bold px-3 rounded-lg'>Dashboard</Link>
          <Link to='/cadastrarCategoria' className='hover:underline font-bold px-3 rounded-lg'>Apoio Socioemocional</Link>
        </div> */}

        {/* Right side */}
        <div className='flex gap-2 cursor-pointer mr-10 max-h-[36px]'>
          <span><Trophy size={42} color='gold' weight="fill" /></span>
          <div className="flex flex-col items-start gap-1 cursor-pointer">
            <p className="uppercase text-sm font-bold" style={{ marginTop: '4.5px'}}>
              Minha pontuação
            </p>
            <span className="text-sm" style={{ marginTop: '-4.5px'}}>
              40k 
              <span className="text-blue-400 ml-1">xp</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
