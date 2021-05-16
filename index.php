<?php
  session_start();
  $checkout = "false";
  $nowBlacklistArr = file("php/blacklist.php");
  for($wasBLIndex = 0; $wasBLIndex < count($nowBlacklistArr); $wasBLIndex++) {
    if($nowBlacklistArr[$wasBLIndex] == $_SERVER["REMOTE_ADDR"]."\n") {
      $checkout = "true";
    }
  }
  if($checkout == "true") {
    echo "<div style='width: 400px; height: auto; color: red; margin: 0 auto; text-align: center; font-size: 30px;'>Преввышено".
    " количество попыток ввода пароля!</div>";
  }
  elseif(!empty($_POST['paswdMaster']) && !empty($_POST['paswdSupervisor'])) {
    header("Location: error.php?send=both");
  }
  elseif(!empty($_POST['paswdMaster']) xor !empty($_POST['paswdSupervisor'])) {
    if(!empty($_POST['paswdMaster'])) {
      $pass = "123";
      if($_POST['paswdMaster'] == $pass) {
        $_SESSION['access'] = "var";
        header("Location: dataControl.php?send=master");
      }
      else {
        header("Location: error.php?send=single");
      }
    }
    else {
      $pass = "321";
      if($_POST['paswdSupervisor'] == $pass) { 
        $_SESSION['access'] = "var";
        header("Location: dataControl.php?send=supervisor"); 
      }
      else {
        header("Location: error.php?send=single");
      }
    }
  }
  else {
?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Main</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="shortcut icon" href="icon/exhauster.png" type="image/x-icon">
  </head>
  <body>
      <form method="POST" id="masterSuperForm">
        <label for="paswdMaster" class="paswd">Мастер</label>
        <input type="text" name="paswdMaster" id="paswdMaster" autocomplete="off" placeholder="Пароль для мастера">
        <label for="paswdSupervisor" class="paswd">Диспетчер</label>
        <input type="text" name="paswdSupervisor" id="paswdSupervisor" autocomplete="off" placeholder="Пароль для диспетчера">
        <input type="submit" name="btnSubmit">
      </form>
      <div class="inputError">
        <?php
          if(isset($_GET['send']) && $_GET['send'] == 'true') {
            echo "Неверный пароль!";
          }
          elseif(isset($_GET['send']) && $_GET['send'] == 'false') {
            echo "Пожалуйста, заполните одно поле! Либо для мастера, либо для диспетчера!";
          }
        ?>
      </div>
  </body>
</html>
<?php
  }
?>