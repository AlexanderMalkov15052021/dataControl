  const elementsClassSF = ["leftSideLever", "rightSideLever", "upSideLever", "frameBunker", "reducerBunker", "casingBunker",
"casingUpFrontBunker", "motorBunker", "shaftBunker", "buncerMotorCap", "bunkerMotorSupport", "bunkerMotorBox", "bunkerWiring",
"bunkerShiftWiring", "fixingPlate", "fixingPlateCap", "wrapperFixingPlate", "bunkerPlate", "frameBunkerDiagonalRight",
"frameBunkerDiagonalLeft", "bunkerWalls", "bunkerRoller", "gate", "gateLever", "gateLeverRound", "gateControl",
"gateControlLever"];
  const perspectiveInsert = attributes => perspective[4].insertAdjacentHTML("beforeEnd", attributes);
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[0]}\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[1]}\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[2]}\"></div>`;
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"transform: translateX(55px)`+
`translateY(-20px) translateZ(50px) rotateX(90deg);\"><div/>`);
perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"transform: translateX(15px)`+
`translateY(-20px) translateZ(50px) rotateX(90deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"height: 50px;`+
`transform: translateX(-45px) translateY(5px) translateZ(-3px) rotateX(90deg) rotateZ(90deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"transform: translateX(-23.5px)`+
`translateY(-19.5px) translateZ(50px) rotateX(90deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"height: 50px;`+
`transform: translateX(-45px) translateY(-55px) translateZ(-3px) rotateX(-90deg) rotateZ(90deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"transform: translateX(-23.5px)`+
`translateY(-80.5px) translateZ(50px) rotateX(90deg) rotateY(180deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"transform: translateX(55px)`+
`translateY(-80.5px) translateZ(50px) rotateX(90deg) rotateY(180deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"transform: translateX(15px)`+
`translateY(-80.5px) translateZ(50px) rotateX(90deg) rotateY(180deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"height: 60px;`+
`transform: translateX(-70px) translateZ(-3px) translateY(-30px) rotateY(-90deg);\"><div/>`);
  perspectiveInsert(`<div class=${elementsClassSF[3]} style=\"height: 60px;`+
`transform: translateX(-43px) translateY(-30px) translateZ(-3px) rotateY(90deg);\"><div/>`);
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[4]}\" style=\"transform: translateX(-68px)`+
`translateY(-20px) translateZ(25px);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[4]}\" style=\"transform: translateX(-68px)`+
`translateY(-20px) translateZ(25px) rotateX(180deg) rotateY(180deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[5]}\" style=\"transform: translateX(-65.8px)`+
`translateY(-8px) translateZ(24.5px) rotateX(90deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[5]}\" style=\"transform: translateX(-66px)`+
`translateY(0px) translateZ(24.5px) rotateX(90deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[6]}\" style=\"transform: translateX(-66px)`+
`translateY(-2.8px) translateZ(29.7px) rotateX(0deg);\"></div>`;
  shiftDegree_Y = 0;
  for(let i = 0; i < 4; i++) {
      perspective[4].innerHTML += `<div class=\"${elementsClassSF[7]}\" style=\"transform: translateX(-56px)`+
    `translateY(8px) translateZ(15px) rotateY(${shiftDegree_Y}deg) translateZ(8px);\"></div>`;
    shiftDegree_Y += 90;
  }
  shiftDegree_Y = 0;
  for(let i = 0; i < 2; i++) {
      perspective[4].innerHTML += `<div class=\"${elementsClassSF[8]}\" style=\"transform: translateX(-57px)`+
    `translateY(-10px) translateZ(15px) rotateY(${shiftDegree_Y}deg) translateZ(3px);\"></div>`;
    shiftDegree_Y += 180;
  }
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[9]}\" style=\"transform: translateX(-62px)`+
`translateY(20px) translateZ(15px) rotateX(90deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[10]}\" style=\"transform: translateX(-64px)`+
`translateY(8px) translateZ(7px);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[10]}\" style=\"transform: translateX(-64px)`+
`translateY(8px) translateZ(7px) rotateX(180deg) rotateY(180deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[11]}\" style=\"transform: translateX(-57px)`+
`translateY(12px) translateZ(28px);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[11]}\" style=\"transform: translateX(-57px)`+
`translateY(12px) translateZ(28px) rotateX(180deg) rotateY(180deg);\"></div>`;
shiftDegree_X = 0;
for(let i = 0; i < 2; i++) {
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[12]}\" style=\"transform: translateX(-35px)`+
`translateY(22.7px) rotateX(90deg)`+
`translateZ(15px) rotateY(${shiftDegree_Y}deg) translateZ(1.5px);\"></div>`;
  shiftDegree_Y += 180;
}
shiftDegree_Y = 0;
shiftDegree_X = 0;
for(let i = 0; i < 5; i++) {
  for(let a = 0; a < 2; a++) {
    perspective[4].innerHTML += `<div class=\"${elementsClassSF[13]}\" style=\"transform: translateX(-50px)`+
  `translateY(12px) translateZ(10px) rotateZ(90deg)`+
  `rotateX(${shiftDegree_X}deg) translateZ(15px) rotateY(${shiftDegree_Y}deg) translateZ(1.5px);\"></div>`;
    shiftDegree_Y += 180;
  }
  shiftDegree_X += 22;
}
perspective[4].innerHTML += `<div class=\"${elementsClassSF[16]}\"></div>`;

