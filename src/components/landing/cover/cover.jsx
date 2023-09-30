"use client";

import { goudy, manrope } from "@/utils/fonts";
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
          <h1 className={goudy.className}>Software Engineer</h1>
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
          <a
            href="/resume.pdf"
            className={manrope.className}
            download="resume.pdf"
          >
            <button className={manrope.className}>
              DOWNLOAD RESUME
              <BsArrowUpRight />
            </button>
          </a>
        </div>
        <div className={classes.right}>
          <h1 className={manrope.className}>MUHAMMAD ABUZAR</h1>
        </div>
      </div>
    </div>
  );
}
