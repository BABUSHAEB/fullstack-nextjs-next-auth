"use server";
import Feed from "@components/Feed";
import Loading from "./loading";

export async function getBlogs() {
  let res;
  if (process.env.BASE_FETCH_URL) {
    res = await fetch(
      `${process.env.BASE_FETCH_URL}/api/blogs`,

      {
        cache: "no-store",
        // next: { revalidate: 1 },
      }
    );
    let results = await res.json();
    return results;
  }
}

// import dynamic from "next/dynamic";

const Home = async () => {
  const allPosts = await getBlogs();

  // const loader
  return (
    <>
      <section className="w-full flex-center items-center flex-col mb-9">
        <h1 className="head_text text-center ">
          Let&apos;s
          <br />
          <span className="orange_gradient text-center leading-[20px]	">
            Express. Share. Evolve.
          </span>
        </h1>
        <p className="desc text-center mx-auto">
          Sharing experiences motivates others to achieve their dreams. The
          power of storytelling!
        </p>
      </section>

      <Feed allPosts={allPosts} />
    </>
  );
};

export default Home;
