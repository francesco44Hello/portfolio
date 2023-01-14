  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  import { useState, useEffect } from 'react'
  import Card from "../card/card";
   // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

import {
  snapvoteClick,
  weatherClickRepo,
  snapvoteClickRepo,
  weatherClick,
} from "../functions/functions";



const TestComponent = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
      setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
}

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  return (
    <div className='main-div-projects'>
    <div class="swiper">
      {/* <!-- Additional required wrapper --> */}
      <div class="swiper-wrapper">
        {/* <!-- Slides --> */}
        {/* <Card class="swiper-slide"/>
        <Card class="swiper-slide"/> */}
        <Card 
           title="Snap-vote"
          onClick={snapvoteClick}
          handleRepo={snapvoteClickRepo}
          img="https://i.ibb.co/fMG4LG9/91-B83712-E5-A4-4-D72-9784-9-BD17-A9-DB383.jpg"
        />
        <Card  
           title="Weather App"
          onClick={weatherClick}
          handleRepo={weatherClickRepo}
          img="https://i.ibb.co/QkBqBsn/Image-31-12-2022-at-16-21.png"
        />
        {/* <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div> */}
        
      </div>
      {/* <!-- If we need pagination --> */}
      <div class="swiper-pagination"></div>

      {/* <!-- If we need navigation buttons --> */}
      {/* <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> */}

      {/* <!-- If we need scrollbar --> */}
      <div class="swiper-scrollbar"></div>
      <script type="module">
        import Swiper from
        'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
        const swiper = new Swiper(...)
      </script>
    </div>
    </div>
  );
};

export default TestComponent;
{/* <>
      
<section class="mt-5">
  <div class="container">...</div>
</section>
<section class="section-with-carousel section-with-right-offset position-relative mt-5">
  <div class="container">
    <h2 class="mb-3">...</h2>
  </div> 
  <div class="carousel-wrapper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="tanzania1.jpg" alt="" />
            <figcaption>
              <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Nungwi, Zanzibar, Tanzania
            </figcaption>
          </figure>
        </div>
        {/* <!-- more slides here --> */}
  //     </div>
  //   </div>
  // </div>
  // <div class="carousel-controls">
  //   <button class="carousel-control carousel-control-left" type="button">
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
  //       <path fill-rule="evenodd" d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"></path>
  //     </svg>
  //   </button>
  //   <button class="carousel-control carousel-control-right" type="button">
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
  //       <path fill-rule="evenodd" d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"></path>
      {/* </svg>
    </button>
  </div>
  <div class="swiper-pagination"></div>
</section>
<section class="mt-5">
  <div class="container">...</div>
</section>
<section class="section-with-carousel section-with-left-offset position-relative mt-5">
  {/* <!-- content same as second section --> */}
{/* // </section> */}
// {/* //     </>
//   )
// } } } } *