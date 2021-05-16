const elementsClass_1 = ["meshLong", "meshQuarterCircle", "meshDownStretch", "meshMotorHalfUpCircle", "meshMotorHalfDownCircle",
"supportStretch", "meshеTail", "tailStar", "star", "shaftMesh", "starStretch", "tobeStretch", "frameDown", "frameUp",
"frameVertical", "supportMeshMotor", "meshReducer", "shaftMeshMotor", "MeshMotor", "recapMotor", "couplingMeshMotor",
"footingMeshAxlebox", "halfCircleMeshAxlebox", "recapMeshAxlebox", "boxMotor", "cableMeshMotor"];
  for(let i = 0; i < 6; i++) {
    createPart(elementsClass_1[i], 1);
  }
  shiftDegree_Y = 0;
  for(let i = 6; i < 7; i++) {
    for(let a = 0; a < 2; a++) {
      createPart(elementsClass_1[i], 1);
      perspective[1].lastChild.style.transform = "translateZ(42px) translateX(-87px) rotateY(-14deg) translateZ(-18.6px)"+
      "rotateY("+shiftDegree_Y+"deg) translateZ(18.6px)";
      shiftDegree_Y += -90;
    }
  }
  createPart(elementsClass_1[7], 1);
  perspective[1].lastChild.style.transform = "translateZ(24px) translateX(-92px) translateY(86px) rotateX(90deg)";
  createPart(elementsClass_1[7], 1);
  perspective[1].lastChild.style.transform = "translateZ(24px) translateX(-92px) translateY(-16px) rotateX(90deg)";
  createPart(elementsClass_1[8], 1);
  perspective[1].lastChild.style.transform = "translateZ(43px) translateX(-25px) translateY(-18px) rotateX(90deg)";
  createPart(elementsClass_1[8], 1);
  perspective[1].lastChild.style.transform = "translateZ(23px) translateX(140px) translateY(-18px) rotateX(90deg)";
  createPart(elementsClass_1[8], 1);
  perspective[1].lastChild.style.transform = "translateZ(43px) translateX(278px) translateY(-18px) rotateX(90deg)";
  shiftDegree_Y = 0;
  for(let a = 0; a < 3; a++) {
    createPart(elementsClass_1[9], 1);
    perspective[1].lastChild.style.transform = "translateX(-78px) translateZ(23px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(4px)";
    shiftDegree_Y += 120;
  }
  shiftDegree_Y = 0;
  for(let a = 0; a < 3; a++) {
    createPart(elementsClass_1[9], 1);
    perspective[1].lastChild.style.transform = "translateX(-10px) translateZ(45px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(4px)";
    shiftDegree_Y += 120;
  }
  shiftDegree_Y = 0;
  for(let a = 0; a < 3; a++) {
    createPart(elementsClass_1[9], 1);
    perspective[1].lastChild.style.transform = "translateX(155px) translateZ(23px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(4px)";
    shiftDegree_Y += 120;
  }
  shiftDegree_Y = 0;
  for(let a = 0; a < 3; a++) {
    createPart(elementsClass_1[9], 1);
    perspective[1].lastChild.style.transform = "translateX(293px) translateZ(42px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(4px)";
    shiftDegree_Y += 120;
  }
  var shiftDistance_Z = 0;
  for(let i = 10; i < 11; i++) {
    for(let a = 0; a < 2; a++) {
      createPart(elementsClass_1[i], 1);
      perspective[1].lastChild.style.transform = "translateZ(21px) translateX(185px) translateY(-8px) rotateX(-90deg)"+
      "translateZ("+shiftDistance_Z+"px)";
      shiftDistance_Z += 100;
    }
  }
  shiftDegree_Y = 0;
  for(let b = 0; b < 2; b++) {
    createPart(elementsClass_1[11], 1);
    perspective[1].lastChild.style.transform = "rotateX(90deg) translateX(180px) translateY(25px)  translateZ(20px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(2px)";
    shiftDegree_Y += 180;
  }
  shiftDegree_Y = 0;
  for(let b = 0; b < 2; b++) {
    createPart(elementsClass_1[11], 1);
    perspective[1].lastChild.style.transform = "rotateX(90deg) translateX(180px) translateY(25px)  translateZ(-88px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(2px)";
    shiftDegree_Y += 180;
  }
  shiftDegree_Y = 0;
  createPart(elementsClass_1[12], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) rotateZ(90deg) translateZ(208px) translateY(-102px)"+
  "translateX(2px) rotateY("+shiftDegree_Y+"deg)";
  shiftDegree_Y += 180;
  createPart(elementsClass_1[12], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) rotateZ(90deg) translateZ(102.5px) translateY(-102px)"+
  "translateX(2px) rotateY("+shiftDegree_Y+"deg)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[13], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) rotateZ(90deg) translateZ(178.5px) translateY(-132px)"+
  "translateX(62px) rotateY("+shiftDegree_Y+"deg)";
  shiftDegree_Y += 180;
  createPart(elementsClass_1[13], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) rotateZ(90deg) translateZ(71.5px) translateY(-132px)"+
  "translateX(62px) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[14], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(25px) translateY(32px) translateX(201px) rotateY(0deg)";
  createPart(elementsClass_1[14], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(25px) translateY(32px) translateX(20px) rotateY(0deg)";
  createPart(elementsClass_1[14], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(25px) translateY(32px) translateX(110px) rotateY(0deg)";
  createPart(elementsClass_1[14], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(-78px) translateY(32px) translateX(201px) rotateY(180deg)";
  createPart(elementsClass_1[14], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(-78px) translateY(32px) translateX(20px) rotateY(180deg)";
  createPart(elementsClass_1[14], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(-78px) translateY(32px) translateX(110px) rotateY(180deg)";
  createPart(elementsClass_1[15], 1);
  perspective[1].lastChild.style.transform = "rotateX(180deg) translateZ(6px) translateY(-105px) translateX(270px) rotateY(0deg)";
  createPart(elementsClass_1[15], 1);
  perspective[1].lastChild.style.transform = "rotateX(0deg) translateZ(34px) translateY(120px) translateX(270px) rotateZ(90deg)";
  perspective[1].lastChild.style.height = "40px";
  createPart(elementsClass_1[16], 1);
  perspective[1].lastChild.style.transform = "rotateY(90deg) translateZ(265px) translateY(128px) translateX(-46px) rotateZ(0deg)";
  createPart(elementsClass_1[16], 1);
  perspective[1].lastChild.style.transform = "rotateY(-90deg) rotateZ(90deg) translateZ(-304.7px) translateY(-45.9px)"+
  "translateX(127.9px) rotateZ(0deg)";
  shiftDegree_Y = 0;
  for(var i = 0; i < 3; i++) {
    createPart(elementsClass_1[17], 1);
    perspective[1].lastChild.style.transform = "translateX(293px) translateZ(42px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(4px) translateY(101.5px)";
    shiftDegree_Y += 120;
  }
  shiftDegree_Y = 0;
  for(var i = 0; i < 4; i++) {
    createPart(elementsClass_1[18], 1);
    perspective[1].lastChild.style.transform = "rotateZ(90deg) translateX(128px) translateZ(46px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(12px) translateY(-327px)";
    shiftDegree_Y += 90;
  }
  createPart(elementsClass_1[19], 1);
  perspective[1].lastChild.style.transform = "rotateY(90deg) translateX(-46px) translateZ(331px) translateY(128px)";
  shiftDegree_Y = 0;
  for(var i = 0; i < 4; i++) {
    createPart(elementsClass_1[20], 1);
    perspective[1].lastChild.style.transform = "translateX(293px) translateZ(42px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px) translateY(88px)";
    shiftDegree_Y += 90;
  }
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(78px) translateX(-87px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(78px) translateX(-87px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(21px) translateY(76px) translateX(-79px) rotateY(-90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(-90deg) translateZ(77px) translateY(-24px) translateX(-84.7px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(-37px) translateX(-87px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(-37px) translateX(-87px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(21px) translateY(-33px) translateX(-79px) rotateY(-90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(-90deg) translateZ(-37.6px) translateY(-24px) translateX(-84.7px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(78px) translateX(-18px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(78px) translateX(-18px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  shiftDegree_Y = 0;
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(42px) translateY(76px) translateX(-10px) rotateY(90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(-76px) translateY(39px) translateX(-16px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(-37px) translateX(-18px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(-37px) translateX(-18px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  shiftDegree_Y = 0;
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(42px) translateY(-33px) translateX(-10px) rotateY(90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(37.6px) translateY(39px) translateX(-16px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(78px) translateX(146px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(78px) translateX(146px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(21px) translateY(76px) translateX(154px) rotateY(-90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(-90deg) translateZ(77px) translateY(-24px) translateX(148px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(-37px) translateX(146px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(14px) translateY(-37px) translateX(146px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(21px) translateY(-33px) translateX(154px) rotateY(-90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(-90deg) translateZ(-37.6px) translateY(-24px) translateX(148px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(78px) translateX(284px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(78px) translateX(284px) rotateX(90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(42px) translateY(76px) translateX(292px) rotateY(90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(-77px) translateY(39px) translateX(286px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(-37px) translateX(284px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[21], 1);
  perspective[1].lastChild.style.transform = "translateZ(49px) translateY(-37px) translateX(284px) rotateX(-90deg) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(180deg) ";
  for(var i = 0; i < 2; i++) {
    createPart(elementsClass_1[22], 1);
    perspective[1].lastChild.style.transform = "translateZ(42px) translateY(-33px) translateX(292px) rotateY(90deg) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(8px)";
    shiftDegree_Y += 120;
  }
  createPart(elementsClass_1[23], 1);
  perspective[1].lastChild.style.transform = "rotateX(90deg) translateZ(37.6px) translateY(39px) translateX(286px)";
  shiftDegree_Y = 0;
  createPart(elementsClass_1[24], 1);
  perspective[1].lastChild.style.transform = "translateZ(50px) translateY(125px) translateX(322px) rotateY("+shiftDegree_Y+"deg)";
  createPart(elementsClass_1[24], 1);
  perspective[1].lastChild.style.transform = "translateZ(50px) translateY(125px) translateX(322px) rotateY("+shiftDegree_Y+"deg)"+
  "rotateZ(90deg) rotateY(180deg) translateZ(10px)";
  for(var i = 0; i < 3; i++) {
    createPart(elementsClass_1[25], 1);
    perspective[1].lastChild.style.transform = "rotateX(90deg) translateX(325px) translateZ(-108px) rotateY("+shiftDegree_Y+"deg)"+
    "translateZ(1.5px) translateY(18px)";
    shiftDegree_Y += 120;
  }
  for(let elem of perspective[1].childNodes) {
    elem.style.margin = "0 0 0 -75px";
  }
    function stars(elemNumber, trZ, trX, trY, rtX, trZBefore) {
      elem[elemNumber].animate([
        { transform: "translateZ("+trZ+"px) translateX("+trX+"px) translateY("+trY+"px) rotateX("+rtX+"deg)"+
        "translateZ("+trZBefore+"px)"},
        { transform: "translateZ("+trZ+"px) translateX("+trX+"px) translateY("+trY+"px) rotateX("+rtX+"deg)"+
        "translateZ("+trZBefore+"px) rotateZ(-360deg)"}
      ], {
        duration: 3000,
        iterations: Infinity
      })
    }
    elem = document.getElementsByClassName('star');
    stars(0, 43, -25, -18, 90, 0);
    stars(1, 23, 140, -18, 90, 0);
    stars(2, 43, 278, -18, 90, 0);
    elem = document.getElementsByClassName('starStretch');
    stars(0, 18, 185, -8, -90, 0);
    stars(1, 18, 185, -8, -90, 100);
    elem = document.getElementsByClassName('tailStar');
    stars(0, 24, -89, 86, 90, 0);
    stars(1, 24, -89, -16, 90, 0);
    shiftDegree_Y = 90;
    shiftDegree_X = 0;