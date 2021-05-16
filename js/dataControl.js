const arrowPlusArray = [...document.getElementsByClassName('arrowPlus')],
      arrowMinusArray = [...document.getElementsByClassName('arrowMinus')],
      frequencyNowArray = [...document.getElementsByClassName('frequencyNow')],
      changeHertzArray = [...document.getElementsByClassName('changeHertz')],
      cAndFConfirmationButtonArray = [...document.getElementsByClassName('cAndFConfirmationButton')],
      frequencyEscapeArray = [...document.getElementsByClassName('frequencyEscape')],
      escapeHertzArray = [...document.getElementsByClassName('escapeHertz')],
      changeEscapeArray = [...document.getElementsByClassName('changeEscape')];
let  hertzChangeSelect = [...document.getElementsByName('change')],
     outputIndex = [],
     inputIndex = [],
     outputValue = [],
     inputValue = [],
     inputChange = [],
     changeValue = null,
     strIndexValueFrequency = "",
     changeAndNowFValue = "",
     appearanceTime,
     indexNumber,
     audioPlayerTimeout;
function changeVariable(el) {
  let confirmationButtonIndex = Array.from(document.getElementsByClassName(el.path[0].className))
  .indexOf(el.target);
  let frequencyIndexValue = Number(frequencyNowArray[Array.from(document.getElementsByClassName(el.path[0].className))
  .indexOf(el.target)].value);
  hertzChangeSelect.forEach(elem => {
    if (elem.checked) {
      changeValue = Number(elem.value);
    }
  });
  if(50-frequencyIndexValue >= changeValue) {
    if (el.target.className === "arrowPlus") {
      frequencyIndexValue+=changeValue;
    }
    else if (el.target.className === "arrowMinus") {
      frequencyIndexValue-=changeValue;
    }
    frequencyIndexValue = frequencyIndexValue.toFixed(1);
    frequencyIndexValue % 1 == 0 ? frequencyIndexValue = Math.floor(frequencyIndexValue) : frequencyIndexValue;
    el.preventDefault();
    frequencyIndexValue = encodeURIComponent(frequencyIndexValue);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'assignParameter.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    if (page == "http://localhost/dataControl.php?send=master") {
      xhr.send('masterData=' + frequencyIndexValue+":"+Array.from(document.getElementsByClassName(el.path[0].className))
      .indexOf(el.target)+"\n");
    }
    else {
      xhr.send('supervisorData=' + frequencyIndexValue+":"+Array.from(document.getElementsByClassName(el.path[0].className))
      .indexOf(el.target)+"\n");
    }
  }
  if (page == "http://localhost/dataControl.php?send=master") {
    let escapeHertzValue = escapeHertzArray[confirmationButtonIndex].value;
    let escapeHertzPlaceholder = escapeHertzArray[confirmationButtonIndex].placeholder;
    let frequencyNowValue = frequencyNowArray[confirmationButtonIndex].value;
    let frequencyEdge = 50 - frequencyNowValue;
    if ((((escapeHertzValue[0] == "+" || escapeHertzValue[0] == "-") &&
  ((escapeHertzValue.length < 6 && escapeHertzValue[3] == ".") || (escapeHertzValue.length < 5 && escapeHertzValue[2] == ".")||
  (escapeHertzValue.length < 4 && escapeHertzValue[1] != "." && escapeHertzValue.length < 4 && escapeHertzValue[2] != ".") ||
  (escapeHertzValue.length < 3 && escapeHertzValue[1] != "."))) ||
  ((escapeHertzValue[0] != "+" && escapeHertzValue[0] != "-") &&
  ((escapeHertzValue.length < 2) || (escapeHertzValue.length < 3 && escapeHertzValue[0] != "." && escapeHertzValue[1] != ".")||
  (escapeHertzValue.length < 4 && escapeHertzValue[0] != "." && escapeHertzValue[1] == "." && escapeHertzValue[2] != ".") ||
  (escapeHertzValue.length < 5 && escapeHertzValue[0] != "." && escapeHertzValue[1] != "." && escapeHertzValue[2] == "." &&
  escapeHertzValue[3] != ".")))) && (escapeHertzValue <= frequencyEdge) && (-escapeHertzValue <= frequencyNowValue) &&
  escapeHertzValue != "" && escapeHertzValue != 0 && el.target.className === "cAndFConfirmationButton") {
      el.preventDefault();
      escapeHertzValue = encodeURIComponent(escapeHertzValue);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'assignParameter.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      strArr = escapeHertzValue.split("");
      let strCompiled = escapeHertzValue;
      if(strArr[0] == "%") {
        strArr.splice(0, 3, "-");
        strCompiled = strArr.join("");
      }
      else if(strArr[0] != "-" && strArr[0] != "%") {
        strCompiled = "-" + strCompiled;
      }
      else {
        strArr.splice(0, 1);
        strCompiled = strArr.join("");
      }
      xhr.send('masterInputData='+strCompiled+":"+confirmationButtonIndex+"\n");
    }
  }
  else {
    var frequencyEscapeValue = frequencyEscapeArray[confirmationButtonIndex].value;
    if(frequencyEscapeValue >= 0 && frequencyEscapeValue <= 50 && frequencyEscapeValue[0] != "." &&
    frequencyEscapeValue.length < 5 && el.target.className === "cAndFConfirmationButton") {
      el.preventDefault();
      frequencyEscapeValue = encodeURIComponent(frequencyEscapeValue);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'assignParameter.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('supervisorInputData=' + frequencyEscapeValue+":"+confirmationButtonIndex+"\n");
    }
  }
}
document.querySelector('.blockInformation').addEventListener("click", changeVariable);
if (page == "http://localhost/dataControl.php?send=master") {
  function appearanceChangeHertz(el) {
    let escapeHertzIndex = changeHertzArray.indexOf(el.target);
    let appearanceTime = setTimeout(function() {
      escapeHertzArray[escapeHertzIndex].blur();
    }, 15000);
    escapeHertzArray[escapeHertzIndex].style.zIndex = "3";
    escapeHertzArray[escapeHertzIndex].placeholder = changeHertzArray[escapeHertzIndex].value
    escapeHertzArray[escapeHertzIndex].value = "";
    escapeHertzArray[escapeHertzIndex].focus();
  }
  function hideEscapeHertz(el) {
    let escapeHertzIndex = escapeHertzArray.indexOf(el.target);
    escapeHertzArray[escapeHertzIndex].style.zIndex = "1";
    clearTimeout(appearanceTime);
  }
  for(let i = 0; i < changeHertzArray.length; i++) {
    changeHertzArray[i].addEventListener('click', appearanceChangeHertz);
    escapeHertzArray[i].addEventListener('focusout', hideEscapeHertz);
  }
}
else {
  function appearanceFrequencyEscape(el) {
    var frequencyEscapeIndex = frequencyNowArray.indexOf(el.target);
    indexNumber = frequencyEscapeIndex;
    appearanceTime = setTimeout('frequencyEscapeArray[indexNumber].blur()', 15000);
    frequencyEscapeArray[frequencyEscapeIndex].style.zIndex = "1";
    frequencyEscapeArray[frequencyEscapeIndex].placeholder = frequencyNowArray[frequencyEscapeIndex].value
    frequencyEscapeArray[frequencyEscapeIndex].value = "";
    frequencyEscapeArray[frequencyEscapeIndex].focus();
  }
  function hideFrequencyEscape(el) {
    var frequencyEscapeTarget = el.target;
    var frequencyEscapeIndex = frequencyEscapeArray.indexOf(frequencyEscapeTarget);
    frequencyEscapeArray[frequencyEscapeIndex].style.zIndex = "";
    clearTimeout(appearanceTime);
  }
  for(let i = 0; i < frequencyNowArray.length; i++) {
    frequencyNowArray[i].addEventListener('click', appearanceFrequencyEscape);
  }
  for(let i = 0; i < frequencyEscapeArray.length; i++) {
    frequencyEscapeArray[i].addEventListener('focusout', hideFrequencyEscape);
  }
}
setInterval(() => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'php/changeAndNowF.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      inputValue = [];
      inputChange = [];
      for(let b = 0; b < xhr.responseText.length; b++) {
        if(xhr.responseText[b] == ":") {
          inputValue.push(changeAndNowFValue);
          changeAndNowFValue = "";
          continue;
        }
        else if(xhr.responseText[b] == "\n") {
          inputChange.push(changeAndNowFValue);
          changeAndNowFValue = "";
          continue;
        }
        else {
          changeAndNowFValue = changeAndNowFValue+(xhr.responseText.charAt(b));
        }
      }
      for(let c = 0; c < inputValue.length; c++) {
        if(inputChange[c] != "") {
          changeHertzArray[c].classList.add('selectColor');
        }
        else {
          changeHertzArray[c].classList.remove('selectColor');
        }
        if(inputChange[c][0] == "-" && inputChange[c] != "") {
          inputChange[c] = inputChange[c].replace(/-/i,"+");
        }
        else if(inputChange[c] != "") {
          inputChange[c] = "-"+inputChange[c];
        }
        frequencyNowArray[c].value = inputValue[c];
        changeHertzArray[c].value = inputChange[c];
      }
      for (let a in information) {
        for (let i = 0; i < information[a].childElementCount; i++) {
          if (information[a].children[i].querySelector(".changeHertz").classList.contains("selectColor")) {
          if(constructionSelect[+a + (constructionSelect.length-1 - (+a + +a))].classList
          .contains("constructionSelectActive") === false) {
            setTimeout(function(){
              constructionSelect[+a + (constructionSelect.length-1 - (+a + +a))].classList.add("constructionSelectActive");
            }, 1000 - new Date().getMilliseconds());
          }
          if(audioPlayer.autoplay === false) {
            clearTimeout(audioPlayerTimeout);
            audioPlayer.autoplay = true;
            audioPlayer.src = languageOfAlert;
            audioPlayer.volume = sound.value/100;
            audioPlayerTimeout = setTimeout(function() {
              audioPlayer.autoplay = false;
            }, 8000);
          }
          break;
          }
          else if (information[a].children[information[a].childElementCount-1].querySelector(".changeHertz").classList
          .contains("selectColor") === false && i === information[a].childElementCount-1 &&
          constructionSelect[+a + (constructionSelect.length-1 - (+a + +a))].classList.contains("constructionSelectActive")) {
            constructionSelect[+a + (constructionSelect.length-1 - (+a + +a))].classList.remove("constructionSelectActive");
          }
        }
      }
      if(audioPlayer.autoplay === true) {
        for (let i in constructionSelect) {
          if (constructionSelect[i].classList.contains("constructionSelectActive")) {
            break;
          }
          else if (constructionSelect[constructionSelect.length-1].classList.contains("constructionSelectActive") === false &&
          i > constructionSelect.length-2) {
            audioPlayer.autoplay = false;
            audioPlayer.src = languageOfAlert;
          }
        }
      }
    }
  }
  xhr.send();
}, 1000);
