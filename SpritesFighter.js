"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 07.07.2018 - 31.12.2018 - 28.07.2019
// t
  /*
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
   Game

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   SpritesAnimators
   ArenaFjs

  */

//alert("module SpritesFighter start");
//==============================================================================

window.SpritesFighter_R = {};

  SpritesFighter_R.NAME = "SpritesFighter";//

  SpritesFighter_R.NAME_IMG_TXT = ["fightingStance", "walking","running", "punchingUp",
                                   "punchingMidle", "kickingFront", "kickingBack",
                                   "blockingHigh", "blockingLow", "beingHit"
                                  ];


  SpritesFighter_R.FIGHTING_STANCE  = 0;
  SpritesFighter_R.WALKING          = 1;
  SpritesFighter_R.RUNNING          = 2;
  SpritesFighter_R.PUNCHING_UP      = 3;
  SpritesFighter_R.PUNCHING_MIDLE   = 4;
  SpritesFighter_R.KICKING_FRONT    = 5;
  SpritesFighter_R.KICKING_BACK     = 6;
  SpritesFighter_R.BLOCKING_HIGH    = 7;
  SpritesFighter_R.BLOCKING_LOW     = 8;
  SpritesFighter_R.BEING_HIT        = 9;


  SpritesFighter_R.spritesSheeva_mk3_img = new Array(10);

  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.FIGHTING_STANCE] = new Array(7);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.WALKING] = new Array(10);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.RUNNING] = new Array(13);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.PUNCHING_UP] = new Array(7);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.PUNCHING_MIDLE] = new Array(8);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.KICKING_FRONT] = new Array(9);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.KICKING_BACK] = new Array(9);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.BLOCKING_HIGH] = new Array(4);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.BLOCKING_LOW] = new Array(4);
  SpritesFighter_R.spritesSheeva_mk3_img[SpritesFighter_R.BEING_HIT] = new Array(4);

  SpritesFighter_R.spritesSheeva_mk3_path = new Array(10);

  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.FIGHTING_STANCE] = new Array(7);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.WALKING] = new Array(10);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.RUNNING] = new Array(13);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.PUNCHING_UP] = new Array(7);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.PUNCHING_MIDLE] = new Array(8);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.KICKING_FRONT] = new Array(9);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.KICKING_BACK] = new Array(9);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.BLOCKING_HIGH] = new Array(4);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.BLOCKING_LOW] = new Array(4);
  SpritesFighter_R.spritesSheeva_mk3_path[SpritesFighter_R.BEING_HIT] = new Array(4);


  // draw image
  //============================================================================
  SpritesFighter_R.drawSprite = function(_type, _index, _left, _top, _GameText_R1) {

         var top = _top - SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].height;

         Game_R.context.drawImage(SpritesFighter_R.spritesSheeva_mk3_img[_type][_index], _left, top);

         //GameText_R.drawRect(left, top1, SpritesFighter_R.spritesSheeva_mk3[type][index].width,
         //                    SpritesFighter_R.spritesSheeva_mk3[type][index].height,1, 'blue', 0);

         _GameText_R1.drawText ("frame = " + _index, _left+5, _top-100, 'italic 20px sans-serif', 'blue', 1);
         _GameText_R1.drawText (SpritesFighter_R.NAME_IMG_TXT[_type], _left+5, _top-20, 'italic 20px sans-serif', 'blue', 1);
  };
  //============================================================================


  // draw image mirror
  //============================================================================
  SpritesFighter_R.drawSpriteMirror = function(_type, _index, _left, _top, _GameText_R1) {

         var height = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].height;

         var top = _top - height;

         var width = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].width;

         var left = _left + width;

         Game_R.context.scale(-1, 1);
         Game_R.context.drawImage(SpritesFighter_R.spritesSheeva_mk3_img[_type][_index], -left, top);

      //   GameText_R.drawRect(-left, top1, SpritesFighter_R.spritesSheeva_mk3[type][index].width,
      //                      SpritesFighter_R.spritesSheeva_mk3[type][index].height, 1, 'blue', 0);

         Game_R.context.scale(-1, 1);
         _GameText_R1.drawText ("frame = " + _index, left + 5 - width, _top-100, 'italic 20px sans-serif', 'blue', 1);
         _GameText_R1.drawText (SpritesFighter_R.NAME_IMG_TXT[_type], left + 5 - width, _top -20, 'italic 20px sans-serif', 'blue', 1);
  };
  //============================================================================

  //============================================================================
  SpritesFighter_R.drawSprites_TEST = function(_GameText_R1){

     SpritesFighter_R.drawSprite(SpritesFighter_R.FIGHTING_STANCE, 1, 200, 200, _GameText_R1);
     //SpritesFighter_R.drawSprite(SpritesFighter_R.KICKING_BACK, 1, 200, 200, _GameText_R1);

  };
  //============================================================================


 // ini Image
  //============================================================================
  SpritesFighter_R.iniSprite = function(_type,_path){
        for(var i = 1; i < SpritesFighter_R.spritesSheeva_mk3_img[_type].length; i++ ){
           SpritesFighter_R.spritesSheeva_mk3_img[_type][i] = new Image();
           SpritesFighter_R.spritesSheeva_mk3_img[_type][i].src = _path + i + ".png";
           SpritesFighter_R.spritesSheeva_mk3_path[_type][i] = _path + i + ".png";
         };
  };
  //============================================================================

  //инициализируем массивы с картинками
  //============================================================================
  SpritesFighter_R.loadAllSprite = function() {
      SpritesFighter_R.iniSprite(SpritesFighter_R.FIGHTING_STANCE,"image/Sheeva_mk3_image/1_FightingStance/fs");
      SpritesFighter_R.iniSprite(SpritesFighter_R.WALKING,"image/Sheeva_mk3_image/2_Walking/w");
      SpritesFighter_R.iniSprite(SpritesFighter_R.RUNNING,"image/Sheeva_mk3_image/3_Running/r");
      SpritesFighter_R.iniSprite(SpritesFighter_R.PUNCHING_UP,"image/Sheeva_mk3_image/4_Punching/pt1_");
      SpritesFighter_R.iniSprite(SpritesFighter_R.PUNCHING_MIDLE,"image/Sheeva_mk3_image/4_Punching/pm_");
      SpritesFighter_R.iniSprite(SpritesFighter_R.KICKING_FRONT,"image/Sheeva_mk3_image/5_Kicking/k1_");
      SpritesFighter_R.iniSprite(SpritesFighter_R.KICKING_BACK,"image/Sheeva_mk3_image/5_Kicking/k2_");
      SpritesFighter_R.iniSprite(SpritesFighter_R.BLOCKING_HIGH,"image/Sheeva_mk3_image/7_Blocking/bt_");
      SpritesFighter_R.iniSprite(SpritesFighter_R.BLOCKING_LOW,"image/Sheeva_mk3_image/7_Blocking/bd_");
      SpritesFighter_R.iniSprite(SpritesFighter_R.BEING_HIT,"image/Sheeva_mk3_image/9_BeingHit/1_h0");
  };
  //============================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('8   module "SpritesFighter" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module SpritesFighter done");
