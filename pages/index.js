import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Top from "../components/Top";
import { getAllPosts } from "../lib/api";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <Top posts={posts} />
        </Main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
}
