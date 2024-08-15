import React from "react";

export const Body = () => {
  const images = [
    {
      img: "https://www.yoox.com/images/yoox80/banners/5569_33_splash_W.jpg?634485886601286852",
      name: "WOMEN",
      view: "[ VIEW MORE ]",
    },
    {
      img: "https://www.yoox.com/images/yoox80/banners/5569_32_splash_M.jpg?634485886601286852",
      name: "MEN",
      view: "[ VIEW MORE ]",
    },
    {
      img: "https://www.yoox.com/images/yoox80/banners/5569_25_splash_K.jpg?634485886601286852",
      name: "KIDS",
      view: "[ VIEW MORE ]",
    },
    {
      img: "https://www.yoox.com/images/yoox80/banners/5569_24_splash_D.jpg?634485886601286852",
      name: "DESIGN+ART",
      view: "[ VIEW MORE ]",
    },
  ];
  console.log(images);
  return (
    <>
      <div id="text" className="montserrat">
        <p className="block text-[90px]/[110px] text-[#333] ml-auto mr-auto font-semibold pt-8 tracking-[-5px]">
          Y00X
        </p>
        <p className="block text-[20px]/4 text-[#333] ml-auto mr-auto">
          SHOP FASHION / DESIGN+ART
        </p>
      </div>
      <div id="images" className="pt-[80px]">
        <p className="flex flex-wrap justify-center max-w-[1094px] m-auto ">
          {images.map((image, index) => {
            return (
              <div className="montserrat w-full md:w-1/2 lg:w-1/4 px-2">
                <img src={image.img} className="" />
                <p className="bg-[#363636] text-white p-[33px] font-bold tracking-wider text-[13px]">
                  {image.name}
                </p>
                <p className="pt-4 md:p-[30px] p-[15px] font-bold  text-[11px] text-[#753333">
                  {image.view}
                </p>
              </div>
            );
          })}
        </p>
      </div>
    </>
  );
};
