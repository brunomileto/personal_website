import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CodeSnippet } from "../../../components/CodeSnippet";
// Import Swiper styles

const codeSnippets = [
  {
    code:
      "function initializeModelChunk1<T>(chunk: ResolvedModelChunk): T { " +
      "const value: T = parseModel(chunk._response, chunk._value); " +
      "const initializedChunk: InitializedChunk<T> = (chunk: any); " +
      "initializedChunk._status = INITIALIZED; ",
  },
  {
    code:
      "function initializeModelChunk2<T>(chunk: ResolvedModelChunk): T { " +
      "const value: T = parseModel(chunk._response, chunk._value); " +
      "const initializedChunk: InitializedChunk<T> = (chunk: any); " +
      "initializedChunk._status = INITIALIZED; ",
  },
  {
    code:
      "function initializeModelChunk3<T>(chunk: ResolvedModelChunk): T { " +
      "const value: T = parseModel(chunk._response, chunk._value); " +
      "const initializedChunk: InitializedChunk<T> = (chunk: any); " +
      "initializedChunk._status = INITIALIZED; ",
  },
  {
    code:
      "function initializeModelChunk4<T>(chunk: ResolvedModelChunk): T { " +
      "const value: T = parseModel(chunk._response, chunk._value); " +
      "const initializedChunk: InitializedChunk<T> = (chunk: any); " +
      "initializedChunk._status = INITIALIZED; ",
  },
];

export function SnippetsSwiper() {
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
      className="h-full w-full max-w-[560px]"
    >
      {codeSnippets.map((codeSnippet) => {
        return (
          <SwiperSlide
            key={codeSnippet.code}
            className="bg-primary-darkMarine rounded-xl border-in border-1
                      border-lines w-full h-[200px] overflow-hidden  text-xs p-4"
          >
            <CodeSnippet>{codeSnippet.code}</CodeSnippet>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
