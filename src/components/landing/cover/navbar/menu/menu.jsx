import { gruppo } from "@/utils/fonts";
import classes from "./menu.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoMedium,
  BiLogoInstagram,
} from "react-icons/bi";
import { SiHashnode } from "react-icons/si";

export default function Menu({ isMenuOpen }) {
  const customEase = (t) => {
    return 1 - Math.pow(1 - t, 6);
  };

  // Variants for custom animations
  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={classes.menu}
      initial={{ y: "100%" }}
      animate={{ y: isMenuOpen ? 0 : "100%" }}
      transition={{ duration: 1, ease: customEase }}
    >
      <motion.h1
        className={gruppo.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link href={"/"} className="link">
          Home
        </Link>
      </motion.h1>
      <motion.h1
        className={gruppo.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link href={"/about"} className="link">
          About me
        </Link>
      </motion.h1>
      <motion.h1
        className={gruppo.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link href={"/projects"} className="link">
          Projects
        </Link>
      </motion.h1>
      <motion.h1
        className={gruppo.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Link href={"/stack"} className="link">
          Stack
        </Link>
      </motion.h1>
      <motion.h1
        className={gruppo.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <Link href={"/blog"} className="link">
          Blog
        </Link>
      </motion.h1>
      <div className={classes.socials}>
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
    </motion.div>
  );
}
