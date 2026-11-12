console.log("Скрипт подключён");
const fullName = "Лебедев Антон и Григорьев Александр";
const group = "ИС-1-25";
let pagesCount = 15;
const isStudent = true;

//const userNumber = Number(prompt('Введите целое число'));
/*
if (Number.isNaN(userNumber)) {
  console.log('Это не число');
} else if (userNumber % 2 === 0) {
  console.log(userNumber + ' - чётное');
} else {
  console.log(userNumber + ' - нечётное');
}*/

console.log("Имя: " + fullName);
console.log(`Группа: ${group}, страниц на сайте: ${pagesCount}`);
pagesCount = pagesCount + 1;
console.log(`После доработки страниц: ${pagesCount}`);
console.log("Студент:", isStudent);

console.log(typeof 42);
console.log(typeof "текст");
console.log(typeof true);
let notSet;
console.log(typeof notSet);
console.log("5" + 5);
console.log("5" - 2);
console.log(5 + 5);
console.log(Number("12") + 3);
console.log(Number("abc"));

const width = 8;
const height = 5;
console.log("Площадь:", width * height);
console.log("Периметр:", 2 * (width + height));

const mark1 = 5;
const mark2 = 4;
const mark3 = 5;
const average = (mark1 + mark2 + mark3) / 3;
console.log("Средний балл:", average.toFixed(2));

const totalMinutes = 135;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);

const price = 1200;
const discountPercent = 15;
const discountAmount = price * (discountPercent / 100);
const finalPrice = price - discountAmount;
console.log(`Размер скидки: ${discountAmount} руб.`);
console.log(`Цена со скидкой: ${finalPrice} руб.`);

const city = " Чебупиццы ";
console.log(city.length);
console.log(city.trim());
console.log(city.trim().toUpperCase());

const text = "Практика по веб-разработке";
console.log(text.slice(0, 8));
console.log(text.includes("веб"));

const greeting = `Привет, ${fullName}! Добро пожаловать на сайт.`;
console.log(greeting);

const myPhrase = "burmalda bembembem";
console.log("Длина фразы:", myPhrase.length);
console.log("Первые пять символов:", myPhrase.slice(0, 5));
console.log("Фраза заглавными:", myPhrase.toUpperCase());
console.log('Есть ли слово "burmalda":', myPhrase.includes("burmalda"));

const number = 17;

if (number % 2 === 0) {
  console.log(number + " — чётное");
} else {
  console.log(number + " — нечётное");
}

if (number > 0) {
  console.log("Положительное");
} else if (number < 0) {
  console.log("Отрицательное");
} else {
  console.log("Ноль");
}

const score = 78;
let mark;

if (score < 0 || score > 100) {
  console.log("Баллы должны быть от 0 до 100");
} else if (score >= 90) {
  mark = 5;
} else if (score >= 75) {
  mark = 4;
} else if (score >= 60) {
  mark = 3;
} else {
  mark = 2;
}

if (mark !== undefined) {
  console.log(`Баллов: ${score}, оценка: ${mark}`);
}

console.log(5 === "5");
console.log(5 == "5");

const dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "понедельник";
    break;
  case 2:
    dayName = "вторник";
    break;
  case 3:
    dayName = "среда";
    break;
  case 4:
    dayName = "четверг";
    break;
  case 5:
    dayName = "пятница";
    break;
  case 6:
    dayName = "суббота";
    break;
  case 7:
    dayName = "воскресенье";
    break;
  default:
    dayName = "такого дня нет";
}

console.log(`День ${dayNumber}: ${dayName}`);

const isWeekend = dayNumber === 6 || dayNumber === 7;
console.log("Выходной:", isWeekend);

const monthNumber = 11;
let season;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    season = "зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "лето";
    break;
  case 9:
  case 10:
  case 11:
    season = "осень";
    break;
  default:
    season = "неизвестный месяц";
}
console.log(`Месяц ${monthNumber} — время года: ${season}`);

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

const n = 5;
let sum = 0;
let k = 1;

while (k <= n) {
  sum = sum + k;
  k = k + 1;
}
console.log(`Сумма чисел от 1 до ${n}: ${sum}`);

for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;
  if (i > 7) break;
  console.log("Число:", i);
}

const luckyNumber = 4;
console.log(`Таблица умножения на ${luckyNumber}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${luckyNumber} * ${i} = ${luckyNumber * i}`);
}
function greet(name) {
  return `Привет, ${name}!`;
}

console.log(greet("друн"));

console.log(greet("мыть"));

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(10));

console.log(isEven(7));

function test() {
  const inside = "внутри";
  console.log(inside);
}
test();

const square = (x) => x * x;
const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
const addNumbers = (a, b) => a + b;

console.log(square(7));
console.log(celsiusToFahrenheit(20));
console.log(addNumbers(2, 3));
