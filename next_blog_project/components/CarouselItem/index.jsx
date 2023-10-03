import React from "react";
import { formatDate } from "@/utils/functions";
import Image from "next/image";

const CarouselItem = ({ blog }) => {
  return (
    <div className={`relative h-96 flex-[0_0_100%]`}>
      {blog?.cover_image && (
        <Image
          src={blog?.cover_image}
          fill
          className="object-cover"
          alt="alt"
        />
      )}
      <div className=" absolute top-0 right-0 left-0 bottom-0 bg-[#141624]/40"></div>
      <div className="absolute bottom-4 left-4 rounded bg-white text-[#181A2A] p-10 w-[50%]">
        <div className="mb-6">
          <span className=" bg-[#4B6BFB] rounded-md px-2 py-1 text-white">
            Technology
          </span>
          <h1 className="text-xl font-semibold">{blog.title}</h1>
        </div>
        <p className=" text-slate-600 text-sm">{formatDate(blog.created_at)}</p>
      </div>
    </div>
  );
};
export default CarouselItem;
