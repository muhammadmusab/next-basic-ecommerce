import Image from "next/image";
import { Fragment } from "react";

interface Props {
  icon: any;
  heading: string;
  subheading: string;
}
const IconTextContainer = ({ heading, icon, subheading }: Props) => {
  return (
    <Fragment>
      <div className="flex justify-center mb-[24px]">
        <div className="relative ">
        <Image
          src={"/img/icon-container.png"}
          alt="icon-container"
          width={80}
          height={80}
        />
        {icon}
        </div>
      </div>
      <h1 className="text-[20px] text-center font-semibold mb-[8px]">{heading}</h1>
      <h2 className="text-[14px] text-center">{subheading}</h2>
    </Fragment>
  );
};

export default IconTextContainer;
