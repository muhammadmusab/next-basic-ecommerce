"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Dropdown from "./categories-dropdown";
import Image from "next/image";
interface Props {
  items: any;
  depthLevel: any;
}
const CategoriesPanel = ({ items, depthLevel }: Props) => {
  let ref = useRef<HTMLInputElement | null>(null);
  const [dropdown, setDropdown] = useState(false);
  const [currentId, setCurrentId] = useState();

  useEffect(() => {
    const handler = (event: any) => {
      //@ts-ignore
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        console.log("current element");
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (items.submenu && items.submenu.length) {
      setDropdown(true);
    }

    setCurrentId(items.id);
  };

  const onMouseLeave = () => {
    setDropdown(false);
    setCurrentId(undefined);
  };

  return (
    <Fragment>
      <li
        ref={ref}
        className={`pb-4 ${
          currentId === items.id ? "bg-info" : ""
        } cursor-pointer`}
        key={items.id}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.path ? (
          <Link
            className="pl-20 w-100 flex items-center"
            href={items.path as string}
          >
            <span className="pr-10">{items.text}</span>
            {items.submenu && items.submenu.length > 0 && (
              <Image
                alt="chevron-right"
                width="5"
                height="5"
                src={"/chevron-right.svg"}
                className="pt-1"
              />
            )}
          </Link>
        ) : (
          <button className="pl-20 w-100 flex items-center">
            <span className="pr-10">{items.text}</span>

            <Image
              alt="chevron-right"
              width="5"
              height="5"
              src={"/chevron-right.svg"}
              className="pt-1"
            />
          </button>
        )}
        {items.submenu && (
          <Dropdown
            depthLevel={depthLevel}
            dropdown={dropdown}
            submenus={items.submenu}
          />
        )}
      </li>
    </Fragment>
  );
};

export default CategoriesPanel;
