let information = [...document.getElementsByClassName('information')];
let page = document.location.href;
const visibleConstruction = document.querySelector(".visiblePartConstruction");
const constructionName = ["Питатель качающийся", "Вибрационный питатель", "Сетчатый конвейер", "Конвейер подачи", "Вентилятор"];
for (let i = 0; i < 5; i++) {
  if (i > 3) {
    for (let a = 0; a < 5; a++) {
      information[i].appendChild(document.createElement("div")).classList.add("columnInfo");
    }
  }
  else if (i > 0) {
    for (let a = 0; a < 6; a++) {
      information[i].appendChild(document.createElement("div")).classList.add("columnInfo");
    }
  }
  else {
    for (let a = 0; a < 18; a++) {
      a < 9 ? information[i].appendChild(document.createElement("div")).classList.add("columnInfo") :
    information[i].innerHTML += "<div class=\"columnInfo\" style=\"margin-top: 5px; \" ></div> ";
    }
  }
}
const column = document.getElementsByClassName('columnInfo');
if (window.innerWidth > "599") {
  information[4].firstChild.style.marginLeft = "101.3px";
  for (let i = 1; i < 4; i++) {
    information[i].firstChild.style.marginLeft = "76.4px";
  }
}
else {
  information[4].firstChild.style.marginLeft = "75.4px";
  for (let i = 1; i < 4; i++) {
    information[i].firstChild.style.marginLeft = "56.5px";
  }
}
for (let i = 0; i < 41; i++) {
  document.getElementsByClassName('columnInfo')[i].appendChild(document.createElement("div")).classList.add("positionName");
  if(page  === "http://localhost/dataControl.php?send=supervisor") {
    column[i].innerHTML += "<input class=\"changeHertz\" disabled "+
  "style=\"cursor: default; color: black; \" ></input> ";
  }
  else {
    document.getElementsByClassName('columnInfo')[i].appendChild(document.createElement("input")).classList.add("escapeHertz");
    document.getElementsByClassName('columnInfo')[i].appendChild(document.createElement("input")).classList.add("changeHertz");
  }
  document.getElementsByClassName('columnInfo')[i].appendChild(document.createElement("button")).classList.add("arrowPlus");
  if(page  === "http://localhost/dataControl.php?send=supervisor") {
    document.getElementsByClassName('columnInfo')[i].appendChild(document.createElement("input")).classList.add("frequencyEscape");
    document.getElementsByClassName('columnInfo')[i].appendChild(document.createElement("input")).classList.add("frequencyNow");
  }
  else {
    column[i].innerHTML += "<input class=\"frequencyNow\" disabled "+
  "style=\"cursor: default; color: black; \" ></input> ";
  }
  document.getElementsByClassName('columnInfo')[i].appendChild(document.createElement("button")).classList.add("arrowMinus");
  document.getElementsByClassName('columnInfo')[i].appendChild
 (document.createElement("button")).classList.add("cAndFConfirmationButton");
  document.getElementsByClassName('columnInfo')[i].lastChild.innerHTML = "Ввод";
  if (i < 18) {
    document.getElementsByClassName('columnInfo')[i].firstChild.innerHTML = "К" + (i + 1);
  }
  else if (i < 36) {
    document.getElementsByClassName('columnInfo')[i].firstChild.innerHTML = "У" + ((i - 18) % 6 + 1);
  }
  else {
    document.getElementsByClassName('columnInfo')[i].firstChild.innerHTML = "Б" + (i - 35);
  }

}
visibleConstruction.appendChild(document.createElement("nav"));
for (let i = 0; i < 5; i++) {
  visibleConstruction.children[1].innerHTML += `<button class="constructionSelect"
style="margin-top: ${4}px;">${constructionName[i]}</button>`;
}
document.getElementsByClassName('constructionSelect')[1].style.letterSpacing = "-.4px";
if (window.innerWidth > "999") {
  document.getElementsByClassName('constructionSelect')[0].style.letterSpacing = "1.2px";
}
else {
  document.getElementsByClassName('constructionSelect')[0].style.letterSpacing = ".7px";
}
