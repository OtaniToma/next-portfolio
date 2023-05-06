import styles from "../styles/Icons.module.scss";
import Image from "next/image";

const Icons = ({ heading, description, icons }) => {
  const allIcons = {
    html: { id: "html", path: "/icons/html.svg" },
    css: { id: "css", path: "/icons/css.svg" },
    javascript: { id: "javascript", path: "/icons/js.svg" },
    react: { id: "react", path: "/icons/react.svg" },
    wordpress: { id: "wordpress", path: "/icons/wordpress.svg" },
    git: { id: "git", path: "/icons/git.svg" },
    github: { id: "github", path: "/icons/github.svg" },
    materialui: { id: "material-ui", path: "/icons/material-ui.svg" },
    bootstrap: { id: "bootstrap", path: "/icons/bootstrap.svg" },
    illustrator: { id: "illustrator", path: "/icons/ai.svg" },
    photoshop: { id: "photoshop", path: "/icons/ps.svg" },
    figma: { id: "figma", path: "/icons/figma.svg" },
    firebase: { id: "firebase", path: "/icons/firebase.svg" },
    redux: { id: "redux", path: "/icons/redux.svg" },
    gatsby: { id: "gatsby", path: "/icons/gatsby.svg" },
    graphql: { id: "graphql", path: "/icons/graphql.svg" },
    typescript: { id: "typescript", path: "/icons/ts.svg" },
    node: { id: "node", path: "/icons/node.svg" },
    express: { id: "express", path: "/icons/express.svg" },
    ejs: { id: "ejs", path: "/icons/ejs.svg" },
    mongodb: { id: "mongodb", path: "/icons/mongodb.svg" },
    gsap: { id: "gsap", path: "/icons/gsap.svg" },
    pwa: { id: "pwa", path: "/icons/pwa.svg" },
    scrollmagic: { id: "scrollmagic", path: "/icons/scrollmagic.png" },
    sass: { id: "sass", path: "/icons/sass.svg" },
  };

  const iconsToShow = icons;

  return (
    <ul className={styles.iconList}>
      {icons &&
        iconsToShow.map((icon) => {
          return (
            <li key={allIcons[icon].id}>
              <Image
                src={allIcons[icon].path}
                alt={icon.id}
                width={50}
                height={50}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Icons;
