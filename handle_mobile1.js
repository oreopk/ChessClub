let itemsPerSlide = 1;
let count = 1;
// Функция для обновления количества отображаемых элементов в зависимости от ширины экрана

// Остальной код остается без изменений
let currentIndex = 0;
const carousel = document.querySelector('.main3center');
const totalItems = document.querySelectorAll('.itemcard').length;
const left = document.querySelector('.krug_mobile');
const right = document.querySelector('.kruginvert_mobile');

let Items = document.querySelectorAll('.itemcard');
let index = document.querySelectorAll('.indexcardWhite');
function update() {
  carousel.style.transform = `translateX(${
    -currentIndex * (100 / itemsPerSlide)
  }%)`;
  for (let i = 0; i < totalItems; i++) {
    Items[i].classList.remove('active');
    Items[i].classList.add('notactive');
  }
  for (let i = 0; i < totalItems; i++) {
    index[i].classList.remove('indexcardBlack');
    index[i].classList.add('indexcardWhite');
  }

  index[count - 1].classList.add('indexcardBlack');
  index[count - 1].classList.remove('indexcardWhite');
  Items[count - 1].classList.add('active');
  Items[count - 1].classList.remove('notactive');
}

left.classList.add('disabled');

let text2 = `${count}/${totalItems}`;
function nextSlide2() {
  if (itemsPerSlide !== totalItems - currentIndex) {
    left.classList.remove('disabled');

    currentIndex = (currentIndex + itemsPerSlide) % totalItems;

    if (itemsPerSlide == totalItems - currentIndex) {
      right.classList.add('disabled');
    }

    count = count + itemsPerSlide;

    update();
  }
}

function prevSlide2() {
  if (currentIndex !== 0) {
    right.classList.remove('disabled');

    currentIndex = (currentIndex - itemsPerSlide + totalItems) % totalItems;

    if (currentIndex == 0) {
      left.classList.add('disabled');
    }

    count = count - itemsPerSlide;

    update();
  }
}

update();
