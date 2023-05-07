import React from "react";
import { FiGithub } from "react-icons/fi";
import {
  handleClickGithub,
  handleClickLinkedin,
  linksFunction
} from "../../components/functions/functions";
import { AiOutlineLinkedin } from "react-icons/ai";
import PropTypes from 'prop-types';

const Footer = () => {
  const githubLink = 'https://github.com/francesco44Hello'
  // const handleClick1 = tester(githubLink)
  return (
    <div className="footer">
      <footer>
        <div className="footer-div">
          <h2>
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
          <div className="links-footer">
            {" "}
            @ - 2023 Francesco Longo{" "}
            <FiGithub
              style={{ height: "45px", width: "45px", cursor: "pointer" }}
              onClick={() => linksFunction("https://www.websitecarbon.com/website/francesco-longo-vercel-app/")}
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
