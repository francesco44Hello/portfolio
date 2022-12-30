function handleClickLinkedin() {
    const link = 'https://www.linkedin.com/in/francesco-longo-27225096/'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
function handleClickGithub() {
    const link = 'https://github.com/francesco44Hello'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }

  export {
    handleClickGithub,
    handleClickLinkedin
  }