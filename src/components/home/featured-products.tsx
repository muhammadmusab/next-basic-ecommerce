import { Fragment } from "react";
import Product from "@/components/common/product";
import Heading from "@/components/common/heading";
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
const FeaturedProducts = ({ products }: Props) => {
  return (
    <Fragment>
      <Heading heading="Featured Products" subheading="This Season" />
      <div className="spacer"></div>
      <div className="flex lg:justify-center flex-wrap ">
        {products.map((product: any,i) => (
          <div key={uuidv4()} className="shadow-sm hover:shadow-md hover:scale-[1.05] transition-all w-[23%] lg:w-[30%] md:w-[45%] xs:w-[80%] xxs:w-full flex-grow-0 flex-shrink-0 basis-auto mx-10 mb-[50px]">
            <Product product={product} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FeaturedProducts;
