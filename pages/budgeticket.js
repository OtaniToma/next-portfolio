import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Textblock from "../components/Textblock";
import Image from "next/image";
import styles from "../styles/Works.module.scss";

export default function BudgeTicket() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <h1>BudgeTicket</h1>
          <Textblock heading={"Overview"}>
            <figure className={styles.screenshot}>
              <Image
                src={"/budgeticket.png"}
                alt=""
                layout="intrinsic"
                width={600}
                height={375}
              />
            </figure>
            <p>
              This app can find cheap flights with destination information. The
              purpose of creating this app is to understand the basics of
              JavaScript, handling API request, and React.js app development.
            </p>
          </Textblock>

          <Textblock heading={"Features"}>
            <figure className={styles.screenshot}>
              <Image
                src={"/budgeticket-1.gif"}
                alt=""
                layout="intrinsic"
                width={600}
                height={300}
              />
            </figure>
            <p>
              Text forms have autocomplete function to input accurate airport
              name. Also, datepicker components have the validation to check the
              departure date is before the return date.
            </p>
            <figure className={styles.screenshot}>
              <Image
                src={"/budgeticket-2.gif"}
                alt=""
                layout="intrinsic"
                width={600}
                height={300}
              />
            </figure>
            <p>
              The data from Skyscanner API is stored in Redux store. Users can
              filter or sort results by departure date, price, and airlines.
            </p>
          </Textblock>
          <Textblock heading={"Technologies"}>
            <dl className={styles.techs}>
              <dt>Front End</dt>
              <dd>
                <ul>
                  <li>React.js with React Hooks</li>
                  <li>Redux.js (Re-ducks design pattern) </li>
                  <li>Atomic Design</li>
                  <li>Style with UI Framework (Material-UI)</li>
                </ul>
              </dd>
            </dl>
            <dl className={styles.techs}>
              <dt>Back End</dt>
              <dd>
                <ul>
                  <li>
                    Firebase (Authentication, Firestore Database and Storage)
                  </li>
                </ul>
              </dd>
            </dl>
            <dl className={styles.techs}>
              <dt>APIs</dt>
              <dd>
                <ul>
                  <li>Skyscanner Flight Search</li>
                  <li>Google Maps JavaScript</li>
                  <li>Unsplash Image</li>
                </ul>
              </dd>
            </dl>
          </Textblock>
        </Main>
      </Layout>
    </>
  );
}
