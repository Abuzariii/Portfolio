"use client";

import { goudy, manrope } from "@/utils/fonts";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import classes from "./cover.module.css";
import Navbar from "./navbar/navbar";
import dynamic from "next/dynamic";

export default function Cover() {
  // Disable server-side rendering for TypeWriterEffect library
  const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
    ssr: false,
  });

  return (
    <div className={classes.cover}>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.left}>
          <motion.h1
            className={goudy.className}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            Software Engineer
          </motion.h1>
          <div>
            <TypeWriterEffect
              textStyle={{
                color: "white",
                fontSize: "1.5em",
                letterSpacing: "1px",
                wordSpacing: "2px",
                fontFamily:
                  "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={[
                "From Data to Web, I do it all...",
                "Join hands and create an impact",
                "3 languages, 8 frameworks and countless libraries...",
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
            />
          </div>
          <motion.button
            className={manrope.className}
            initial={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            DOWNLOAD RESUME
            <BsArrowUpRight />
          </motion.button>
        </div>
        <motion.div
          className={classes.right}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <h1 className={manrope.className}>MUHAMMAD ABUZAR</h1>
          <h2 className={manrope.className}>MUHAMMAD ABUZAR</h2>
        </motion.div>
      </div>
    </div>
  );
}
