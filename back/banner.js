// Banner
objectFitVideos();

const video = document.querySelector('#video');
const btnPause = document.querySelector('#btnPause')

btnPause.addEventListener('click', () => {

    if ( video.paused ) {

        video.play();

    } else {

        video.pause();

    }

});

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });