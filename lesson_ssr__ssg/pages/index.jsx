import { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Home({ blogs, page }) {
  console.log("BLOG", blogs);
  const router = useRouter();
  const myRef = useRef(null);

  const [blogList, setBlogList] = useState(blogs);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    setBlogList(blogs);
  }, [blogs]);

  const searchBlog = (searchTitle) => {
    const findBlog = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setBlogList(findBlog);
  };

  return (
    <Layout setSearchTitle={searchBlog}>
      <main className={`container mx-auto`}>
        <section ref={myRef}>
          {
            <>
              <h1>Recent Blogs</h1>
              <h2 className=" text-[#181A2A] font-semibold text-[24px] ">
                Blog posts
              </h2>
              <div className="grid grid-cols-3 gap-3 ">
                {blogList.map((blog, i) => (
                  <Card key={i} blog={blog} />
                ))}
                List
              </div>
              <div className="flex justify-center my-4">
                <button
                  onClick={() => {
                    console.log("Clicked");
                    const pg = Number(page) + 3;
                    router.replace("?page=" + pg);
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
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let { page } = context.query;
  page = page || 3;
  const res = await fetch(`https://dev.to/api/articles?per_page=${page}`);
  const blogs = await res.json();
  console.log("Server Side Work");

  return {
    props: {
      blogs,
      page,
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
