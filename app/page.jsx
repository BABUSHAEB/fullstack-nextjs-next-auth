import React, { Suspense } from "react";

import Feed from "@components/Feed";

const Home = async () => {
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

      <Feed />
    </>
  );
};

export default Home;
