"use client";
import React from "react";
import styles from "./separator.module.css";

const Separator = ({ text, id, direction, fontSize, marginTop }) => {
  const customStyles = {
    fontSize: fontSize ? fontSize : "",
    fontWeight: "bold",
    backgroundImage: `linear-gradient(to ${direction}, #9800fe, #11adb4)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: marginTop ? marginTop : "0",
    textAlign: 'center'
  };

  return (
    <div className={styles.container} id={id}>
      <h1 className={`${styles.separatorText}`} style={customStyles}>
        {text}
      </h1>
    </div>
  );
};

export default Separator;