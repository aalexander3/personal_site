const headerText = document.getElementById('header-text')
const wordChange = document.getElementById('word-change')
const $navbarBurger = document.querySelector('.navbar-burger')

const words = ["a developer", 'an instructor', 'curious', 'a climber', 'a musician', 'adventurous']
let i = 1;

const init = e => {
  let change = setInterval(setWordChange, 2000)
  getBurgers()
}

const setWordChange = () => {
  wordChange.innerText = words[i];
  (i < words.length -1) ? i++ : i=0;
}

const getBurgers = () => {
  if ($navbarBurger) {
    $navbarBurger.addEventListener('click', () => {
      const target = $navbarBurger.dataset.target;
      const $target = document.getElementById(target);
      $target.classList.toggle('is-active');
    });
  };
}

document.addEventListener("DOMContentLoaded", init)
