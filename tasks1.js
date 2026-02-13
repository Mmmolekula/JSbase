// Задание 1

// Скрытие и показ текста 
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке < h1 >.
// Инструкция: В HTML создайте заголовок < h1 > с текстом и кнопку.
// Используйте метод querySelector для получения ссылок на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы скрывать и показывать заголовок при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова.


const openClosed__h1El = document.querySelector(".openClosed__h1");
const openClosed__btnEl = document.querySelector(".openClosed__btn");
openClosed__btnEl.addEventListener("click", function (e) {
  if (openClosed__h1El.style.display === "none") {
    openClosed__h1El.style.display = "block";
  } else {
    openClosed__h1El.style.display = "none";
  }
});

// Задание 2

// Изменение стиля элемента 
// Задача: создайте кнопку, которая изменяет цвет текста в элементе < p >.
// Инструкция: В HTML создайте абзац < p > и кнопку.
// Используйте метод querySelector для получения ссылки на абзац и кнопку.
// Используйте событие click и метод addEventListener, чтобы изменить стиль элемента, например его цвет.
// Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.


const color__pEl = document.querySelector(".color__p");
const color__btnEl = document.querySelector(".color__btn");

color__btnEl.addEventListener("click", function (e) {
  if (color__pEl.style.color === "blue") {
    color__pEl.style.color = "";
  } else {
    color__pEl.style.color = "blue";
  }
});

// Задание 3
// Динамическое изменение текста
// Задача: создайте кнопку, которая меняет текст в заголовке < h1 >.
// Инструкция: В HTML создайте заголовок < h1 > с текстом и кнопку.
// Используйте метод querySelector для получения ссылки на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы изменить текст заголовка при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!».


const changingText__h1El = document.querySelector(".changingText__h1");
const changingText__btnEl = document.querySelector(".changingText__btn");
const originalText = changingText__h1El.textContent;

changingText__btnEl.addEventListener("click", function (e) {
  if (changingText__h1El.textContent === originalText) {
    changingText__h1El.textContent = "Привет мир!";
  } else {
    changingText__h1El.textContent = originalText;
  }
});


// Задание 4

// Поиск и изменение элементов по классу
// Задача: найдите все элементы с классом description и измените их текст на «Измененный текст».
// Инструкция: В HTML создайте несколько элементов с классом description.
// Используйте метод querySelectorAll для поиска всех элементов с этим классом.
// Переберите найденные элементы и измените их текстовое содержимое с помощью свойства textContent.
// Как должно работать: после выполнения скрипта все элементы с классом description изменяют свой текст на «Измененный текст».


const descriptionEl = document.querySelectorAll(".description");
const description_btnEl = document.querySelector(".description__btn");

description_btnEl.addEventListener("click", function (e) {
  descriptionEl.forEach(function (element) {
    element.textContent = "Измененный текст";
  });
});

// Задание 5

// Работа с querySelectorAll 
// Задача: создайте несколько элементов < p > с разными классами.Используйте querySelectorAll, чтобы найти все элементы с классом description и изменить их текст.
// Инструкция: В HTML создайте несколько абзацев < p >, некоторые из них должны иметь класс description.
// Используйте querySelectorAll для поиска всех элементов с классом description.
// Переберите найденные элементы и измените их текстовое содержимое.
// Как должно работать: после выполнения скрипта все элементы с классом description изменяют свой текст на «Новый текст».

const description1El = document.querySelectorAll(".description1");
const description__btn1El = document.querySelector(".description__btn1");

description__btn1El.addEventListener("click", function (e) {
  description1El.forEach(function (element) {
    element.textContent = "Новый текст";
    element.style.color = "green";
  });
});

// Задание 6

// Добавление нового элемента в DOM 
// Задача: создайте кнопку, которая добавляет новый элемент < p > с текстом в конец документа.
// Инструкция: В HTML создайте кнопку.
// Используйте метод createElement для создания нового элемента.
// Используйте appendChild для добавления нового элемента в конец документа при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац».

const addText__btn1El = document.querySelector(".addText__btn1");
addText__btn1El.addEventListener("click", function (e) {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Новый абзац";
  newParagraph.classList.add("addTexts__p");
  newParagraph.style = "display: inline; border: 2px solid black; font-weight: bold; font-size: 48px;";
  document.body.appendChild(newParagraph);
});

// Задание 7
// Удаление элемента 
// Задача: создайте кнопку, которая удаляет первый элемент < p > с классом description.
// Инструкция: В HTML создайте несколько абзацев < p >, некоторые из них должны иметь класс description.
// Используйте метод querySelector для поиска первого элемента с классом description.
// Используйте метод remove для удаления этого элемента  при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом description со страницы.

const description__btn2El = document.querySelector(".description__btn2");

description__btn2El.addEventListener("click", function (e) {
  const description2El = document.querySelector(".description2");
  description2El.remove();
});