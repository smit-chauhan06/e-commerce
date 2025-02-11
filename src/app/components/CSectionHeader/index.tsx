import React from "react";

interface propTypes {
  title: string;
}

const CSectionHeader = (props: propTypes) => {
  const { title } = props;
  return (
    <div className="mt-[30px] mb-[30px] flex items-center gap-3">
      <div className="w-[15px] h-[40px] bg-cardPriceColor rounded-md"></div>
      <span className="font-bold font-raleway text-cardPriceColor xxs:text-[20px] sm:text-[22px]">
        {title}
      </span>
    </div>
  );
};

export default CSectionHeader;
