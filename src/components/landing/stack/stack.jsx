"use client";

import classes from "./stack.module.css";
import Prog from "../../../../public/Prog.svg";
import Image from "next/image";
import { manrope, goudy } from "@/utils/fonts";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Stack() {
  return (
    <div className={classes.stack}>
      <div className={classes.main}>
        <div className={classes.left}>
          <Image src={Prog} alt={"xyz"} className={classes.program} />
        </div>
        <div className={classes.right}>
          <p className={manrope.className}>13.08.2023</p>
          <h1 className={goudy.className}>
            From Data Sciences to Web Development, Business Intelligence and
            Deep Learning - my tech prowess knows no limits.
          </h1>
          <motion.button
            className={manrope.className}
            initial={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            whileHover={{ scale: 1.1 }}
          >
            <Link href={"/stack"} className="link">
              Stack
            </Link>
            <BsArrowUpRight size={18} />
          </motion.button>
          <div className={classes.arrows}>
            <AiOutlineRight size={23} />
            <hr />
            <AiOutlineLeft size={23} />
          </div>
        </div>
      </div>
    </div>
  );
}
