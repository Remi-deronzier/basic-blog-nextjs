import Link from "next/link";

import styles from "../styles/BlogPostLi.module.css";

export default function BlogPostLi({ title, date, link }) {
  return (
    <li className={styles.li}>
      <Link href={`/posts/${link}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small>{date}</small>
    </li>
  );
}
