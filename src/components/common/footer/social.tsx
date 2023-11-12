import Link from "next/link";
import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
const Social = ({ icons }: { icons: { icon: any; path: string }[] }) => {
  return (
    <Fragment>
      <h2 className="text-[20px] font-medium text-white mb-[24px]">Social</h2>
      <div className="flex">
        {icons.map((item,i) => (
          <Link key={uuidv4()} className={`text-white ${i<=icons.length?'mr-[25px]':''} `} href={item.path}>
            {item.icon}
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Social;
