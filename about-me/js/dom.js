console.log("DOM подключён");

// Задача 1. Изменение текста
const mainTitle = document.querySelector("#main-title"); // присваивает значение <h1 id="main-title">Изучаем JavaScript DOM</h1>
mainTitle.textContent ="Практическая работа --- Лебедев антон и Григорьев Александр"; // меняет заголовок на Моя первая работа с DOM

const message = document.querySelector("#message"); // через #message присваивает значение const message
message.textContent = "Теперь я умею менять содержимое страницы!"; // меняет текст на Теперь я умею менять содержимое страницы!

const mainStudent = document.querySelector("#main-student");
mainStudent.textContent =
  "Информационные системы и программирование (09.02.07)";

console.log(mainTitle.textContent);

const studentName = "Лебедев Антон и Григорьев Александр";
const studentGroup = "ИС-1-25";
const studentAge = "17";
const studentLanguageProgramming = "Питон";

document.querySelector("#student-name").textContent = `Студент: ${studentName}`; // через #student-name присваивает значение const studentName

document.querySelector(
  "#student-group"
).textContent = `Группа: ${studentGroup}`; // через #student-group присваивает значение const studentGroup

document.querySelector("#student-age").textContent = `Возраст: ${studentAge}`;

document.querySelector(
  "#student-language-programming"
).textContent = `Любимый язык програмированния: ${studentLanguageProgramming}`;

const productCard = document.querySelector("#product-card");

productCard.style.backgroundColor = "#e8f4f5";
productCard.style.width = "300px";
productCard.style.padding = "20px";
productCard.style.border = "2px solid blue";
productCard.style.borderRadius = "10px";

const productPrice = document.querySelector("#product-price");

productPrice.style.color = "green";
productPrice.style.fontWeight = "bold";
productPrice.style.fontsize = "24px";

const productName = document.querySelector("#product-name");

productName.style.color = "blue";

const items = document.querySelectorAll("#subjects li");

console.log("Количество предметов:", items.length);

for (const item of items) {
  item.style.color = "darkblue";
  item.style.fontSize = "20px";
}
items[items.length - 1].style.fontWeight = "bold";
items[0].textContent = "Веб-разработка";

const statusText = document.querySelector("#status");

statusText.classList.add("success"); // означает выполнено, warning не выполнено
statusText.textContent = "Статус: успешно провалено";
