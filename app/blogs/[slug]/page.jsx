"use client";

import Loading from "@app/loading";
import BlogsDetails from "@components/BlogsDetails";
import React, { Suspense, useEffect, useState } from "react";

const Page = ({ params: { slug } }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getDetails = async (slug) => {
      // const response = await fetch("/api/blogs/blogdetails/how-to-learn-nextjs");
      const response = await fetch(`/api/blogs/blogdetails/${slug.toString()}`);

      const Details = await response.json();
      setBlogData(Details);
    };
    if (slug) getDetails(slug);
  }, [slug]);

  return (
    <div>
      {/* <Suspense fallback={<Loading />}> */}
      <BlogsDetails BlogsDetails={blogData} />
      {/* </Suspense> */}
    </div>
  );
};

export default Page;
