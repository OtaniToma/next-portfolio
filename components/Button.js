import styles from "../styles/Button.module.scss";

const Button = ({ value, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <button className={styles.btn}>{value}</button>
  </a>
);

export default Button;
