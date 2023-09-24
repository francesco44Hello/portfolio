import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "../../styles/contact.module.css";

const Contacts = () => {
  function handleClickLinkedin() {
    const link = "https://www.linkedin.com/in/francesco-longo-27225096/";
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  function handleClickGithub() {
    const link = "https://github.com/francesco44Hello";
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  return (
    <div className={styles.contactMainDiv} id="contacts">
      <div className={styles.contactLeftPage}>
        <form
          className={styles.formTag}
          action={`https://formsubmit.co/francescolongo44@gmail.com`}
          method="POST"
        >
          <h1 style={{ color: "#eeeeee" }}>Send me an Email</h1>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            label="name"
            className={styles.input}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <textarea
            type="text"
            name="text"
            required
            placeholder="Write here..."
            className={styles.textareaTag}
            style={{ height: "100px" }}
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            value="New submission!"
            className={styles.input}
          ></input>

          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
      <div className={styles.contactRightPage}>
        <h1 style={{ color: "#eeeeee" }}>Find me elsewhere</h1>
        <button
          className={styles.contactButton}
          onClick={handleClickLinkedin}
          // style={{ width: "50px", borderRadius: "4px" }}
        >
          <BsLinkedin style={{ height: "50px", width: "50px" }} type="button" />
          @francescolongo
        </button>
        <button
          className={styles.contactButton}
          onClick={handleClickGithub}
          style={{ width: "50%", borderRadius: "4px" }}
        >
          <BsGithub style={{ height: "50px", width: "50px" }} />
          @francesco44hello
        </button>
      </div>
    </div>
  );
};

export default Contacts;
