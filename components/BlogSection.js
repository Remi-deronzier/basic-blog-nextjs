import BlogPostLi from "./BlogPostCard";

import styles from "../styles/BlogSection.module.css";

export default function BlogSection({ articles }) {
  return (
    <section className={styles.blog}>
      <h2>Blog</h2>
      <ul className={styles.ul}>
        {articles.map((article) => (
          <BlogPostLi
            key={article.id}
            title={article.title}
            date={article.date}
            link={article.slug}
          />
        ))}
      </ul>
    </section>
  );
}
