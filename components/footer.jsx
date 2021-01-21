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
          <a href={props.link.twitter}>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={props.link.linkedin}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={props.link.facebook}>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={props.link.instagram}>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
