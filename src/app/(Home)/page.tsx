"use client";
import React, { useEffect } from "react";
import CategoryBar from "../components/CategoryBar";
import CButton from "../components/CButton";
import CCard from "../components/CCard";
import CHeader from "../components/CHeader/index";
import CSectionHeader from "../components/CSectionHeader";
import CTimer from "../components/CTimer";
import {
  appliancesOffersData,
  BestElectronics,
  categoryData,
  FashionDeals,
  HomeDecorOffersData,
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
import OfferContainer from "../components/OfferContainer";

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
            {[
              Images.slider1,
              Images.slider2,
              Images.slider3,
              Images.slider4,
            ].map((image, index) => (
              <div
                key={index}
                className="bg-bgGrey flex justify-center items-center w-[100%]"
              >
                <div className="w-[100%] h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-200">
                  <img
                    src={image}
                    alt="product"
                    className="w-[100%] h-full object-fill"
                  />
                </div>
              </div>
            ))}
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
      <section className="flex justify-center items-center pt-[10px] mt-[40px]">
        <div className="content-div grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[50px]">
          <OfferContainer
            title={appliancesOffersData?.title}
            items={appliancesOffersData?.items}
          />
          <OfferContainer
            title={HomeDecorOffersData?.title}
            items={HomeDecorOffersData?.items}
          />
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
