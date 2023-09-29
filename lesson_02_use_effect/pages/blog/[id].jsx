import React from "react";
import { useRouter } from "next/router";

const Blog = () => {
  const route = useRouter();
  const id = route.query.id;
  return <div>Blog</div>;
};

export default Blog;
