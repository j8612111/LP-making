'use strict'

const target = document.getElementById('menu');
target.addEventListener('click', () => {
  const target = document.getElementById('menu');
  target.classList.toggle('open')
  const navJs = document.getElementById('nav-js');
  navJs.classList.toggle('in')
});