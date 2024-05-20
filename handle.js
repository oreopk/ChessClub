let itemsSlide = 3;
let countThree = 3;

let currentIndx = 0;
const carusel = document.querySelector('.main4center');
const total = document.querySelectorAll('.player').length;
const leftBtn = document.querySelector('.krug');
const rightBtn = document.querySelector('.kruginvert');
let text = document.querySelector('.handletext');

function updateCarousel() {
  carusel.style.transform = `translateX(${-currentIndx * (100 / itemsSlide)}%)`;
}

leftBtn.classList.add('disabled');
let timerId = setInterval(() => nextSlide(), 4000);
let timerId2 = setInterval(() => prevSlide(), 8000);

text.textContent = `${countThree}/${total}`;
function nextSlide() {
  if (itemsSlide !== total - currentIndx) {
    leftBtn.classList.remove('disabled');

    currentIndx = (currentIndx + itemsSlide) % total;

    updateCarousel();
    if (itemsSlide == total - currentIndx) {
      rightBtn.classList.add('disabled');
    }
    clearInterval(timerId);
    clearInterval(timerId2);
    timerId = setInterval(() => nextSlide(), 8000);
    timerId2 = setInterval(() => prevSlide(), 4000);
    countThree = countThree + itemsSlide;
    text.textContent = `${countThree}/${total}`;
  }
}

function prevSlide() {
  if (currentIndx !== 0) {
    rightBtn.classList.remove('disabled');

    currentIndx = (currentIndx - itemsSlide + total) % total;

    updateCarousel();

    if (currentIndx == 0) {
      leftBtn.classList.add('disabled');
    }
    clearInterval(timerId);
    clearInterval(timerId2);
    timerId = setInterval(() => nextSlide(), 4000);
    timerId2 = setInterval(() => prevSlide(), 8000);
    countThree = countThree - itemsSlide;
    text.textContent = `${countThree}/${total}`;
  }
}

updateCarousel();
