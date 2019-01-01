"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 07.07.2018 - 31.12.2018

  /*
   $ -переменные

   НАЗНАЧЕНИЕ

   Назначение объекта загрузить заданные ряды картинок при запуске программы.
   И вывести картинку заданного типа и номера в заданном месте.
   Есть несколько рядов картинок которые содержат анимационные последовательности
   такие как удар, бег и т.д. Для вывода мы указываем нужный нам ряд и номер картинки
   в этом ряду, а также координаты вывода на экран. координаты отсчитываются слева сверху.

   Вывод картинок идет в HTML5 Canvas
   в режиме 2d контекста
   т.е. рисуем на полотне настроенном на двухмерные картинки
   Game_R.canvas = document.getElementById('game-canvas');
   Game_R.context = Game_R.canvas.getContext('2d');

    spritesSheeva_mk3
    мы используем ряды картинок. так называемые анимационные ряды.
    например есть ряд картинок в котором запечатлен бег бойца. Этому
    соответствует тип  running и номера от 0 до 12.
    Таким образом параметры функции
    type - тип ряда картинок стойка, бег, удар рукой и т.д.
    index - номер картинки в ряде
    left - координата картинки по горизонтали. отсчитывается слева
    top - координата картинки по вертикали. отсчитывается сверху

   iniAllSprite()
   загружаем все необходимые картинки. это файлы
   с расширением .png

    drawSprite(type,index,left, top)
    рисуем спрайт заданного типа и номера, в заданном месте
    например drawSprite(punchingUp,3,100, 150)
    тут выводится третий спрайт из ряда анимации удара рукой
    в точке с координатами слева 100 а сверху 150 пикселей

    drawSpriteMirror(type,index,left, top)
    рисуем зеркальный спрайт заданного типа и номера, в заданном месте

   DEFINE
   defines root object and constructor function

   object -> SpritesFighter_R
   object properties ->
   name

   object methods ->
   drawSprites_TEST()

   object -> SpritesFighter_R.spritesSheeva_mk3
   object properties ->
    name - имя объекта. сейчас это spritesSheeva_mk3
    fightingStance[7] - ряд картинок для анимации стойки бойца
    walking[10] - ряд картинок для анимации ходьбы бойца
    running[13] - ряд картинок для анимации бега бойца
    punchingUp[7] - ряд картинок для анимации удара верхней рукой бойца
    punchingMidle[8] - ряд картинок для анимации нижней рукой бойца
    kickingFront[9] - ряд картинок для анимации передней ногой бойца
    kickingBack[9] - ряд картинок для анимации задней ногой бойца
    blockingHigh[4] - ряд картинок для анимации верхнего блока бойца
    blockingLow[4] - ряд картинок для анимации нижнего блока бойца
    beingHit[4] - ряд картинок для анимации пропущенного удара бойца

    object methods ->
    parameters of functions default to undefined
    iniSprite(type,path)
    iniAllSprite()
    drawSprite(type,index,left, top)
    drawSpriteMirror(type,index,left, top)

   ИСПОЛЬЗУЕТ МОДУЛИ

   GameText
                   GameText_R.drawText(-)
                   GameText_R.drawRect(-)

   Game
                   Game_R.context.strokeText(-)
                   Game_R.context.drawImage(-)
                   Game_R.context.scale(-)

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

   SpritesAnimators
                     SpritesFighter_R.drawSprite(-)
                     SpritesFighter_R.drawSpriteMirror(-)

   ArenaFjs
                     animationAll_TEST()

  */

//alert("module SpritesFighter start");
//==============================================================================

