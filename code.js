var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["12660252-cb05-4a44-8078-8537998a9e79","f8221832-dea5-4b25-bc22-920365e27421","45f03334-b138-4a68-a991-cdf4f8f315df"],"propsByKey":{"12660252-cb05-4a44-8078-8537998a9e79":{"name":"ufo_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"},"f8221832-dea5-4b25-bc22-920365e27421":{"name":"star2_1","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"ijhkXO0K.PD0U3rvM.U72gnbE8TtuEeH","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/f8221832-dea5-4b25-bc22-920365e27421.png"},"45f03334-b138-4a68-a991-cdf4f8f315df":{"name":"ufo_2","sourceUrl":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png","frameSize":{"x":398,"y":332},"frameCount":1,"looping":true,"frameDelay":2,"version":"QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":332},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


// Criar um grupo relacionado as naves
var sprite_group = createGroup();

// Criar o Loop para produzir as 4 naves
for(var i=1; i<=4; i++)
{
  var sprite = createSprite(80*i, 350);
  sprite.setAnimation("ufo_1");
  sprite.scale = 0.2;
  sprite.velocityY = -4;
  sprite_group.add(sprite);
}

// Criar as bordas para o grupo naves colidirem
createEdgeSprites();

// Função desenha todos os itens dojogo
function draw() {
  // Plano de fundo
  background("black");
  // Faz os Sprites colidirem
  sprite_group.bounceOff(edges);
  // Desenha os sprites
  drawSprites();
}

// Faz aparecer estrelas toda vez que a mouse for clicado
function mousePressed() {
  
  for(var j=1; j<=50; j=j+1) {
    var star = createSprite(randomNumber(0,400), randomNumber(0,200));
    star.setAnimation("star2_1");
  }
}  

  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
