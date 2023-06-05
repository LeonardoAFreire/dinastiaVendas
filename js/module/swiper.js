export default function initSwiper() {
  let swiper = new Swiper('.mySwiper', {
    centerSlide: true,
    grabCursor: true,
    // autoplay: {
    //   delay: 0,
    // },
    // speed: 3000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}
