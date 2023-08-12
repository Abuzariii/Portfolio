"use client";

import classes from "./cover.module.css";
import { abel, gruppo, manrope, cinzel } from "@/utils/fonts";
import Navbar from "./navbar/navbar";
import TypeWriterEffect from "react-typewriter-effect";

export default function Cover() {
  return (
    <div className={classes.cover}>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.left}>
          <h1 className={cinzel.className}>
            A SOFTWARE ENGINEER BASED IN PAKISTAN
          </h1>
          <div className={abel.className}>
            <TypeWriterEffect
              textStyle={{
                color: "white",
                fontSize: "1.5em",
                letterSpacing: "1px",
                wordSpacing: "2px",
                fontFamily: "'Sanchez', serif",
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
        </div>
        <div className={classes.right}>
          <h1 className={manrope.className}>MUHAMMAD ABUZAR</h1>
        </div>
      </div>
    </div>
  );
}

// Image div with Name on top
// Typewriter effect for about text
// Download Resume Button
// Maths fact
