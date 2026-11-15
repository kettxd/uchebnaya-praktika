<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Основы PHP</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 650px;
      margin: 30px auto;
      padding: 15px;
    }
    section {
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>

  <h1>Моя первая программа PHP</h1>

  <section>
    <h2>Задача 1. Первая программа</h2>
    <?php
      echo "Я изучаю PHP<br>";
      echo "Студент: Лебедев Антон<br>";
      echo "Группа: ИС-1-25<br>";
    ?>
  </section>

  <section>
    <h2>Задача 2. Переменные</h2>
    <?php
      $name = "Антон";
      $group = "ИС-1-25";
      $age = 18;
      $city = "Чебоксары";
      $course = 1;

      echo "Имя: " . $name . "<br>";
      echo "Группа: " . $group . "<br>";
      echo "Возраст: " . $age . "<br>";
      echo "Город: " . $city . "<br>";
      echo "Курс: " . $course . "<br>";
    ?>
  </section>

  <section>
    <h2>Задача 3. Арифметика</h2>
    <?php
      $a = 30;
      $b = 6;

      echo "Сложение (30 + 6): " . ($a + $b) . "<br>";
      echo "Вычитание (30 - 6): " . ($a - $b) . "<br>";
      echo "Умножение (30 * 6): " . ($a * $b) . "<br>";
      echo "Деление (30 / 6): " . ($a / $b) . "<br>";
      echo "Остаток от деления (30 % 6): " . ($a % $b) . "<br><br>";

      $width = 8;
      $height = 5;
      $area = $width * $height;
      $perimeter = 2 * ($width + $height);

      echo "Площадь прямоугольника (8 × 5): " . $area . "<br>";
      echo "Периметр прямоугольника: " . $perimeter . "<br>";
    ?>
  </section>

  <section>
    <h2>Задача 4. Типы данных</h2>
    <?php
      $studentName = "Анна";
      $studentAge = 18;
      $average = 4.5;
      $isStudent = true;

      var_dump($studentName);
      echo "<br>";
      var_dump($studentAge);
      echo "<br>";
      var_dump($average);
      echo "<br>";
      var_dump($isStudent);
      echo "<br><br>";

      // Самостоятельная часть
      $price = 1500;
      $product = "Ноутбук";
      $available = false;

      var_dump($price);
      echo "<br>";
      var_dump($product);
      echo "<br>";
      var_dump($available);
      echo "<br>";
    ?>
  </section>

  <section>
    <h2>Информация о товаре</h2>
    <?php
      $product = "Клавиатура";
      $price = 2500;
      $quantity = 3;

      $totalCost = $price * $quantity;
      $discountCost = $totalCost - ($totalCost * 0.10);

      echo "Название товара: " . $product . "<br>";
      echo "Цена за одну штуку: " . $price . " рублей<br>";
      echo "Количество товаров: " . $quantity . " шт.<br>";
      echo "Общая стоимость: " . $totalCost . " рублей<br>";
      echo "Стоимость со скидкой 10%: " . $discountCost . " рублей<br>";
    ?>
  </section>

</body>
</html>