/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/Layout";
import BackToHome from "../../components/BackToHome";

export default function Blog({ article }) {
  return (
    <Layout>
      <ReactMarkdown children={article} />
      <BackToHome />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch(
      `https://basic-blog-api.herokuapp.com/${context.params.slug}.txt`
    );
    const data = await res.text();
    if (res.status == 200) {
      return { props: { article: data } };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
