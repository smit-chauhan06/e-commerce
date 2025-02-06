"use client";
import React, { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { GrCart } from "react-icons/gr";

const CHeader = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="w-[100vw] flex justify-center items-center flex-col border-b border-blackColor">
      <div className="bg-blackColor pt-2 pb-2 flex justify-center items-center w-[100%]">
        <span className="text-whiteColor font-raleway text-[16px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
      </div>
      <div className="flex justify-between items-center w-[90vw] pt-5 pb-5 ">
        <span>Exclusive</span>
        <ul className="flex justify-center items-center gap-5">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
        <div className="flex gap-5 items-center">
          <input
            type={"text"}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="What are you looking for ?"
            className="bg-lightGrey p-[10px] rounded-md text-[14px] min-w-[250px] border-gray-400 text-blackColor focus:outline-none font-extralight"
          />
          <GrFavorite className="text-blackColor text-[25px]" />
          <GrCart className="text-blackColor text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default CHeader;
