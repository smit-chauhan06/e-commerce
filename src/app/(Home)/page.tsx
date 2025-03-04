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
  womenStyleOffers,
} from "../config/staticData";
import { useAppDispatch } from "../store";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { setAccessToken } from "../store/authSlice";
import { Images } from "../config/Files";
import Image from "next/image";
import DealCard from "../components/DealCard";
import OfferContainer from "../components/OfferContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { isMobile, isTablet } from "react-device-detect";

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
                <div className="w-[100%] h-[200px] sm:h-[300px] md:h-[450px] flex items-center justify-center bg-gray-200">
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
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                className="overflow-hidden"
                modules={[FreeMode, Navigation]}
                freeMode={true}
                speed={700}
                navigation={!(isTablet || isMobile) && true}
                slidesPerGroup={3}
              >
                {BestElectronics.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="flex h-full "
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="w-full flex flex-col h-full">
                      <DealCard productsData={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center pt-[10px] mt-[40px]">
        <div className="content-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
          <OfferContainer
            title={appliancesOffersData?.title}
            items={appliancesOffersData?.items}
          />
          <OfferContainer
            title={HomeDecorOffersData?.title}
            items={HomeDecorOffersData?.items}
          />
          <OfferContainer
            title={womenStyleOffers?.title}
            items={womenStyleOffers?.items}
          />
        </div>
      </section>

      <section className="flex justify-center items-center flex-col pt-[10px]">
        <div className="content-div">
          <CSectionHeader title="Fashion Top Deals" />
        </div>
        <div className="content-div mb-[30px]">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-6 relative">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                className="overflow-hidden"
                modules={[FreeMode, Navigation]}
                freeMode={true}
                speed={700}
                navigation={!(isTablet || isMobile) && true}
                slidesPerGroup={3}
              >
                {FashionDeals.map((item, index) => (
                  <SwiperSlide
                    key={item.id}
                    className="flex h-full "
                    style={{
                      width: "250px",
                    }}
                  >
                    <DealCard key={item.id} productsData={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
