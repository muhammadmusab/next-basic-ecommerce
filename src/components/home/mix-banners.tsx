import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
interface Props {
  topLeft: {
    imagePath: string;
    path: string;
  };
  bottomLeft: {
    imagePath: string;
    path: string;
  };
  right: {
    imagePath: string;
    path: string;
  };
  containerClass?: string;
}
const Banners = ({ containerClass, bottomLeft, right, topLeft }: Props) => {
  return (
    <Fragment>
      <div className="spacer"></div>
      <div className={`flex md:flex-col ${containerClass}`}>
        <div className="flex flex-col justify-between pr-20 md:pr-0">
          <Link href={topLeft.path} className={``}>
            <Image
              src={topLeft.imagePath}
              alt="banner-image"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full h-[290px] lg:h-[230px] md:pb-20 md:h-[290px] sm:h-auto`}
            />
          </Link>
          <Link href={bottomLeft.path} className={``}>
            <Image
              src={bottomLeft.imagePath}
              alt="banner-image"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full h-[290px] lg:h-[230px] md:pb-20 md:h-[290px] sm:h-auto`}
            />
          </Link>
        </div>
        <div>
          <Link href={right.path} className={``}>
            <Image
              src={right.imagePath}
              alt="banner-image"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full h-[600px] lg:h-[500px] md:h-auto`}
            />
          </Link>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </Fragment>
  );
};

export default Banners;
