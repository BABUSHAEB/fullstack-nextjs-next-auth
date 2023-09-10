// "use server";

import React, { Suspense } from "react";
import "@styles/globals.css";
import NavBar from "@components/NavBar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Blog Post",
  description: "Express. Share. Evolve.",
};
const RootLayout = async ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
