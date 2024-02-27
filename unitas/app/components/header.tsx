import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./dropdown";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
 
  {
    title: "Products",
    children: [
      {
        title: "Hinkle Horns",
        route: "/products/hinkle-horns",
      },
      {
        title: "Doozers",
        route: "/products/doozers",
      },
      {
        title: "Zizzer-zazzers",
        route: "/products/zizzer-zazzers",
      },
    ],
  },
];

export default function Header() {
  return (
    <header className="flex gap-10 items-center bg-zinc-800 py-4 px-2">

      <div className="flex gap-8 items-center text-white">
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown item={item} />
          ) : (
            <Link className="hover:text-blue-500" href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
