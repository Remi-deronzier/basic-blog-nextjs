import BlogPostLi from "./BlogPostCard";

import styles from "../styles/BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={styles.blog}>
      <h2>Blog</h2>
      <ul className={styles.ul}>
        <BlogPostLi
          title="When to Use Static Generation v.s Server-side Rendering"
          date="January 2, 2020"
          link="ssg-ssr"
        />
        <BlogPostLi
          title="Two forms of Pre-rendering"
          date="January 2, 2020"
          link="pre-rendering"
        />
      </ul>
    </section>
  );
}
