console.log('jQuery подключена');
console.log('Версия:', $.fn.jquery);

// Задача 1
$('#change-btn').click(function () {
  $('#message')
    .text('Я изучаю jQuery')
    .css({
      'color': 'green',
      'font-size': '20px'
    });
});

// Задача 2
$('#hide-btn').click(function () {
  $('#info-box').hide();
});

$('#show-btn').click(function () {
  $('#info-box').show();
});

$('#toggle-btn').click(function () {
  $('#info-box').toggle();
});

// Задача 3
$('#hello-btn').click(function () {
  const name = $('#name-input').val().trim();

  if (name === '') {
    $('#hello-result')
      .text('Введите имя')
      .css('color', 'red');
  } else if (name.length < 2) {
    $('#hello-result')
      .text('Имя должно содержать минимум 2 символа')
      .css('color', 'red');
  } else {
    $('#hello-result')
      .text('Привет, ' + name + '!')
      .css('color', 'green');
  }
});

// Задача 4
$('#load-btn').click(function () {
  $('#users').text('Загрузка...');

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    success: function (users) {
      $('#users').empty();

      $('<p>')
        .html('<strong>Получено пользователей: ' + users.length + '</strong>')
        .appendTo('#users');

      for (const user of users) {
        const card = $('<div>')
          .addClass('card')
          .css('background-color', '#e8f1ff');

        $('<h3>').text(user.name).appendTo(card);
        $('<p>').text('Email: ' + user.email).appendTo(card);
        $('<p>').text('Телефон: ' + user.phone).appendTo(card);
        $('<p>').text('Город: ' + user.address.city).appendTo(card);

        $('#users').append(card);
      }
    },
    error: function () {
      $('#users').text('Ошибка загрузки');
    }
  });
});


$('#course-info').text('Дисциплина: УП.09  Группа: ИС-1-25  Студент: Лебедев Антон');

$('#course-toggle-btn').click(function () {
  $('#course-info').toggle();
});