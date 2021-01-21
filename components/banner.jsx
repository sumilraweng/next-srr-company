import styles from "../styles/banner.module.scss";
function Banner(props) {
  return (
    <div className={styles["banner"]}>
      <div className={styles["banner-section"]}>
        <div className={styles["banner-head"]}>
          <h1>{props.bannerHead}</h1>
          <p>{props.bannerPara}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
