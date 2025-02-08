"use client";
import React, { useEffect } from "react";
import CCard from "../components/CCard";
import CHeader from "../components/CHeader/index";
import { ProductDetails } from "../config/staticData";
import { useAppDispatch } from "../store";
import { setAccessToken } from "../store/authSlice";

const Home = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setAccessToken("smit"));
  //   console.log("hello");
  // }, []);
  return (
    <section className="flex justify-center items-center pt-5">
      <div className="w-[90vw] grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {ProductDetails.map((data) => (
          <CCard key={data?.id} productsData={data} />
        ))}
      </div>
    </section>
  );
};

export default Home;
