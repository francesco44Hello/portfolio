 /**
   * This function redirects to Linkedin profile 
   */
function handleClickLinkedin() {
    const link = 'https://www.linkedin.com/in/francesco-longo-27225096/'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
   /**
   * This function redirects to github profile 
   */
function handleClickGithub() {
    const link = 'https://github.com/francesco44Hello'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  /**
   * This function redirects to snap-vote project 
   */
  function snapvoteClick() {
    const link = 'https://snap-vote.netlify.app/'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
   /**
   * This function redirects to snap-vote project 
   */
   function snapvoteClickRepo() {
    const link = 'https://github.com/francesco44Hello/snap_vote'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
   /**
   * This function redirects to weatherApp project 
   */
  function weatherClickRepo() {
    const link = 'https://github.com/francesco44Hello/Weather_project_TypeScript'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  function weatherClick() {
    const link = 'https://francesco-weather.vercel.app/'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  function buttonClick() {
    const link = 'https://pdfhost.io/v/f5Vy~OQ08_FrancescoLongo_cv'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  function petbrb() {
    const link = 'https://petbrb.vercel.app/'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  function petbrbGithub() {
    const link = 'https://github.com/SchoolOfCode/bc13_final-project_front-end-refactor'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  export {
    handleClickGithub,
    handleClickLinkedin,
    snapvoteClick,
    weatherClickRepo,
    snapvoteClickRepo,
    weatherClick,
    buttonClick,
    petbrb,
    petbrbGithub
  }