"use client";
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <>
      <div className="w-full h-full">
        <vedio
          src={"/assets/images/Loading.gif"}
          // fill
          width={1920}
          height={500}
          objectFit="cover"
          objectPosition="center"
          alt="Loading"
        />
      </div>
    </>
  );
}
