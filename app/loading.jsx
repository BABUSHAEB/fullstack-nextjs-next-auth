"use client";
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <>
      <div className=" overflow-x-hidden overflow-y-hidden ">
        <div className="md:hidden max-w-[1920px] h-[90vh] ">
          <Image
            src={"/assets/images/Loading.gif"}
            fill
            // width={1920}
            // height={500}
            style={{
              // objectFit: "cover",
              objectPosition: "center",
              // width: "100%",
            }}
            alt="Loading"
          />
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
