"use strict";
// Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 07.07.2018 - 31.12.2018 - 28.07.2019
//  - 12.11.2019 -
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

    drawSprite(type,index,middle, bottom)
    рисуем спрайт заданного типа и номера, в заданном месте
    например drawSprite(punchingUp,3,100, 150)
    тут выводится третий спрайт из ряда анимации удара рукой
    в точке с координатами слева 100 а сверху 150 пикселей

    drawSpriteMirror(type,index,middle, bottom)
    рисуем зеркальный спрайт заданного типа и номера, в заданном месте

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


  // NAME_IMG_TXT
  SpritesFighter_R.TXT_SPRITES_FIGHTER_SET = ["fightingStance", "walking",
    "running", "punchingUp","punchingMidle", "kickingFront", "kickingBack",
    "blockingHigh", "blockingLow", "beingHit"
  ];

  // объявляем двухмерный массив spritesSheeva_mk3_img [type = 10][index = от 4 до 13]
  // мы используем ряды картинок. так называемые анимационные ряды.
  // например есть ряд картинок в котором запечатлен бег бойца. Этому
  // соответствует тип(type)  running и номера(index) от 0 до 12.
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



  // get Height Sprite
  //============================================================================
  SpritesFighter_R.getHeightSprite = function(_type, _index) {

      var height = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].height;
      return height;
  };
  //============================================================================

  // get Width Sprite
  //============================================================================
  SpritesFighter_R.getWidthSprite = function(_type, _index) {

      var width = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].width;
      return width;
  };
  //============================================================================

  // get Left Sprite
  //============================================================================
  SpritesFighter_R.getLeftSprite = function(_type, _index, _middle) {

      var width = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].width;
      var left = _middle - width/2;
      return left;
  };
  //============================================================================


  // draw image
  //============================================================================
  SpritesFighter_R.drawSprite = function(_type, _index, _middle, _bottom, _GameText_R) {

         var height = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].height;
         var width = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].width;

         var top = _bottom - height;
         var left = _middle - width/2;

         Game_R.context.drawImage(SpritesFighter_R.spritesSheeva_mk3_img[_type][_index], left, top);

         GameText_R.drawRect(left, top, width,height,1, 'blue', 0);
         GameText_R.drawRect(_middle, top, 2,height,1, 'red', 0);

         _GameText_R.drawText ("i " + "frame = " + _index, left+5, _bottom-40, 'italic 20px sans-serif', 'white', 1);
         _GameText_R.drawText ("i " + SpritesFighter_R.TXT_SPRITES_FIGHTER_SET[_type], left+5, _bottom-20, 'italic 20px sans-serif', 'white', 1);

        // _GameText_R.drawText ("i " + "middle = " + _middle, left+5, _bottom-140, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "width = " + width, left+5, _bottom-120, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "left = " + left, left+5, _bottom-100, 'italic 20px sans-serif', 'white', 1);
  };
  //============================================================================


  // draw image mirror
  //============================================================================
  SpritesFighter_R.drawSpriteMirror = function(_type, _index, _middle, _bottom, _GameText_R) {

         var height = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].height;
         var width = SpritesFighter_R.spritesSheeva_mk3_img[_type][_index].width;
         var top = _bottom - height;
         var left = _middle - width/2;
         var right = left + width;

         Game_R.context.scale(-1, 1);
         Game_R.context.drawImage(SpritesFighter_R.spritesSheeva_mk3_img[_type][_index], -right, top);
         GameText_R.drawRect(-right, top, width, height, 1, 'blue', 0);
         Game_R.context.scale(-1, 1);

         GameText_R.drawRect(_middle, top, 2,height,1, 'red', 0);

         _GameText_R.drawText ("im " + "frame = " + _index, _middle + 5, _bottom-40, 'italic 20px sans-serif', 'white', 1);
         _GameText_R.drawText ("im " + SpritesFighter_R.TXT_SPRITES_FIGHTER_SET[_type], _middle+5, _bottom -20, 'italic 20px sans-serif', 'white', 1);

        // _GameText_R.drawText ("i " + "middle = " + _middle, left+5, _bottom-140, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "width = " + width, left+5, _bottom-120, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "left = " + left, left+5, _bottom-100, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "right = " + right, left+5, _bottom-80, 'italic 20px sans-serif', 'white', 1);
  };
  //============================================================================

  //============================================================================
  SpritesFighter_R.drawSprites_TEST = function(_GameText_R){

     SpritesFighter_R.drawSprite(SpritesFighter_R.FIGHTING_STANCE, 1, 200, 200, _GameText_R);
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

  // для теста загрузки картинок
   //============================================================================
   SpritesFighter_R.iniSprite_w = function(_type,_path){

         var width_t = 0;
         for(var i = 1; i < SpritesFighter_R.spritesSheeva_mk3_img[_type].length; i++ ){
            width_t = SpritesFighter_R.spritesSheeva_mk3_img[_type][i].width;
            //GameText_R.drawRect(10 * i, _type, 100, 50, 1, 'red', 0);
            //Game_R.context.drawImage(SpritesFighter_R.spritesSheeva_mk3_img[_type][i], i * 90, _type * 70);
            //console.log( "SpritesFighter_R: type = " +  SpritesFighter_R.TXT_SPRITES_FIGHTER_SET[_type] +" i = " + i + " width = "+ width_t);
            //console.log( "SpritesFighter_R: src = "+ SpritesFighter_R.spritesSheeva_mk3_img[_type][i].src);
            if (width_t == 0)  alert("SpritesFighter_R : load drawImage ERROR !");

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

  // для теста загрузки картинок
  //============================================================================
  SpritesFighter_R.loadAllSprite_w = function() {
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.FIGHTING_STANCE,"image/Sheeva_mk3_image/1_FightingStance/fs");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.WALKING,"image/Sheeva_mk3_image/2_Walking/w");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.RUNNING,"image/Sheeva_mk3_image/3_Running/r");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.PUNCHING_UP,"image/Sheeva_mk3_image/4_Punching/pt1_");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.PUNCHING_MIDLE,"image/Sheeva_mk3_image/4_Punching/pm_");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.KICKING_FRONT,"image/Sheeva_mk3_image/5_Kicking/k1_");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.KICKING_BACK,"image/Sheeva_mk3_image/5_Kicking/k2_");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.BLOCKING_HIGH,"image/Sheeva_mk3_image/7_Blocking/bt_");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.BLOCKING_LOW,"image/Sheeva_mk3_image/7_Blocking/bd_");
      SpritesFighter_R.iniSprite_w(SpritesFighter_R.BEING_HIT,"image/Sheeva_mk3_image/9_BeingHit/1_h0");

/*
      console.log( "SpritesFighter_R: drak width = "+ ArenaScene_R.ImageArena.drak.width);
      console.log( "SpritesFighter_R: src = "+ ArenaScene_R.ImageArena.drak.src);
      console.log( "SpritesFighter_R: fon1 width = "+ ArenaScene_R.ImageArena.fon1.width);
      console.log( "SpritesFighter_R: src = "+ ArenaScene_R.ImageArena.fon1.src);
      console.log( "SpritesFighter_R: fon2 width = "+ ArenaScene_R.ImageArena.fon2.width);
      console.log( "SpritesFighter_R: src = "+ ArenaScene_R.ImageArena.fon2.src);
      console.log( "SpritesFighter_R: fon3 width = "+ ArenaScene_R.ImageArena.fon3.width);
      console.log( "SpritesFighter_R: src = "+ ArenaScene_R.ImageArena.fon3.src);
*/
  };
  //============================================================================


//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('8   module "SpritesFighter" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module SpritesFighter done");
