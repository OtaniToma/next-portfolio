import styles from "../styles/Button.module.scss";

export default ({ value, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <button className={styles.btn}>{value}</button>
  </a>
);
