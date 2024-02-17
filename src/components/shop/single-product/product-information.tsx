"use client";
import Link from "next/link";
import React from "react";
import Stars from "react-rating-stars-component";
import { Toggle } from "@/components/ui/toggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
// import { RiTwitterXFill } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
interface Props {
  product: {
    rating: number;
    reviews: number;
    price: number;
    oldPrice?: number;
    title: string;
    isFavorite: boolean;
    productLink: string;
    colors?: any[];
    variants?: { type: string; values: { value: string; price: number }[] }[];
    properties?: { name: string; value: string }[];
    description: string;
    productType?: {
      value: string;
      path: string;
    };
    vendor?: {
      value: string;
      path: string;
    };
    tags: {
      value: string;
      path: string;
    }[];
    stock?: number;
  };
}

const ProductInformation = ({ product }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const { createQueryString } = useFilter();

  const variantTypes = product.variants
    ? product.variants.map((variant) => variant.type)
    : [];

  let selectedVariants: any = [];

  variantTypes.forEach((variant) => {
    params.getAll(variant).forEach((item) => {
      selectedVariants = selectedVariants.concat(item.split(","));
    });
  });

  const toggleVariant = (variant: { type: string; value: string }) => {
    router.push(
      pathname + "?" + createQueryString(variant.type, variant.value),
      {
        scroll: false,
      }
    );
  };
  return (
    <div>
      {/* Reviews */}
      <div className="flex items-center">
        <div>
          <Stars
            count={5}
            value={product.rating}
            activeColor="#22292F"
            edit={false}
            size={20}
            isHalf={true}
          />
        </div>

        <p className="text-secondaryhover mb-0 ml-[5px] pt-[3.5px] text-[14px]">
          {product.reviews}
          {product.reviews > 1 ? " Reviews" : " Review"}
        </p>
      </div>
      {/* Availability */}
      <div className="flex items-center mt-[5px] mb-[10px] text-[12px]">
        <span className="font-bold text-primary  text-[14px]">
          Availability :
        </span>
        <span className="text-primary ml-1">Hurry, only left</span>
        <span className="text-white flex items-center px-[5px] rounded-[5px] bg-secondaryhover ml-1">
          {product.stock} items
        </span>
        <span className="text-primary ml-1">in stock</span>
      </div>
      {/* Title */}
      <h1 className="text-primary font-bold text-[25px]">{product.title}</h1>

      {/* Price */}
      <div className="flex items-baseline mt-[10px]">
        <span className="text-primary text-[16px] mr-[1px] font-bold">$</span>
        <h4 className="text-primary font-bold text-[25px]">
          {product.price.toFixed(2)}
        </h4>
        {product.oldPrice && (
          <span className="text-primary text-[14px] line-through ml-[5px]">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>
      <p className="text-primaryhover text-[14px]">Tax included</p>

      {/* Description */}
      <div className="mt-[30px] mb-[20px] xl:max-w-[90%] lg:max-w-[100%]">
        <h2 className="text-primary font-bold text-[16px]">
          Short Description
        </h2>
        <p className="text-[14px] mt-[5px] leading-[1.8] text-primaryhover">
          {product.description}
        </p>
      </div>

      {/* Product Type */}
      {product.productType && (
        <div className="text-[14px] text-primary">
          <h2 className=" font-bold ">
            Product Type:{" "}
            <Link
              className=" font-normal underline"
              href={product.productType.path}
            >
              {product.productType.value}
            </Link>
          </h2>
        </div>
      )}
      {/* Product Properties */}
      {product.properties &&
        product.properties.map((property, i) => (
          <div
            key={property.name + i}
            className="my-[10px] flex items-center text-[14px] text-primary"
          >
            <h2 className=" font-bold">{property.name}:</h2>
            <span className=" pl-[5px]">{property.value}</span>
          </div>
        ))}
      {/* Tags */}
      {product.properties && (
        <div className="my-[10px] flex items-center text-[14px] text-primary">
          <h2 className=" font-bold">Tags:</h2>
          {product.tags.map((tag) => (
            <Link
              key={tag.path}
              href={tag.path}
              className=" font-normal underline pl-[5px]"
            >
              {tag.value}
            </Link>
          ))}
        </div>
      )}

      {/* Vendor */}
      {product.vendor && (
        <div className="text-[14px] text-primary">
          <h2 className=" font-bold ">
            Vendor:{" "}
            <Link className=" font-normal underline" href={product.vendor.path}>
              {product.vendor.value}
            </Link>
          </h2>
        </div>
      )}

      {/* variants */}
      {product.variants &&
        product.variants.map((variant, i) => (
          <div
            key={"variant" + i}
            className="my-[20px] text-[14px] text-primary"
          >
            <h2 className="font-bold">
              {variant.type}:{" "}
              <span className="font-normal">{variant.values[0].value}</span>
            </h2>

            <div className="flex flex-wrap mt-[10px]">
              {variant.values.map((item) => (
                <Toggle
                  key={uuidv4()}
                  value={item.value}
                  onClick={() =>
                    toggleVariant({ type: variant.type, value: item.value })
                  }
                  variant="outline"
                  className=" h-[30px] text-[12px] p-[5px] max-w-[250px] border-secondaryhover bg-white  mr-[10px] data-[state=on]:bg-secondaryhover data-[state=on]:text-white"
                  data-state={
                    variant.values[0].value === item.value ? "on" : "off"
                  }
                >
                  {item.value}
                </Toggle>
              ))}
            </div>
          </div>
        ))}

      <hr className="bg-primary" />
      {/* Add to cart section */}
      <div className="flex items-center my-[15px]">
        <div className="flex items-center">
          <button className="hover:bg-secondary bg-secondaryhover rounded-full w-[25px] h-[25px] flex justify-center items-center transition-all">
            <AiOutlineMinus className=" text-white" />
          </button>
          <span className="px-[15px] font-bold text-primary">1</span>
          <button className="hover:bg-secondary bg-secondaryhover rounded-full w-[25px] h-[25px] flex justify-center items-center transition-all">
            <AiOutlinePlus className=" text-white" />
          </button>
        </div>
        <button className="ml-[10px] rouned-[15px] px-[15px] py-[5px] hover:bg-primary transition-all bg-secondaryhover text-white">
          ADD TO CART
        </button>
        <button className="ml-[10px] rouned-[15px] px-[15px] py-[5px] hover:bg-primaryhover transition-all bg-success text-white">
          BUY IT NOW
        </button>
      </div>

      {/* availability at stores */}
      <div className="my-[10px]">
        <p className="text-primaryhover">
          The item is delivered usually within 2-8 working days.
        </p>
      </div>

      {/* add to wishlist */}
      <div className="flex items-center my-[20px]">
        <button className="flex items-center group">
          <AiOutlineHeart className="text-secondaryhover text-[20px]" />
          <span className="pl-[10px] group-hover:text-secondaryhover text-primary">
            Add to wishlist
          </span>
        </button>
        <button className="flex items-center group ml-[30px] ">
          <FiShare className="text-secondaryhover text-[20px]" />
          <span className="pl-[10px] group-hover:text-secondaryhover text-primary">
            Share
          </span>
        </button>
      </div>
      <hr className="bg-primary" />
      {/* social icons */}
      <div className="flex items-center my-[20px]">
        {/* <a href="https://www.twitter.com">
          <RiTwitterXFill />
        </a> */}
        <a className="group" href="https://www.instagram.com">
          <BsInstagram className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
        <a className="ml-[20px] group" href="https://www.youtube.com">
          <BsYoutube className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
        <a className="ml-[20px] group" href="https://www.facebook.com">
          <FiFacebook className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
        <a className="ml-[20px] group" href="https://www.tiktok.com">
          <FaTiktok className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
      </div>
      {/* ask-about-product sizing-guide delivery-return */}
      <div className="flex items-center"></div>
    </div>
  );
};

export default ProductInformation;
