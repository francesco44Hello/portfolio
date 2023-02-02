import React from 'react';
import { AiOutlineLink } from "react-icons/ai";

function Button({ handleClick }) {
  return (
   
      <button onClick={handleClick} className="download ">
        {" "}
        My Cv
        <AiOutlineLink />
      </button>
   
  );
}

export default Button;
