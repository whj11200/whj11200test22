document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.navigation').classList.add('show-navigation');
});

document.getElementById('exit').addEventListener('click', function() {
  document.querySelector('.navigation').classList.remove('show-navigation');
});