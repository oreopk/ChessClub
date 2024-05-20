let itemsSlide3 = 1;
let count3 = 1;

let currentIndex_mobile = 0;
const carusel3 = document.querySelector('.main4center_mobile');
const total3 = document.querySelectorAll('.player_mobile').length;
const leftBtn3 = document.querySelector('.krug_mobile_player');
const rightBtn3 = document.querySelector('.kruginvert_mobile_player');
let text3 = document.querySelector('.handletext_mobile');
function updateCarousel_mobile() {
  carusel3.style.transform = `translateX(${
    -currentIndex_mobile * (16.92 / itemsSlide3)
  }%)`;
}

leftBtn3.classList.add('disabled');
let timerId_mobile_player = setInterval(() => nextSlide_mobile(), 4000);

text3.textContent = `${count3}/${total3}`;
function nextSlide_mobile() {
  if (itemsSlide3 !== total3 - currentIndex_mobile) {
    leftBtn3.classList.remove('disabled');

    currentIndex_mobile = (currentIndex_mobile + itemsSlide3) % total3;

    updateCarousel_mobile();

    if (itemsSlide3 == total3 - currentIndex_mobile) {
      rightBtn3.classList.add('disabled');
    }
    clearInterval(timerId_mobile_player);

    timerId_mobile_player = setInterval(() => nextSlide_mobile(), 4000);

    count3 = count3 + itemsSlide3;

    text3.textContent = `${count3}/${total3}`;
  } else {
    rightBtn3.classList.remove('disabled');

    currentIndex_mobile = (currentIndex_mobile + itemsSlide3) % total3;

    updateCarousel_mobile();
    count3 = 1;
    text3.textContent = `${count3}/${total3}`;
    leftBtn3.classList.add('disabled');
    clearInterval(timerId_mobile_player);
    timerId_mobile_player = setInterval(() => nextSlide_mobile(), 4000);
  }
}

function prevSlide_mobile() {
  if (currentIndex_mobile !== 0) {
    rightBtn3.classList.remove('disabled');

    currentIndex_mobile = (currentIndex_mobile - itemsSlide3 + total3) % total3;

    updateCarousel_mobile();

    if (currentIndex_mobile == 0) {
      leftBtn3.classList.add('disabled');
    }
    clearInterval(timerId_mobile_player);

    timerId_mobile_player = setInterval(() => nextSlide_mobile(), 4000);

    count3 = count3 - itemsSlide3;
    text3.textContent = `${count3}/${total3}`;
  }
}

updateCarousel_mobile();