shiftDegree_Y = 0;
for(let i = 0; i < 3; i++) {
    perspective[4].lastChild.innerHTML += `<div class=\"${elementsClassSF[14]}\" style=\"transform: translateX(-6.5px) `+
  `translateY(-3px) translateZ(10.5px) rotateY(${shiftDegree_Y}deg) translateZ(6px);\"></div>`;
  shiftDegree_Y += 120;
}
  perspective[4].lastChild.innerHTML += `<div class=\"${elementsClassSF[15]}\" style=\"transform: translateX(-9.9px) `+
`translateY(-1.5px) translateZ(10.5px) rotateX(90deg);\"></div>`;
  perspective[4].lastChild.innerHTML += `<div class=\"${elementsClassSF[17]}\" style=\"transform: translateX(1px) `+
`translateY(-30.5px) translateZ(8px);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[18]}\" style=\"transform: translateX(-45px) `+
`translateY(-14px) translateZ(36px) rotateX(90deg) rotateZ(-30deg); background-color: transparent; `+
`background-image: linear-gradient(-60deg, transparent 10%, `+
`#555555 10% 40%, `+
`transparent 40%), linear-gradient(30deg, transparent 24%, #555555 24% 96.4%, `+
`transparent 96.4%);\"></div>`;
 perspective[4].innerHTML += `<div class=\"${elementsClassSF[19]}\" style=\"transform: translateX(-45px) `+
`translateY(-74.5px) translateZ(36px) rotateX(90deg) rotateZ(-30deg); background-color: transparent; `+
`background-image: linear-gradient(-60deg, transparent 10%, `+
`#555555 10% 40%, `+
`transparent 40%), linear-gradient(30deg, transparent 24%, #555555 24% 96.4%, `+
`transparent 96.4%);\"></div>`;
perspective[4].innerHTML += `<div class=\"${elementsClassSF[20]}\" style=\"transform: translateX(-31px) `+
`translateY(-15.5px) translateZ(54.5px) rotateX(90deg); `+
`background-image: linear-gradient(-67deg, #686868 71%, `+
`transparent 71%);\"></div>`;
shiftDegree_Y = 0;
for(let i = 0; i < 3; i++) {
    perspective[4].innerHTML += `<div class=\"${elementsClassSF[21]}\" style=\"transform: translateX(16.5px)`+
  `translateY(-30px) translateZ(5px) rotateY(${shiftDegree_Y}deg) translateZ(4px);\"></div>`;  /* Мотор */
  shiftDegree_Y += 120;
}
shiftDegree_Y = 0;
for(let i = 0; i < 3; i++) {
    perspective[4].innerHTML += `<div class=\"${elementsClassSF[21]}\" style=\"transform: translateX(57px)`+
  `translateY(-30px) translateZ(5px) rotateY(${shiftDegree_Y}deg) translateZ(4px);\"></div>`;
  shiftDegree_Y += 120;
}
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[22]}\" style=\"transform: translateX(35px) `+
`translateY(-30px) translateZ(70px) rotateY(90deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[23]}\" style=\"transform: translateX(71px) `+
`translateY(-34.8px) translateZ(85px) rotateY(90deg) rotateX(-90deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[23]}\" style=\"transform: translateX(71px) `+
`translateY(18.2px) translateZ(85px) rotateY(90deg) rotateX(90deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[23]}\" style=\"transform: translateX(71px) `+
`translateY(18.2px) translateZ(55px) rotateY(90deg) rotateX(90deg);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[23]}\" style=\"transform: translateX(71px) `+
`translateY(-34.8px) translateZ(55px) rotateY(90deg) rotateX(-90deg);\"></div>`;
shiftDegree_Y = 0;
for(let i = 0; i < 2; i++) {
    perspective[4].innerHTML += `<div class=\"${elementsClassSF[24]}\" style=\"transform: translateX(78px)`+
  `translateY(-30px) translateZ(85px) rotateY(${shiftDegree_Y}deg) translateZ(2.5px);\"></div>`;
  shiftDegree_Y += 180;
}
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[25]}\" style=\"transform: translateX(74px)`+
`translateY(29.5px) translateZ(88px);\"></div>`;
  perspective[4].innerHTML += `<div class=\"${elementsClassSF[25]}\" style=\"transform: translateX(74px)`+
`translateY(29.5px) translateZ(88px) rotateX(180deg) rotateY(180deg);\"></div>`;
perspective[4].innerHTML += `<div class=\"${elementsClassSF[26]}\" style=\"transform: translateX(80px)`+
`translateY(30px) translateZ(88px);\"></div>`;
perspective[4].innerHTML += `<div class=\"${elementsClassSF[26]}\" style=\"transform: translateX(80px)`+
`translateY(30px) translateZ(88px) rotateX(180deg) rotateY(180deg);\"></div>`;
for(let elem of perspective[4].childNodes) {
  elem.style.margin = "45px 0 0 40px";
}
shiftDegree_Y = 90;
shiftDegree_X = 0;