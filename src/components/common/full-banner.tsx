import Image from "next/image";
import Link from "next/link";
interface Props {
  imageSrc: string;
  linkSrc: string;
  imageClass?: string;
}
const FullBanner = ({ imageSrc, imageClass, linkSrc }: Props) => {
  return (
    <Link href={linkSrc} className="w-full">
      <Image
        src={imageSrc}
        alt="banner-image"
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full ${imageClass} object-cover`}
      />
    </Link>
  );
};

export default FullBanner;
