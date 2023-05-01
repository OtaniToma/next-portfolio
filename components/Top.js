import styles from "../styles/Main.module.scss";
import Textblock from "./Textblock";

export default function Top() {
  return (
    <>
      <Textblock heading={"About Me"}>
        <p>
          Front-end web developer with professional experience at a design
          agency in Vancouver, Canada.
        </p>
      </Textblock>

      <Textblock heading={"What I Can"}>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>WordPress</li>
          <li>Git</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </Textblock>

      <Textblock heading={"Works"}>
        <ul>
          <li>BudgeTicket - Flight Search App</li>
          <li>KUMONOS Corporation - Corporate Website</li>
          <li>Portfolio 2020 (Gatsby.js)</li>
        </ul>
      </Textblock>

      <Textblock heading={"Experiences"}>
        <ul>
          <li>Web Developer, New World Enterprises (Sep. 2020 - present)</li>
          <li>
            Junior Web Developer, Signals Design Group (Sep. 2019 - Mar. 2020)
          </li>
          <li>Website Manager, Kumonos Corporation (Apr. 2015 - Aug. 2018)</li>
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
