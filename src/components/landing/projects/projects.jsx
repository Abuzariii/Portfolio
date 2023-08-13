"use client";

import classes from "./projects.module.css";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className={classes.projects}>
      <motion.div className={classes.project1}></motion.div>
      <motion.div className={classes.project2}></motion.div>
      <motion.div className={classes.project3}></motion.div>
    </div>
  );
}
