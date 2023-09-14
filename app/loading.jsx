"use client";
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <>
      <div>
        {/* // overflow-x-hidden overflow-y-hidden "> */}
        {/* // min-h-[calc(100vh +40px)]  */}
        {/* <div className="md:hidden max-w-[1920px] h-[100%]  "> */}
        <div
          className="block md:hidden  max-w-[1920px] min-w-full   max-h-[1100px] 
        min-h-[100vh] 
        float top-0 -left-[0px] "
        >
          <div className="w-full h-full overflow-hidden">
            <Image
              src={"/assets/images/Loading.gif"}
              fill
              style={{
                width: "100%",
                height: "100%",
                // objectFit: "contain",
                // objectPosition: "center",
              }}
              alt="Loading"
            />
          </div>
        </div>
        <div className=" hidden overflow-hidden  md:block min-w-[100vw] max-w-[100vw] h-[100vh]  absolute top-0 -right-8 ">
          {/* <div className=" hidden overflow-hidden  md:block min-w-[100vw] max-w-[100vw] h-[100vh]   "> */}
          <Image
            src={"/assets/images/desktop-loader.gif"}
            alt={"alt"}
            quality={100}
            className="bg-black w-full h-full object-cover"
            // className="max-w-[95vw] max-h-[95vh] rounded-2xl animate-bounceIn"
            fill={true}
          />
        </div>
      </div>
    </>
  );
}
