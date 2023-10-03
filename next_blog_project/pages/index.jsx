import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import Carousel from "@/components/Carousel";
import TrendCard from "@/components/TrendCard";
import CarouselItem from "@/components/CarouselItem";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setBlogs(data);
    setIsLoading(false);
  };

  const fetchTrendData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    setTrendBlogs(data);
    setIsLoading(false);
  };

  function handleNext() {
    console.log("daraagiin huudas darlaa");
  }

  useEffect(() => {
    fetchData();
    fetchTrendData();
  }, []);

  return (
    <main className={`container mx-auto`}>
      <section>
        <div className="my-2">
          {isLoading && <Loader />}
          {!isLoading && (
            <Carousel>
              {blogs.map((blog, i) => {
                return <CarouselItem blog={blog} key={i} />;
              })}
            </Carousel>
          )}
        </div>
      </section>
      <section>
        <h2 className=" text-[#181A2A] font-semibold text-[24px] ">Trending</h2>
        <div className=" grid lg:grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 my-8">
          {trendBlogs &&
            trendBlogs.map((trendBlog) => <TrendCard trendBlog={trendBlog} />)}
        </div>
      </section>
      <section>
        <h2 className=" text-[#181A2A] font-semibold text-[24px] ">
          All blog post
        </h2>
        {isLoading && <Loader />}
        {!isLoading && (
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-3 justify-center my-8">
            {blogs.map((blog, i) => (
              <Card blog={blog} />
            ))}
          </div>
        )}
        <div className="flex justify-center my-4">
          <button
            onClick={handleNext}
            className="border px-5 py-3 rounded-[6px] hover:bg-green-600 hover:text-white active:bg-green-900 active:text-white"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
