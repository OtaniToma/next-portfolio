import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

export default function BudgeTicket() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <h1>BudgeTicket</h1>
        </Main>
      </Layout>
    </>
  );
}
