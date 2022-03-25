import { Layout } from "../components/Layout";

import BlogSection from "../components/BlogSection";
import PresentationSection from "../components/PresentationSection";

export default function Home({ articles }) {
  return (
    <Layout>
      <PresentationSection />
      <BlogSection articles={articles} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://basic-blog-api.herokuapp.com/");
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
}
