import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { getData } from "@/utils/functions";

export default function Home({ blogs }) {
  const [pages, setPages] = useState(3);

  return (
    <main className={`container mx-auto`}>
      <section>
        {
          <>
            <h1>Recent Blogs</h1>
            <h2 className=" text-[#181A2A] font-semibold text-[24px] ">
              Blog posts
            </h2>
            <div className="grid grid-cols-3 gap-3 ">
              {blogs.map((blog, i) => (
                <Card blog={blog} />
              ))}
              List
            </div>
            <div className="flex justify-center my-4">
              <button
                onClick={() => {
                  console.log("Clicked");
                }}
                className="border px-5 py-3 rounded-[6px] hover:bg-green-600 hover:text-white active:bg-green-900 active:text-white"
              >
                Load More ...
              </button>
            </div>
          </>
        }
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles?per_page=9`);
  const blogs = await res.json();
  console.log("Server Side Work");

  return {
    props: {
      blogs,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch(`https://dev.to/api/articles?per_page=9`);
//   const blogs = await res.json();
//   console.log("Static Props Work");

//   return {
//     props: {
//       blogs,
//     },
//   };
// }
