import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <Back title="News Posts" />
      <section className="blog padding">
        <div className="">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
