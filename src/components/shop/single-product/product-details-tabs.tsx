"use client";
import { Fragment, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Heading from "@/components/common/heading";
import { v4 as uuidv4 } from "uuid";
import ProductDescription from "./tabs/product-description";
import DeliveryReturn from "./tabs/delivery-return";
import ProductReviews from "./tabs/product-reviews";
import Sizing from "./tabs/sizing";
import Specifications from "./tabs/specifications";
interface Props {
  reviews: { name: string; date: string; rating: number; text: string,title:string; }[];
  description: any;
  showSizing: boolean;
  showSpecifications: boolean;
}
const ProductDetailsTabs = ({
  description,
  showSizing,
  showSpecifications,
  reviews,
}: Props) => {
  const [currentTab, setCurrentTab] = useState("description");

  const tabs = [
    {
      id: "description",
      text: "Description",
    },
    {
      id: "delivery-return",
      text: "Delivery and return",
    },
    {
      id: "reviews",
      text: "Reviews",
    },
  ];

  const sizing = {
    headings: [
      { id: "small", value: "Small" },
      { id: "medium", value: "Medium" },
      { id: "large", value: "Large" },
      { id: "xlarge", value: "X-Large" },
      { id: "xxlarge", value: "XX-Large" },
    ],
    rows: [
      {
        small: "14-14.5",
        medium: "15-15.5",
        large: "16-16.5",
        xlarge: "17-17.5",
        xxlarge: "18-18.5",
      },
      {
        small: "14-14.5",
        medium: "15-15.5",
        large: "16-16.5",
        xlarge: "17-17.5",
        xxlarge: "18-18.5",
      },
      {
        small: "14-14.5",
        medium: "15-15.5",
        large: "16-16.5",
        xlarge: "17-17.5",
        xxlarge: "18-18.5",
      },
      {
        small: "14-14.5",
        medium: "15-15.5",
        large: "16-16.5",
        xlarge: "17-17.5",
        xxlarge: "18-18.5",
      },
    ],
  };

  const tabsContent = [
    {
      id: "description",
      component: <ProductDescription description={description} />,
    },
    {
      id: "delivery-return",
      component: <DeliveryReturn />,
    },
    {
      id: "reviews",
      component: <ProductReviews average={4.5} reviews={reviews} />,
    },
  ];
  if (showSizing) {
    tabs.splice(1, 0, {
      id: "sizing",
      text: "Sizing",
    });
    tabsContent.splice(1, 0, {
      id: "sizing",
      component: <Sizing headings={sizing.headings} rows={sizing.rows} />,
    });
  } else if (showSpecifications) {
    tabs.splice(1, 0, {
      id: "specifications",
      text: "Specifications",
    });
    tabsContent.splice(1, 0, {
      id: "specifications",
      component: <Specifications />,
    });
  }

  return (
    <Fragment>
      <div className="custom-container font-poppins">
        {/* <Heading containerClass="mb-[15px]" heading="Product Details" subheading="" /> */}

        <Tabs
          defaultValue="description"
          onValueChange={(value) => setCurrentTab(value)}
          orientation="horizontal"
        >
          <TabsList className="flex justify-center items-center flex-wrap h-[90px]">
            {tabs.map((tab) => (
              <TabsTrigger
                onChange={(value) => console.log(value)}
                value={tab.id}
                key={uuidv4()}
                className="my-10 uppercase text-[16px] md:text-[14px] sm:text-[12px] font-bold text-[#333333]  data-[state=active]:text-secondaryhover data-[state=active]:border-b-2 border-secondaryhover ml-[50px] md:ml-[20px]"
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
              <div className="">{content.component}</div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Fragment>
  );
};

export default ProductDetailsTabs;
