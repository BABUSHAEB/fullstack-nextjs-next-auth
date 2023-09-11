// "use server";

import React, { Suspense } from "react";
import "@styles/globals.css";
import NavBar from "@components/NavBar";
import Provider from "@components/Provider";
import Loading from "./loading";
import Script from "next/script";

export const metadata = {
  title: "Blog Post",
  description: "Express. Share. Evolve.",
};
const RootLayout = async ({ children }) => {
  return (
    <html>
      <head>
        <Script
          src="https://cdn.tiny.cloud/1/g5936o8syovcet0pjg9xf5gt9tr9ngfo01z0ugww74n541cv/tinymce/6/tinymce.min.js"
          referrerpolicy="origin"
        ></Script>
      </head>
      <body>
        <Suspense fallback={<Loading />}>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app">
              <NavBar />
              {children}
            </main>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
