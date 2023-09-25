import React from "react";
import { FiGithub } from "react-icons/fi";
import {
  linksFunction
} from "../../components/functions/functions";
import { AiOutlineLinkedin } from "react-icons/ai";
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className={styles.footerComponent}>
        <div className={styles.footerDiv}>
          <h2 className={styles.footerH2}>
            This website is  {" "}
            <a
              href="https://www.websitecarbon.com/website/francesco-longo-vercel-app/"
              alt="Francesco Longo link"
              target="_blank"
              style={{
                color: "#eeeeee",
                display: "flex",
                marginLeft: "5px",
                fontWeight: "400",
              }}
            >
              sustainable
            </a>
          </h2>
          <div className={styles.linksFooter}>
            {" "}
            @ - 2023 Francesco Longo{" "}
            <FiGithub
              style={{ height: "45px", width: "45px", cursor: "pointer" }}
              onClick={() => linksFunction("https://github.com/francesco44Hello")}
            />{" "}
            <AiOutlineLinkedin
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
              type="button"
              onClick={() => linksFunction('https://www.linkedin.com/in/francesco-longo-27225096/')}
            />{" "}
          </div>
        </div>
      </footer>
      //{" "}
    </div>
  );
};

export default Footer;
