import React from "react";
import Link from "next/link";
import Image from "next/image";

const ImageLink = () => {
  return (
    <Link
      href="https://www.francesco-longo.com/"
      alt="Link to new Portfolio"
      style={{
        height: "400px",
        width: "80%",
        position: "relative",
        objectFit: "cover",
      }}
      target="_blank"
    >
      <Image
        src="/images/new-portfolio.png"
        alt="Background Image"
        style={{ borderRadius: "20px" }}
        layout="fill"
        objectFit="cover"
      />
    </Link>
  );
};

export default ImageLink;
