import Image from "next/image";
import React from "react";
import { Images } from "../../config/Files";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryProps {
  categoryData: Category[];
}

const CategoryBar = (props: CategoryProps) => {
  const { categoryData } = props;
  return (
    <div className="w-[100%]  flex justify-between overflow-x-auto items-center gap-[20px]">
      {categoryData?.map((data, index) => (
        <div
          key={data?.id}
          className="flex justify-center items-center pb-[10px]  flex-col min-w-[100px] cursor-pointer"
        >
          <div className="w-[100px] h-[70px] ">
            <Image
              src={data?.image}
              alt="product"
              width={100}
              height={100}
              className="object-contain w-[100%] h-[100%]"
            />
          </div>

          <span className="text-blackColor font-raleway font-semiBold text-[16px] sm:text-[18px] mt-[10px] text-center">
            {data?.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
