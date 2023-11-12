"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Stars from "react-rating-stars-component";
import { BsEye } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
interface Props {
  product: {
    productImage: string;
    rating: number;
    reviews: number;
    price: number;
    oldPrice?: number;
    title: string;
    isFavorite: boolean;
    productLink: string;
    colors?: any[];
    size?: string;
    badgeText?: string;
    badgeClass?: string;
    productType?:string;
    stock?:number;
  };
}

const Product = ({ product }: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentOption, setCurrentOption] = useState<string>();

  let options = [
    {
      id: "eye",
      text: "Quick View",
      icon: (
        <BsEye
          className={`${
            currentOption == "eye" ? "text-white" : "text-primary"
          } font-bold w-[20px] h-[20px]`}
        />
      ),
    },
    {
      id: "cart",
      text: "Add To Cart",
      icon: (
        <AiOutlineShoppingCart
          className={` ${
            currentOption == "cart" ? "text-white" : "text-primary"
          } font-bold w-[20px] h-[20px]`}
        />
      ),
    },
    {
      id: "wishlist",
      text: "Add To Wishlist",
      icon: (
        <AiOutlineHeart
          className={` ${
            currentOption == "wishlist" ? "text-white" : "text-primary"
          } font-bold w-[20px] h-[20px] `}
        />
      ),
    },
  ];
  const currentOptionHandler = (option: any) => {
    setCurrentOption(option.id);
    setShowOptions(true);
  };
  return (
    <Fragment>
      <Link
        href={product.productLink}
        className={`w-full ${
          product.badgeText === "SOLD" ? "opacity-[0.5]" : "opacity-1"
        }`}
      >
        <div className="bg-transparent  relative overflow-hidden w-full">
          <div className="h-[330px] w-full  relative overflow-hidden">
            <Image
              src={product.productImage}
              alt="product-image"
              width={0}
              height={0}
              sizes="100vw"
              className={`h-[100%] w-full max-w-[100%] hover:scale-[1.1] scale-1 transition-all object-cover`}
              onMouseOver={() => setShowOptions(true)}
              onMouseLeave={() => setShowOptions(false)}
            />
            {product.badgeText && (
              <div
                className={`w-[100px] h-[100px] rounded-tr-[130px] rounded-tl-[130px] ${product.badgeClass} text-white absolute top-[55px] right-[-60px] rotate-[270deg] text-center pt-[10px] text-[14px]`}
              >
                {product.badgeText}
              </div>
            )}
          </div>
          <p className="text-primary absolute font-bold font-roboto bottom-[20px] left-[20px] text-[15px]">
            {product.title}
          </p>
          <div
            className={`flex flex-col absolute  top-[15%] transition-all ${
              showOptions ? "left-[0%] opacity-1" : "left-[-200px] opacity-0"
            }`}
          >
            {options.map((option) => (
              <div
                className="relative "
                key={uuidv4()}
                onMouseLeave={() => {
                  setCurrentOption("");
                  setShowOptions(false);
                }}
              >
                <button
                  className={`${
                    currentOption === option.id ? "bg-primary" : "bg-white"
                  } flex justify-center items-center w-[50px] h-[50px] mb-5`}
                  onMouseOver={() => currentOptionHandler(option)}
                  disabled={product.badgeText === "SOLD"}
                >
                  {option.icon}
                </button>

                <div
                  className={`text-center bg-primary text-white transition-all py-[12.5px] px-5 translate-x-[55px] w-[200px] absolute top-0 left-0 ${
                    currentOption === option.id
                      ? "opacity-1 select-all pointer-events-auto"
                      : "opacity-0 pointer-events-none select-none w-0"
                  } `}
                >
                  {option.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-secondary w-full py-[0.5px]"></div>
        <div className="flex items-center w-full justify-between  p-[20px] ">
          <p className="text-[#777777] font-roboto font-bold bg-white">
            ${product.price}
          </p>
          <div className="">
            <Stars
              count={5}
              value={product.rating}
              activeColor="#22292F"
              edit={false}
              size={20}
              isHalf={true}
            />
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Product;
