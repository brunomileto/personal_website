import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useCodeSnippets } from '../context/CodesContext';
import { CodeSnippet } from './CodeSnippet';

// Import Swiper styles

export function SnippetsSwiper() {
  const codeSnippetsData = useCodeSnippets();
  return (
    <Swiper
      id="swiper"
      direction={"vertical"}
      mousewheel={true}
      loop={true}
      slidesPerView={4}
      spaceBetween={10}
      centeredSlides={true}
      modules={[Mousewheel]}
      className="h-full w-full max-w-[560px] 2xl:max-w-full"
    >
      {codeSnippetsData.map((codeSnippet) => {
        return (
          <SwiperSlide
            key={codeSnippet.code}
            className="bg-primary-darkMarine rounded-xl border-in border-1
                      border-lines w-full h-[200px] overflow-hidden  text-xs p-4"
          >
            <CodeSnippet codeType={codeSnippet.language}>{codeSnippet.code!}</CodeSnippet>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
