import React from "react";
import { Consent } from "./Consent";

export const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="md:flex grid justify-center gap-12 items-start pt-2 font-montserrat mb-5 w-[100%] "
      >
        <div
          id="new-to-yoox"
          className="flex justify-center flex-col items-center mt-4"
        >
          <p className="font-bold text-[#rgb(51,51,63)] ">NEW TO YOOX</p>
          <hr class="h-[3px] mt-4 bg-black border-1 dark:bg-black w-[33px]"></hr>
          <ul className="lg:w-[110px] md:w-[50px] w-[18px] flex flex-col items-center  pt-4 gap-2 md:text-[10px] lg:text-[12px] font-medium">
            <li>Shopping guide</li>
            <li>iPhone/iPad/Android</li>
            <li>Browse all Designers</li>
            <li>Browse all Categories</li>
          </ul>
        </div>

        <div
          id="help"
          className="flex justify-center flex-col items-center mt-4"
        >
          <p className="font-bold text-[#rgb(51,51,63)] ">HELP</p>
          <hr class="h-[3px] mt-4 bg-black border-1 dark:bg-black w-[33px]"></hr>
          <ul className="lg:w-[110px] md:w-[50px] w-[18px] flex flex-col items-center  pt-4 gap-2 md:text-[10px] lg:text-[12px] font-medium">
            <li>Shipping times & costs</li>
            <li>Payments and web security</li>
            <li>Product quality</li>
            <li>Track your order</li>
            <li>Returns & refunds</li>
            <li>FAQs</li>
            <li>Size Guide</li>
          </ul>
        </div>
        <Consent />

        <div
          id="myoox"
          className="flex justify-center flex-col items-center mt-4 "
        >
          <p className="font-bold text-[#rgb(51,51,63)] ">MYOOX</p>
          <hr class="h-[3px] mt-4 bg-black border-1 dark:bg-black w-[33px]"></hr>
          <ul className="lg:w-[110px] md:w-[50px] w-[18px] flex flex-col items-center  pt-4 gap-2 md:text-[10px] lg:text-[12px] font-medium">
            <li>Login</li>
            <li>My Orders</li>
            <li>My Details</li>
            <li>Dream Box</li>
            <li>Première</li>
          </ul>
        </div>

        <div
          id="about us"
          className="flex justify-center flex-col items-center mt-4"
        >
          <p className="font-bold text-[#rgb(51,51,63)] ">ABOUT US</p>
          <hr class="h-[3px] mt-4 bg-black border-1 dark:bg-black w-[33px]"></hr>
          <ul className="lg:w-[110px] md:w-[50px] w-[18px] flex flex-col items-center  pt-4 gap-2 md:text-[10px] lg:text-[12px] font-medium">
            <li>Company Info</li>
            <li className="pt-4">Press</li>
            <li>Affiliation</li>

            <li>Carrers</li>
          </ul>
        </div>
      </div>
      <hr class="h-px  border-white border-[1px] border-solid"></hr>
    </>
  );
};
