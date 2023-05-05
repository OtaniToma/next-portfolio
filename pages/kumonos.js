import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

export default function Kumonos() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <h1>KUMONOS Corporation Website</h1>
        </Main>
      </Layout>
    </>
  );
}
