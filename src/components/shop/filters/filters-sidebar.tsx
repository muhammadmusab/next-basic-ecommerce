"use client";
import CategoryFilter from "./category-filter";
import ColorFilter from "./color-filter";
import PriceFilter from "./price-filter";
import SizeFilter from "./size-filter";
import BrandFilter from "./brand-filter";
import { useFilterStore } from "@/store/filter";
import { useEffect } from "react";
import { useStore } from "@/hooks/useStore";

interface Props {
  className?: string;
}
const filters = ({ className }: Props) => {
  const categoriesTitleClass =
    "pb-[15px] text-[18px] group-hover:text-secondaryhover group-hover:no-underline md:text-[12px]";
  // change this functionality later when integrating api , for now we will consider category men/dress
  // later we change fetch the categories via api same case for brands also some categories don't require color filter so we will decide it using the api
  const categories = [
    { name: "Shorts", value: "shorts" },
    { name: "Active Wear", value: "active-wear" },
    { name: "Pants", value: "pants" },
  ];
  const colors = [
    {
      name: "Black",
      value: "black",
      selected: false,
      className: "data-[state=checked]:bg-[#121212]",
      extraClass: "hover:bg-[#121212]",
    },
    {
      name: "Blue",
      value: "blue",
      selected: false,
      className: "data-[state=checked]:bg-[#45A3C0]",
      extraClass: "hover:bg-[#45A3C0]",
    },
    {
      name: "Brown",
      value: "brown",
      selected: false,
      className: "data-[state=checked]:bg-[#8A4717]",
      extraClass: "hover:bg-[#8A4717]",
    },
    {
      name: "Cyan",
      value: "cyan",
      selected: false,
      className: "data-[state=checked]:bg-[#3CAE9C]",
      extraClass: "hover:bg-[#3CAE9C]",
    },
    {
      name: "Dark Blue",
      value: "dark-blue",
      selected: false,
      className: "data-[state=checked]:bg-[#0760B2]",
      extraClass: "hover:bg-[#0760B2]",
    },
    {
      name: "Dark Gray",
      value: "dark-gray",
      selected: false,
      className: "data-[state=checked]:bg-[#4B5760]",
      extraClass: "hover:bg-[#4B5760]",
    },
    {
      name: "Gray",
      value: "gray",
      selected: false,
      className: "data-[state=checked]:bg-[#96989A]",
      extraClass: "hover:bg-[#96989A]",
    },
    {
      name: "Green",
      value: "green",
      selected: false,
      className: "data-[state=checked]:bg-[#588431]",
      extraClass: "hover:bg-[#588431]",
    },
    {
      name: "Khaki",
      value: "khaki",
      selected: false,
      className: "data-[state=checked]:bg-[#ACA771]",
      extraClass: "hover:bg-[#ACA771]",
    },
    {
      name: "Orange",
      value: "orange",
      selected: false,
      className: "data-[state=checked]:bg-[#FA9247]",
      extraClass: "hover:bg-[#FA9247]",
    },
    {
      name: "Pink",
      value: "pink",
      selected: false,
      className: "data-[state=checked]:bg-[#D0084F]",
      extraClass: "hover:bg-[#D0084F]",
    },
    {
      name: "Red",
      value: "red",
      selected: false,
      className: "data-[state=checked]:bg-[#BB080E]",
      extraClass: "hover:bg-[#BB080E]",
    },
    {
      name: "Violet",
      value: "violet",
      selected: false,
      className: "data-[state=checked]:bg-[#8005FA]",
      extraClass: "hover:bg-[#8005FA]",
    },
    {
      name: "Yellow",
      value: "yellow",
      selected: false,
      className: "data-[state=checked]:bg-[#FACA05]",
      extraClass: "hover:bg-[#FACA05]",
    },
  ];
  const sizes = [
    {
      name: "XS",
      label: "extra-small",
      value: "XS",
      items: 45,
      selected: false,
    },
    {
      name: "S",
      value: "S",
      label: "small",
      items: 49,
      selected: false,
    },
    {
      name: "M",
      value: "M",
      label: "medium",
      items: 35,
      selected: false,
    },
    {
      name: "L",
      value: "L",
      label: "large",
      items: 30,
      selected: false,
    },
    {
      name: "XL",
      value: "XL",
      label: "extra-large",
      items: 22,
      selected: false,
    },
  ];
  const brands = [
    {
      name: "Canverse",
      value: "canverse",
      label: "Canverse",
      items: 49,
      selected: false,
    },
    {
      name: "Claytan",
      value: "claytan",
      label: "Claytan",

      items: 35,
      selected: false,
    },
    {
      name: "Cole-Hoon",
      value: "cole-Hoon",
      label: "Cole Hoon",
      items: 30,
      selected: false,
    },
    {
      name: "Colvin-Klein",
      value: "colvin-Klein",
      label: "Colvin Klein",
      items: 22,
      selected: false,
    },
  ];
  // setting brands to store , just as an example for the moment to use it in applied filters
  const setBrands = useFilterStore((state) => state.setBrands);
  const isOpenFilterDesktop = useStore(
    useFilterStore,
    (state) => state.isOpenFilterDesktop
  );

  useEffect(() => {
    setBrands(brands);
  }, []);

  return (
    <div
      className={`transition-all ${
        className
          ? className
          : isOpenFilterDesktop
          ? "w-[400px] md:w-full select-auto pointer-events-auto"
          : "w-0 opacity-0 select-none pointer-events-none"
      } mb-[100px] pr-[30px] md:pr-0`}
    >
      <div className="">
        {/* category */}
        <CategoryFilter
          categoriesArray={categories}
          titleClass={categoriesTitleClass}
        />
        <hr className="my-[15px] md:my-[10px]" />
        {/* price */}
        <PriceFilter minPriceValue={0} maxPriceValue={1000} />
        <hr className="my-[15px] md:my-[10px]" />
        {/* Color */}
        <ColorFilter colorsArray={colors} titleClass={categoriesTitleClass} />
        <hr className="my-[15px] md:my-[10px]" />
        {/* size*/}
        <SizeFilter sizeArray={sizes} titleClass={categoriesTitleClass} />
        <hr className="my-[15px] md:my-[10px]" />
        {/* Brand*/}
        <BrandFilter brandsArray={brands} titleClass={categoriesTitleClass} />
      </div>
    </div>
  );
};

export default filters;
