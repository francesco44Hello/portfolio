import React from 'react';
import { saveAs } from 'file-saver';
import { AiOutlineLink } from "react-icons/ai";

function Button({ file, fileName, handleClick }) {
  // const handleClick = () => {
  //   saveAs("https://pdfhost.io/v/OEw1qCLhs_CV_Francesco_Longo_2023", 'cvFrancescoLongo');
  // href={file}
  // download={fileName}
  // };

  return (
   
      <button onClick={handleClick} className="download ">
        {" "}
        My Cv
        {/* <AiOutlineLink /> */}
      </button>
   
  );
}

export default Button;
