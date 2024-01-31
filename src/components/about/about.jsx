import { abel, goudy, roboto300 } from "@/utils/fonts";
import Footer from "../landing/footer/footer";
import classes from "./about.module.css";
import Navbar from "../landing/cover/navbar/navbar";

export default function About() {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.about}>
        <div>
          <h1 className={goudy.className}>
            Hi there 👋🏼, My name is Muhammad Abuzar
          </h1>
          <h2 className={abel.className}>
            I am a software engineer based in Bahawalpur Pakistan. I am a full
            stack web developer, data scientist and deep learning practitioner.
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

          <div className={classes.line}></div>
          <h2 className={abel.className}>
            IUB Science Promotion Society (Dec 21-Dec 23)
          </h2>
          <p className={roboto300.className}>(General Secretary)</p>

          <div className={classes.line}></div>
          <h2 className={abel.className}>TechLancerr Summit (Oct 23-Dec 23)</h2>
          <p className={roboto300.className}>(Director Web & IT)</p>

          <div className={classes.line}></div>
          <h2 className={abel.className}>
            Google Developers Student Club IUB (Sep 23-Current)
          </h2>
          <p className={roboto300.className}>(Web Development Lead)</p>
        </div>

        <div>
          <h1 className={goudy.className}>Interests and Side Hobbies</h1>
          <h2 className={abel.className}>European Football</h2>
          <p className={roboto300.className}>
            ( Hardcore FC Barcelone and Messi fan )
          </p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Indian History and Prehistory</h2>
          <p className={roboto300.className}>
            ( I regularly read up on the political, social, religious and
            cultural history of the region )
          </p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Anthroplogy</h2>
          <p className={roboto300.className}>
            ( I have a deep interest in the evolution of not just hominids but
            also other species and I love to identify myself as a nature lover )
          </p>
          <div className={classes.line}></div>
          <h2 className={abel.className}>Singularity and AI</h2>
          <p className={roboto300.className}>
            ( My motivation to break into tech was artifically intelligent
            systems, specially those that can out compete humans in day to day
            tasks )
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
