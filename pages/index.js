import { Layout } from "../components/Layout";

import BlogSection from "../components/BlogSection";
import PresentationSection from "../components/PresentationSection";

export default function Home() {
  return (
    <Layout>
      <PresentationSection />
      <BlogSection />
    </Layout>
  );
}
