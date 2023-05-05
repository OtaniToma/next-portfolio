import styles from "../styles/PostBody.module.scss";

export default function PostBody({ children }) {
  return <div className={styles.stack}>{children}</div>;
}
