import { useState, useEffect } from "react";
import Card from "@/components/Card";
export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  function handleNext() {
    console.log("daraagiin huudas");
  }

  return (
    <main className={`container mx-auto`}>
      <section>
        <h2>All blog post</h2>
        <div className="grid grid-cols-3 gap-3">
          {blogs.map((blog, i) => (
            <Card blog={blog} />
          ))}
          <button onClick={handleNext}>next</button>
        </div>
      </section>
    </main>
  );
}
