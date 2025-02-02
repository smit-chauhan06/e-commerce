"use client";
import React, { useEffect } from "react";
import CHeader from "../components/CHeader/index";
import { useAppDispatch } from "../store";
import { setAccessToken } from "../store/authSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAccessToken("smit"));
    console.log("hello");
  }, []);
  return (
    <div>
      <CHeader />
    </div>
  );
};

export default Home;
