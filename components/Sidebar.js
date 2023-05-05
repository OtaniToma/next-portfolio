import Link from "next/link";
import styles from "../styles/Sidebar.module.scss";

export default function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.container}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/34960309"
          />
          <style jsx global>{`
            .avatar {
              border-radius: 50%;
            }
          `}</style>
          <div className={styles.profile}>
            <h1>Toma Otani</h1>
            Web Developer
          </div>
        </div>
      </aside>
    </>
  );
}
