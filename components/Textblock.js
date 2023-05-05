import styles from "../styles/Textblock.module.scss";

const Textblock = ({ heading, children }) => (
  <>
    <section className="textblock">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLine}></div>
          <h2 styles={styles.title}>{heading}</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyLine}></div>
          {children}
        </div>
      </div>
    </section>
  </>
);

export default Textblock;
