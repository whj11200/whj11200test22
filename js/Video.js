var videoElement1 = document.getElementById('move');
var videoElement2 = document.getElementById('move2');

videoElement1.addEventListener('click', function() {
    if (videoElement1.paused) {
        videoElement1.play();
    } else {
        videoElement1.pause();
    }

    if (videoElement1.requestFullscreen) {
        videoElement1.requestFullscreen();
    } else if (videoElement1.mozRequestFullScreen) {
        videoElement1.mozRequestFullScreen();
    } else if (videoElement1.webkitRequestFullscreen) {
        videoElement1.webkitRequestFullscreen();
    } else if (videoElement1.msRequestFullscreen) {
        videoElement1.msRequestFullscreen();
    }
});

videoElement2.addEventListener('click', function() {
    if (videoElement2.paused) {
        videoElement2.play();
    } else {
        videoElement2.pause();
    }

    if (videoElement2.requestFullscreen) {
        videoElement2.requestFullscreen();
    } else if (videoElement2.mozRequestFullScreen) {
        videoElement2.mozRequestFullScreen();
    } else if (videoElement2.webkitRequestFullscreen) {
        videoElement2.webkitRequestFullscreen();
    } else if (videoElement2.msRequestFullscreen) {
        videoElement2.msRequestFullscreen();
    }
});

document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement) {
        videoElement1.classList.add('fullscreen');
        videoElement2.classList.add('fullscreen');
    } else {
        videoElement1.classList.remove('fullscreen');
        videoElement2.classList.remove('fullscreen');
    }
});