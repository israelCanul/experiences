import styles from "../scss/HeaderApp.module.scss";
import { Link } from "react-router-dom";
const HeaderApp = ({ title, description }) => {
  return (
    <header>
      <div className={styles.sectionContainer}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              width="256"
              height="43"
              loading="lazy"
              src="/img/logo_rr.png"
              alt="Logo Royal Resorts"
            />
          </Link>
        </div>
        <div className="verticalLine"></div>
        <div className={styles.texto}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
};
export default HeaderApp;
