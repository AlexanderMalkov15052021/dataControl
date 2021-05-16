  createPart("circle", 0);
  createPart("cap", 0);
  createPart("lattice", 0);
   for(let i = 0; i < 2; i++) {
     perspective[0].innerHTML += `<div class="support" style="transform: translateX(-14px) translateY(-50px) `+
   `translateZ(-48px) rotateX(90deg) rotateY(${shiftDegree_Y}deg) translateZ(18.5px);"></div>`;
     shiftDegree_Y += 90;
   }
   for(let i = 0; i < 2; i++) {
     perspective[0].innerHTML += `<div class="tube" style="transform: translateX(33px) translateY(-25px) `+
   `translateZ(142px) rotateX(90deg) rotateY(${90 * i}deg) translateZ(17px) rotateX(-8deg);"></div>`;
   }
   perspective[0].lastChild.style.borderTop = "100px solid #808080";
   for(let i = 0; i < 2; i++) {
     perspective[0].innerHTML += `<div class="tubeSupport" style="transform: rotateX(90deg) rotateY(90deg) `+
   `translateY(${25 * i + 50}px) translateX(${25 * i - 17.5}px) translateZ(${-49 * i + 57}px); height: ${-50 * i +85}px;"></div>`;
   }
   for(let i = 0; i < 2; i++) {
     perspective[0].innerHTML += `<div class="box" style="transform: translateY(-20px) `+
   `translateZ(24px) rotateX(${shiftDegree_X}deg) rotateY(${shiftDegree_Y}deg) translateZ(5px);"></div>`;
     shiftDegree_X += 180;
     shiftDegree_Y += 90;
   }
   for(let i = 0; i < 2; i++) {
     perspective[0].innerHTML += `<div class="shaft" style="transform: translateX(-65px) translateY(-80px) `+
   `rotateY(${shiftDegree_Y}deg);"></div>`;
     perspective[0].lastChild.style.animationName = "shaftMove_"+i;
     shiftDegree_Y += 45;
   }
   for(let i = 0; i < 4; i++) {
     perspective[0].innerHTML += `<div class="motor" style="transform: rotateX(1deg) translateX(-2px) `+
   `translateZ(1px) rotateY(${shiftDegree_Y}deg) translateZ(20px) translateY(-40px);"></div>`;
     shiftDegree_Y += -30;
   }
   for(let i = 0; i < 8; i++) {
     perspective[0].innerHTML += `<div class="wall" style="transform: translateX(-2px) rotateY(${shiftDegree_Y}deg) `+
   `translateZ(74px);"></div>`;
     shiftDegree_Y += -15;
   }
   for(let i = 0; i < 6; i++) {
     perspective[0].innerHTML += `<div class="subWall" style="transform: translateY(50px) rotateY(${shiftDegree_Y}deg) `+
   `translateZ(40px);"></div>`;
     shiftDegree_Y += -20;
   }
   for(let i = 0; i < 2; i++) {
     perspective[0].innerHTML += `<div class="wiring" style="transform: rotateX(90deg) translateX(30px) translateY(-36px) `+
   `translateZ(54.5px) rotateY(${shiftDegree_Y}deg) translateZ(2px);"></div>`;
     shiftDegree_Y += -60;
   }
   for(let i = 0; i < 6; i++) {
        for(let numElem = 0; numElem < 2; numElem++) {
            perspective[0].innerHTML += `<div class="shiftWiring" style="transform: translateX(10px) translateY(-18px) `+
            `translateZ(5px) rotateY(${shiftAngle_Y}deg) translateZ(20px) rotateZ(90deg) rotateY(${shiftDegree_Y}deg) `+
            `translateZ(2px);"></div>`;
            shiftDegree_Y += -60;
        }
        shiftAngle_Y += 17;
    }
  rotate_45 = 45;
  rotate_90 = 90;
  shiftDegree_Y = 90;
  shiftDegree_X = 0;
  shiftDegree_Z = 0;
  shiftAngle_Y = 0;
  for(let elem of perspective[0].childNodes) {
    elem.style.marginLeft = "40px";
    elem.style.marginTop = "40px";
  }
