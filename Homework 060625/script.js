/*
  Задание:
  Сделайте обратный отсчёт от 60 до 0 для распродажи. 
  
  1. Счётчик уменьшается каждую секунду
  2. Когда на счётчике будет 0, откройте всплывающее окно .modal, добавив ему класс modal_active
  3. Крестик на всплывающем окне закрывает его, как и в прошлой задаче
  Пример:
  https://codepen.io/neizerth/pen/RwvQejv?editors=1011
*/

const timer = document.querySelector('.countdown__timer')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close')
let seconds = 60;
const interval = setInterval(function () {
  timer.textContent = seconds
    seconds = seconds - 1;
if (seconds === 0) {
    clearInterval(interval)   
    modal.classList.add('modal_active')
}
}, 1000)
closeBtn.onclick = function () {
  modal.classList.remove('modal_active')  
}

