"use client";
import { TbFilter, TbFilterX } from "react-icons/tb";
import { IoMdListBox, IoMdGrid } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/form/select";
import { useFilterStore } from "@/store/filter";
import { useStore } from "@/hooks/useStore";
import useFilter from "@/hooks/useFilter";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import SidebarFilterMobile from "@/components/shop/sidebar-filter-mobile";
import { Fragment } from "react";

const controls = () => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  const isOpenFilterDesktop = useStore(
    useFilterStore,
    (state) => state.isOpenFilterDesktop
  );
  const isOpenFilterMobile = useStore(
    useFilterStore,
    (state) => state.isOpenFilterMobile
  );
  const view = useStore(useFilterStore, (state) => state.view);
  const setView = useFilterStore((state) => state.setView);
  const toggleFilterDesktop = useFilterStore(
    (state) => state.toggleFilterDesktop
  );
  const toggleFilterMobile = useFilterStore(
    (state) => state.toggleFilterMobile
  );

  const filterStateHandler = () => {
    toggleFilterDesktop();
  };
  const viewHandler = () => setView();
  const sortHandler = (value: any) => {
    router.push(pathname + "?" + createQueryString("sortby", value), {
      scroll: false,
    });
  };
  const resetFiltersHandler = () => {
    router.push(pathname);
  };

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <button className="flex group md:hidden" onClick={filterStateHandler}>
          {isOpenFilterDesktop ? (
            <TbFilterX className="my-0 w-[25px] h-[25px] group-hover:text-secondaryhover" />
          ) : (
            <TbFilter className="my-0 w-[25px] h-[25px] group-hover:text-secondaryhover" />
          )}
          <p className=" ml-[2px] group-hover:text-secondaryhover text-primary font-medium font-roboto">
            {isOpenFilterDesktop ? "Close filters" : "Open filters"}
          </p>
        </button>

        <div className="md:block hidden">
          <SidebarFilterMobile
            headerText="Filters"
            isOpenFilter={isOpenFilterMobile as boolean}
            filterContainerClass={
              isOpenFilterMobile
                ? "w-[400px] md:w-full select-auto pointer-events-auto"
                : "w-0 opacity-0 select-none pointer-events-none"
            }
          />
        </div>

        <button
          className="block px-[10px] py-[5px] mb-0 font-medium font-roboto transition-all hover:scale-[1.01]  bg-secondaryhover text-white"
          onClick={resetFiltersHandler}
        >
          Reset filters
        </button>
      </div>
      <div className="flex justify-between items-center mt-[10px] xs:mt-[30px]">
        <button
          className="flex group items-center mr-[20px]"
          onClick={viewHandler}
        >
          <IoMdListBox
            className={`group-hover:text-secondaryhover w-[25px] h-[25px] ${
              view === "list" ? "text-secondaryhover" : ""
            }`}
          />
          <IoMdGrid
            className={`group-hover:text-secondaryhover w-[25px] h-[25px] ${
              view !== "list" ? "text-secondaryhover" : ""
            }`}
          />
        </button>
        {/* sortby */}
        <Select onValueChange={(value) => sortHandler(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort-by" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem
              className="hover:text-secondaryhover hover:cursor-pointer text-primary font-roboto"
              value="featured"
            >
              Featured
            </SelectItem>
            <SelectItem
              className="hover:text-secondaryhover hover:cursor-pointer text-primary font-roboto"
              value="best-selling"
            >
              Best Selling
            </SelectItem>
            <SelectItem
              className="hover:text-secondaryhover hover:cursor-pointer text-primary font-roboto"
              value="high-price"
            >
              High Price
            </SelectItem>
            <SelectItem
              className="hover:text-secondaryhover hover:cursor-pointer text-primary font-roboto"
              value="low-price"
            >
              Low Price
            </SelectItem>
          </SelectContent>
        </Select>
        {/* total items */}
        <p className="text-white xxs:hidden h-[34px] bg-success rounded-[2px] p-[5px] w-[116.22px] xs:w-[95.22px] text-center mb-0 font-medium font-roboto xs:flex xs:items-center xs:justify-center xs:ml-[10px] ml-[20px] xs:text-[12px]">
          14 products
        </p>
      </div>
    </Fragment>
  );
};

export default controls;
