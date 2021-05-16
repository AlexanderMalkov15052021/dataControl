<?php
 $blacklistArray = array();
 $ipAttempt = $_SERVER["REMOTE_ADDR"];
 $paswdAttArr = file("php/passwordAttempt.php");
 $wasBlacklist = file("php/blacklist.php");
 $IndexBL = 0;
 if(count($paswdAttArr) > 15) {
   array_unshift($paswdAttArr, $ipAttempt."\n");
   array_pop($paswdAttArr);
 }
 else {
   array_unshift($paswdAttArr, $ipAttempt."\n");
 }
 $attemptArray = array_count_values($paswdAttArr);
 foreach($attemptArray as $key => $value) {
   if($value > 3) {
     $blacklistArray[$IndexBL] = $key;
     $IndexBL++;
   }
 }
 $blacklistNow = $blacklistArray+$wasBlacklist;
 $fileBlacklist = fopen("php/blacklist.php", "w");
 for($itrBL = 0; $itrBL < count($blacklistNow); $itrBL++) {
   if(!$fileBlacklist) {
     // echo "Ошибка открытия файла!";  // header does not worke 
   }
   else {
     fwrite($fileBlacklist, $blacklistNow[$itrBL]);
   }
 }
 fclose($fileBlacklist);
 $fileAttempt = fopen("php/passwordAttempt.php", "w");
 if(!$ipAttempt) {
   // echo "Ошибка открытия файла!";  // as well
 }
 else {
   for($keyPaswdAtt = 0; $keyPaswdAtt < count($paswdAttArr); $keyPaswdAtt++) {
     fputs($fileAttempt, $paswdAttArr[$keyPaswdAtt]);
   }
   header("Location:index.php?send=false");
   if($_GET['send'] == 'both') {
     header("Location:index.php?send=false");
   }
   else {
     header("Location:index.php?send=true");
   }
 }
 fclose($fileAttempt);
?>