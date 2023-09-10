// "use client";
import React from "react";

export default function Loading() {
  return (
    <div className="text-center text-[26px] text-blue-600 font-[900]">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        loading ...
      </svg>
    </div>
  );
}
