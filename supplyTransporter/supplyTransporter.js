  const elementsClassST = ["beltTransporter", "seam", "footingSupplyAxlebox", "recapSupplyAxlebox", "circleDrum",
"supportSupplyAlong", "supportSupplyAcross", "supportRoller", "supportRollerSlant", "supportRollerCorner",
"supportRollerStraight","boxSupplyMoto", "reducerSupply", "tensionAxlebox", "tensionStationHorizontal",
"tensionStationVertical", "latticeCover", "wallCover", "couplingMotorSupply", "supportSupplyReducer",
"shaftSupplyMotor" , "drumInternal" , "motorSupply", "edgeDrum", "roller", "shaftSupply", "stretchScrew",
"stretchBolt", "halfCircleSupplyAxlebox", "couplingBolt", "rollerDown", "drumExternal", "couplingSupplyMotor",
"cableSupplyMotor", "shaftSupplyTail"];
  const transformArr = ["translateZ(-10px)"+
"translateY(-141px) translateX(14px) rotateX(-90deg) rotateY(90deg) rotateZ(180deg) rotateX(180deg)", "translateZ(15px)"+
"translateY(-141px) translateX(10px) rotateX(-90deg) rotateY(90deg)", "translateZ(15px) translateY(-141px)"+
"translateX(14px) rotateX(-90deg) rotateY(90deg) rotateZ(180deg) rotateX(180deg)", "translateZ(-10px) translateY(-141px)"+
"translateX(-84px) rotateX(-90deg) rotateY(90deg)", "translateZ(-10px) translateY(-141px) translateX(-80px)"+
"rotateX(-90deg) rotateY(90deg) rotateZ(180deg) rotateX(180deg)", "translateZ(15px) translateY(-141px) translateX(-84px)"+
"rotateX(-90deg) rotateY(90deg)", "translateZ(15px) translateY(-141px) translateX(-80px) rotateX(-90deg) rotateY(90deg)"+
"rotateZ(180deg) rotateX(180deg)", "translateZ(3px) translateY(-107.8px) translateX(38px) rotateY(90deg)"+
"rotateX(180deg)", "translateZ(3px) translateY(-173.8px) translateX(34px) rotateY(90deg)", "translateZ(3px)"+
"translateY(-173.8px) translateX(38px) rotateY(90deg) rotateX(180deg)", "translateZ(3px) translateY(-107.8px)"+
"translateX(-60px) rotateY(90deg)", "translateZ(3px) translateY(-107.8px) translateX(-56px) rotateY(90deg)"+
"rotateX(180deg)", "translateZ(3px) translateY(-173.8px) translateX(-60px) rotateY(90deg)", "translateZ(3px)"+
"translateY(-173.8px) translateX(-56px) rotateY(90deg) rotateX(180deg)", "translateZ(-7.5px) translateY(135px)"+
"translateX(-80px) rotateZ(90deg) rotateY(180deg) translateZ(18px)", "translateZ(2px) translateY(112px) translateX(-83px)"+
"rotateZ(90deg) rotateY(180deg) translateZ(6px)", "translateX(-79px) translateZ(18px) translateY(-148px)"+
"rotateY(90deg) rotateZ(90deg)", "translateZ(28px) translateY(-175.6px) translateX(-41.8px)", "translateZ(3px)"+
"translateY(-161px) translateX(42px) rotateX(-90deg) rotateY(90deg) rotateZ(180deg) rotateX(180deg)", "translateZ(3px)"+
"translateY(-161px) translateX(-52px) rotateX(-90deg) rotateY(90deg) rotateZ(180deg) rotateX(180deg)", "translateZ(3px)"+
"translateY(-161px) translateX(-57px) rotateX(-90deg) rotateY(90deg)"];
  const styleTransform = transform => perspective[2].lastChild.style.transform = transform;
  for(let i = 0; i < 20; i++) {
    createPart(elementsClassST[i], 2);
  }
  createPart(elementsClassST[19], 2);
  perspective[2].lastChild.style.backgroundColor = "transparent";
  styleTransform(transformArr[14], 2);
  createPart(elementsClassST[11], 2);
  styleTransform(transformArr[15], 2);
  createPart(elementsClassST[17], 2);
  styleTransform(transformArr[16], 2);
  createPart(elementsClassST[16], 2);
  perspective[2].lastChild.style.width = "82.4px";
  perspective[2].lastChild.style.height = "75px";
  perspective[2].lastChild.style.backgroundPosition = "0 3px, 1px 0";
  styleTransform(transformArr[17], 2);
  let b = 0;
  for(let i = 14; i < 16; i++) {
    for(let a = 0 + b; a < 7 + b; a++) {
      perspective[2].appendChild(document.createElement("div")).classList.add(elementsClassST[i]);
      perspective[2].lastChild.style.transform = transformArr[a];
    }
    b += 7;
  }
  createPart(elementsClassST[13], 2);
  styleTransform(transformArr[18], 2);
  createPart(elementsClassST[13], 2);
  styleTransform(transformArr[19], 2);
  createPart(elementsClassST[13], 2);
  styleTransform(transformArr[20], 2);
  createPart(elementsClassST[12], 2);
  styleTransform("translateZ(0px) translateY(132px) translateX(-81px) rotateX(-90deg) rotateY(90deg) rotateZ(180deg)"+
  "rotateX(180deg)");
  createPart(elementsClassST[9], 2);
  styleTransform("translateX(20.2px) translateY(-93px) translateZ(.8px) rotateZ(90deg) rotateX(45deg)");
  createPart(elementsClassST[10], 2);
  styleTransform("translateX(-19px) translateY(-89.3px) translateZ(1px) rotateZ(90deg) rotateX(90deg)");
  createPart(elementsClassST[9], 2);
  styleTransform("translateX(20.2px) translateY(0px) translateZ(.8px) rotateZ(90deg) rotateX(45deg)");
  createPart(elementsClassST[10], 2);
  styleTransform("translateX(-19px) translateY(3.7px) translateZ(1px) rotateZ(90deg) rotateX(90deg");
  createPart(elementsClassST[7], 2);
  styleTransform("translateX(-4px) translateY(-126.4px) translateZ(-7.7px) rotateZ(90deg) rotateX(0deg)");
  createPart(elementsClassST[8], 2);
  styleTransform("translateX(38.7px) translateY(-85.6px) translateZ(25.2px) rotateZ(90deg) rotateX(45deg)");
  createPart(elementsClassST[7], 2);
  styleTransform("translateX(-4px) translateY(-33.4px) translateZ(-7.7px) rotateZ(90deg)");
  createPart(elementsClassST[8], 2);
  styleTransform("translateX(38.7px) translateY(7.4px) translateZ(25.2px) rotateZ(90deg) rotateX(45deg)");
  createPart(elementsClassST[5], 2);
  styleTransform("translateY(-170px) translateX(39.4px) translateZ(-13.7px) rotateY(90deg)");
  createPart(elementsClassST[6], 2);
  styleTransform("translateY(123.6px) translateX(-6px) translateZ(-13.7px) rotateY(90deg) rotateX(90deg)");
  createPart(elementsClassST[4], 2);
  styleTransform("translateY(130px) translateX(10.9px) rotateY(90deg)");
  createPart(elementsClassST[3], 2);
  styleTransform("rotateX(-90deg) rotateY(90deg) translateZ(-45.7px) translateX(-138.8px)");
  createPart(elementsClassST[3], 2);
  styleTransform("rotateX(-90deg) rotateY(90deg) translateZ(44px) translateX(154.8px)");
  createPart(elementsClassST[3], 2);
  styleTransform("rotateX(-90deg) rotateY(90deg) translateZ(-56px) translateX(154.8px)");
  createPart(elementsClassST[3], 2);
  styleTransform("rotateX(-90deg) rotateY(90deg) translateZ(39.2px) translateX(-138.8px)");
  createPart(elementsClassST[3], 2);
  styleTransform("rotateX(-90deg) rotateY(90deg) translateZ(33.2px) translateX(-138.8px)");
  createPart(elementsClassST[2], 2);
  styleTransform("translateZ(-5px) translateY(143px) translateX(-48.6px) rotateX(-90deg) rotateY(90deg) rotateZ(180deg)"+
  "rotateX(180deg)");
  createPart(elementsClassST[2], 2);
  styleTransform("translateZ(-5px) translateY(143px) translateX(30.6px) rotateX(-90deg) rotateY(90deg)");
  createPart(elementsClassST[2], 2);
  styleTransform("translateZ(-5px) translateY(143px) translateX(36px) rotateX(-90deg) rotateY(90deg) rotateZ(180deg)"+
  "rotateX(180deg)");
  createPart(elementsClassST[30], 2);
  styleTransform("translateX(-2px) translateY(-70.7px) translateZ(-21px) rotateZ(90deg) rotateY(-40deg) translateZ(5.8px)");
  createPart(elementsClassST[30], 2);
  styleTransform("translateX(-2px) translateY(17.3px) translateZ(-21px) rotateZ(90deg) rotateY(-40deg) translateZ(5.8px)");
  shiftDegree_Y = 0;
  for(var i = 0; i < 3; i++) {
    createPart(elementsClassST[31], 2);
    perspective[2].lastChild.style.transform = "translateX(-3px) translateY(117.5px) translateZ(14.4px)"+
"rotateX(-11deg) rotateZ(90deg) translateZ(-14.8px) rotateY("+shiftDegree_Y+"deg) translateZ(14.8px)"
    createPart(elementsClassST[31], 2);
    perspective[2].lastChild.style.transform = "translateX(-3px) translateY(-182.5px) translateZ(14.4px) rotateX(11deg)"+
"rotateZ(90deg) rotateZ(180deg) translateZ(-14.8px) rotateY("+shiftDegree_Y+"deg) translateZ(14.8px)";
    createPart(elementsClassST[21], 2);
    perspective[2].lastChild.style.transform = "translateX(-3px) translateY(-177px) translateZ(14.4px) rotateX(-11deg)"+
"rotateZ(90deg) translateZ(-14.8px) rotateY("+shiftDegree_Y+"deg) translateZ(14.8px)";
    createPart(elementsClassST[21], 2);
    perspective[2].lastChild.style.transform = "translateX(-3px) translateY(112px) translateZ(14.4px)"+
"rotateX(11deg) rotateZ(90deg) rotateZ(180deg) translateZ(-14.8px) rotateY("+shiftDegree_Y+"deg) translateZ(14.8px)";
    shiftDegree_Y += 60;
  }
  shiftDegree_Y = 0;
  for(var i = 0; i < 2; i++) {
    createPart(elementsClassST[28], 2);
    perspective[2].lastChild.style.transform = "translateY(142px) translateX(40px) rotateY(-90deg) rotateX(90deg)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(6px)";
    createPart(elementsClassST[28], 2);
    perspective[2].lastChild.style.transform = "translateY(142px) translateX(-45px) rotateY(-90deg) rotateX(90deg)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(6px)";
    shiftDegree_Y += 120;
  }
  shiftDegree_Y = 0;
  for(var i = 0; i < 3; i++) {
    createPart(elementsClassST[25], 2);
    perspective[2].lastChild.style.transform = "translateX(-21px) translateY(85px) rotateZ(90deg)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(3px)";
    createPart(elementsClassST[34], 2);
    perspective[2].lastChild.style.transform = "translateX(-2px) translateY(-194px) rotateZ(90deg)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(3px)";
    createPart(elementsClassST[24], 2);
    perspective[2].lastChild.style.transform = "translateX(30px) translateY(74.3px) translateZ(15px) rotateZ(90deg)"+
    "rotateX(-45deg) rotateY("+shiftDegree_Y+"deg) translateZ(4px)";
    createPart(elementsClassST[24], 2);
    perspective[2].lastChild.style.transform = "translateX(-33px) translateY(74.3px) translateZ(15px) rotateZ(90deg)"+
    "rotateX(45deg) rotateY("+shiftDegree_Y+"deg) translateZ(4px)";
    createPart(elementsClassST[26], 2);
    perspective[2].lastChild.style.transform = "translateX(46px) translateZ(8px) translateY(-197px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(1.5px) translateY(18px)";
    createPart(elementsClassST[26], 2);
    perspective[2].lastChild.style.transform = "translateX(-48px) translateZ(8px) translateY(-197px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(1.5px) translateY(18px)";
    createPart(elementsClassST[22], 2);
    perspective[2].lastChild.style.transform = "translateX(-73px) translateY(98.3px) translateZ(0px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(7.5px)";
    createPart(elementsClassST[32], 2);
    perspective[2].lastChild.style.transform = "translateX(-58px) translateY(141px) rotateZ(90deg)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(6px)";
    createPart(elementsClassST[24], 2);
    perspective[2].lastChild.style.transform = "translateX(-33px) translateY(-95.7px) translateZ(15px) rotateZ(90deg)"+
    "rotateX(45deg) rotateY("+shiftDegree_Y+"deg) translateZ(4px)";
    createPart(elementsClassST[24], 2);
    perspective[2].lastChild.style.transform = "translateX(30px) translateY(-95.7px) translateZ(15px) rotateZ(90deg)"+
    "rotateX(-45deg) rotateY("+shiftDegree_Y+"deg) translateZ(4px)";
    createPart(elementsClassST[24], 2);
    perspective[2].lastChild.style.transform = "translateX(-33px) translateY(-2.7px) translateZ(15px) rotateZ(90deg)"+
    "rotateX(45deg) rotateY("+shiftDegree_Y+"deg) translateZ(4px)";
    createPart(elementsClassST[24], 2);
    perspective[2].lastChild.style.transform = "translateX(30px) translateY(-2.7px) translateZ(15px) rotateZ(90deg)"+
    "rotateX(-45deg) rotateY("+shiftDegree_Y+"deg) translateZ(4px)";
    shiftDegree_Y += 120;
  }
  shiftDegree_Y = 0;
  for(var i = 0; i < 2; i++) {
    createPart(elementsClassST[27], 2);
    perspective[2].lastChild.style.transform = "translateX(-49px) translateZ(8px) translateY(-117.3px)"+  /* -118 */
    "rotateY("+shiftDegree_Y+"deg) translateZ(2.4px) translateY(18px)";
    createPart(elementsClassST[33], 2);
    perspective[2].lastChild.style.transform = "rotateX(90deg) translateX(-80px) translateZ(-103px) translateY(-15px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(1px)";
    createPart(elementsClassST[27], 2);
    perspective[2].lastChild.style.transform = "translateX(-49px) translateZ(8px) translateY(-199px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(2.4px) translateY(18px)";
    createPart(elementsClassST[27], 2);
    perspective[2].lastChild.style.transform = "translateX(45px) translateZ(8px) translateY(-117.3px)"+  /* -118 */
    "rotateY("+shiftDegree_Y+"deg) translateZ(2.4px) translateY(18px)";
    createPart(elementsClassST[27], 2);
    perspective[2].lastChild.style.transform = "translateX(45px) translateZ(8px) translateY(-199px)"+
    "rotateY("+shiftDegree_Y+"deg) translateZ(2.4px) translateY(18px)";
    shiftDegree_Y += 180;
  }
  for(let elem of perspective[2].childNodes) {
    elem.style.margin = "60px 0 0 50px";
  }
  shiftDegree_Y = 90;
  shiftDegree_X = 0;
