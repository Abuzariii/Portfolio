"use client";

import classes from "./stack.module.css";
import Footer from "../landing/footer/footer";
import {
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoMongodb,
  BiLogoFigma,
  BiLogoGit,
  BiLogoGithub,
  BiLogoAws,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { SiTensorflow, SiPowerbi, SiDatabricks } from "react-icons/si";
import { abel, poiret } from "@/utils/fonts";
import React, { useState, useEffect } from "react";
import Navbar from "../landing/cover/navbar/navbar";

export default function Stack() {
  const [iconSize, setIconSize] = useState(100);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowSizeChange = () => {
        setIconSize(window.innerWidth < 600 ? 60 : 100);
      };

      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  return (
    <div className={classes.container}>
      <Navbar />
      <h1 className={poiret.className}>My Tech Stack 🦾</h1>
      <div className={classes.stack}>
        <div>
          <BiLogoPostgresql size={iconSize} />
          <h3 className={abel.className}>Postgres SQL</h3>
        </div>
        <div>
          <BiLogoPython size={iconSize} />
          <h3 className={abel.className}>Python</h3>
        </div>
        <div>
          <SiTensorflow size={iconSize} />
          <h3 className={abel.className}>Tensorflow</h3>
        </div>
        <div>
          <BiLogoJavascript size={iconSize} />
          <h3 className={abel.className}>JavaScript</h3>
        </div>
        <div>
          <BiLogoGit size={iconSize} />
          <h3 className={abel.className}>Git</h3>
        </div>
        <div>
          <BiLogoReact size={iconSize} />
          <h3 className={abel.className}>React</h3>
        </div>
        <div>
          <BiLogoNodejs size={iconSize} />
          <h3 className={abel.className}>Nodejs</h3>
        </div>
        <div>
          <BiLogoJava size={iconSize} />
          <h3 className={abel.className}>Java</h3>
        </div>
        <div>
          <BiLogoMongodb size={iconSize} />
          <h3 className={abel.className}>MongoDB</h3>
        </div>
        <div>
          <BiLogoFigma size={iconSize} />
          <h3 className={abel.className}>Figma</h3>
        </div>
        <div>
          <BiLogoGithub size={iconSize} />
          <h3 className={abel.className}>Github</h3>
        </div>
        <div>
          <TbBrandNextjs size={iconSize} />
          <h3 className={abel.className}>Nextjs</h3>
        </div>
        <div>
          <TbBrandVscode size={iconSize} />
          <h3 className={abel.className}>Visual Studio Code</h3>
        </div>
        <div>
          <SiPowerbi size={iconSize} />
          <h3 className={abel.className}>Power BI</h3>
        </div>
        <div>
          <SiDatabricks size={iconSize} />
          <h3 className={abel.className}>Azure Databricks</h3>
        </div>
        <div>
          <BiLogoAws size={iconSize} />
          <h3 className={abel.className}>AWS (ETL)</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
