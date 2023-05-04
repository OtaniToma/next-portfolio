import Layout from "../../components/layout";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import Posts from "../../components/Posts";
import { getAllPosts } from "../../lib/api";

export default function Blog({ posts }) {
  console.log(posts);

  return (
    <Layout>
      <Sidebar />
      <Main>
        <Posts posts={posts} />
      </Main>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    // const { base64 } = await getPlaiceholder(post.eyecatch.url);
    // post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
