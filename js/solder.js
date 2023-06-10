var slideWrap = document.querySelector('#slideWrap');
var slider = document.querySelector('#slider');
var slideNumber = document.querySelector('#slider').childElementCount;

var firstItemClone = slider.firstElementChild.cloneNode(true);
slider.appendChild(firstItemClone);

var slideHeight = slideWrap.clientHeight;
var currentPosition = 0;
var slideDuration = 1000; // 슬라이드 전환 시간 (밀리초)

function animateSlide() {
  currentPosition -= slideHeight;
  slider.style.transition = `transform ${slideDuration / 1000}s`;
  slider.style.transform = `translateY(${currentPosition}px)`;

  setTimeout(function() {
    slider.style.transition = 'none';
    slider.style.transform = `translateY(${-slideHeight}px)`;
    currentPosition = -slideHeight;

    // Remove the first slide element after transition
    slider.removeChild(slider.firstElementChild);

    // Append a new clone of the first slide element at the end
    var newClone = slider.firstElementChild.cloneNode(true);
    slider.appendChild(newClone);
  }, slideDuration);
}

function handleScroll(event) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollDirection = event.deltaY >  0 ? 'down' : 'up';



  // 스크롤에 따라 이미지 슬라이더 애니메이션
  if (scrollDirection === 'down') {
    animateSlide();
  } else if (scrollDirection === 'up') {
    animateSlide();
  }
}

window.addEventListener('wheel', handleScroll);
