"use client";
import Image from "next/image";
import { FiDelete } from "react-icons/fi";

const Cart = () => {
  const items = [
    {
      id: "83701f42-d11c-45fb-b49e-94117e2ed0ec",
      image: "/img/product/wishlist1.png",
      price: 50,
      quantity: 2,
      title: "Women's Strap Sandal",
    },
    {
      id: "83701f42-d11c-45fb-b49e-94117e2ed0e2",
      image: "/img/product/wishlist2.png",
      price: 100,
      quantity: 2,
      title: "Wilson Dynasty 29” Basketball",
    },
    {
      id: "83701f42-d11c-45fb-b49e-94117e2ed0e2",
      image: "/img/product/wishlist2.png",
      price: 100,
      quantity: 2,
      title: "Wilson Dynasty 29” Basketball",
    },
    {
      id: "83701f42-d11c-45fb-b49e-94117e2ed0e2",
      image: "/img/product/wishlist2.png",
      price: 100,
      quantity: 2,
      title: "Wilson Dynasty 29” Basketball",
    },
  ];
  const onDelete = (item: any) => {
    console.log("on delete", item);
  };
  return (
    <div className="mb-[50px] flex flex-col justify-between w-[75%] sm:w-full">
      <div className="overflow-y-auto h-[400px] pr-[10px]">
        {/* items */}
        {items.map((item) => (
          <div key={item.id} className="flex mb-30">
            {/* image */}
            <div className="basis-[80px] max-w-[80px]">
              <Image
                src={item.image}
                width={80}
                height={80}
                alt="product-item"
              />
            </div>

            <div className="flex justify-around flex-col ml-[30px] basis-[70%] max-w-[70%]">
              <h3 className="text-[#31333e] hover:text-secondaryhover font-bold text-[12px] font-roboto">
                {item.title}
              </h3>
              <div className="flex items-center mt-5">
                <button className="text-primary">-</button>
                <div className="w-[30px] h-[30px] mx-5 text-[14px] flex items-center justify-center text-center rounded-full border border-gray-400">
                  {item.quantity}
                </div>

                <button className="text-primary">+</button>
              </div>
            </div>

            <div className="flex flex-col justify-around">
              <button onClick={() => onDelete(item)}>
                <FiDelete className="text-primary" />
              </button>
              <p className="text-[#31333e]  text-[14px] font-bold mb-0">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
