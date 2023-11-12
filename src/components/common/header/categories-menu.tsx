"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Fragment, useState } from "react";
import { IoGridSharp } from "react-icons/io5";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
interface Props {
  categories: { heading: string; children: { text: string; path: string }[] }[];
  search: boolean;
  className?: string;
}
const CategoriesMenu = ({ categories, search, className }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <SheetTrigger className={className}>
        {search ? (
          <BiSearch className="text-[25px] ml-[20px]" />
        ) : (
          <IoGridSharp className="text-[25px] ml-[20px]  xs:ml-0" />
        )}
      </SheetTrigger>
      <SheetContent
        className="overflow-y-auto w-[100%] h-[100%] bg-white"
        side={"top"}
      >
        <SheetHeader className="font-bold font-inter text-[30px]">
          Categories
        </SheetHeader>
        {search ? (
          <div className="">
            <input
              type="text"
              placeholder="Search for the product"
              className="w-full border-0 focus:outline-offset-0 focus:outline-0 flex h-10 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-o focus:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 placeholder:ease-in-out placeholder:duration-1000 placeholder:transition-all focus:placeholder:translate-x-[50px] focus:placeholder:opacity-0  focus:border-black rounded-none border-b border-black"
            />
          </div>
        ) : null}
        <div className="mt-[80px] md:mt-[50px]">
          <div className="flex justify-center flex-wrap">
            {categories.map((cat, i) => (
              <div
                key={uuidv4()}
                className="basis-[24%] max-w-[24%] md:basis-[40%] md:max-w-[40%] sm:basis-[50%] sm:max-w-[50%] xs:basis-[100%] xs:max-w-[100%] flex-wrap md:mx-auto xs:mx-0"
              >
                <div className="md:mb-40">
                  <h4 className="font-bold text-[20px] ">{cat.heading}</h4>
                  <div className={`relative mt-[50px] md:mt-[10px] `}>
                    <ul className="flex flex-col justify-center before:absolute before:content-[''] before:w-[1px] before:h-[100%] before:bg-[#dbdbdb] before:top-0 before:right-[60px] md:before:hidden">
                      {cat.children.map((child) => (
                        <li key={uuidv4()} className="py-4 ">
                          <Link
                            onClick={() => setOpen(false)}
                            href={`/shop${child.path}`}
                            className="hover:text-secondaryhover"
                          >
                            {child.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CategoriesMenu;
