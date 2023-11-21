const swiper = new Swiper('.swiper', {
  // 參數_一次可以看見幾個 card
  slidesPerView: 1,
  // 參數_每個card之間的間距
  spaceBetween: 15,
  //循環撥放
  loop: true,
  // 自動撥放
  autoplay: {
    delay: 5000,
  },
  // 滑鼠滾輪
  mousewheel: {
    invert: true,
  },

  // slideToClickedSlide: true,

  /*左右導覽建*/
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /*下方導覽按鈕*/
  pagination: {
    el: '.swiper-pagination',
    // 分頁_可以點擊 
    clickable: 'true',
  },

  breakpoints: {
    768:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 3,
    }
  },
});