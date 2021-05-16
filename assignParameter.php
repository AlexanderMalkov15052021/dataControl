<?php
  if ($_POST['supervisorData']) {
    $currentFAndI = $_POST['supervisorData'];
  }
  elseif ($_POST['masterData']) {
    $currentFAndI = $_POST['masterData'];
  }
  elseif ($_POST['masterInputData']) {
    $currentFAndI = $_POST['masterInputData'];
  }
  elseif ($_POST['supervisorInputData']) {
    $currentFAndI = $_POST['supervisorInputData'];
  }
  for($g = 0; $g < strlen($currentFAndI); $g++) {
    if($currentFAndI[$g] == ":") {
      $valueF = $char;
      $char = "";
      continue;
    }
    elseif($currentFAndI[$g] == "\n") {
      $arrayFAndI[$char] = $valueF;
      $char = "";
      continue;
    }
    else {
      $char = $char.$currentFAndI[$g];
    }
  }
  $fileArray = file("php/changeAndNowF.php");
  for($j = 0; $j < count($fileArray); $j++) {
    if($arrayFAndI[$j] != "") {
      for($l = 0; $l < strlen($fileArray[$j]); $l++) {
        if($fileArray[$j][$l] == ":") {
          $valueFileIndex = $charDifference;
          $charDifference = "";
          continue;
        }
        $charDifference = $charDifference.$fileArray[$j][$l];
      }
      if($arrayFAndI[$j][3] != "." && $arrayFAndI[$j][2] != "." && $arrayFAndI[$j][1] != ".") {
        $differenceFAndIFile = $arrayFAndI[$j] - $valueFileIndex + $charDifference;
        $differenceFAndIFile = round($differenceFAndIFile, 1);
      }
      else {
        $differenceFAndIFile = $arrayFAndI[$j] - $valueFileIndex + $charDifference;
        $differenceFAndIFile = round($differenceFAndIFile, 1);
      }
      if($differenceFAndIFile == 0) {
        $differenceFAndIFile = "";
      }
      if ($_POST['supervisorData']) {
        $fileArrayValueNew = $arrayFAndI[$j].":".$differenceFAndIFile;
      }
      elseif ($_POST['masterData']) {
        $fileArrayValueNew = $valueFileIndex.":".$differenceFAndIFile;
      }
      elseif ($_POST['masterInputData']) {
        $fileArrayValueNew = $valueFileIndex.":".$valueF;
      }
      elseif ($_POST['supervisorInputData']) {
        $fileArrayValueNew = $arrayFAndI[$j].":".$differenceFAndIFile;
      }
      $fileArray[$j] = $fileArrayValueNew."\n";
    }
  }
  $fileCheckout = fopen("php/changeAndNowF.php", "w");
    if(!file) {
      echo("Ошибка открытия файла");
    }
    else {
      for ($k = 0; $k < count($fileArray); $k++) {
        fputs($fileCheckout, $fileArray[$k]);
      }
    }
  fclose($fileCheckout);
?>
