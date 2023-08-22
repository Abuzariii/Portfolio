"use client";

import classes from "./projects.module.css";
import classes2 from "./bgImages.module.css";
import Footer from "../landing/footer/footer";
import { motion } from "framer-motion";
import { goudy, manrope, roboto300, poiret } from "@/utils/fonts";
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from "../landing/cover/navbar/navbar";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className={classes.container}>
      <Navbar />
      <h1 className={poiret.className}>My Projects 🧑‍💻 </h1>
      <div className={classes.projects}>
        <motion.div className={classes2.project1}>
          <h1 className={goudy.className}>FIFA 23 EDA and Dashboards</h1>
          <hr />
          <p className={roboto300.className}>
            Analysis of entire FIFA 23 players dataset using Microsoft Power BI
            and Python
          </p>
          <Link
            href={
              "https://github.com/Abuzariii/FIFA-23-EDA-and-Power-BI-Dashboard"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project2}>
          <h1 className={goudy.className}>Lips Love -- Makeup Website</h1>
          <hr />
          <p className={roboto300.className}>
            A full stack Makeup e-commerce store built using MERN stack and
            Nextjs 13
          </p>
          <Link
            href={"https://github.com/Abuzariii/Lips-Love----Makeup-Webiste"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project3}>
          <h1 className={goudy.className}>Twitter (X) Sentiment Analysis</h1>
          <hr />
          <p className={roboto300.className}>
            Classiffied 13 emotions from 40k tweets using pre-trained BERT model
            by Google
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Emotions-Classification-from-Tweets"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project4}>
          <h1 className={goudy.className}>IUB Science Promotion Society</h1>
          <hr />
          <p className={roboto300.className}>
            Live webiste of IUB Science Promotion Society built with Nextjs and
            MongoDB for articles.
          </p>

          <Link
            href={"https://github.com/Abuzariii/Science-Promotion-Society"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project5}>
          <h1 className={goudy.className}>PERN Starting Template</h1>
          <hr />
          <p className={roboto300.className}>
            A basic PERN stack app supporting CRUD operations with Postgres SQL
            database
          </p>

          <Link
            href={"https://github.com/Abuzariii/PERN-Starting-Template"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project6}>
          <h1 className={goudy.className}>Colorizing Images with Open CV</h1>
          <hr />
          <p className={roboto300.className}>
            Used Caffe (Convolutional Architecture for Fast Feature Embedding)
            to colorize grayscale images. Its built with RNNs and CNNs.
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Colorizing-Grayscale-Images-with-OpenCV"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project7}>
          <h1 className={goudy.className}>Taylor Series Expansion</h1>
          <hr />
          <p className={roboto300.className}>
            Python implementation of Taylor Series Expansion, solution to Zeno's
            paradox, who thought that finding a finite value using the sum of an
            infinite series is practically impossible.
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Taylor-Series-Expansion...Numerical-Computing"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project8}>
          <h1 className={goudy.className}>COVID 19 Vaccine Effectiveness</h1>
          <hr />
          <p className={roboto300.className}>
            Analyzed data from US's Center for Disease control and Prevention to
            check vaccine effectiveness by age groups
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/COVID-19-Vaccine-Effectiveness-by-Age-Groups"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project9}>
          <h1 className={goudy.className}>Breast Cancer Classification</h1>
          <hr />
          <p className={roboto300.className}>
            Used 6 different Machine Learning Algorithms to check if a patient
            has breast cancer or not using physical measurements.
          </p>

          <Link
            href={"https://github.com/Abuzariii/Breast-Cancer-Classification"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project10}>
          <h1 className={goudy.className}>Profiles Web App MERN</h1>
          <hr />
          <p className={roboto300.className}>
            A MERN web app where users can upload images as well as textual
            data. Multer was used to handle images on the backend.
          </p>

          <Link
            href={"https://github.com/Abuzariii/Profiles-Web-App-MERN"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project12}>
          <h1 className={goudy.className}>Meteorological Data Analysis</h1>
          <hr />
          <p className={roboto300.className}>
            EDA on Finland's meteorological data from 2006 to 2016 to check the
            change in humidity and temperature and its environmental impact
          </p>

          <Link
            href={"https://github.com/Abuzariii/Meteorologoical-Data-Analysis"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project13}>
          <h1 className={goudy.className}>Netflix Clone with React</h1>
          <hr />
          <p className={roboto300.className}>
            A Netflix clone I built as final project for my Frontend Internship
            with Bytewise Limited
          </p>

          <Link
            href={"https://github.com/Abuzariii/Netflix_Clone"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project14}>
          <h1 className={goudy.className}>Low Light Image Enhancement</h1>
          <hr />
          <p className={roboto300.className}>
            Used MIRNET to enhance low light images while preserving their
            precise spatial details
          </p>

          <Link
            href={"https://github.com/Abuzariii/Low-Light-Image-Enhancement"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project15}>
          <h1 className={goudy.className}>GPT2 Text Generation</h1>
          <hr />
          <p className={roboto300.className}>
            Leveraged the power of Open AI's generatice AI to create texts given
            a specific prompt.
          </p>

          <Link
            href={"https://github.com/Abuzariii/Text-Generation-GPT2"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project16}>
          <h1 className={goudy.className}>Automatic Speech recognition</h1>
          <hr />
          <p className={roboto300.className}>
            Used Open AI's WHISPER model to transcribe texts from 82 different
            languages
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Open-AI-Whisper-ASR-Web-UI-Demo-With-Gradio"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project17}>
          <h1 className={goudy.className}>Movies Reviews Classification</h1>
          <hr />
          <p className={roboto300.className}>
            Used BERT transformer to classify over 150k movie reviews from IMDB.
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Movie-Reviews-Multi-Class-Text-Classification"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project18}>
          <h1 className={goudy.className}>Facial Recognition Verification</h1>
          <hr />
          <p className={roboto300.className}>
            CNN based model trained on VGG Face dataset for facial recognition
            tasks. VGG Face is a dataset of 2.6 million face images of 2,622
            people
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Facial-Recognition-Verification"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project19}>
          <h1 className={goudy.className}>Image Super Resolution</h1>
          <hr />
          <p className={roboto300.className}>
            Used SR GANs(Generative Adversarial Networks) to enhance image
            resolution
          </p>

          <Link
            href={"https://github.com/Abuzariii/Image-Super-Resolution"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project20}>
          <h1 className={goudy.className}>Cross-Sensor Fingerprint Matching</h1>
          <hr />
          <p className={roboto300.className}>
            A siamese network for fingerprint matching with Tensorflow and
            Keras.
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Fingerprint-Matching-with-Siamese-Networks-Tensorflow"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project21}>
          <h1 className={goudy.className}>Tadbeer</h1>
          <hr />
          <p className={roboto300.className}>
            A highly modern frontend web app with a slick design and immersive
            animations
          </p>

          <Link
            href={"https://github.com/Abuzariii/Tadbeer"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project22}>
          <h1 className={goudy.className}>Real Time YOLO 4 on Webcam</h1>
          <hr />
          <p className={roboto300.className}>
            Ran YOLO 4 on colab for object recoginition and localization
          </p>

          <Link
            href={"https://github.com/Abuzariii/YOLO-v4-on-WebCam-Realtime"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project23}>
          <h1 className={goudy.className}>OLX Clone Nextjs</h1>
          <hr />
          <p className={roboto300.className}>
            A desktop-only webapp resembling OLX website
          </p>

          <Link
            href={"https://github.com/Abuzariii/Next-Js-OLX-Clone"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project24}>
          <h1 className={goudy.className}>House Price Regression</h1>
          <hr />
          <p className={roboto300.className}>
            Advanced techniques for house price regression challenge on Kaggle
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Kaggle-House-Prices-Advanced-Regression-Techniques"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project25}>
          <h1 className={goudy.className}>FIFA 23 GraphQL API</h1>
          <hr />
          <p className={roboto300.className}>
            Exposed entire FIFA 23 player's dataset using GraphQL
          </p>

          <Link
            href={"https://github.com/Abuzariii/FIFA-23-GraphQL-API"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project26}>
          <h1 className={goudy.className}>Neon, serverless Postgres</h1>
          <hr />
          <p className={roboto300.className}>
            CRUD app built with Nodejs, utilizing Neon DB, a server-less
            Postgres with a generous free tier.
          </p>

          <Link
            href={
              "https://github.com/Abuzariii/Neon-Serverless-Postgres-Nodejs"
            }
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className={classes2.project27}>
          <h1 className={goudy.className}>Chat App, Socket.io</h1>
          <hr />
          <p className={roboto300.className}>
            A real time chat web application built with socket.io and Nextjs,
            users can join rooms with room id and chat with each other. Supports
            any number of users in a single room.
          </p>

          <Link
            href={"https://github.com/Abuzariii/Real-Time-Chat-App-Socket.io"}
            target="_blank"
            className="link"
          >
            <motion.button
              initial={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              className={manrope.className}
            >
              Github
              <BsArrowUpRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
