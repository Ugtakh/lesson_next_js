import React from "react";

const Card = ({ blog }) => {
  return (
    <div className="border flex flex-col p-2">
      <img src={blog.cover_image ? blog.cover_image : "/default.avif"} />
      <div className="flex flex-col">
        <span className="text-[#4B6BFB] bg-[rgba(75 107 251,0.5)] opacity-[5%]">
          {blog?.type_of}
        </span>
        <h2 className=" text-[#181A2A] font-semibold text-[24px] ">
          {blog.title}
        </h2>
        <div className="flex items-center gap-2">
          <img
            src={blog.user.profile_image}
            className="w-[100px] h-[100px] rounded-full"
          />
          <p>{blog.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
