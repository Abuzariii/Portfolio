import { abel, goudy, roboto300 } from "@/utils/fonts";
import Footer from "../landing/footer/footer";
import classes from "./about.module.css";

export default function About() {
  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <div>
          <h1 className={goudy.className}>
            Hi there 👋🏼, My name is Muhammad Abuzar
          </h1>
          <h2 className={abel.className}>
            I am a software engineer based in Bahawalpur Pakistan. I am a full
            stack web developer and a data scientist.
          </h2>
        </div>
        <div>
          <h1 className={goudy.className}>Experiences and Education</h1>
          <h2 className={abel.className}>
            The Islamia University of Bahawalpur (2020-Current)
          </h2>
          <p className={roboto300.className}>
            (Bachelors in Software Engineering)
          </p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Bytewise Limited (Sep 22-Dec 22)</h2>
          <p className={roboto300.className}>(Frontend Internship)</p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Bytewise Limited (Mar 23-Jul 23)</h2>
          <p className={roboto300.className}>(Data Engineering Internship)</p>
        </div>
        <div>
          <h1 className={goudy.className}>Interests and Side Hobbies</h1>
          <h2 className={abel.className}>European Football</h2>
          <p className={roboto300.className}>
            (Hardcore FC Barcelone and Messi fan)
          </p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Indian History</h2>
          <p className={roboto300.className}>
            (I am interested in the general history of the region, specially pre
            vdeic ages)
          </p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Anthropplogy</h2>
          <p className={roboto300.className}>
            (Please watch Stephen Milo on Youtube I beg you )
          </p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Singularity and AI</h2>
          <p className={roboto300.className}>
            (My motivation to break into tech was artifical intelligence
            systems, specially those that can out compete humans in day to day
            tasks)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
