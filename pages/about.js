import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import About from "../components/About";
import "normalize.css/normalize.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <About />
        </Main>
      </Layout>
    </>
  );
}
