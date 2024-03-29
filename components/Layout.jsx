import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Mock Store</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="main-container"></main>
        {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