var SpritesFighter_R = {};

  SpritesFighter_R.name = "SpritesFighter";//

  //============================================================================
  // INPUT======================================================================

  //     Game_R context

  SpritesFighter_R.Game_R_context_drawImage_IN = function(image, left, top) {
     Game_R.context.drawImage(image, left, top);
  };

  SpritesFighter_R.GameText_R_drawText_IN = function(text, left, top, font, color, fillYes) {
    GameText_R.drawText (text, left, top, font, color, fillYes);
  };

  SpritesFighter_R.Game_R_context_scale_min_1_1_IN = function() {
    Game_R.context.scale(-1, 1);
  };


  //============================================================================
  // IMPLEMENTATION=============================================================


  SpritesFighter_R.spritesSheeva_mk3 = {
      name            : "spritesSheeva_mk3",

      fightingStance  : new Array(7),
      walking         : new Array(10),
      running         : new Array(13),
      punchingUp      : new Array(7),
      punchingMidle   : new Array(8),
      kickingFront    : new Array(9),
      kickingBack     : new Array(9),
      blockingHigh    : new Array(4),
      blockingLow     : new Array(4),
      beingHit        : new Array(4)
  };




  // draw image
  SpritesFighter_R.drawSprite = function(type,index,left, top) {

         var top1 = top - SpritesFighter_R.spritesSheeva_mk3[type][index].height;

         SpritesFighter_R.Game_R_context_drawImage_IN(SpritesFighter_R.spritesSheeva_mk3[type][index], left, top1);

         //GameText_R.drawRect(left, top1, SpritesFighter_R.spritesSheeva_mk3[type][index].width,
           //                        SpritesFighter_R.spritesSheeva_mk3[type][index].height,1, 'blue', 0);

         SpritesFighter_R.GameText_R_drawText_IN ("fr = " + index,left+5, top-100, 'italic 20px sans-serif', 'blue', 1);
         SpritesFighter_R.GameText_R_drawText_IN (type,left+5, top-20, 'italic 20px sans-serif', 'blue', 1);
  };

  // draw image mirror
  SpritesFighter_R.drawSpriteMirror = function(type,index,left, top) {

         var top1 = top - SpritesFighter_R.spritesSheeva_mk3[type][index].height;

         left = left + SpritesFighter_R.spritesSheeva_mk3[type][index].width;

         SpritesFighter_R.Game_R_context_scale_min_1_1_IN();
         SpritesFighter_R.Game_R_context_drawImage_IN(SpritesFighter_R.spritesSheeva_mk3[type][index], -left, top1);

         //GameText_R.drawRect(-left, top1, SpritesFighter_R.spritesSheeva_mk3[type][index].width,
         //                          SpritesFighter_R.spritesSheeva_mk3[type][index].height, 1, 'blue', 0);

         SpritesFighter_R.Game_R_context_scale_min_1_1_IN();
         SpritesFighter_R.GameText_R_drawText_IN ("fr = " + index,left+5 - SpritesFighter_R.spritesSheeva_mk3[type][index].width, top-100, 'italic 20px sans-serif', 'blue', 1);
         SpritesFighter_R.GameText_R_drawText_IN (type,left+5 - SpritesFighter_R.spritesSheeva_mk3[type][index].width, top -20, 'italic 20px sans-serif', 'blue', 1);
  };


  SpritesFighter_R.drawSprites_TEST = function(){

     SpritesFighter_R.drawSprite("fightingStance", 1, 200, 200);

  };

 // ini Image
  SpritesFighter_R.iniSprite = function(type,path){
        for(var i = 1; i < SpritesFighter_R.spritesSheeva_mk3[type].length; i++ ){
           SpritesFighter_R.spritesSheeva_mk3[type][i] = new Image();
           SpritesFighter_R.spritesSheeva_mk3[type][i].src = path + i + ".png";
         };
  };

  //инициализируем массивы с картинками-----------------------------------
  SpritesFighter_R.loadAllSprite = function() {

      SpritesFighter_R.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");
      SpritesFighter_R.iniSprite("walking","image/Sheeva_mk3_image/2_Walking/w");
      SpritesFighter_R.iniSprite("running","image/Sheeva_mk3_image/3_Running/r");
      SpritesFighter_R.iniSprite("punchingUp","image/Sheeva_mk3_image/4_Punching/pt1_");
      SpritesFighter_R.iniSprite("punchingMidle","image/Sheeva_mk3_image/4_Punching/pm_");
      SpritesFighter_R.iniSprite("kickingFront","image/Sheeva_mk3_image/5_Kicking/k1_");
      SpritesFighter_R.iniSprite("kickingBack","image/Sheeva_mk3_image/5_Kicking/k2_");
      SpritesFighter_R.iniSprite("blockingHigh","image/Sheeva_mk3_image/7_Blocking/bt_");
      SpritesFighter_R.iniSprite("blockingLow","image/Sheeva_mk3_image/7_Blocking/bd_");
      SpritesFighter_R.iniSprite("beingHit","image/Sheeva_mk3_image/9_BeingHit/1_h0");
  };

    SpritesFighter_R.loadAllSprite();

Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('8   module "SpritesFighter" loaded', 1100, Game_R.yT);

//================================================================================
//alert("module SpritesFighter done");
