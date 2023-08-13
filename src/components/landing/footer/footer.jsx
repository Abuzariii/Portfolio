import { caveat, poiret, roboto300 } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoMedium,
} from "react-icons/bi";
import { SiHashnode } from "react-icons/si";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.upperDiv}>
        <div className={classes.lipslove}>
          <h1 className={poiret.className}>Muhammad</h1>
          <h1 className={poiret.className}>Abuzar</h1>
          <p className={roboto300.className}>
            I am a full stack software engineer based in Bahawalpur, Punjab,
            Pakistan. Currently enrolled in a bachelors in Software Engineering,
            I excel in web development, web design, data analysis, deep
            learning, machine learning, business intelligence and database
            management. I am open for part time remote opportunities as well as
            collabs for open source contributions.
          </p>
        </div>
        <div className={classes.links}>
          <div className={classes.pages}>
            <h3 className={roboto300.className}>Pages</h3>
            <p className={roboto300.className}>
              <Link className="link" href={"/"}>
                Home
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/about"}>
                About
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/stack"}>
                Stack
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/projects"}>
                Projects
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/blogs"}>
                Blogs
              </Link>
            </p>
            <p className={roboto300.className}>
              <Link className="link" href={"/contact"}>
                Contact
              </Link>
            </p>
          </div>
          <div className={classes.contacts}>
            <h3 className={roboto300.className}>Contacts</h3>
            <p className={roboto300.className}>muhammadabuzar010@gmail.com</p>
            <div>
              <Link
                className="link"
                href={"https://www.linkedin.com/in/abuzariii"}
                target="_blank"
              >
                <BiLogoLinkedin size={30} />
              </Link>

              <Link
                className="link"
                href={"https://medium.com/@Abuzariii"}
                target="_blank"
              >
                <BiLogoMedium size={30} />
              </Link>

              <Link
                className="link"
                href={"https://github.com/Abuzariii"}
                target="_blank"
              >
                <BiLogoGithub size={30} />
              </Link>

              <Link
                className="link"
                href={"https://abuzar.hashnode.dev/"}
                target="_blank"
              >
                <SiHashnode size={30} />
              </Link>
              <Link
                className="link"
                href={"https://www.instagram.com/abuzariii"}
                target="_blank"
              >
                <BiLogoInstagram size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.lowerDiv}>
        <div>
          <p className={roboto300.className}>Made by</p>
          <a
            href={"https://github.com/Abuzariii"}
            className={caveat.className}
            target="_blank"
          >
            Abuzar
          </a>
        </div>
        <div>
          <Image src={"/assassin.png"} width={50} height={50} />
        </div>
      </div>
    </footer>
  );
}
