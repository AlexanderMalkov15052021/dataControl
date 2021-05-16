  const elementsClassVF = ["containerForVibro", "lowerVibroWall", "vibroWall", "vibroMotor", "vibroMotorSupport",
"vibroMotorCap", "vibroMotorBox", "vibroWiring", "vibroShiftWiring", "vibroBorder", "vibroFrame", "vibroFrameRound",
"vibroFrameSquare"];
perspective[3].appendChild(document.createElement("div")).classList.add(elementsClassVF[0]);
let createVibro = elementsClass => perspective[3].lastChild.appendChild(document.createElement("div")).classList.add(elementsClass);
createVibro(elementsClassVF[0]);
createVibro(elementsClassVF[1]);
createVibro(elementsClassVF[2]);
createVibro(elementsClassVF[5]);
createVibro(elementsClassVF[9]);
createVibro(elementsClassVF[12]);
  perspective[3].lastChild.innerHTML += `<div class="${elementsClassVF[2]}" style="transform: translateX(27px) `+
`translateY(-25px) rotateY(-90deg) rotateZ(30deg) translateY(-39px);"></div>`;
shiftDegree_Y = 0;
for(let i = 0; i < 4; i++) {
    perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[3]}\" style=\"transform: translateX(-3.1px) `+
  `translateY(-63.5px) translateZ(12px) rotateX(-30deg) rotateY(${shiftDegree_Y}deg) translateZ(12px) translateY(31.5px);\"></div>`;
  shiftDegree_Y += 90;
}
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[4]}\" style=\"transform: translateX(-12px) `+
`translateY(-30px) translateZ(-6px) rotateX(150deg);\"></div>`;
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[4]}\" style=\"transform: translateX(-12px) `+
`translateY(-30px) translateZ(-6px) rotateX(-30deg) rotateY(180deg);\"></div>`;
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[6]}\" style=\"transform: translateX(-5px) `+
`translateY(-62px) translateZ(-6px) rotateX(150deg) translateY(-35px);\"></div>`;
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[6]}\" style=\"transform: translateX(-5px) `+
`translateY(-62px) translateZ(-6px) rotateX(-30deg) rotateY(180deg) translateY(35px);\"></div>`;
shiftDegree_X = 0;
for(let i = 0; i < 2; i++) {
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[7]}\" style=\"transform: translateX(-24px)`+
`translateY(-54px) translateZ(-19px) rotateY(${shiftDegree_Y}deg) translateZ(2px);\"></div>`;
  shiftDegree_Y += 180;
}
shiftDegree_Y = 0;
shiftDegree_X = 0;
for(let i = 0; i < 5; i++) {
  for(let a = 0; a < 2; a++) {
    perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[8]}\" style=\"transform: translateX(-9px)`+
  `translateY(-40px) translateZ(-19px) rotateZ(-90deg) rotateY(-90deg)`+
  `rotateX(${shiftDegree_X}deg) translateZ(15px) rotateY(${shiftDegree_Y}deg) translateZ(2px);\"></div>`;
    shiftDegree_Y += 180;
  }
  shiftDegree_X += 22;
}
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[10]}\" style=\"transform: translateX(-60px) `+
`translateY(-50px) translateZ(42px) rotateX(90deg) rotateY(-90deg) rotateZ(30deg);\"></div>`;
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[10]}\" style=\"transform: translateX(50px) `+
`translateY(-50px) translateZ(42px) rotateX(90deg) rotateY(90deg) rotateZ(-30deg);\"></div>`;
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[10]}\" style=\"height: 23px; transform: translateX(-60px) `+
`translateY(-55px) translateZ(40px) rotateX(90deg) rotateY(-90deg) rotateZ(30deg) `+
`translateX(-100px);\"></div>`;
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[10]}\" style=\"height: 23px; transform: translateX(50px) `+
`translateY(-55px) translateZ(40px) rotateX(90deg) rotateY(90deg) rotateZ(-30deg) `+
`translateX(100px);\"></div>`;
shiftDegree_Y = 0;
for(let i = 0; i < 3; i++) {
    perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[11]}\" style=\"transform: translateX(-23px) `+
  `translateY(-44px) translateZ(21px) rotateZ(90deg) rotateY(${shiftDegree_Y}deg) translateZ(5px) translateY(31.5px);\"></div>`;
  shiftDegree_Y += 120;
}
shiftDegree_Y = 0;
for(let i = 0; i < 3; i++) {
    perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[11]}\" style=\"transform: translateX(82px) `+
  `translateY(-44px) translateZ(21px) rotateZ(90deg) rotateY(${shiftDegree_Y}deg) translateZ(5px) translateY(31.5px);\"></div>`;
  shiftDegree_Y += 120;
}
shiftDegree_Y = 0;
for(let i = 0; i < 3; i++) {
    perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[11]}\" style=\"transform: translateX(-23px) `+
  `translateY(34px) translateZ(-23px) rotateZ(90deg) rotateY(${shiftDegree_Y}deg) translateZ(5px) translateY(31.5px);\"></div>`;
  shiftDegree_Y += 120;
}
shiftDegree_Y = 0;
for(let i = 0; i < 3; i++) {
    perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[11]}\" style=\"transform: translateX(82px) `+
  `translateY(34px) translateZ(-23px) rotateZ(90deg) rotateY(${shiftDegree_Y}deg) translateZ(5px) translateY(31.5px);\"></div>`;
  shiftDegree_Y += 120;
}
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[12]}\" style=\"transform: translateX(43px) `+
`translateY(-49px) translateZ(15.5px);\"></div>`;
  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[12]}\" style=\"transform: translateX(-59px) `+
`translateY(29px) translateZ(-28.5px);\"></div>`;

  perspective[3].lastChild.innerHTML += `<div class=\"${elementsClassVF[12]}\" style=\"transform: translateX(43px) `+
`translateY(29px) translateZ(-28.5px);\"></div>`;
for(let elem of perspective[3].lastChild.childNodes) {
  elem.style.margin = "45px 0 0 50px";
}
shiftDegree_Y = 90;
shiftDegree_X = 0;