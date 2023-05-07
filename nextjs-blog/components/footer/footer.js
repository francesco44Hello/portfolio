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
          <div className="links-footer">
            {" "}
            @ - 2023 Francesco Longo{" "}
            <FiGithub
              style={{ height: "45px", width: "45px", cursor: "pointer" }}
              onClick={()=> tester}
            />{" "}
            <AiOutlineLinkedin
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
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
