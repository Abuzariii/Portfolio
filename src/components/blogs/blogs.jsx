import { abel } from "@/utils/fonts";
import Link from "next/link";
import Footer from "../landing/footer/footer";
import classes from "./blogs.module.css";

export default function Blogs() {
  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <h1 className={abel.className}>
          <Link
            href={"https://medium.com/@Abuzariii"}
            target="_blank"
            className="link"
          >
            👉 Read My Medium Blogs
          </Link>
        </h1>
        <h1 className={abel.className}>
          <Link
            href={"https://abuzar.hashnode.dev/"}
            target="_blank"
            className="link"
          >
            👉 Read My Hashnode Blogs
          </Link>
        </h1>
      </div>
      <Footer />
    </div>
  );
}
