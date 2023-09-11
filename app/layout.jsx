// "use server";

import React, { Suspense } from "react";
import "@styles/globals.css";
import NavBar from "@components/NavBar";
import Provider from "@components/Provider";
import Loading from "./loading";

export const metadata = {
  title: "Blog Post",
  description: "Express. Share. Evolve.",
};
const RootLayout = async ({ children }) => {
  return (
    <html>
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
