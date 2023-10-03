import React from "react";
import { formatDate } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";

const Card = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id}>
      <div className="w-full border flex flex-col p-4 gap-4 rounded-[16px] items-center">
        <div className="w-full h-[240px] relative">
          <img
            src={blog.cover_image ? blog.cover_image : "/default.avif"}
            className="rounded-[6px]"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>

        <div className="flex flex-col items-start">
          <span className="text-[#4B6BFB] bg-[#4B6BFB]/5 px-[10px] py-1 block rounded-[6px]">
            {blog?.type_of}
          </span>
          <h2 className=" text-[#181A2A] font-semibold text-2xl">
            {blog.title}
          </h2>
          <div className="flex items-center gap-2">
            <img
              src={blog.user.profile_image}
              className="w-[36px] h-[36px] rounded-full"
            />
            <p className="text-[#97989F] text-4">{blog.user.name}</p>
            <p className="text-[#97989F] text-4">
              {formatDate(blog.published_at)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
