"use client";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fragment, useState } from "react";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";

interface Props {
  icon: any;
  headerImage: string;
  headerText: string;
  className?: string;
}
const RightSidebar = ({ headerImage, headerText, icon, className }: Props) => {
  const onDelete = (item: any) => {
    console.log("on delete", item);
  };
  return (
    <Sheet>
      <SheetTrigger className={className}>{icon}</SheetTrigger>
      <SheetContent
        className="w-[500px] xxs:[300px] xxs:max-w-[320px] bg-white transition-all "
        side={"right"}
      >
        <SheetHeader className="relative">
          <h3 className="font-bold text-primary font-roboto text-left text-[24px] ml-20">
            {headerText}
          </h3>
          <Image
            className="absolute left-0 top-[-20px] opacity-5"
            width={60}
            height={60}
            src={headerImage}
            alt="right-sidebar-header-image"
          />
        </SheetHeader>
        <div className="mt-[50px]">
          <Tabs defaultValue="login">
            <TabsList className="flex justify-center items-center">
              <TabsTrigger
                value="login"
                className="text-[16px] font-bold font-roboto text-[#333333] data-[state=active]:text-secondaryhover data-[state=active]:bg-transparent border-0 border-b-0 data-[state=active]:border-0 data-[state=active]:border-b-2 border-secondaryhover"
              >
                Log in
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="ml-15 text-[16px] font-bold font-roboto text-[#333333] data-[state=active]:text-secondaryhover data-[state=active]:bg-transparent border-0 border-b-0 data-[state=active]:border-0 data-[state=active]:border-b-2 border-secondaryhover"
              >
                Register
              </TabsTrigger>
            </TabsList>
            <hr />
            <TabsContent value="login" className="mt-50">
              <Login />
            </TabsContent>
            <TabsContent value="register" className="mt-50">
              <Register />
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RightSidebar;
