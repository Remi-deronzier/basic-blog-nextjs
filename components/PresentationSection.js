import styles from "../styles/PresentationSection.module.css";

export default function PresentationSection() {
  return (
    <section className={styles.presentation}>
      <p>
        Hello, I’m Rémi. I’m an aspiring software engineer and a passionate
        triathlete. You can contact me on{" "}
        <a
          href="https://www.linkedin.com/in/remi-deronzier/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        (This is a sample website - you’ll be building a site like using{" "}
        <a
          href="https://nextjs.org/learn/foundations/about-nextjs"
          target="_blank"
          rel="noreferrer"
        >
          Next.js tutorial
        </a>
        )
      </p>
    </section>
  );
}
