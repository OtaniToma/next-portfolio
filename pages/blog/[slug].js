import Layout from "../../components/layout";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import { getPostBySlug, getAllSlugs } from "../../lib/api";
import { extractText } from "../../lib/extract-text";
import { prevNextPost } from "../../lib/prev-next-post";
import ConvertBody from "../../components/ConvertBody";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "../../lib/constants";

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <ConvertBody contentHTML={content} />
      </Main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const post = await getPostBySlug(slug);
  if (!post) {
    return { notFound: true };
  } else {
    const description = extractText(post.content);

    const eyecatch = post.eyecatch ?? eyecatchLocal;

    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.blurDataURL = base64;

    const allSlugs = await getAllSlugs();
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    };
  }
}
