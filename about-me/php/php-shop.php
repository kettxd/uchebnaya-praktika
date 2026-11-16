<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Витрина мини-магазина</title>
</head>
<body>

  <h1>Витрина мини-магазина</h1>

  <!-- 1. Блок «О разработчике» -->
  <section>
    <h2>О разработчике</h2>
    <?php
      $studentName = "Лебедев Антон";
      $group = "ИС-1-25";
      $course = 2;
      $city = "Чебоксары";

      echo "<ul>";
      echo "<li>Имя студента: " . $studentName . "</li>";
      echo "<li>Группа: " . $group . "</li>";
      echo "<li>Курс: " . $course . "</li>";
      echo "<li>Город: " . $city . "</li>";
      echo "</ul>";
    ?>
  </section>

  <!-- 2. Блок «Карточка товара» (3 товара) -->
  <section>
    <h2>Карточка товара</h2>
    <?php
      // Товар 1
      $product = "Б/У аппарат МРТ";
      $price = 3500;
      $quantity = 2;
      $discount = 10; 

      $total1 = $price * $quantity;
      $discountSum1 = $total1 * $discount / 100;
      $finalPrice1 = $total1 - $discountSum1;

      echo "<div class='product-card'>";
      echo "<h3>" . $product . "</h3>";
      echo "Цена за одну штуку: " . $price . " руб.<br>";
      echo "Количество: " . $quantity . " шт.<br>";
      echo "Общая стоимость без скидки: " . $total1 . " руб.<br>";
      echo "Размер скидки (" . $discount . "%): " . $discountSum1 . " руб.<br>";
      echo "<strong>Итоговая стоимость со скидкой: " . $finalPrice1 . " руб.</strong>";
      echo "</div>";

      // Товар 2
      $product2 = "Зубная щетка XXL размера";
      $price2 = 2000;
      $quantity2 = 3;
      $discount2 = 15; 

      $total2 = $price2 * $quantity2;
      $discountSum2 = $total2 * $discount2 / 100;
      $finalPrice2 = $total2 - $discountSum2;

      echo "<div class='product-card'>";
      echo "<h3>" . $product2 . "</h3>";
      echo "Цена за одну штуку: " . $price2 . " руб.<br>";
      echo "Количество: " . $quantity2 . " шт.<br>";
      echo "Общая стоимость без скидки: " . $total2 . " руб.<br>";
      echo "Размер скидки (" . $discount2 . "%): " . $discountSum2 . " руб.<br>";
      echo "<strong>Итоговая стоимость со скидкой: " . $finalPrice2 . " руб.</strong>";
      echo "</div>";

      // Товар 3
      $product3 = "Наушники с умоподавлением";
      $price3 = 4200;
      $quantity3 = 1;
      $discount3 = 20; 

      $total3 = $price3 * $quantity3;
      $discountSum3 = $total3 * $discount3 / 100;
      $finalPrice3 = $total3 - $discountSum3;

      echo "<div>";
      echo "<h3>" . $product3 . "</h3>";
      echo "Цена за одну штуку: " . $price3 . " руб.<br>";
      echo "Количество: " . $quantity3 . " шт.<br>";
      echo "Общая стоимость без скидки: " . $total3 . " руб.<br>";
      echo "Размер скидки (" . $discount3 . "%): " . $discountSum3 . " руб.<br>";
      echo "<strong>Итоговая стоимость со скидкой: " . $finalPrice3 . " руб.</strong>";
      echo "</div>";
    ?>
  </section>

  <!-- 3. Блок «Типы данных» -->
  <section>
    <h2>Типы данных</h2>
    <?php
      $inStock = true;
      $rating = 4.7;

      echo "Товар ";
      var_dump($product);
      echo "<br>";
      echo"Цена ";
      var_dump($price);
      echo "<br>";
      echo "Количество ";
      var_dump($quantity);
      echo "<br>";
      echo "Скидка ";
      var_dump($discount);
      echo "<br>";
      echo "В наличии ";
      var_dump($inStock);
      echo "<br>";
      echo "Рейтинг ";
      var_dump($rating);
      echo "<br>";
    ?>
  </section>

</body>
</html>