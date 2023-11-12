import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarMenuItems from "./sidebar-menu-items";
import CategoriesMenu from "./categories-menu";
import RightSidebar from "./RightSidebar";
import AuthSidebar from "./AuthSidebar";
const Navbar = () => {
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      text: "Account",
      type: "Accordion",
      children: [
        {
          path: "/account",
          text: "Dashboard",
        },
        {
          path: "/account/orders",
          text: "Orders",
        },
        {
          path: "/account/profile",
          text: "Profile",
        },
        {
          path: "/account/edit-profile",
          text: "Edit Profile",
        },
        {
          path: "/account/addresses",
          text: "Saved Adresses",
        },
        {
          path: "/account/wishlist",
          text: "Wishlist",
        },
      ],
    },
    {
      path: "/",
      text: "About",
    },
    {
      path: "/",
      text: "Contact",
    },
    {
      type: "Button",
      text: "Logout",
    },
  ];
  const categories = [
    {
      heading: "Men",
      children: [
        {
          text: "T-shirts",
          path: "/men/t-shirts",
        },
        {
          text: "Shirts",
          path: "/men/shirts",
        },
        {
          text: "Shorts",
          path: "/men/shorts",
        },
        {
          text: "Shalwar Kameez",
          path: "/men/shalwar-kameez",
        },
        {
          text: "Shoes",
          path: "/men/shoes",
        },
      ],
    },
    {
      heading: "Women",
      children: [
        {
          text: "Un-stiched",
          path: "/women/un-stiched",
        },
        {
          text: "Branded",
          path: "/women/branded",
        },
        {
          text: "Muslim Wear",
          path: "/women/muslim-wear",
        },
        {
          text: "Shalwar Kameez",
          path: "/women/shalwar-kameez",
        },
        {
          text: "Shoes",
          path: "/women/shoes",
        },
      ],
    },
    {
      heading: "Electronics",
      children: [
        {
          text: "Mobile Phones",
          path: "/electronics/mobile-phones",
        },
        {
          text: "Laptops",
          path: "/electronics/laptops",
        },
        {
          text: "Air Conditioner",
          path: "/electronics/air-conditioner",
        },
        {
          text: "Televisions",
          path: "/electronics/televisions",
        },
        {
          text: "Refrigerators",
          path: "/electronics/refrigerators",
        },
      ],
    },
    {
      heading: "Groceries",
      children: [
        {
          text: "Fruits",
          path: "/groceries/fruits",
        },
        {
          text: "Vegetables",
          path: "/groceries/Vegetables",
        },
        {
          text: "Meat",
          path: "/groceries/meat",
        },
        {
          text: "Dairy Products",
          path: "/groceries/dairy-products",
        },
        {
          text: "Frozen Items",
          path: "/groceries/frozen-items",
        },
      ],
    },
  ];
  const cartItems = [
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
  ];
  return (
    <Fragment>
      <div className="flex items-center justify-between shadow-md bg-white container-fluid h-[75px]">
        <div className="flex items-center ">
          {/* sidebar links */}
          <Sheet>
            <SheetTrigger>
              <FaBars className="text-[25px] text-primary" />
            </SheetTrigger>
            <SheetContent
              className="w-[500px] xxs:[300px] xxs:max-w-[320px] bg-white transition-all"
              side={"left"}
            >
              <SheetHeader></SheetHeader>
              <div className="mt-[50px]">
                <SidebarMenuItems
                  links={links}
                  categories={categories}
                  cartItems={cartItems}
                />
              </div>
            </SheetContent>
          </Sheet>
          {/* categories */}
          <CategoriesMenu
            search={false}
            categories={categories}
            key={"categories"}
            className="block xs:hidden"
          />
          {/* categories with search */}
          <CategoriesMenu
            search={true}
            categories={categories}
            key={"search"}
            className="block xs:hidden"
          />
        </div>
        <Link href={"/"} className="lg:pl-30">
          <h1 className="font-bold rounded-[5px]  transition-all bg-primary py-5 px-20 tracking-widest  text-white">
            PHM
          </h1>
        </Link>
        <div className="flex items-center">
          {/* sidebar cart */}
          <RightSidebar
            headerImage="/cart.svg"
            headerText="Cart List"
            icon={
              <AiOutlineShoppingCart className="text-[25px] text-primary" />
            }
            items={cartItems}
            type={"cart"}
          />
          {/* favorites sidebar*/}
          <RightSidebar
            headerImage="/heart.svg"
            headerText="Wish List"
            icon={
              <AiOutlineHeart className="text-[25px] text-primary ml-[20px]" />
            }
            items={cartItems}
            type={"wishlist"}
            className="block xs:hidden"
          />

          {/* account */}
          <AuthSidebar
            headerText="Account"
            headerImage="/account.svg"
            icon={
              <AiOutlineUser className="text-[25px] text-primary ml-[20px]" />
            }
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
