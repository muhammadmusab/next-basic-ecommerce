"use client";

import { Fragment } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CategoriesMenu from "./categories-menu";
import RightSidebar from "./RightSidebar";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
interface Props {
  links: {
    path?: string;
    text: string;
    type?: string;
    children?: { path: string; text: string }[];
  }[];
  categories: any;
  cartItems:any;
}
const sidebarMenuItems = ({ links, categories ,cartItems}: Props) => {
  return (
    <Fragment>
       <div className=" mb-30 xs:flex items-center justify-center hidden">
        {/* categories */}
        <CategoriesMenu
          search={false}
          categories={categories}
          key={"categories"}
        />
        {/* categories with search */}
        <CategoriesMenu
          search={true}
          categories={categories}
          key={"search"}
        />
        {/* favorites sidebar*/}
        <RightSidebar
            headerImage="/heart.svg"
            headerText="Wish List"
            icon={
              <AiOutlineHeart className="text-[25px] text-primary ml-[20px]" />
            }
            items={cartItems}
            type={'wishlist'}
          />
      </div>
      <div className="flex flex-col text-sm font-medium">
        {links.map((link) => {
          return link.children ? (
            <div key={uuidv4()}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="py-2">Account</AccordionTrigger>
                  {link.children &&
                    link.children.map((child,i) => (
                      <AccordionContent key={uuidv4()}>
                        <Link className="pl-5" href={child.path}>
                          {child.text}
                        </Link>
                      </AccordionContent>
                    ))}
                </AccordionItem>
              </Accordion>
            </div>
          ) : !link.children && link.type === "Button" ? (
            <button className="text-start block py-2">Logout</button>
          ) : (
            <Link className="py-2" href={link.path as string}>
              {link.text}
            </Link>
          );
        })}
      </div>
     
    </Fragment>
  );
};

export default sidebarMenuItems;
