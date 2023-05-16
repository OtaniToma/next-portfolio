import styles from "../styles/Top.module.scss";
import Textblock from "./Textblock";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Top({ posts }) {
  return (
    <>
      <Textblock heading={"About Me"}>
        <p>
          Hello!✋ I'm Toma Otani (Thomas), a front-end web developer with
          previous work experience at a design agency in Vancouver, Canada. I'm
          currently based in Tokyo, actively looking for new opportunities.
        </p>
        <Link href={"https://github.com/OtaniToma/"}>
          <a className={styles.iconText}>
            <FontAwesomeIcon icon={faGithub} color="var(--gray-75)" size="xl" />
          </a>
        </Link>
        {"　"}
        <Link href={"https://www.linkedin.com/in/otani-toma/"}>
          <a className={styles.iconText}>
            <FontAwesomeIcon
              icon={faLinkedin}
              color="var(--gray-75)"
              size="xl"
            />
          </a>
        </Link>
      </Textblock>

      <Textblock heading={"What I Can"}>
        <h3>Languages</h3>
        <ul className={styles.skills}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
          <li>JavaScript</li>
        </ul>
        <h3>Frameworks / Libraries</h3>
        <ul className={styles.skills}>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Gatsby.js</li>
          <li>GSAP</li>
          <li>Material-UI</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Others</h3>
        <ul className={styles.skills}>
          <li>Git</li>
          <li>Firebase</li>
          <li>WordPress</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </Textblock>

      <Textblock heading={"Works"}>
        <Link href="/budgeticket">
          <div className={styles.worksItem}>
            <figure>
              <Image
                src={"/budgeticket.png"}
                alt=""
                layout="intrinsic"
                width={200}
                height={125}
              />
            </figure>
            <div className={styles.worksDesc}>
              <h3>BudgeTicket</h3>
              <span>Flight tickets search app</span>
              <ul className={styles.skills}>
                <li>React.js</li>
                <li>Redux</li>
                <li>Firebase</li>
                <li>Material-UI</li>
              </ul>
            </div>
          </div>
        </Link>
        <Link href="/kumonos">
          <div className={styles.worksItem}>
            <figure>
              <Image
                src={"/kumonos.png"}
                alt=""
                layout="intrinsic"
                width={200}
                height={125}
              />
            </figure>
            <div className={styles.worksDesc}>
              <h3>KUMONOS</h3>
              <span>Corporate Website</span>
              <ul className={styles.skills}>
                <li>WordPress</li>
              </ul>
            </div>
          </div>
        </Link>
        <Link href="/portfolio2020">
          <div className={styles.worksItem}>
            <figure>
              <Image
                src={"/portfolio.png"}
                alt=""
                layout="intrinsic"
                width={200}
                height={125}
              />
            </figure>
            <div className={styles.worksDesc}>
              <h3>Portfolio 2020</h3>
              <span>Gatsby.js website</span>
              <ul className={styles.skills}>
                <li>Gatsby.js</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </Link>
      </Textblock>

      <Textblock heading={"Blog"}>
        <h3>Next.js x microCMS Blog</h3>
        <ul>
          {posts.map(({ title, slug }) => (
            <li key={slug}>
              <article className={styles.blogLink}>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </article>
            </li>
          ))}
        </ul>
      </Textblock>

      <Textblock heading={"Experiences"}>
        <ul>
          <li>Web Developer, New World Enterprises (Sep. 2020 - present)</li>
          <li>
            Web Developer (Part-time), Kumonos Corporation (Mar. 2020 - Mar.
            2023)
          </li>
          <li>
            Junior Web Developer, Signals Design Group (Sep. 2019 - Mar. 2020)
          </li>
          <li>
            Website Manager, Kansai Construction Survey (Apr. 2015 - Aug. 2018)
          </li>
        </ul>
      </Textblock>

      <Textblock heading={"Educations"}>
        <ul>
          <li>
            Bachelor of Engineering, Architecture and Environmental Design,
            Osaka Sangyo University (2010 - 2015)
          </li>
          <li>
            Certificate, New Media Design and Web Development, British Columbia
            Institute of Technology (2018 - 2019)
          </li>
        </ul>
      </Textblock>
    </>
  );
}
