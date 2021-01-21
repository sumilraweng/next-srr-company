import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";

const Navigation = (props) => {
  const { src, width, height } = props.logo;
  return (
    <div className={styles["navigation-sec"]}>
      <div className="img-logo">
        <img src={src} alt="" width={width} height={height} />
      </div>

      <nav className={styles["navigation-tab"]}>
        <ul>
          <li className={styles["nav-item"]}>
            <Link href="/"> Home</Link>
          </li>
          <li className={["nav-item"]}>
            <Link href="/RE"> Raw-Engineering</Link>
          </li>
          <li className={"nav-item"}>
            <Link href="/CS">Contentstack</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
