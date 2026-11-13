const container = document.querySelector("#container");

const newParagraph = document.createElement("p");
const new1Paragraph = document.createElement("p");
const heading = document.createElement("h3");

newParagraph.textContent = "Этот абзац создан с помощью JavaScript";
container.append(newParagraph);

new1Paragraph.textContent = "Лебедев и григ ис-1-25";
container.append(new1Paragraph);

heading.textContent = "мои навыки";
heading.style.color = "blue";
container.append(heading);

//задача 2

const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Введите название задачи");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText + " ";
  

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Выполнено";
  doneBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
    li.style.color='green';
  });
  li.append(doneBtn);
  

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.append(deleteBtn);
  taskList.append(li);



  taskInput.value = "";
});

// Задача 3. Аккордеон

const questions = document.querySelectorAll('.question');

for (const question of questions) {

    question.addEventListener('click', function () {

        const answer = question.nextElementSibling;
        answer.style.backgroundColor = 'pink'

        answer.classList.toggle('open');
        

    });

}

// Задача 4. Слайдер
const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMltQ5cZWFPf9CrwmIm3WYkx6T4u_Q7o0JPE0H3aYNXQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTRmOIxW_uOIGfUD0kBAixsmweGjFVvwJVhhCp7mjWA&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xsdTEHtmV7cEMSlMH_Z5XXwIBoqbiC0CaJU3cW2btw&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgnsICscRgXzz_q2bo-umyWNeq6Vrj-Z55VH0f9IYzA&s=10'
];

let currentSlide = 0;

const sliderImage = document.querySelector('#slider-image');

const slideNumber = document.querySelector('#slide-number');

const nextBtn = document.querySelector('#next-slide');

const prevBtn = document.querySelector('#prev-slide');

function showSlide() {
    sliderImage.src = images[currentSlide];

    slideNumber.textContent =
        `Слайдик ${currentSlide + 1} из ${images.length}`;
}

nextBtn.addEventListener('click', function () {
    currentSlide++;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    showSlide();
});

prevBtn.addEventListener('click', function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    showSlide();
});

showSlide();
