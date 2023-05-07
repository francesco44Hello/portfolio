  function linksFunction(link) {
    //const link = 'https://github.com/SchoolOfCode/bc13_final-project_front-end-refactor'
    if (typeof window !== "undefined") {
      // browser code
      window.open(link, "_blank");
    }
  }
  export {
    linksFunction
  }