const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

const contactMe = document.querySelector('.contact-me');
const expItems = document.querySelectorAll('.exp-item');

let currVisibleBox = undefined;

expItems.forEach(item =>
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const contentBox = document.querySelector(`.content-${item.classList[1]}`);

    if (currVisibleBox === contentBox) {
      // Content box is visible, rehide the currrent box
      contentBox.classList.add('hideup');
      currVisibleBox = undefined;
    } else {
      if (currVisibleBox) currVisibleBox.classList.add('hideup');
      contentBox.classList.remove('hideup');
      currVisibleBox = contentBox;
    }
  })
);

// function hideAllExp() {
//   document
//     .querySelectorAll('.exp-box')
//     .forEach(box => box.classList.add('hideup'));
// }
