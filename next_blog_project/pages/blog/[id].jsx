import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/functions";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blogDetailData, setDetailData] = useState();

  console.log("Router", id);

  const getBlogDetail = async () => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    console.log("Data", data);
    setDetailData(data);
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return (
    <div className="container mx-auto mt-24 max-w-4xl">
      <div>
        {blogDetailData ? (
          <>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 ">
                {blogDetailData.title}
              </h1>
              <div className="flex items-center mt-5 gap-5">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={blogDetailData.user.profile_image}
                    alt="avatar"
                  />
                  <h4 className="ml-2 text-lg text-gray-500">
                    {blogDetailData.user.name}
                  </h4>
                </div>
                <p className="text-lg text-gray-500">
                  {formatDate(blogDetailData.created_at)}
                </p>
              </div>
            </div>
            <div className="my-8">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blogDetailData.body_html }}
              ></div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
// import React from "react";
// import { useRouter } from "next/router";
// import { GetServerSideProps } from "next";
// import { useEffect, useState } from "react";

// const Blog = ({ article }) => {
//   // const route = useRouter();
//   // const [ids, setIds] = useState(null);
//   // const id = route.query.id;
//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // async function fetchData() {
//   //   const res = await fetch(`https://dev.to/articles/${id}`);
//   //   const data = await res.json();
//   // }

//   return <div>{article.title}</div>;
// };
// // export const getServerSideProps = async () => {
// //   const route = useRouter();

// //   return {
// //     props: data, // will be passed to the page component as props
// //   };
// // };

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const res = await fetch(`https://www.dev.to/api/articles/${id}`);
//   const article = await res.json();

//   return {
//     props: { article },
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(`https://www.dev.to/api/articles`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export default Blog;
