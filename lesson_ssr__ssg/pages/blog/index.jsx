import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { getData } from "@/utils/functions";
import Card from "@/components/Card";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(3);

  const getBlogs = async () => {
    try {
      const data = await getData(
        `https://dev.to/api/articles?per_page=${pages}`
      );
      console.log(data);
      setBlogs(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      setError("Алдаа гарлаа дахин оролдоно уу");
      // alert("Алдаа гарлаа дахин оролдоно уу");
    }
  };

  const handleNext = () => {
    console.log("daraagiin huudas darlaa");
    setPages(pages + 3);
  };

  useEffect(() => {
    getBlogs();
  }, [pages]);

  return (
    <main className={`container mx-auto`}>
      <section>
        {isLoading && <Loader />}
        {error && (
          <h1 className="text-red-700 text-3xl text-center my-10">{error}</h1>
        )}
        {!isLoading && !error && (
          <>
            <h2 className=" text-[#181A2A] font-semibold text-[24px] ">
              All blog post
            </h2>
            <div className="grid grid-cols-3 gap-3 ">
              {blogs.map((blog, i) => (
                <Card blog={blog} />
              ))}
            </div>
            <div className="flex justify-center my-4">
              <button
                onClick={handleNext}
                className="border px-5 py-3 rounded-[6px] hover:bg-green-600 hover:text-white active:bg-green-900 active:text-white"
              >
                Load More ...
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default BlogPage;
