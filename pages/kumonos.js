import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Textblock from "../components/Textblock";
import Button from "../components/Button";
import Icons from "../components/Icons";
import Image from "next/image";
import styles from "../styles/Works.module.scss";

export default function Kumonos() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Main>
          <h1>KUMONOS</h1>
          <Textblock heading={"Overview"}>
            <figure className={styles.screenshot}>
              <Image
                src={"/kumonos.png"}
                alt=""
                layout="intrinsic"
                width={600}
                height={375}
              />
            </figure>
            <p>
              KUMONOS Corporation is a construction company based in Japan. With
              the recent expansion of their business into worldwide, they
              considered to renew their website both Japanese and English
              version. I worked for the company as a part-time, full-remote web
              developer to build and maintain the websites.
            </p>
          </Textblock>

          <Textblock heading={"Technologies"}>
            <Icons
              heading={""}
              icons={[
                "wordpress",
                "sass",
                "ejs",
                "gsap",
                "scrollmagic",
                "photoshop",
                "illustrator",
              ]}
              description={[]}
            />

            <dl className={styles.techs}>
              <dt>Setting Up Local Development Environment</dt>
              <dd>
                <ul>
                  <li>Register virtual host URL with VirtualHostX</li>
                  <li>Create database file with phpMyAdmin</li>
                  <li>Start the server with XAMPP</li>
                </ul>
              </dd>
            </dl>
            <dl className={styles.techs}>
              <dt>Development</dt>
              <dd>
                <ul>
                  <li>CSS: BEM Methodology and SCSS</li>
                  <li>
                    Break into multiple modules and export to single bundle.js
                  </li>
                  <li>Task runner: Gulp.js</li>
                </ul>
              </dd>
            </dl>
            <dl className={styles.techs}>
              <dt>Animations</dt>
              <dd>
                <ul>
                  <li>
                    Animation with JavaScript libraries (GSAP and ScrollMagic)
                  </li>
                  <li>CSS animation</li>
                  <li>Control SVG elements by CSS animation</li>
                </ul>
              </dd>
            </dl>
            <dl className={styles.techs}>
              <dt>Plugins</dt>
              <dd>
                <ul>
                  <li>Advanced Custom Field</li>
                  <li>Contact Form 7</li>
                  <li>Yoast SEO</li>
                  <li>UpdraftPlus</li>
                </ul>
              </dd>
            </dl>
          </Textblock>
          <Textblock heading={""}>
            <div className={styles.screenshots}>
              <figure className={styles.screenshot}>
                <Image
                  src={"/kumonos-1.jpg"}
                  alt=""
                  layout="intrinsic"
                  width={300}
                  height={647}
                />
              </figure>
              <figure className={styles.screenshot}>
                <Image
                  src={"/kumonos-2.jpg"}
                  alt=""
                  layout="intrinsic"
                  width={300}
                  height={647}
                />
              </figure>
              <figure className={styles.screenshot}>
                <Image
                  src={"/kumonos-3.jpg"}
                  alt=""
                  layout="intrinsic"
                  width={300}
                  height={858}
                />
              </figure>
              <figure className={styles.screenshot}>
                <Image
                  src={"/kumonos-4.jpg"}
                  alt=""
                  layout="intrinsic"
                  width={300}
                  height={939}
                />
              </figure>
            </div>
          </Textblock>
        </Main>
      </Layout>
    </>
  );
}
