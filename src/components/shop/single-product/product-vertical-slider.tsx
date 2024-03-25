"use client";
import {
  Splide,
  SplideSlide,
  Options,
  SplideTrack,
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { products } from "@/constants/slides";
import { useRef, useState } from "react";
interface Props {
  productImages?: string[];
}
const ProductVerticalSlider = ({ productImages }: Props) => {
  const mainRef = useRef<any>();
  const [currentSlide, setcurrentSlide] = useState<number>(0);
  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: true,
  };

  const handleThumbs = (id: number) => {
    setcurrentSlide(id);
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };
  return (
    <div className="flex items-center">
      <ul className="flex flex-col mr-[20px]">
        {products &&
          products.map((slide, i: number) => (
            <button
            key={'vertical'+i}
              className={`my-[10px]  ${
                currentSlide === i ? "border-[2px]" : "border-none"
              } border-secondaryhover rounded-[8px]`}
              onClick={() => handleThumbs(i)}
            >
              <Image
                src={slide.productImage}
                alt="slider-image"
                width={0}
                height={0}
                sizes="100vw"
                className={`w-[100%] rounded-[8px]`}
              />
            </button>
          ))}
      </ul>
      <Splide
        className="relative group"
        options={mainOptions}
        hasTrack={false}
        aria-label="main-images"
        ref={mainRef}
        onMove={(splide, index) => setcurrentSlide(index)}
      >
        <SplideTrack>
          {products &&
            products.map((slide, i: number) => (
              <SplideSlide key={"v-s-m" + i} className="w-[100%] h-[100%]">
                <Image
                  src={slide.productImage}
                  alt="slider-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-[100%] h-[100%] `}
                />
              </SplideSlide>
            ))}
        </SplideTrack>
        <div className="splide__arrows xs:hidden" key={"vertical-slider-arrows"}>
          <button className="splide__arrow splide__arrow--prev bg-primary hover:bg-black w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[50%] left-[30px] opacity-0 group-hover:left-[40px] group-hover:opacity-100 transition-all sm:left-[0px] sm:group-hover:left-[20px]">
            <AiOutlineArrowLeft className="text-white" />
          </button>
          <button className="splide__arrow splide__arrow--next bg-primary hover:bg-black w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[50%] right-[30px] opacity-0 group-hover:right-[40px] group-hover:opacity-100 transition-all sm:right-[0px] sm:group-hover:right-[20px]">
            <AiOutlineArrowRight className="text-white" />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default ProductVerticalSlider;
