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