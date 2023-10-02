import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

const Blog = ({ article }) => {
  // const route = useRouter();
  // const [ids, setIds] = useState(null);
  // const id = route.query.id;
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   const res = await fetch(`https://dev.to/articles/${id}`);
  //   const data = await res.json();
  // }

  return <div>{article.title}</div>;
};
// export const getServerSideProps = async () => {
//   const route = useRouter();

//   return {
//     props: data, // will be passed to the page component as props
//   };
// };

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://www.dev.to/api/articles/${id}`);
  const article = await res.json();

  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://www.dev.to/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Blog;
