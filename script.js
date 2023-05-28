const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

const contactMe = document.querySelectorAll('.contact');
const expItems = document.querySelectorAll('.exp-item');
const carouselBox = document.querySelector('.carousel-exp');

const contactBox = document.querySelector('.contact-box');
const contactBackground = document.querySelector('.contact-box--background');
const formClose = document.querySelector('.contact-close');
const formEle = document.getElementById('contact');

const allLinks = document.querySelectorAll('a:link');
const headerEle = document.querySelector('.header');

// TODO
// will need to set initGap dynamically
const initGap = 48;

let curItem = 0;
let currVisibleBox = undefined;

const closeForm = () => contactBox.classList.add('hidden');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// closing the form
formEle.addEventListener('submit', function (e) {
  e.preventDefault();
  // TODO
  // need to give alert or a fading textbox showing form successfully submitted
  closeForm();
});
formClose.addEventListener('click', closeForm);
contactBackground.addEventListener('click', function (e) {
  if (e.target !== this) return;
  closeForm();
});

contactMe.forEach(ele => {
  ele.addEventListener('click', () => contactBox.classList.remove('hidden'));
});

expItems.forEach((item, i) => {
  // createExpHoverStyle(item, i);
  item.style.transform = `translateX(${i * (item.offsetWidth + initGap)}px)`;

  item.addEventListener('click', function (e) {
    e.preventDefault();
    if (curItem + 2 < i) return;

    const contentBox = document.querySelector(`.content-${item.classList[1]}`);

    if (currVisibleBox === contentBox) {
      // Content box is visible, rehide the currrent box
      contentBox.classList.add('hideup');
      currVisibleBox = undefined;
    } else {
      if (currVisibleBox) currVisibleBox.classList.add('hideup');
      setTimeout(() => contentBox.classList.remove('hideup'), 100);
      currVisibleBox = contentBox;
    }
  });
});

btnLeft.addEventListener('click', () => moveItems('left'));
btnRight.addEventListener('click', () => moveItems('right'));

function moveItems(dir) {
  if (dir === 'left' && curItem === 0) return;
  if (dir === 'right' && curItem === 5) return;

  const itemWidth = expItems[0].offsetWidth;
  const dist = itemWidth + initGap;

  if (dir === 'left') curItem--;
  else curItem++;

  expItems.forEach(
    (item, i) =>
      (item.style.transform = `translateX(${
        i * (item.offsetWidth + initGap) + dist * -curItem
      }px`)
  );
}

function createExpHoverStyle(item, pos) {
  const css = `.exp-item:hover {
    cursor: pointer;
    transform: translate(${pos * (item.offsetWidth + initGap)}px,  -1.2rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.04);
  }`;

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  // style.styleSheets.cssText = css;
}
