$(document).ready(function() {
    // 페이지가 로드되었을 때 실행되는 JavaScript 코드입니다.
    $('body').addClass('fadeIn'); // fadeIn 클래스를 추가하여 페이드 인 효과를 보여줍니다.

    setTimeout(function() {
        $('body').addClass('fadeOut'); // fadeOut 클래스를 추가하여 페이드 아웃 효과를 보여줍니다.
    }, 3000); // 3초 후에 실행합니다. 원하는 시간으로 조정할 수 있습니다.

    setTimeout(function() {
        $('body').removeClass('fadeOut'); // fadeOut 클래스를 제거하여 페이지가 다시 나타나도록 합니다.
        // 이후 추가적인 코드를 작성하여 이미지 전환 등의 효과를 구현할 수 있습니다.
    }, 6000); // 6초 후에 실행합니다. 원하는 시간으로 조정할 수 있습니다.
});