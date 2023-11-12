import { Fragment } from "react";

import Image from "next/image";
import Heading from "@/components/common/heading";
import { v4 as uuidv4 } from "uuid";
const brands = () => {
  const brands = [
    "/img/brands/1.avif",
    "/img/brands/2.avif",
    "/img/brands/3.avif",
    "/img/brands/4.avif",
    "/img/brands/5.avif",
    "/img/brands/6.avif",
    "/img/brands/7.avif",
    "/img/brands/8.avif",
  ];
  return (
    <Fragment>
      <div className="spacer"></div>
      <Heading
        heading="Our Brands"
        subheading="Make people fall in love with your products."
        containerClass="pb-[50px] text-center"
        subheadingClass="opacity-[0.4]"
      />
      {/* <div className="relative font-roboto font-bold uppercase text-primary  ">
        <h1 className="text-[30px] mb-[10px]"></h1>
        <p className="  mb-0"></p>
      </div> */}
      <div className="flex items-center justify-center  flex-wrap">
        {brands.map((brand) => (
          <div key={uuidv4()} className="rounded-[20px] mx-[20px] shadow-md hover:shadow-lg bg-white basis-[272px] h-[100px] mb-10">
            <Image
              src={brand}
              alt="brand-image"
              width={0}
              height={0}
              sizes="100vw"
              className={`h-[100%] w-[100%] hover:scale-[1.05] scale-1 transition-all`}
            />
          </div>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </Fragment>
  );
};

export default brands;
