import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import styles from "./footer.module.scss";

function Footer(props) {
  const link = props.link;
  return (
    <div className={styles["footer"]}>
      <ul>
        <li>
          {" "}
          <a href={link.twitter}>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={link.linkedin}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={link.facebook}>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
