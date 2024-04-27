// console.log("Hello World!");
// const age = 29;
// const userName = "Petro";
// const firstname = "Herman";
// console.log(age, userName, firstname);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

// console.log(25 > 26);
// console.log(25 < 26);
// console.log(null == 0);
// console.log('5' === 5);
// console.log('1' == true);
// console.log('1' === true);
// console.log(null < 1);
// console.log(world > worlD);

// a = 10 * 2;
// console.log(a);

// let username = "Mango";
// username = "Poly";
// console.log(username);

// const username = "Mango";
// username = "Poly";
// console.log(username);

// const message = "Hello! " + "My " + "name " + "is " + "Petro!";
// console.log(message);
// const meSsage = "Hello! My name is Petro!";
// console.log(meSsage);

// const userName = "Nataliya";
// const surname = "Herman";
// const age = "48";
// const message = "Hello, I am " + userName + " " + surname + "!" + " Me " + age + " years!";

// console.log(message);

// const room = "204";
// const userName = name;
// const greeting = `Welcome, ${userName}, your room number is ${room}!`;

// console.log(greeting);

// function getText() {
//   // Отримуємо доступ до елементу введення
//   var inputElement = document.getElementById("myInput");

//   // Отримуємо значення поля введення
//   var inputValue = inputElement.value;

//   // Виводимо значення поля в консоль
//   console.log("Введений текст:", inputValue);
// }

function getText() {
  // Отримуємо доступ до елементу введення
  var inputElement = document.getElementById("myInput");

  // Отримуємо значення поля введення
  var inputValue = inputElement.value;

  // Отримуємо доступ до елементу, в якому будемо виводити текст
  var outputElement = document.getElementById("output");

  // Виводимо значення поля введення у шаблоні
    outputElement.innerHTML = `Доброго ранку, ${inputValue}! 
    Цей новий день прийшов, щоб зігріти наше серце любов'ю та надихнути на досягнення.
    Відкривай очі і впускай у своє життя безмежну красу ранкового світла.
    Нехай цей день буде таким же яскравим як ти! 💖🌅 `;
    // console.log();
}

