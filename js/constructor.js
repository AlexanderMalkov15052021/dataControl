const buttonPerspective = document.getElementsByClassName('buttonPerspective'),
      perspective = document.getElementsByClassName('perspective'),
      blockPerspective = document.getElementsByClassName('blockPerspective')[0],
      blockInformation = document.getElementsByClassName('blockInformation')[0],
      moveBtn = document.getElementsByClassName('moveBtn'),
      sound = document.getElementById('sound'),
      visiblePartSet = document.getElementsByClassName('visiblePartSet')[0],
      constructionSelect = [...document.getElementsByClassName('constructionSelect')];
let shiftDegree_Y = 90,
    shiftDegree_X = 0,
    shiftDegree_Z = 0,
    shiftAngle_Y = 0,
    movePx = -1000,
    languageOfAlert = "alertSound/alertSoundRuss.mp3";
const createPart = (elementsClass, perspectiveNumber) =>
perspective[perspectiveNumber].appendChild(document.createElement("div")).classList.add(elementsClass);
const rotationOnClickingButton = () => {
  for(let i = 0; i < perspective.length; i++) {
    perspective[i].style.animationName = "rotateAnim_"+i;
    setTimeout('perspective['+i+'].style.animationName = "rotateAnim"', 1500);
  }
};
var buttonRemove = document.getElementById("buttonRemove");
var buttonMoveConstruction = document.querySelector("#buttonMoveConstructionRight");
var buttonMoveConstruction = document.querySelector("#buttonMoveConstructionLeft");
    perspective[0].style.marginLeft = "65px";
    perspective[0].style.marginTop = "-83px";
    perspective[0].style.zoom = ".85";
    perspective[1].style.marginTop = "-95px";
    perspective[1].style.marginLeft = "2180px";
    perspective[1].style.transform = "perspective(500px) rotateX(45deg) rotateZ(40deg)";
    perspective[1].style.zoom = ".5";
    perspective[2].style.marginTop = "-165px";
    perspective[2].style.marginLeft = "750px";
    perspective[2].style.transform = "perspective(500px) rotateX(45deg) rotateZ(135deg)";
    perspective[2].style.zoom = ".8";
    perspective[3].style.marginTop = "-173px";
    perspective[3].style.marginLeft = "1340px";
    perspective[3].style.transform = "perspective(500px) rotateX(65deg) rotateZ(-125deg)";
    perspective[3].style.zoom = "1.2";
    perspective[4].style.marginTop = "-172px";
    perspective[4].style.marginLeft = "1730px";
    perspective[4].style.transform = "perspective(500px) rotateX(45deg) rotateZ(-135deg)";
    perspective[4].style.zoom = "1.2";
    if (window.innerWidth > "999") {
      movePx = -1600;
      perspective[0].style.marginLeft = "240px";
      perspective[0].style.marginTop = "-80px";
      perspective[0].style.zoom = "1.25";
      perspective[1].style.marginTop = "-100px";
      perspective[1].style.marginLeft = "2400px";
      perspective[1].style.zoom = ".8";
      perspective[2].style.marginTop = "-185px";
      perspective[2].style.marginLeft = "920px";
      perspective[2].style.zoom = "1.2";
      perspective[3].style.marginTop = "-160px";
      perspective[3].style.marginLeft = "1690px";
      perspective[3].style.zoom = "1.6";
      perspective[4].style.marginTop = "-168px";
      perspective[4].style.marginLeft = "2060px";
      perspective[4].style.zoom = "1.7";
    }
    else if (window.innerWidth > "599") {
      movePx = -1400;
      perspective[0].style.marginLeft = "195px";
      perspective[0].style.marginTop = "-90px";
      perspective[0].style.zoom = "1.1";
      perspective[1].style.marginTop = "-55px";
      perspective[1].style.marginLeft = "2750px";
      perspective[1].style.zoom = ".6";
      perspective[2].style.marginTop = "-165px";
      perspective[2].style.marginLeft = "920px";
      perspective[2].style.zoom = "1";
      perspective[3].style.marginTop = "-160px";
      perspective[3].style.marginLeft = "1660px";
      perspective[3].style.zoom = "1.4";
      perspective[4].style.marginTop = "-170px";
      perspective[4].style.marginLeft = "2015px";
      perspective[4].style.zoom = "1.5";
    }
    blockPerspective.style.marginLeft = movePx+"px";
    blockInformation.style.marginLeft = movePx+"px";
    function moveConstructionRight() {
      if(movePx < 0) {
        if (window.innerWidth > "999") {
          movePx += 800;
        }
        else if (window.innerWidth > "599") {
          movePx += 700;
        }
        else {
          movePx += 500;
        }
        rotationOnClickingButton();
      }
      else {
        movePx;
      }
      if (movePx < 0) {
        moveBtn[0].classList.add("moveBtnSetAnim")
        if (window.innerWidth > "599") {
          visiblePartSet.style.height = "250px";
        }
        else {
          visiblePartSet.style.height = "187px";
        }
      }
      else {
        moveBtn[0].style.backgroundPosition = "0px -19px, 0px 5px";
        visiblePartSet.style.height = "auto";
      }
      setTimeout('moveBtn[0].classList.remove("moveBtnSetAnim")', 1000);
      moveBtn[1].style.backgroundPosition = "0px -11px, 0 -6px";
      constructionSelect.forEach(elem => elem.classList.remove("constructionSelectShadow"));
      if (window.innerWidth > "999") {
        constructionSelect[movePx/800+4].classList.add("constructionSelectShadow");
      }
      else if (window.innerWidth > "599") {
        constructionSelect[movePx/700+4].classList.add("constructionSelectShadow");
      }
      else {
        constructionSelect[movePx/500+4].classList.add("constructionSelectShadow");
      }
      blockPerspective.style.marginLeft = movePx+"px";
      blockInformation.style.marginLeft = movePx+"px";
    };
    function moveConstructionLeft() {
      if (window.innerWidth > "999" && movePx > -3200) {
        movePx -= 800;
        rotationOnClickingButton();
      }
      else if (window.innerWidth > "599" && movePx > -2800) {
        movePx -= 700;
        rotationOnClickingButton();
      }
      else if (window.innerWidth < "600" && movePx > -2000) {
        movePx -= 500;
        rotationOnClickingButton();
      }
      else {
        movePx;
      }
      moveBtn[0].style.backgroundPosition = "0px -11px, 0 -6px";
      if (window.innerWidth > "599" && movePx > -2800) {
        moveBtn[1].classList.add("moveBtnSetAnim")
        if (window.innerWidth > "599") {
          visiblePartSet.style.height = "250px";
        }
        else {
          visiblePartSet.style.height = "187px";
        }
      }
      else if (window.innerWidth < "600" && movePx > -2000) {
        moveBtn[1].classList.add("moveBtnSetAnim")
        if (window.innerWidth > "599") {
          visiblePartSet.style.height = "250px";
        }
        else {
          visiblePartSet.style.height = "187px";
        }
      }
      else {
        moveBtn[1].style.backgroundPosition = "0px -19px, 0px 5px";
        if (window.innerWidth > "599") {
          visiblePartSet.style.height = "250px";
        }
        else {
          visiblePartSet.style.height = "187px";
        }
      }
      setTimeout('moveBtn[1].classList.remove("moveBtnSetAnim")', 1000);
      blockPerspective.style.marginLeft = movePx+"px";
      blockInformation.style.marginLeft = movePx+"px";
      constructionSelect.forEach(elem => elem.classList.remove("constructionSelectShadow"));
      if (window.innerWidth > "999") {
        constructionSelect[movePx/800+4].classList.add("constructionSelectShadow");
      }
      else if (window.innerWidth > "599") {
        constructionSelect[movePx/700+4].classList.add("constructionSelectShadow");
      }
      else {
        constructionSelect[movePx/500+4].classList.add("constructionSelectShadow");
      }
    };
    moveBtn[0].addEventListener("click", moveConstructionRight);
    moveBtn[1].addEventListener("click", moveConstructionLeft);
    constructionSelect.forEach((elem, i) => elem.addEventListener("click", () => {
      if (window.innerWidth > "999") {
        blockPerspective.style.marginLeft = (i-4)*800+"px";
        blockInformation.style.marginLeft = (i-4)*800+"px";
      }
      else if (window.innerWidth > "599") {
        blockPerspective.style.marginLeft = (i-4)*700+"px";
        blockInformation.style.marginLeft = (i-4)*700+"px";
      }
      else {
        blockPerspective.style.marginLeft = (i-4)*500+"px";
        blockInformation.style.marginLeft = (i-4)*500+"px";
      }
      constructionSelect.forEach(elem => elem.classList.remove("constructionSelectShadow"));
      constructionSelect[i].classList.add("constructionSelectShadow");
      if (window.innerWidth > "999") {
        movePx = (i-4)*800;
      }
      else if (window.innerWidth > "599") {
        movePx = (i-4)*700;
      }
      else {
        movePx = (i-4)*500;
      }
      if (movePx === 0 && window.getComputedStyle(moveBtn[0]).backgroundPosition != "0px -19px, 0px 5px") {
        moveBtn[0].style.backgroundPosition = "0px -19px, 0px 5px";
        moveBtn[1].style.backgroundPosition = "0px -11px, 0px -6px";
        visiblePartSet.style.height = "auto";
        rotationOnClickingButton();
      }
      else if (window.innerWidth > "999" && movePx < -3599 && window.getComputedStyle(moveBtn[1])
      .backgroundPosition != "0px -19px, 0px 5px") {
        moveBtn[0].style.backgroundPosition = "0px -11px, 0px -6px";
        moveBtn[1].style.backgroundPosition = "0px -19px, 0px 5px";
        rotationOnClickingButton();
      }
      else if (window.innerWidth > "599" && movePx < -2799 && window.getComputedStyle(moveBtn[1])
      .backgroundPosition != "0px -19px, 0px 5px") {
        moveBtn[0].style.backgroundPosition = "0px -11px, 0px -6px";
        moveBtn[1].style.backgroundPosition = "0px -19px, 0px 5px";
        rotationOnClickingButton();
      }
      else if (window.innerWidth < "1000" && movePx < -3599 && window.getComputedStyle(moveBtn[1])
      .backgroundPosition != "0px -19px, 0px 5px") {
        moveBtn[0].style.backgroundPosition = "0px -11px, 0px -6px";
        moveBtn[1].style.backgroundPosition = "0px -19px, 0px 5px";
        rotationOnClickingButton();
      }
      else if (window.innerWidth < "600" && movePx < -1999 && window.getComputedStyle(moveBtn[1])
      .backgroundPosition != "0px -19px, 0px 5px") {
        moveBtn[0].style.backgroundPosition = "0px -11px, 0px -6px";
        moveBtn[1].style.backgroundPosition = "0px -19px, 0px 5px";
        rotationOnClickingButton();
      }
      else if (window.innerWidth > "999" && movePx < 0 && movePx > -3200) {
        moveBtn[0].style.backgroundPosition = "0px -11px, 0px -6px";
        moveBtn[1].style.backgroundPosition = "0px -11px, 0px -6px";
        visiblePartSet.style.height = "250px";
        rotationOnClickingButton();
      }
      else if (window.innerWidth > "599" && movePx < 0 && movePx > -2000) {
        moveBtn[0].style.backgroundPosition = "0px -11px, 0px -6px";
        moveBtn[1].style.backgroundPosition = "0px -11px, 0px -6px";
        visiblePartSet.style.height = "250px";
        rotationOnClickingButton();
      }
      else if (window.innerWidth < "600" && movePx < 0 && movePx > -2000) {
        moveBtn[0].style.backgroundPosition = "0px -11px, 0px -6px";
        moveBtn[1].style.backgroundPosition = "0px -11px, 0px -6px";
        visiblePartSet.style.height = "187px";
        rotationOnClickingButton();
      }
    }));
    constructionSelect[2].classList.add("constructionSelectShadow");
window.onload = () => {
  informationMenu.style.transitionDuration = "1s";
  animatedElements.style.transitionDuration = "1s";
  moveBtn[0].style.transitionDuration = "1s";
  moveBtn[1].style.transitionDuration = "1s";
  blocksContainer.style.transitionDuration = "1s";
  animatedElements.style.transitionDelay = "0s, .7s";
  blockInformation.style.transitionDuration = "1s";
  blockPerspective.style.transitionDuration = "1s";
  for(let elem of perspective) {
    elem.style.transitionDuration = "3s";
  }
}