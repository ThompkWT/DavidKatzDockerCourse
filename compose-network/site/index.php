<html>

<body>
  <h1>Clothing prices:</h1>
  <ul>
    <?php
      foreach(json_decode(file_get_contents('http://prices')) as $price_item) {
        echo "<li>$price_item->name:$$price_item->price</li>";
      }
     ?>
  </ul>
  <h1>Core apparel:</h1>
  <?php
      foreach(json_decode(file_get_contents('http://clothing')) as $clothing_item) {
        echo "<li>$clothing_item->name</li>";
      }
     ?>
</body>

</html>