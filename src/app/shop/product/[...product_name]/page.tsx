import Breadcrumbs from "@/components/shop/breadcrumbs";
import React from "react";
import ProductVerticalSlider from "@/components/shop/single-product/product-vertical-slider";
import ProductInformation from "@/components/shop/single-product/product-information";
import ProductControls from "@/components/shop/single-product/product-controls";
import ProductDetailsTabs from "@/components/shop/single-product/product-details-tabs";
const page = () => {
  let product = {
    rating: 4.5,
    reviews: 4,
    price: 200,
    oldPrice: 250,
    title: "Mobile phone 6.8" + '"',
    productLink: "/",
    productType: {
      value: "Smart Phone",
      path: "/shop/smart-phone",
    },
    description:
      "In addition to text messaging and phone conversations, smartphones keep users linked through messaging services, email, video chats, and social networking apps. A smartphone is a portable mobile computer that can access and browse the Internet.",
    isFavorite: true,
    variants: [
      {
        type: "Ram",
        values: [
          {
            value: "1GB",
            price: 200,
          },
          {
            value: "2GB",
            price: 250,
          },
          {
            value: "3GB",
            price: 300,
          },
        ],
      },
      {
        type: "Storage",
        values: [
          {
            value: "16GB",
            price: 200,
          },
          {
            value: "32GB",
            price: 250,
          },
          {
            value: "64GB",
            price: 300,
          },
        ],
      },
    ],
    vendor: null,
    stock: 3,
    tags: [
      {
        path: "/shop/mobile",
        value: "mobile",
      },
      {
        path: "/shop/electronics",
        value: "electronics",
      },
      {
        path: "/shop/smartphone",
        value: "smartphone",
      },
    ],
    properties: [
      {
        name: "SKU",
        value: "ELSM68",
      },
      {
        name: "Weight",
        value: "0.315g",
      },
    ],
  };
  const reviews = [
    {
      name: "Musab",
      title: "Stunning display",
      date: `Oct 08 2023`,
      rating: 5,
      text: "I purchased two more to give as Christmas presents to family members and this is the third one. All people adore this console. Never had a problem with mine since the first day that it was vertical; the games continue to operate without a hitch. Enjoy the gaming of the future.",
    },
    {
      name: "Shumas",
      title: "Not happy",
      date: `Oct 09 2023`,
      rating: 3.5,
      text: "I purchased two more to give as Christmas presents to family members and this is the third one. All people adore this console. Never had a problem with mine since the first day that it was vertical; the games continue to operate without a hitch. Enjoy the gaming of the future.",
    },
    {
      name: "Omer",
      date: `Oct 10 2023`,
      title: "Great speed",
      rating: 5,
      text: "I purchased two more to give as Christmas presents to family members and this is the third one. All people adore this console. Never had a problem with mine since the first day that it was vertical; the games continue to operate without a hitch. Enjoy the gaming of the future.",
    },
  ];
  const longDescription = `<h1><span style="font-size:20px;color:#0762BC"><strong>The Samsung 6.8 inch smartphone</strong></span></h1>
  <br>
  <p><span>Introducing the all-new <strong>6-inch</strong> mobile phone, a marvel of modern technology designed to elevate your mobile experience to new heights. Its expansive 6-inch display provides a canvas for rich, vibrant visuals, whether you&#39;re streaming your favorite shows, playing immersive games, or browsing the web. With a <strong>powerful processor</strong> under the hood, multitasking is a breeze, ensuring smooth performance for all your apps and tasks.</span></p><br>
  <p>Don&#39;t fret about constantly searching for an outlet; this mobile phone is equipped with a high-capacity battery that keeps you connected all day long. Capture the world around you in stunning detail with the phone&#39;s advanced camera system, whether it&#39;s breathtaking landscapes or cherished moments with friends and family. Stay connected with the latest in connectivity options, ensuring you&#39;re always in touch with what matters most to you. Elevate your mobile experience with this sleek, feature-packed 6-inch smartphone &ndash; the future of communication is in your hands.</p><br>
  <p>But that&#39;s not all! This 6-inch mobile phone is not just a communication device; it&#39;s your gateway to the future. With its sleek design and intuitive user interface, it&#39;s a fashion statement and a powerful tool rolled into one. Whether you&#39;re a tech enthusiast, a social media aficionado, or a professional on the go, this mobile phone&#39;s blend of style and substance is sure to impress. It&#39;s time to embrace the future of mobile technology, where a world of possibilities fits comfortably in your hand, all within this sleek, feature-rich 6-inch mobile phone.</p>`;

  return (
    <div className="font-poppins bg-[#F7F8FC] pb-[100px]">
      <Breadcrumbs name="product_name" />
      <div className="container-fluid">
        <div className="flex justify-between items-center flex-wrap">
          <div className="basis-[48%] max-w-[48%] lg:basis-full lg:max-w-full">
            <ProductVerticalSlider />
          </div>
          <div className="basis-[50%] max-w-[50%] lg:basis-full lg:max-w-full">
            <ProductInformation product={product} />
            <ProductControls
              tags={product.tags}
              variants={product.variants}
              productType={product.productType}
              properties={product.properties}
              vendor={product?.vendor}
            />
          </div>
        </div>
      </div>
      {/* tabs of product */}
      <div className="spacer"></div>
      <div className="spacer"></div>
      <ProductDetailsTabs
        description={longDescription}
        reviews={reviews}
        showSizing={true}
        showSpecifications={false}
      />
    </div>
  );
};

export default page;
