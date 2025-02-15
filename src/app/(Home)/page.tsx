"use client";
import React, { useEffect } from "react";
import CButton from "../components/CButton";
import CCard from "../components/CCard";
import CHeader from "../components/CHeader/index";
import CSectionHeader from "../components/CSectionHeader";
import CTimer from "../components/CTimer";
import { MonthlySellProducts, ProductDetails } from "../config/staticData";
import { useAppDispatch } from "../store";
import { setAccessToken } from "../store/authSlice";

const Home = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setAccessToken("smit"));
  //   console.log("hello");
  // }, []);
  return (
    <>
      <section className="flex justify-center items-center flex-col pt-5">
        <div className="content-div">
          <CSectionHeader title="Today's Deals" />
        </div>
        {/* <div className="mb-[20px] content-div flex gap-5 items-center">
          <span className="text-[24px] font-raleway font-[900]">
            Flash Sales
          </span>
          <CTimer leftDays={1} />
        </div> */}
        <div className="content-div grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {ProductDetails.map((data) => (
            <CCard key={data?.id} productsData={data} />
          ))}
        </div>
        <div className="mt-[30px]">
          <CButton title="View All Products" className="w-[250px]" />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col pt-5">
        <div className="content-div">
          <CSectionHeader title="This Month" />
        </div>
        <div className="mb-[30px] content-div flex gap-5 items-center justify-between">
          <span className="xxs:text-[20px] text-[24px] font-raleway font-[900]">
            Best Selling Products
          </span>
          <CButton
            title={"View All"}
            className="w-[150px] xxs:hidden sm:block"
          />
        </div>
        <div className="content-div grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {MonthlySellProducts.map((data) => (
            <CCard key={data?.id} productsData={data} />
          ))}
        </div>
        <div className="content-div mt-[10px]">
          <CButton title={"View All"} className="sm:hidden" />
        </div>
      </section>
    </>
  );
};

export default Home;
