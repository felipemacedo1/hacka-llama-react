import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

interface CarouselItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
}

// Definir as props do componente
interface CarouselProps {
  data: CarouselItem[];
}

const DefaultCarousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <div className="container-slider shadow-lg shadow-dark-30 my-10">
      <Swiper
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{ type: 'progressbar' }}
        navigation={false}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper rounded-b-xl"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {/* Container para a imagem e o conteúdo */}
            <div className="relative">
              {/* Imagem do slide */}
              <img
                src={item.image}
                alt={item.alt}
                className="slide-item w-full rounded-b-xl"
              />
              
              {/* Conteúdo do slide */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 rounded-b-xl">
                <h2 className="text-5xl font-bold text-white mb-4">{item.title}</h2>
                <p className="text-xl text-white mb-6">{item.description}</p>
                <button className="rounded bg-dark-60 text-dark-10 uppercase py-2 px-4 hover:bg-dark-70" style={{ letterSpacing: '1.5px' }}>
                  {item.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DefaultCarousel;
