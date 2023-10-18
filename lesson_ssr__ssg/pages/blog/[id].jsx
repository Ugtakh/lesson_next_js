import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate, getData } from "@/utils/functions";

const BlogDetail = ({ article }) => {
  // const router = useRouter();

  // console.log("RENDER", router.isFallback);

  // if (router.isFallback) return <div>Loading ...</div>;

  return (
    <div className="container mx-auto mt-24 max-w-4xl">
      <div>
        {console.log("REN", article)}
        <>
          <div>
            <h1 className="text-4xl font-semibold text-slate-900 ">
              {article.title}
            </h1>
            <div className="flex items-center mt-5 gap-5">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={article.user?.profile_image}
                  alt="avatar"
                />
                <h4 className="ml-2 text-lg text-gray-500">
                  {article.user.name}
                </h4>
              </div>
              <p className="text-lg text-gray-500">
                {formatDate(article.created_at)}
              </p>
            </div>
          </div>
          <div className="my-8">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: article.body_html }}
            ></div>
          </div>
        </>
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps(context) {
  const { id } = context.params;
  console.log("STATIC PROPS", id);
  const res = await fetch(`https://www.dev.to/api/articles/${id}`);
  const article = await res.json();

  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://www.dev.to/api/articles?per_page=3`);
  const articles = await res.json();
  // const res1 = await fetch(`https://www.dev.to/api/latest?per_page=4`);
  // const articles2 = await res1.json();
  const ids = articles.map((article) => article.id);
  // const ids2 = articles2.map((article) => article.id);
  // ids.concat(ids2);
  // console.log("ids", ids);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
}
