import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiGithub } from 'react-icons/fi'
import { handleClickGithub, handleClickLinkedin} from '../../components/functions/functions'
import { AiOutlineLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer">
<footer>
<div className="footer-div">
{" "}
      @ - 2023 Francesco Longo{" "}
      <FiGithub
        style={{ height: "70%", width: "4%" }}
        onClick={handleClickGithub}
      />{" "}
      <AiOutlineLinkedin
        style={{ height: "100%", width: "4%" }}
        type="button"
        onClick={handleClickLinkedin}
      />{" "}
</div>
    
    </footer>
    </div>
    
  );
};

export default Footer;
