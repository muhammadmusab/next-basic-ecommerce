import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Heading from "../common/heading";
import { v4 as uuidv4 } from "uuid";
const categories = () => {
  const categories = [
    {
      image: "/img/categories/1.webp",
      text: "Men",
      className: "bg-[#399bf8]",
      path: "/",
    },
    {
      image: "/img/categories/2.webp",
      text: "Women",
      className: "bg-[#f24284]",
      path: "/",
    },
    {
      image: "/img/categories/3.webp",
      text: "Teens",
      className: "bg-[#f9c834]",
      path: "/",
    },
    {
      image: "/img/categories/4.webp",
      text: "Bridal",
      className: "bg-[#b06fbf]",
      path: "/",
    },
    {
      image: "/img/categories/5.webp",
      text: "Dresses",
      className: "bg-[#8ec81f]",
      path: "/",
    },
    {
      image: "/img/categories/6.webp",
      text: "Sneakers",
      className: "bg-[#4970f8]",
      path: "/",
    },
    {
      image: "/img/categories/7.webp",
      text: "Makeup",
      className: "bg-[#FDDBDB]",
      path: "/",
    },
  ];
  return (
    <Fragment>
      <div className="spacer"></div>
      <Heading
        heading="Categories"
        subheading="We have more than you can imagine"
        containerClass="text-center"
        subheadingClass="opacity-[0.4]"
      />
      <div className="spacer"></div>
      <div className="flex justify-center flex-wrap">
        {categories.map((item) => (
          <Link key={uuidv4()} href={item.path}>
            <div className="flex flex-col justify-center items-center hover:cursor-pointer mx-10 my-10">
              <div
                className={`${item.className} rounded-full lg:h-[150px] lg:w-[150px] md:h-[130px] md:w-[130px] h-[165px] w-[165px] overflow-hidden flex justify-center items-center xxs:h-[165px] xxs:w-[165px]`}
              >
                <Image
                  src={item.image}
                  alt="category-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`h-[100%] w-[100%] rounded-full hover:scale-[1.1] scale-1 transition-all object-cover scale-z-[1] `}
                />
              </div>
              <p className="text-primary font-roboto font-bold hover:text-secondaryhover pt-10">
                {item.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </Fragment>
  );
};

export default categories;
