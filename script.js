const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

const contactMe = document.querySelector('.contact-me');
const expItems = document.querySelectorAll('.exp-item');

expItems.forEach(item =>
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const exp = item.classList[1];
  })
);

function hideAllExp() {
  document
    .querySelectorAll('.exp-box')
    .forEach(box => box.classList.add('hideup'));
}
