"use client";

import { manrope, roboto400 } from "@/utils/fonts";
import { CgWebsite } from "react-icons/cg";
import { GiBrain } from "react-icons/gi";
import { SiAlwaysdata, SiPowerbi } from "react-icons/si";
import classes from "./skills.module.css";

export default function Skills() {
  return (
    <div className={classes.skills}>
      <div>
        <h1 className={manrope.className}>Web Development</h1>
        <CgWebsite size={80} />
        <p className={roboto400.className}>
          With over two years of experience in Web Development, I can build
          highly responsive web applications and APIs. I use MERN stack along
          with Nextjs, PostgreSQL, GraphQL, Figma, Webflow and ORMs like
          Mongoose and Sequelize.
        </p>
      </div>
      <div>
        <h1 className={manrope.className}>Data Sciences</h1>
        <SiAlwaysdata size={80} />
        <p className={roboto400.className}>
          I am a highly skilled Data Scientist with a good understanding of Data
          Analysis, Preprocessing and Visualization. I use Python to make
          Exploratory Data Analysis Reports. I can also build ETL pipelines on
          AWS having interned at Bytewise Limited as a Data Engineer.
        </p>
      </div>
      <div>
        <h1 className={manrope.className}>Machine/Deep Learning</h1>
        <GiBrain size={80} />
        <p className={roboto400.className}>
          For ML and DL tasks I primarily use PyTorch, Tensorflow and Scikit
          Learn. Having worked as a research assistant for Masters and PhD
          students, I can train highly accurate models for pretty much any sort
          of NLP or Computer Vision use cases ranging from classification,
          regression, sentiment analysis, object or text detection and
          recognition.
        </p>
      </div>
      <div>
        <h1 className={manrope.className}>Business Intelligence</h1>
        <SiPowerbi size={80} />
        <p className={roboto400.className}>
          I love extracting meaningful insights from data. I use Pandas to
          preprocess data and then Power BI to make dashboards and reports to
          help decision makers. I have a strong grip on Power BI's DAX
          expression and have also used Google's Looker for Business
          Intelligence.
        </p>
      </div>
    </div>
  );
}
