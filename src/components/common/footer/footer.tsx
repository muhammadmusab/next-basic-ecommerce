import Support from "./support";
import AccountLinks from "./links-container";
import QuickLinks from "./links-container";
import Social from "./social";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterLine, RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  const accountLinks = [
    { text: "My Account", path: "/" },
    { text: "Login / Register", path: "/" },
    { text: "Cart", path: "/" },
    { text: "Wishlist", path: "/" },
    { text: "Shop", path: "/" },
  ];
  const quickLinks = [
    { text: "Privacy Policy", path: "/" },
    { text: "Terms Of Use", path: "/" },
    { text: "FAQ", path: "/" },
    { text: "Contact", path: "/" },
  ];
  const socialLinks = [
    {
      icon: <FaFacebookF className="text-white text-[25px]" />,
      path: "/",
    },

    {
      icon: <RiTwitterLine className="text-white text-[25px]" />,
      path: "/",
    },
    {
      icon: <FaInstagram className="text-white text-[25px]" />,
      path: "/",
    },
    {
      icon: <RiYoutubeLine className="text-white text-[25px]" />,
      path: "/",
    },
  ];
  return (
    <div className="bg-black py-[40px]">
      <div className="custom-container">
        <div className="flex justify-between pb-[50px]">
          <div className="basis-[25%] max-w-[25%]">
            <Support />
          </div>
          <div className="basis-[25%] max-w-[25%]">
            <AccountLinks heading="Account" links={accountLinks} />
          </div>
          <div className="basis-[25%] max-w-[25%]">
            <QuickLinks heading="Quick Link" links={quickLinks} />
          </div>
          <div className="basis-[25%] max-w-[25%]">
            <Social icons={socialLinks} />
          </div>
        </div>
        <p className="text-white text-center">Copyright PHM 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
