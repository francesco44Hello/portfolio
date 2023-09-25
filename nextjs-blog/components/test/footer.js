import React from "react";
import style from "../../styles/footerTest.module.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { linksFunction } from "../functions/functions";

const FooterTest = () => {
  return (
    <div className={style.footer}>
      <div className={style.sustainableDiv}>
        <h2 className={style.sustainableLink}>
          This website is{" "}
          <a
            href="https://www.websitecarbon.com/website/francesco-longo-vercel-app/"
            alt="Francesco Longo link"
            target="_blank"
            style={{
              color: "#eeeeee",
              fontWeight: "400",
            }}
          >
            sustainable
          </a>
        </h2>
      </div>
      <div className={style.copyrightLinks}>
      {" "}
            @ - 2023 Francesco Longo{" "}
            <div className={style.linkedinGitIcons}>
            <FiGithub
            className={style.actualLinks}
              style={{ height: "45px", width: "45px", cursor: "pointer" }}
              onClick={() => linksFunction("https://github.com/francesco44Hello")}
            />{" "}
            <AiOutlineLinkedin
            className={style.actualLinks}
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
              type="button"
              onClick={() => linksFunction('https://www.linkedin.com/in/francesco-longo-27225096/')}
            />{" "}
            </div>
      </div>
    </div>
  );
};

export default FooterTest;
