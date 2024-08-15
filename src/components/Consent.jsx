import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export const Consent = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white w-[310px] pt-8 p-10 ">
        <HiOutlineMail size={"25px"} />
        <p className="montserrat font-bold text-[#333] pb-2">YOOX NEWS</p>
        <p className="text-[13px] montserrat font-[500] p-2 pd-4">
          <span>Sign up for the newsletter</span> <br />
          <span>and discover the latest arrivals and</span> <br />
          promotions
        </p>
        <input
          placeholder="INSERT YOUR E-MAIL"
          className="text-[14px] montserrat bg-[#F6F6F6] p-4 font-[500] text-wrap m-3 "
        />
        <div className="flex gap-6 montserrat font-semibold text-[14px] pt-2">
          <div className="flex gap-1 ">
            <input type="radio" className="w-4" />
            <label htmlFor="">Woman</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" className="w-4 " />
            <label htmlFor="">Man</label>
          </div>
        </div>
        <div className="flex justify-center items-center pt-4 gap-2 ">
          <input type="checkbox" />
          <p className="text-[12px] montserrat font-medium opacity-[0.5]">
            I consent to receive YOOX <br /> newsletters via email. For further{" "}
            <br />
            information, please consult the <br />
            <span className="underline">Privacy Policy</span>.
          </p>
        </div>
        <button>SIGN UP</button>
      </div>
    </>
  );
};
