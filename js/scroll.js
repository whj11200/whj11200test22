 // 이미지 변경 후 스크롤 고정
 window.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img');
    var scrollThreshold = images[0].offsetTop + images[0].height;

    function changeImages() {
        images[0].src = "./img/changeimg.png";
        images[1].src = "./img/changeimg2.png";
        window.scrollTo(0, scrollThreshold);
        document.body.style.overflow = 'auto'; /* 스크롤 다시 허용 */
    }

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= scrollThreshold) {
            changeImages();
        }
    });
});