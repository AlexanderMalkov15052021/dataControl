const shaftExhauster = [...document.getElementsByClassName('shaft')],
      language = document.getElementsByClassName('language'),
      positionName = [...document.getElementsByClassName('positionName')],
      settingTitle = [...document.getElementsByClassName('settingName')],
      amountOfChange = [...document.getElementsByClassName('amountOfChange')],
      audioPlayer = document.getElementsByTagName("audio")[0],
      settingNameEnglish = ["Frequency change step:", "Alert sound:", "Language:"],
      settingNameRussian = ["Шаг изменения частоты:", "Звук оповещения:", "Выбор языка:"],
      amountOfChangeInEnglish = ["to 10 Hz", "to 1 Hz", "to 0.5 Hz", "to 0.1 Hz"],
      amountOfChangeInRussian = ["по 10 Гц", "по 1 Гц", "по 0.5 Гц", "по 0.1 Гц"],
      deviseName = ["Swinging feeder", "Vibration feeder", "Mesh transporter", "Supply transporter", "Exhauster"];
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator
  .userAgent)) {
  sound.addEventListener("touchmove", function(el) {
    audioPlayer.volume = sound.value/100;
    if (audioPlayer.volume == 0) {
      sound.dataset.selector = "2";
    }
    else {
      sound.dataset.selector = "1";
    }
  });
  sound.addEventListener("touchstart", function() {
    clearTimeout(audioPlayerTimeout);
    constructionSelect.forEach(elem => {
      if (elem.classList.contains("constructionSelectActive")) {
        audioPlayer.play();
      }
    });
    audioPlayerTimeout = setTimeout(function() {
      audioPlayer.autoplay = false;
    }, 8000);
    setTimeout(function() {
      audioPlayer.volume = sound.value/100;
      if (audioPlayer.volume == 0) {
        sound.dataset.selector = "2";
      }
      else {
        sound.dataset.selector = "1";
      }
    }, 100);
  });
}
else {
  sound.addEventListener("mousemove", function(el) {
    audioPlayer.volume = sound.value/100;
    if (audioPlayer.volume == 0) {
      sound.dataset.selector = "2";
    }
    else {
      sound.dataset.selector = "1";
    }
  });
  sound.addEventListener("mousedown", function() {
    clearTimeout(audioPlayerTimeout);
    constructionSelect.forEach(elem => {
      if (elem.classList.contains("constructionSelectActive")) {
        audioPlayer.play();
      }
    });
    audioPlayerTimeout = setTimeout(function() {
      audioPlayer.autoplay = false;
    }, 8000);
    setTimeout(function() {
      audioPlayer.volume = sound.value/100;
      if (audioPlayer.volume == 0) {
        sound.dataset.selector = "2";
      }
      else {
        sound.dataset.selector = "1";
      }
    }, 100);
  });
}
language[0].onclick = function() {
  language[0].innerHTML = "Русский";
  language[1].innerHTML = "Английский";
  amountOfChange.forEach((elem, i) => {
    elem.innerHTML = amountOfChangeInRussian[i];
  });
  settingTitle.forEach((elem, i) => {
    elem.innerHTML = settingNameRussian[i];
  });
  cAndFConfirmationButtonArray.forEach(elem => elem.innerHTML = "Ввод");
  constructionSelect.forEach((elem, i) => {
    elem.innerHTML = constructionName[i];
    elem.style.letterSpacing = "normal";
  });
  positionName.forEach((elem, i) => {
    if (i < 18) {
      elem.innerHTML = "К" + (i + 1);
    }
    else if (i < 36) {
      elem.innerHTML = "У" + ((i - 18) % 6 + 1);
    }
    else {
      elem.innerHTML = "Б" + (i - 35);
    }
  });
  document.getElementsByClassName('constructionSelect')[0].style.letterSpacing = ".6px";
  document.getElementsByClassName('constructionSelect')[1].style.letterSpacing = "-.4px";

  languageOfAlert = "alertSound/alertSoundRuss.mp3";
}
language[1].onclick = function() {
  language[0].innerHTML = "Russian";
  language[1].innerHTML = "English";
  amountOfChange.forEach((elem, i) => {
    elem.innerHTML = amountOfChangeInEnglish[i];
  });
  settingTitle.forEach((elem, i) => {
    elem.innerHTML = settingNameEnglish[i];
  });
  cAndFConfirmationButtonArray.forEach(elem => elem.innerHTML = "Set");
  constructionSelect.forEach((elem, i) => {
    elem.innerHTML = deviseName[i];
    if (i === 0) {
      elem.style.letterSpacing = "1.9px";
    }
    else if (i === 1) {
      elem.style.letterSpacing = "1.6px";
    }
    else if (i === 2) {
      elem.style.letterSpacing = ".9px";
    }
    else if (i == 4){
      elem.style.letterSpacing = "2.5px";
    }
  });
  positionName.forEach((elem, i) => {
    if (i < 18) {
      elem.innerHTML = "C" + (i + 1);
    }
    else if (i < 36) {
      elem.innerHTML = "M" + ((i - 18) % 6 + 1);
    }
    else {
      elem.innerHTML = "B" + (i - 35);
    }
  });
  languageOfAlert = "alertSound/alertSoundEng.mp3";
}
