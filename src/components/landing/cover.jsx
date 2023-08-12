import classes from "./cover.module.css";
import { abel, gruppo, manrope } from "@/utils/fonts";
import Navbar from "./navbar/navbar";

export default function Cover() {
  return (
    <div className={classes.cover}>
      <Navbar />
      <h1 className={manrope.className}>This is for the cover Page</h1>
    </div>
  );
}

// Navbar on top with About me, Blogs, Projects and Stack
// An SVG signature like Assassin's creed
// Typewriter effect for about text
// Download Resume Button
// Maths fact
