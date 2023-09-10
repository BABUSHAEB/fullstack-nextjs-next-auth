"use server";

import React, { Suspense } from "react";
import "@styles/globals.css";
import NavBar from "@components/NavBar";
import Provider from "@components/Provider";
import Loading from "./loading";
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Suspense fallback={<Loading />}>
              <NavBar />
            </Suspense>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
