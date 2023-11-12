"use client";
import { Fragment, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Product from "@/components/common/product";
import Heading from "@/components/common/heading";
import { v4 as uuidv4 } from "uuid";
const LatestProducts = () => {
  const tabs = [
    {
      id: "new-arrival",
      text: "NEW ARRIVAL",
    },
    {
      id: "best-seller",
      text: "BEST SELLER",
    },
    {
      id: "trending",
      text: "TRENDING",
    },
    {
      id: "special-offer",
      text: "SPECIAL OFFER",
    },
  ];

  const tabsContent = [
    {
      id: "new-arrival",
      products: [
        {
          productImage: "/img/product/product1/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,
          title: "Woven Throw Pillow",
          isFavorite: true,
          productLink: "/",
          badgeText: "NEW",
          badgeClass: "bg-success",
        },
        {
          productImage: "/img/product/product2/1.jpg",
          rating: 4,
          reviews: 70,
          price: 350,
          title: "Copley Dining Chair",
          isFavorite: true,
          productLink: "/",
          badgeText: "SOLD",
          badgeClass: "bg-secondary",
        },
      ],
    },
    {
      id: "best-seller",
      products: [
        {
          productImage: "/img/product/product3/1.jpg",
          rating: 4.5,
          reviews: 70,
          price: 700,
          title: "Women's Flexible Bottom Shoes",
          isFavorite: true,
          productLink: "/",
          badgeText: "NEW",
          badgeClass: "bg-success",
        },
        {
          productImage: "/img/product/product4/1.jpg",
          rating: 5,
          reviews: 200,
          price: 500,
          title: "Women's Strap Sandal",
          isFavorite: true,
          productLink: "/",
          badgeText: "NEW",
          badgeClass: "bg-success",
        },
        {
          productImage: "/img/product/product5/1.jpg",
          rating: 5,
          reviews: 200,
          price: 500,
          title: "Cat Eye Reading Glasses",
          isFavorite: true,
          productLink: "/",
          badgeClass: "bg-success",
          badgeText: "NEW",
        },
        {
          productImage: "/img/product/product6/1.jpg",
          rating: 5,
          reviews: 200,
          price: 1160,
          title: "Girls' Monster Wallet",
          isFavorite: true,
          productLink: "/",
          badgeText: "NEW",
          badgeClass: "bg-success",
        },
        {
          productImage: "/img/product/product7/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,

          title: "Room Stick Lamp",
          isFavorite: true,
          productLink: "/",
          badgeText: "NEW",
          badgeClass: "bg-success",
        },
        {
          productImage: "/img/product/product8/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,
          title: "Army Baseball Cap",
          isFavorite: true,
          productLink: "/",
          badgeClass: "bg-success",
        },
      ],
    },
    {
      id: "trending",
      products: [
        {
          productImage: "/img/product/product7/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,

          title: "Room Stick Lamp",
          isFavorite: true,
          productLink: "/",
          badgeText: "NEW",
          badgeClass: "bg-success",
        },
        {
          productImage: "/img/product/product8/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,
          title: "Army Baseball Cap",
          isFavorite: true,
          productLink: "/",
          badgeClass: "bg-success",
        },
      ],
    },
    {
      id: "special-offer",
      products: [
        {
          productImage: "/img/product/product1/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,
          title: "Woven Throw Pillow",
          isFavorite: true,
          productLink: "/",
          badgeText: "50% off",
          badgeClass: "bg-secondary",
          // colors: [
        },
        {
          productImage: "/img/product/product2/1.jpg",
          rating: 4,
          reviews: 70,
          price: 350,
          title: "Copley Dining Chair",
          isFavorite: true,
          productLink: "/",
          badgeText: "50% off",
          badgeClass: "bg-secondary",
        },
        {
          productImage: "/img/product/product6/1.jpg",
          rating: 5,
          reviews: 200,
          price: 1160,
          title: "Girls' Monster Wallet",
          isFavorite: true,
          productLink: "/",
          badgeText: "50% off",
          badgeClass: "bg-secondary",
        },
        {
          productImage: "/img/product/product7/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,
          title: "Room Stick Lamp",
          isFavorite: true,
          productLink: "/",
          badgeText: "50% off",
          badgeClass: "bg-secondary",
        },
        {
          productImage: "/img/product/product8/1.jpg",
          rating: 5,
          reviews: 200,
          price: 660,
          title: "Army Baseball Cap",
          isFavorite: true,
          productLink: "/",
          badgeText: "50% off",
          badgeClass: "bg-secondary",
        },
      ],
    },
  ];
  const [currentTab, setCurrentTab] = useState("new-arrival");
  return (
    <Fragment>
      <Heading heading="Latest Products" subheading="This Season" />
      <Tabs
        defaultValue="new-arrival"
        onValueChange={(value) => setCurrentTab(value)}
        orientation="horizontal"
      >
        <TabsList className="flex justify-center items-center flex-wrap h-[90px]">
          {tabs.map((tab) => (
            <TabsTrigger
              onChange={(value) => console.log(value)}
              value={tab.id}
              key={uuidv4()}
              className="my-10 uppercase text-[16px] md:text-[14px] sm:text-[12px] font-bold font-roboto text-[#333333]  data-[state=active]:text-secondaryhover data-[state=active]:border-b-2 border-secondaryhover ml-[50px] md:ml-[20px]"
            >
              {tab.text}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsContent.map((content) => (
          <TabsContent
          key={content.id}
            value={content.id}
            className={`mt-50 ${
              content.id === currentTab ? "opacity-100" : "opacity-0"
            }  transition-all duration-[500ms]`}
          >
            <div className={`flex justify-center flex-wrap`}>
              {content.products.map((product,i) => (
                <div key={uuidv4()} className="shadow-sm hover:shadow-md hover:scale-[1.05] transition-all w-[23%] lg:w-[30%] md:w-[45%] xs:w-[80%] xxs:w-full flex-grow-0 flex-shrink-0 basis-auto mx-10 mb-[50px]">
                  <Product key={content.id} product={product} />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Fragment>
  );
};

export default LatestProducts;
