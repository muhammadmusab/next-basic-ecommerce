import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
interface Props {
  containerClass?: string;
  bannersData: {
    path:string;
    imagePath: string;
    className?: string;
    imageClass?: string;
  }[];
}
const Banners = ({ bannersData, containerClass }: Props) => {
  return (
    <Fragment>
      <div className="spacer"></div>
      <div className={`flex ${containerClass}`}>
        {bannersData.map((banner) => (
          <Link key={uuidv4()} href={banner.path} className={`${banner.className}`}>
            <Image
              src={banner.imagePath}
              alt="banner-image"
              width={0}
              height={0}
              sizes="100vw"
              className={`${banner.imageClass} h-[100%]`}
            />
          </Link>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </Fragment>
  );
};

export default Banners;
