import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = ({ setSearchTitle }) => {
  const isActive = usePathname();

  return (
    <div className="h-24 mx-auto border-b">
      <div className="flex justify-between p-5 items-center">
        <a href="/">
          <img src="/images/logos/logo-with-text.svg" alt="logo" />
        </a>
        <div className="flex gap-12">
          {navigations.map((navigation, i) => (
            <Link
              className={`font-bold transition-all duration-75  ${
                isActive === navigation.path
                  ? "text-red-500"
                  : "hover:text-red-500 "
              }`}
              key={i}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-4"
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
