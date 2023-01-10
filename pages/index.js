import { Inter } from "@next/font/google";
import React from "react";

import { Product, FooterBanner, HeroBanner} from '../components/index';

import { client } from "../LIB/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home( { products, banner } ) {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={banner && banner[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner}
  }
}