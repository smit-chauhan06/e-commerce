"use client";
import React, { useEffect } from "react";
import CategoryBar from "../components/CategoryBar";
import CButton from "../components/CButton";
import CCard from "../components/CCard";
import CHeader from "../components/CHeader/index";
import CSectionHeader from "../components/CSectionHeader";
import CTimer from "../components/CTimer";
import {
  BestElectronics,
  categoryData,
  FashionDeals,
  MonthlySellProducts,
  ProductDetails,
} from "../config/staticData";
import { useAppDispatch } from "../store";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { setAccessToken } from "../store/authSlice";
import { Images } from "../config/Files";
import Image from "next/image";
import DealCard from "../components/DealCard";

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
            <div className="bg-bgGrey flex flex-col sm:flex-row justify-between w-[100%] items-center">
              <div className="">
                <img
                  src={Images.slider4}
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

      <section className="flex justify-center items-center flex-col pt-[10px]">
        <div className="content-div">
          <CSectionHeader title="Best of Electronics" />
        </div>
        <div className="content-div">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-6">
              {BestElectronics.map((item, index) => (
                <DealCard key={item.id} productsData={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col pt-[10px]">
        <div className="content-div">
          <CSectionHeader title="Fashion Top Deals" />
        </div>
        <div className="content-div">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-6">
              {FashionDeals.map((item, index) => (
                <DealCard key={item.id} productsData={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
