const shareButton = document.querySelector('.js-share-button');
const optional = document.querySelector('.js-optional');
/*
const facebook = document.getElementById('.facebook');
const twitter = document.getElementById('.twitter');
const pinterest = document.getElementById('.pinterest')
*/

shareButton.addEventListener('click', ()=> {
  optional.classList.toggle('hidden-optional');
});