import styles from "../styles/Top.module.scss";
import Textblock from "./Textblock";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Top() {
  return (
    <>
      <Textblock heading={"About Me"}>
        <p>
          Hello✋ I am Toma Otani (Thomas), a front-end web developer with work
          experience at a design agency in Vancouver, Canada.
          <br />
          Currently residing in Tokyo to seek new opportunities.
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
          <li>EJS</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </Textblock>

      <Textblock heading={"Works"}>
        <ul>
          <li>
            <Link href="/budgeticket">
              <a>BudgeTicket - Flight Ticket Search App</a>
            </Link>
          </li>
          <li>
            <Link href={"/kumonos"}>
              <a>KUMONOS Corporation - Corporate Website</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Personal Blog - Next.js x microCMS blog</a>
            </Link>
          </li>
          <li>
            <Link href={"/portfolio2020"}>
              <a>Portfolio 2020 - Gatsby.js website</a>
            </Link>
          </li>
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
