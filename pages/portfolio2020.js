import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Textblock from "../components/Textblock";
import Image from "next/image";
import styles from "../styles/Works.module.scss";
import Icons from "../components/Icons";
import Button from "../components/Button";

export default function Portfolio2020() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <h1>Portfolio 2020</h1>
          <Textblock heading={"Overview"}>
            <figure className={styles.screenshot}>
              <Image
                src={"/portfolio.png"}
                alt=""
                layout="intrinsic"
                width={600}
                height={375}
              />
            </figure>
            <p>
              I built the previous version (2020) of portfolio website from
              scratch to understand Gatsby.js.
            </p>
            <Button
              value={"View Live"}
              link={"https://otanitoma.netlify.app/"}
            />
            <Button
              value={"GitHub"}
              link={"https://github.com/OtaniToma/portfolio-gatsby"}
            />
          </Textblock>

          <Textblock heading={"Features"}>
            <figure className={styles.screenshot}>
              <Image
                src={"/portfolio-lighthouse.jpg"}
                alt=""
                layout="intrinsic"
                width={300}
                height={220}
              />
            </figure>
            <p>
              This website achieved 100 point at performance on Google&apos;s
              Lighthouse Report.
            </p>
          </Textblock>

          <Textblock heading={"Technologies"}>
            <Icons
              heading={""}
              icons={["javascript", "gatsby", "pwa"]}
              description={[]}
            />

            <dl className={styles.techs}>
              <dt>Light and Fast Static Website</dt>
              <dd>
                <ul>
                  <li>Utilize Gatsby.js</li>
                  <li>Show WebP images by GraphQL</li>
                  <li>Available for PWA</li>
                  <li>Automatically deploy to Netlify</li>
                </ul>
              </dd>
            </dl>
            <dl className={styles.techs}>
              <dt>Plugins</dt>
              <dd>
                <ul>
                  <li>gatsby-image</li>
                  <li>gatsby-plugin-sass</li>
                  <li>gatsby-plugin-prefetch-google-fonts</li>
                  <li>gatsby-plugin-react-helmet</li>
                  <li>gatsby-plugin-smoothscroll</li>
                  <li>gatsby-source-filesystem</li>
                </ul>
              </dd>
            </dl>
          </Textblock>
        </Main>
      </Layout>
    </>
  );
}
