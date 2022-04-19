import styles from "../scss/HeaderApp.module.scss";
import { Link } from "react-router-dom";
import { getCookieForm } from "../libs/cookieManager";
import { getLanguage } from "../libs/language";

const HeaderApp = ({ templateP = null, title, description }) => {
  let template = getCookieForm("template", getLanguage());
  if (templateP) {
    template = templateP;
  }

  return (
    <header>
      <div
        className={
          template === "R1"
            ? styles.sectionContainerR1
            : styles.sectionContainer
        }
      >
        <div className={styles.logo}>
          {template === "R1" ? (
            <picture>
              <source srcSet="/img/logo_r1.webp" type="image/webp" />
              <img
                width="256"
                height="60"
                loading="lazy"
                src="/img/logo_r1.png"
                alt="Logo Royal Uno"
              />
            </picture>
          ) : (
            <Link to="/">
              <img
                width="256"
                height="43"
                loading="lazy"
                src="/img/logo_rr.png"
                alt="Logo Royal Resorts"
              />
            </Link>
          )}
        </div>
        <div className="verticalLine"></div>
        <div className={template === "R1" ? styles.textoR1 : styles.texto}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
};
export default HeaderApp;
