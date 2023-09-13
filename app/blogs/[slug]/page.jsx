"use server";

import BlogsDetails from "@components/BlogsDetails";

export async function getBlogs(slug) {
  let res = await fetch(
    `${process.env.BASE_FETCH_URL}/api/blogs/blogdetails/${slug.toString()}`
  );
  // await new Promise((res) => setTimeout(res, 10000));

  let results = await res.json();

  return results;
}

export default async function Page({ params: { slug } }) {
  const data = await getBlogs(slug);

  return (
    <div className="w-full">
      <BlogsDetails blogsDetails={data} />
    </div>
  );
}
