"use client";

import classes from "./navbar.module.css";
import { abel, gruppo, manrope } from "@/utils/fonts";
import { Pivot as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <img src="/signGold.png" alt="khd" />
      <p className={gruppo.className}>
        <Link href={"/about"} className="link">
          About me
        </Link>
      </p>
      <p className={gruppo.className}>
        <Link href={"/projects"} className="link">
          Projects
        </Link>
      </p>
      <p className={gruppo.className}>
        <Link href={"/stack"} className="link">
          Stack
        </Link>
      </p>
      <p className={gruppo.className}>
        <Link href={"/blogs"} className="link">
          Blogs
        </Link>
      </p>
      <div className={classes.ham}>
        <Hamburger />
      </div>
    </div>
  );
}
