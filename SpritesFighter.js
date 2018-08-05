"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 07.07.2018 - 05.08.2018

/*
 IMPORT (references, outer defines)
 Game.js -> outer used object Game_R
 
 EXPORT
 SpritesAnimators.js used SpritesSheeva_mk3_CL()
 ArenaFjs.js used animationAll_TEST()
*/

/*
 Назначение класса загрузить заданные ряды картинок при запуске программы.
 И вывести картинку заданного типа и номера в заданном месте.
 Есть несколько рядов картинок которые содержат анимационные последовательности
 такие как удар, бег и т.д. Для вывода мы указываем нужный нам ряд и номер картинки
 в этом ряду, а также координаты вывода на экран. координаты отсчитываются слева сверху.
 
 Вывод картинок идет в HTML5 Canvas
 в режиме 2d контекста
 т.е. рисуем на полотне настроенном на двухмерные картинки
  Game_R.canvas = document.getElementById('game-canvas');
  Game_R.context = Game_R.canvas.getContext('2d');
 */

/*
INTERFACE
   SpritesSheeva_mk3_CL (constructor function)
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
*/

/*
DEFINE
defines root object and constructor function

object -> Game_R.SpritesFighter_R
object properties ->
    name
    
object methods ->
    drawSprites_TEST()

constructor function -> SpritesSheeva_mk3_CL

constructor function properties ->
    name - имя функции конструктора. сейчас это SpritesSheeva_mk3_CL
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
    
constructor function methods ->
    parameters of functions default to undefined
    iniSprite(type,path)
    iniAllSprite()
    drawSprite(type,index,left, top)
    drawSpriteMirror(type,index,left, top)
*/


// prototype object
  function SpritesSheeva_mk3_CL () {
    this.name = "SpritesSheeva_mk3_CL";
    
    this.fightingStance = new Array(7);//
    this.walking = new Array(10);//
    this.running = new Array(13);
    this.punchingUp = new Array(7);
    this.punchingMidle = new Array(8);
    this.kickingFront = new Array(9);
    this.kickingBack = new Array(9);
    this.blockingHigh = new Array(4);
    this.blockingLow = new Array(4);
    this.beingHit = new Array(4);
    
      // ini Image
     this.iniSprite = function(type,path) {
        for(var i = 1; i < this[type].length; i++ ){
           this[type][i] = new Image();
           this[type][i].src = path + i + ".png";
         };
     };
    
     //инициализируем массивы с картинками-----------------------------------
     this.iniAllSprite = function() {    

      this.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");
      this.iniSprite("walking","image/Sheeva_mk3_image/2_Walking/w");  
      this.iniSprite("running","image/Sheeva_mk3_image/3_Running/r");
      this.iniSprite("punchingUp","image/Sheeva_mk3_image/4_Punching/pt1_");
      this.iniSprite("punchingMidle","image/Sheeva_mk3_image/4_Punching/pm_");
      this.iniSprite("kickingFront","image/Sheeva_mk3_image/5_Kicking/k1_");
      this.iniSprite("kickingBack","image/Sheeva_mk3_image/5_Kicking/k2_");
      this.iniSprite("blockingHigh","image/Sheeva_mk3_image/7_Blocking/bt_");  
      this.iniSprite("blockingLow","image/Sheeva_mk3_image/7_Blocking/bd_");  
      this.iniSprite("beingHit","image/Sheeva_mk3_image/9_BeingHit/1_h0");  
     };
     
      // draw image
     this.drawSprite = function(type,index,left, top) {
         Game_R.context.drawImage(this[type][index], left, top);
         Game_R.context.strokeRect(left, top, this[type][index].width, this[type][index].height);
	       Game_R.context.fillText ("fr = " + index,left, top);
         Game_R.context.fillText (type,left, top + 100);
     };

     // draw image mirror
     this.drawSpriteMirror = function(type,index,left, top) {
         left = left + this[type][index].width;
         Game_R.context.scale(-1, 1);
         Game_R.context.drawImage(this[type][index], -left, top);
         Game_R.context.strokeRect(-left, top, this[type][index].width, this[type][index].height);
         Game_R.context.scale(-1, 1);
	       Game_R.context.fillText ("fr = " + index,left - this[type][index].width, top);
         Game_R.context.fillText (type,left - this[type][index].width, top + 100);
     };    
  };

///////////////////////////////////////////////////////////////////
Game_R.SpritesFighter_R = {};

  Game_R.SpritesFighter_R.name = "SpritesFighter";//
  
  Game_R.SpritesFighter_R.spritesSheeva_mk3_t = new SpritesSheeva_mk3_CL (); 
  Game_R.SpritesFighter_R.spritesSheeva_mk3_t.iniAllSprite();
  
  
  
Game_R.SpritesFighter_R.drawSprites_TEST = function(){
  
  Game_R.SpritesFighter_R.spritesSheeva_mk3_t.drawSprite("fightingStance", 1, 200, 200);
  
   
};

//Game_R.context.fillRect(10, 10, 150, 100);
