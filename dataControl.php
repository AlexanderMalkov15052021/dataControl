<?php
   session_start();
   if(!isset($_SESSION['access']) || $_SESSION['access'] != true) {
    header("location:index.php");
   }
   else {
?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>InformationControl</title>
    <link href="css/blockInformation.css" rel="stylesheet" type="text/css">
    <link href="css/constructor.css" rel="stylesheet" type="text/css">
    <link href="exhauster/exhauster.css" rel="stylesheet" type="text/css">
    <link href="meshTransporter/meshTransporterMesh.css" rel="stylesheet" type="text/css">
    <link href="meshTransporter/meshTransporterStars.css" rel="stylesheet" type="text/css">
    <link href="meshTransporter/meshTransporterSupport.css" rel="stylesheet" type="text/css">
    <link href="css/slideshowConstruction.css" rel="stylesheet" type="text/css">
    <link href="supplyTransporter/supplyTransporter.css" rel="stylesheet" type="text/css">
    <link href="swingingFeeder/swingingFeeder.css" rel="stylesheet" type="text/css">
    <link href="vibrationFeeder/vibrationFeeder.css" rel="stylesheet" type="text/css">
    <link href="css/burger.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="icon/exhauster.png" type="image/x-icon">
  </head>
  <body>
    <audio src="alertSound/alertSoundRuss.mp3" type="audio/mp3" controls volume="0" hidden></audio>
    <div class="informationMenu">
      <div class="menuBorder"></div>
      <label class="settingName">Шаг зменения частоты:</label></br>
      <input type="radio" name="change" id="change_1" value="10"/>
      <label for="change_1" class="amountOfChange">по 10 Гц</label></br>
      <input type="radio" name="change" id="change_2" value="1" checked/>
      <label for="change_2" class="amountOfChange">по 1 Гц</label></br>
      <input type="radio" name="change" id="change_3" value=".5"/>
      <label for="change_3" class="amountOfChange">по 0.5 Гц</label></br>
      <input type="radio" name="change" id="change_4" value=".1"/>
      <label for="change_4" class="amountOfChange">по 0.1 Гц</label></br></br>
      <label class="settingName">Звук оповещения:</label></br>
      <input type="range" name="sound" id="sound" data-selector="2" value="0" min="0" max="100" step="1"/>
      <label class="settingName">Выбор языка:</label></br>
      <button class="language">Русский</button>
      <button class="language">Английский</button>
      <button class="menuButton">
        <div class="animatedElements"></div>
      </button>
    </div>
    <div class="blocksContainer">
      <div class="visiblePartConstruction">
        <div class="blockPerspective">
          <div class="perspective"></div>
          <div class="perspective"></div>
          <div class="perspective"></div>
          <div class="perspective"></div>
          <div class="perspective"></div>
        </div>
      </div>
      <div class="arrowWrapper">
        <button class="moveBtn"></button>
        <button class="moveBtn"></button>
      </div>
      <div class="visiblePartSet">
        <div class="blockInformation">
          <div class="information"></div>
          <div class="information"></div>
          <div class="information"></div>
          <div class="information"></div>
          <div class="information"></div>
        </div>
      </div>
    </div>
    <script src="js/blockInformation.js"></script>
    <script src="js/constructor.js"></script>
    <script src="meshTransporter/meshTransporter.js"></script>
    <script src="exhauster/exhauster.js"></script>
    <script src="js/dataControl.js"></script>
    <script src="supplyTransporter/supplyTransporter.js"></script>
    <script src="swingingFeeder/swingingFeeder.js"></script>
    <script src="vibrationFeeder/vibrationFeeder.js"></script>
    <script src="js/burger.js"></script>
    <script src="js/elementsAnimation.js"></script>
  </body>
</html>
<?php
    session_unset();
    session_destroy();
    }
?>
