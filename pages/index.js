import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import 'normalize.css/normalize.css';

export default function Home() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main />
      </Layout>
    </>
  )
}
