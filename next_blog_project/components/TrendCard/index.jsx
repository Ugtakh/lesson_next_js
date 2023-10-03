import React from "react";
import Image from "next/image";
import Link from "next/link";

const TrendCard = ({ trendBlog }) => {
  return (
    <Link href={"/blog/" + trendBlog.id}>
      <div className="relative h-80 w-full rounded-xl bg-blend-multiply bg-[#141624]">
        <Image
          src={trendBlog.cover_image ? trendBlog.cover_image : "/default.avif"}
          alt="card image"
          fill
          className="rounded-xl"
          objectFit="cover"
        />
        <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)] hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.95)_6.82%,rgba(0,0,0,0.40)_81.44%)] rounded-xl"></div>

        <div className="content absolute bottom-7 right-7 left-7 flex flex-col gap-4 items-start">
          <span className=" bg-[#4B6BFB] rounded-md px-2 py-1 text-white">
            Technology
          </span>
          <h1 className="text-white text-lg font-semibold">
            {trendBlog.title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default TrendCard;
