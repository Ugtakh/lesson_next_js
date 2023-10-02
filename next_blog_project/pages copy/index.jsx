import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
    setIsLoading(false);
  };
  function handleNext() {
    console.log("daraagiin huudas darlaa");
  }

  return (
    <main className={`container mx-auto`}>
      <section>
        <h2 className=" text-[#181A2A] font-semibold text-[24px] ">
          All blog post
        </h2>
        {isLoading && <Loader />}
        {!isLoading && (
          <div className="grid grid-cols-3 gap-3 justify-center">
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
