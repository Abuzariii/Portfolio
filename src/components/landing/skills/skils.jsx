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
          I started my web development journey in August 2021 and since then I
          have worked extensively with the MERN stack. I additionally use Nextjs
          to make responsive frontends. I can build REST APIs in both
          microservices and monolith architecture.
        </p>
      </div>
      <div>
        <h1 className={manrope.className}>Data Sciences</h1>
        <SiAlwaysdata size={80} />
        <p className={roboto400.className}>
          I got into Data Sciences the same day I started my web journey, can
          analyze data, clean and preprocess it for modelling, use Matplotlib
          and Seaborn tovisualize it and much much more. My primary DS stack is
          Python.
        </p>
      </div>
      <div>
        <h1 className={manrope.className}>Machine/Deep Learning</h1>
        <GiBrain size={80} />
        <p className={roboto400.className}>
          On the Machine Learning and Deep Learning side I can make any sort of
          classification or regression models for data using Scikit Learn or
          Deep Learning models using Tensorflow. I have worked extensively in
          the domains of Image Classification, Object Localization, Sentiment
          Analysis and Pose Estimation using some state of the art Deep Learning
          Models. I have good understanding of CNNs, RNNs, LLMs and GPTs.
        </p>
      </div>
      <div>
        <h1 className={manrope.className}>Business Intelligence</h1>
        <SiPowerbi size={80} />
        <p className={roboto400.className}>
          I have a knack for extracting meaningful insights from data and make
          sense of it. Primarily I use Pandas for data preprocessing and then
          Power BI to make beautiful dashboards. Though I mainly use Power BI's
          integrated AI based QnA feature, I still have very good understanding
          of DAX expressions and can bring any sort of messy data to life and
          help decision makers make intelligent decisions.
        </p>
      </div>
    </div>
  );
}
