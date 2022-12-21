import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      HeroBanner

      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div>
        {['Product1', 'Product2'].map((product) => product)}
      </div>

      Footer
    </>
  );
}
