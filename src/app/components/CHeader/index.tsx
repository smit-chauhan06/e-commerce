"use client";
import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // Close icon for drawer
import { DrawerItems } from "../../config/staticData";

const CHeader = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState<Boolean>(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-[100vw] flex justify-center items-center flex-col border-b border-blackColor">
      <div className="bg-blackColor flex justify-center items-center w-[100%] pt-2 pb-2 pl-5 pr-5">
        <span className="text-whiteColor font-raleway xxs:text-[12px] md:text-[16px] text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
      </div>

      {screenWidth > 900 ? (
        <div className="flex justify-between items-center w-[90vw] md:pt-5 md:pb-5">
          <span>Exclusive</span>
          <ul className="flex justify-center items-center gap-5">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <div className="flex gap-5 items-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="What are you looking for?"
              className="bg-lightGrey p-[10px] rounded-md text-[14px] min-w-[250px] border-gray-400 text-blackColor focus:outline-none font-extralight"
            />
            <GrFavorite className="text-blackColor text-[25px]" />
            <GrCart className="text-blackColor text-[25px]" />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-[90vw] py-3">
          <span>Exclusive</span>
          {screenWidth > 600 && (
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="What are you looking for?"
              className="bg-lightGrey p-[10px] rounded-md text-[14px] min-w-[350px] border-gray-400 text-blackColor focus:outline-none font-extralight"
            />
          )}
          <GiHamburgerMenu
            className="text-[23px] cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      )}

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform z-50 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <div className="p-4">
          <IoMdClose
            className="text-[25px] cursor-pointer absolute right-[20px]"
            onClick={() => setDrawerOpen(false)}
          />

          <ul className="mt-20 space-y-4 text-md">
            {DrawerItems.map((data, index) => (
              <li
                key={data.id}
                className="cursor-pointer font-raleway"
                onClick={() => setDrawerOpen(false)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CHeader;
