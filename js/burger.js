const informationMenu = document.querySelector('.informationMenu'),
      menuButton = document.querySelector('.menuButton'),
      blocksContainer = document.querySelector('.blocksContainer'),
      body = document.querySelector('body'),
      animatedElements = document.querySelector('.animatedElements');
menuButton.onclick = function() {
  animatedElements.classList.toggle("animatedElementsCross");
  informationMenu.classList.toggle("activeMenu");
  body.classList.toggle("menuShadow");
  if (window.innerWidth < 900) {
    blocksContainer.classList.toggle("activeBlocksContainer");
  }
  else if(window.innerWidth < 600) {
    blocksContainer.classList.toggle("activeBlocksContainer");
  }
}
for (let i = 1; i < 5; i++) {
  document.getElementById('change_'+i).style.borderRadius = "10%";
}