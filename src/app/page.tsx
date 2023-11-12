import { Fragment } from "react";
import Slider from "@/components/common/slider/slider";
import Categories from "@/components/home/categories";
import Features from "@/components/home/features";

import FeaturedProducts from "@/components/home/featured-products";
import LatestProducts from "@/components/home/latest-products";
import SingleBanner from "@/components/home/banners";
import MultipleBanners from "@/components/home/mix-banners";
import Brands from "@/components/home/brands";
import { products } from "@/constants/products";
import { bannersData, multipleBannersData } from "@/constants/home";
const slides = [
  {
    imageSrc: "/img/s_1.webp",
    containerClass: "bg-[#EE3770]",
    imageClass: "w-[600px] md:w-[430px]",
    shopLink: "/",
    headingClass: "font-roboto text-[27px] font-medium text-white",
    subheadingClass: "font-roboto text-[37px] font-bold text-white",
    textClass: "font-roboto text-[15px] text-white",
    buttonClass: "",
    heading: "New Arrival",
    subheading: "Women Fashion",
    text: "Last call for upto 25%",
  },
  {
    imageSrc: "/img/s_2.webp",
    containerClass: "bg-[#7A316F]",
    imageClass: "w-[600px] md:w-[430px]",
    shopLink: "/",
    headingClass: "font-roboto text-[27px] font-medium text-white",
    subheadingClass: "font-roboto text-[37px] font-bold text-white",
    textClass: "font-roboto text-[15px] text-white",
    buttonClass: "",
    heading: "Latest Trending",
    subheading: "Fashion Wear",
    text: "Last call for upto 35%",
  },
  {
    imageSrc: "/img/s_3.webp",
    containerClass: "bg-[#723DA6]",
    imageClass: "w-[600px] md:w-[430px]",
    shopLink: "/",
    headingClass: "font-roboto text-[27px] font-medium text-white",
    subheadingClass: "font-roboto text-[37px] font-bold text-white",
    textClass: "font-roboto text-[15px] text-white",
    buttonClass: "",
    heading: "New Trending",
    subheading: "Kids Fashion",
    text: "Last call for upto 15%",
  },
  {
    imageSrc: "/img/s_4.webp",
    containerClass: "bg-[#FDC200]",
    imageClass: "w-[600px] md:w-[430px]",
    shopLink: "/",
    headingClass: "font-roboto text-[27px] font-bold text-primary",
    subheadingClass: "font-roboto text-[37px] font-bold text-primary",
    textClass: "font-roboto text-[15px] text-primary",
    buttonClass: "",
    heading: "Latest Trending",
    subheading: "Electronics Items",
    text: "Last call for upto 45%",
  },
  {
    imageSrc: "/img/s_5.webp",
    containerClass: "bg-[#21AD61]",
    imageClass: "w-[600px] md:w-[430px]",
    shopLink: "/",
    headingClass: "font-roboto text-[27px] font-medium text-white",
    subheadingClass: "font-roboto text-[37px] font-bold text-white",
    textClass: "font-roboto text-[15px] text-white",
    buttonClass: "",
    heading: "Super Deals",
    subheading: "Home Furniture",
    text: "Last call for upto 24%",
  },
];

const page = () => {
  return (
    <Fragment>
      {/* slider */}
      <Slider
        options={{
          type: "loop",
          perPage: 1,
          arrows: true,
          autoplay: true,
          drag: true,
          pagination: false,
        }}
        slides={slides}
        key={'slides'}
      />

      <Features />

      <div className="container-fluid">
        {/* Categories */}
        <Categories />

        {/* Featured Products */}
        <FeaturedProducts products={products} />

        {/* banners */}
        <MultipleBanners
          topLeft={multipleBannersData[0]}
          bottomLeft={multipleBannersData[1]}
          right={multipleBannersData[2]}
          containerClass="justify-center"
        />

        {/* latesst products */}
        <LatestProducts />

        {/* single banner */}
        <SingleBanner bannersData={bannersData} />

        {/* brands */}
        <Brands />
      </div>
    </Fragment>
  );
};

export default page;
