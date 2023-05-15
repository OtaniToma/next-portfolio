import Link from "next/link";
import styles from "../styles/Sidebar.module.scss";

export default function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.container}>
          <Link href="/">
            <a>
              <img
                className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/34960309"
              />
            </a>
          </Link>
          <style jsx global>{`
            .avatar {
              border-radius: 50%;
            }
          `}</style>
          <div className={styles.profile}>
            <h1>
              <Link href="/">Toma Otani</Link>
            </h1>
            <Link href="/">Front-end Web Developer</Link>
          </div>
        </div>
      </aside>
    </>
  );
}
