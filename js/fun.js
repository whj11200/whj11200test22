function handleScroll() {
    var texteses = document.getElementById('texteses');
    var texters = document.getElementById('texters');
    var scrollPosition = window.pageYOffset;
  
    var sectionOffset = texters.offsetTop;
    var windowHeight = window.innerHeight;
  
    if (scrollPosition > sectionOffset - windowHeight) {
      texteses.classList.add('visible');
    }
  }
  
  window.addEventListener('scroll', handleScroll);