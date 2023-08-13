"use client";

import classes from "./skills.module.css";
import { manrope } from "@/utils/fonts";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <div className={classes.skills}>
      <div>
        <h1 className={manrope.className}>Web Development</h1>
        <ProgressBar
          className={classes.bar}
          completed={90}
          customLabel=" "
          bgColor="rgb(218, 167, 57)"
          baseBgColor="white"
        />
      </div>
      <div>
        <h1 className={manrope.className}>Data Sciences</h1>
        <ProgressBar
          completed={90}
          className={classes.bar}
          customLabel=" "
          bgColor="rgb(218, 167, 57)"
          baseBgColor="white"
        />
      </div>
      <div>
        <h1 className={manrope.className}>Machine/Deep Learning</h1>
        <ProgressBar
          className={classes.bar}
          completed={70}
          customLabel=" "
          bgColor="rgb(218, 167, 57)"
          baseBgColor="white"
        />
      </div>
      <div>
        <h1 className={manrope.className}>Business Intelligence</h1>
        <ProgressBar
          className={classes.bar}
          completed={70}
          customLabel=" "
          bgColor="rgb(218, 167, 57)"
          baseBgColor="white"
        />
      </div>
    </div>
  );
}
