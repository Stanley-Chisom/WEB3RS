AOS.init();

let swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  /*  When the scroll is higher than 350 viewport height,
   add the show-scroll class to the a tag with the scrollup class */

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);



