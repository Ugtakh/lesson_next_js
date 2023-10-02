import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="container mx-auto h-96 ">
      <div className="h-full flex justify-center items-center flex-col">
        <div className="">
          <h1>404 - Хуудас олдсонгүй</h1>
          <p> та дараа дахин оролдоно уу</p>
        </div>
        <p className="text-red-400 text-center">
          <Link href="/">нүүр хуудас руу очих</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
