import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Top from "../components/Top";
import "normalize.css/normalize.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <Top />
        </Main>
      </Layout>
    </>
  );
}
