import React from "react";
import { AiFillInstagram, AiOutlineTwitter,AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-container">
      <p>2023 All rights reserved</p>

      <p className="icons">
        <Link href='https://github.com/gnahc2305'>
        <AiOutlineGithub />
        </Link>
      </p>
    </div>
  );
}

export default Footer;
