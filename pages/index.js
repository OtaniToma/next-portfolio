import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import 'normalize.css/normalize.css';

export default function Home() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Top />
      </Layout>
    </>
  )
}
