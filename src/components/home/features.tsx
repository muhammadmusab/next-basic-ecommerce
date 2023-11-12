import Image from "next/image";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
const features = () => {
  const featuresList = [
    {
      img: "/shipping.svg",
      heading: "FREE SHIPPING",
      text: "When you spend $100+",
    },
    {
      img: "/support.svg",
      heading: "SUPPORT 24/7",
      text: "Ready to help our clients",
    },
    {
      img: "/secure.svg",
      heading: "SECURED PAYMENTS",
      text: "Secure payments using Stripe",
    },
  ];
  return (
    <Fragment>
      <div className="flex xs:flex-col items-center justify-center xs:justify-between py-30 xs:py-15 shadow-md">
        {featuresList.map((feature) => (
          <div key={uuidv4()} className="flex flex-row sm:flex-col sm:items-center mx-30 md:mx-15 xs:basis-[100%] xs:max-w-[100%] xs:py-10">
            <Image
              src={feature.img}
              alt="feature-image"
              width={41}
              height={41}
            />
            <div className="text-roboto text-primary pl-10 sm:text-center sm:pl-0 sm:pt-5">
              <h1 className="font-bold text-[15px] sm:text-[13px]">{feature.heading}</h1>
              <p className="text-[13px] sm:text-[12px]">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#22292F] text-white container-fluid py-15 text-center">
        <span className="font-bold">Fashion</span>{" "}
        Is Nothing But Choise
      </div>
    </Fragment>
  );
};

export default features;
