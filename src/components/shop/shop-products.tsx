"use client";
import { Fragment } from "react";
import Product from "@/components/common/product";
import { useFilterStore } from "@/store/filter";
import { v4 as uuidv4 } from "uuid";
interface Props {
  products: {
    productImage: string;
    rating: number;
    reviews?: number;
    price: number;
    oldPrice?: number;
    title: string;
    isFavorite: boolean;
    productLink: string;
    colors?: any[];
    badgeText?: string;
    badgeClass?: string;
  }[];
}
const ShopProducts = ({ products }: Props) => {
  const isOpenFilter = useFilterStore((state) => state.isOpenFilterDesktop);
  return (
    <Fragment>
      <div className="spacer"></div>
      <div className="flex xs:justify-center flex-wrap w-full">
        {products.map((product: any,i) => (
          <div
          key={uuidv4()}
            className={`shadow-sm xs:shadow-md hover:shadow-lg ${
              isOpenFilter ? "w-[30%] lg:w-[45%]" : "w-[23%] lg:w-[30%]"
            } md:w-[45%]    xs:w-[80%] xxs:w-full flex-grow-0 flex-shrink-0 basis-auto hover:scale-[1.05] transition-all xs:hover:scale-[1]  mx-10 mb-[50px]`}
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ShopProducts;
