"use client";

import classes from "./button.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { manrope } from "@/utils/fonts";
import { BsArrowUpRight } from "react-icons/bs";

export default function Button() {
  return (
    <div className={classes.button}>
      <Link href={"/projects"} className="link">
        <motion.button
          initial={{ scale: 1 }}
          transition={{ duration: 0.1, ease: "linear" }}
          whileHover={{ scale: 1.1 }}
          className={`${manrope.className} ${classes.btn}`}
        >
          Check All Projects
          <BsArrowUpRight />
        </motion.button>
      </Link>
    </div>
  );
}
