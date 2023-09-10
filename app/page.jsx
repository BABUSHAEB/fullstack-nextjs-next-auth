import React, { Suspense } from "react";
import Loading from "./loading";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="w-full flex-center items-center flex-col">
          <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
              AI-Powered Prompts
            </span>
          </h1>
          <p className="desc text-center mx-auto">
            Promptopia is an open-source AI prompting tool for modern world to
            discover, create and share creative prompts
          </p>
        </section>
        <Feed />
      </Suspense>
    </>
  );
};

export default Home;
