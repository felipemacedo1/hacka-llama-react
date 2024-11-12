import logoReact from '../../assets/react.svg';
// import DefaultCarousel from '../../components/carousels/DefaultCarousel';
// import { CarouselData } from '../../utils/CarouselData';
import './Home.css';

function Home() {
  return (
    <>
      <div className="bg-dark-10 flex justify-center py-10">
        <div className="container grid grid-cols-1 gap-8 text-dark-60">
          {/* Carrossel */}
          {/* <div className="flex justify-center">
            <DefaultCarousel data={CarouselData} />
          </div> */}

          {/* Logo */}
          <div className="flex justify-center">
            <img src={logoReact} className="w-2/3" alt="React logo" />
          </div>


          {/* Outros conteúdos da home (se necessário) */}
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem-vinde!</h2>
            <p className="text-xl">Os melhores games você encontra aqui!</p>
            <div className="flex justify-around gap-4">
              <button className="rounded bg-dark-60 text-dark-10 uppercase py-2 px-4" style={{ letterSpacing: '1.5px' }}>
                Ver Produtos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;