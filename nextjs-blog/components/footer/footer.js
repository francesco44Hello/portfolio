import React from "react";
import { FiGithub } from "react-icons/fi";
import {
  handleClickGithub,
  handleClickLinkedin,
} from "../../components/functions/functions";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-div">
          <h2>
            This website is{" "}
            <a
              href="https://www.websitecarbon.com/website/francesco-longo-vercel-app/"
              alt="link"
              target="_blank"
              style={{
                color: "#eeeeee",
                display: "flex",
                marginLeft: "0.5rem",
                fontWeight: "400",
              }}
            >
              sustainable
            </a>
          </h2>
          <div className="links-footer">
            {" "}
            @ - 2023 Francesco Longo{" "}
            <FiGithub
              style={{ height: "60%", width: "20%", cursor: "pointer" }}
              onClick={handleClickGithub}
            />{" "}
            <AiOutlineLinkedin
              style={{ height: "70%", width: "15%", cursor: "pointer" }}
              type="button"
              onClick={handleClickLinkedin}
            />{" "}
          </div>
        </div>
      </footer>
      //{" "}
    </div>
  );
};

export default Footer;
