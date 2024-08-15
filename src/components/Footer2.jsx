import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io5";
import { TiSocialPinterest } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa6";
import { FcSmartphoneTablet } from "react-icons/fc";
export const Footer2 = () => {
  return (
    <>
      <div className="flex font-montserrat justify-around p-3 items-center text-center">
        <div className="flex md:gap-5 gap-3 items-center">
          <p className="font-semibold md:text-[11px] text-[6px]">
            CONNECT WITH US
          </p>
          <FaFacebookF className="md:h-[19px] h-[10px]" />
          <BsTwitterX className="md:h-[19px]" />
          <LuInstagram className="md:h-[19px]" />
          <IoLogoYoutube className="md:h-[19px]" />
          <TiSocialPinterest className="md:h-[19px]" />
          <FaTiktok className="md:h-[19px]" />
        </div>
        <div className="flex gap-3 text-center items-center">
          <FcSmartphoneTablet className="size-10" />
          <p className="font-semibold md:text-[11px] text-[6px]">
            DOWNLOAD THE APP FOR iOS / ANDROID
          </p>
        </div>
      </div>

      <div className="bg-[#333] p-10 font-montserrat text-[12px] font-semibold">
        <p className="text-white uppercase">
          Powered by YOOX NET-A-PORTER GROUP - Copyright © 2000-2024 YOOX
          NET-A-PORTER GROUP S.p.A. - All Rights Reserved - SIAE Licence #
          401/I/526{" "}
        </p>
        <span className="text-[#999] tracking-wide uppercase mt-4">
          Legal Area / Privacy Policy
        </span>
      </div>
    </>
  );
};
