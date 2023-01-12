  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

const TestComponent = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
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
    <div class="swiper">
      {/* <!-- Additional required wrapper --> */}
      <div class="swiper-wrapper">
        {/* <!-- Slides --> */}
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
      </div>
      {/* <!-- If we need pagination --> */}
      <div class="swiper-pagination"></div>

      {/* <!-- If we need navigation buttons --> */}
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      {/* <!-- If we need scrollbar --> */}
      <div class="swiper-scrollbar"></div>
      <script type="module">
        import Swiper from
        'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
        const swiper = new Swiper(...)
      </script>
    </div>
  );
};

export default TestComponent;
