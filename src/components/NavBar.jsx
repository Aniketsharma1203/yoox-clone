import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { FaUnlock } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <div className="sticky top-0 pt-[2px] bg-white">
      <div className="flex justify-around text-[11px] font-bold mt-2 montserrat tracking-wide pr-9 pl-9 ">
        <div className="flex items-center justify-center gap-1">
          <div className="flex items-center">
            <p className="underline">INDIA</p>
            <p>
              <MdOutlineArrowDropDown size={18} />
            </p>
          </div>
          <div>
            <p className="underline">CUSTOMER CARE</p>
          </div>
        </div>

        <p>FREE SHIPPING ON ORDERS OVER US $190</p>

        <div className="flex items-center underline gap-3">
          <div className="flex items-center gap-1">
            <p>
              <BsFillPencilFill size={13} />
            </p>
            <p>REGISTER</p>
          </div>

          <div className="flex items-center gap-1">
            <FaUnlock size={13} />
            <p>LOGIN</p>
          </div>
        </div>
      </div>
      <hr class="h-px mt-1 bg-slate-500 border-1 dark:bg-gray-200"></hr>
    </div>
  );
};
