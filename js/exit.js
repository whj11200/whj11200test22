document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('show-navigation');
});

document.getElementById('exit').addEventListener('click', function() {
    document.querySelector('.navigation').classList.remove('show-navigation');
});