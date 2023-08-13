"use client";

import classes from "./projects.module.css";
import { motion } from "framer-motion";
import { goudy, manrope, roboto300 } from "@/utils/fonts";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={classes.projects}>
      <motion.div className={classes.project1}>
        <h1 className={goudy.className}>FIFA 23 EDA and Dashboards</h1>
        <hr />
        <p className={roboto300.className}>
          Analysis of entire FIFA 23 players dataset using Microsoft Power BI
          and Python
        </p>
        <Link
          href={
            "https://github.com/Abuzariii/FIFA-23-EDA-and-Power-BI-Dashboard"
          }
          target="_blank"
          className="link"
        >
          <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "linear" }}
            whileHover={{ scale: 1.1 }}
            className={manrope.className}
          >
            Github
            <BsArrowUpRight />
          </motion.button>
        </Link>
      </motion.div>
      <motion.div className={classes.project2}>
        <h1 className={goudy.className}>Lips Love -- Makeup Website</h1>
        <hr />
        <p className={roboto300.className}>
          A full stack Makeup e-commerce store built using MERN stack and Nextjs
          13
        </p>
        <Link
          href={"https://github.com/Abuzariii/Lips-Love----Makeup-Webiste"}
          target="_blank"
          className="link"
        >
          <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "linear" }}
            whileHover={{ scale: 1.1 }}
            className={manrope.className}
          >
            Github
            <BsArrowUpRight />
          </motion.button>
        </Link>
      </motion.div>
      <motion.div className={classes.project3}>
        <h1 className={goudy.className}>Twitter (X) Sentiment Analysis</h1>
        <hr />
        <p className={roboto300.className}>
          Classiffied 13 emotions from 40k tweets using pre-trained BERT model
          by Google
        </p>

        <Link
          href={
            "https://github.com/Abuzariii/Emotions-Classification-from-Tweets"
          }
          target="_blank"
          className="link"
        >
          <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "linear" }}
            whileHover={{ scale: 1.1 }}
            className={manrope.className}
          >
            Github
            <BsArrowUpRight />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
