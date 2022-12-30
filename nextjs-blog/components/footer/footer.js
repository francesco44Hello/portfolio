import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { handleClickGithub, handleClickLinkedin} from '../../components/functions/functions'
const Footer = () => {
  return (
    <div className="footer">
<footer>
      {" "}
      @ - 2023 Francesco Longo{" "}
      <BsGithub
        style={{ height: "70%", width: "3%" }}
        onClick={handleClickGithub}
      />{" "}
      <BsLinkedin
        style={{ height: "70%", width: "3%" }}
        type="button"
        onClick={handleClickLinkedin}
      />{" "}
    </footer>
    </div>
    
  );
};

export default Footer;
