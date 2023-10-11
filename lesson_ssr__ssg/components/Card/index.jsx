import React from "react";
import { formatDate } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";

const Card = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id}>
      <div className="  border  p-4 gap-4 rounded-[16px]">
        <div className="">
          <img
            src={blog.social_image ? blog.social_image : "/default.avif"}
            className="rounded-[6px] w-full"
          />
        </div>
        <div className="">
          <span className="text-[#4B6BFB] bg-[#4B6BFB]/5 px-[10px] py-1 block rounded-[6px] mt-2">
            {blog?.type_of}
          </span>
          <h2 className="text-2xl font-semibold truncate">{blog.title}</h2>
          <div className="flex items-center gap-2 ">
            <Image
              width={100}
              height={100}
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
