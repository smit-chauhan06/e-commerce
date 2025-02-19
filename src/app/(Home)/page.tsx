"use client";
import React, { useEffect } from "react";
import CategoryBar from "../components/CategoryBar";
import CButton from "../components/CButton";
import CCard from "../components/CCard";
import CHeader from "../components/CHeader/index";
import CSectionHeader from "../components/CSectionHeader";
import CTimer from "../components/CTimer";
import {
  categoryData,
  MonthlySellProducts,
  ProductDetails,
} from "../config/staticData";
import { useAppDispatch } from "../store";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { setAccessToken } from "../store/authSlice";
import { Images } from "../config/Files";
import Image from "next/image";

const Home = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setAccessToken("smit"));
  //   console.log("hello");
  // }, []);
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="root-div">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showArrows={false}
            showStatus={false}
          >
            <div className="bg-bgGrey flex flex-col sm:flex-row justify-between w-[100%] items-center">
              <div className="">
                <img
                  src={Images.slider1}
                  alt="product"
                  className="w-[100%] min-h-[200px] sm:min-h-[400px]"
                />
              </div>
            </div>
            <div className="bg-bgGrey flex flex-col sm:flex-row justify-between w-[100%] items-center">
              <div className="">
                <img
                  src={Images.slider2}
                  alt="product"
                  className="w-[100%] min-h-[200px] sm:min-h-[400px]"
                />
              </div>
            </div>
            <div className="bg-bgGrey flex flex-col sm:flex-row justify-between w-[100%] items-center">
              <div className="">
                <img
                  src={Images.slider3}
                  alt="product"
                  className="w-[100%] min-h-[200px] sm:min-h-[400px]"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="flex justify-center items-center mt-[20px] sm:mt-[40px]">
        <div className="content-div">
          <CategoryBar categoryData={categoryData} />
        </div>
      </section>

      <section className="flex justify-center items-center flex-col pt-5">
        <div className="content-div">
          <CSectionHeader title="Today's Deals" />
        </div>

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
