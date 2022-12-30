import React from 'react';
import { saveAs } from 'file-saver';
import { AiOutlineLink } from "react-icons/ai";

function DownloadButton({ file, fileName }) {
  const handleClick = () => {
    saveAs("https://pdfhost.io/v/VIxgUdN82_cv_upToDate", 'cvFrancescoLongo');
  };

  return (
    <button
      href={file}
      download={fileName}
      onClick={handleClick}
      className='download'
      
    > My Cv 
      <AiOutlineLink />
    </button>
  );
}

export default DownloadButton;
