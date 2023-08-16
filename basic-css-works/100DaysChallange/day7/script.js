const nav = document.querySelector('.hamburger-menu--nav');
const menu = document.querySelector('.hamburger-menu');
const articleArea = document.querySelector('.article-area');

const searchBar = document.querySelector('.header__input');
const searchIcon = document.querySelector('.logo-container')

let isTrue = false;
let isFalse = false;

nav.addEventListener('click', () => {
  if (!isTrue) {
    menu.classList.add('hamburger-menu--active');
    articleArea.classList.add('hamburger-menu--active__article-area')
    searchBar.classList.remove('header__input--active');
    isFalse =false;
    isTrue = true ;
  } else if (isTrue === true){
    menu.classList.remove('hamburger-menu--active');
    articleArea.classList.remove('hamburger-menu--active__article-area');
    isTrue = false;
  }
})

searchIcon.addEventListener('click', () => {
  if (!isFalse) {
    searchBar.classList.add('header__input--active');
    isFalse = true ;
  } else if (isFalse === true){
    searchBar.classList.remove('header__input--active');
    isFalse = false;
  }
})