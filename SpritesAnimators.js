"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 30.12.2018 - 28.07.2019 - 10.08.2019
//t2

  /*
   НАЗНАЧЕНИЕ

   animatorsSheeva_mk3
   это объект в котором содержатся анимационные последовательности.
   Тут мы задаем какие картинки тематического ряда в какой последовательности выводить.
   Возможно выводить картинки в любой последовательности однако только в пределах одного
   тематического ряда.
   //all_Animation(animatorsState_Obj, typeStateAnimators, left, top, mirror, width, height)
   выводим нужный анимационный ряд в нужном месте и нужного размера, если надо то зеркальный.
   Просто вешаем флаг что идет анимация. И когда она кончается тогда сбрасываем флаг в ноль.
   А когда она меняется то запускаем по заданную по новой.
   Получается что с флагом занятости крутится только первый круг.

   Свое состояние аниматор хранит в объекте FighterSheeva_mk3_R
   это не очевидное решение. так сделано для того что бы не хранить состояние
   объекта в аниматоре.

   ИСПОЛЬЗУЕТ МОДУЛИ
   SpritesFighter
   Game

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R
   Render_R

  */



// alert("module SpritesAnimators start");
//==============================================================================

 window.SpritesAnimators_R = {};

 SpritesAnimators_R.NAME = "SpritesAnimators_R";//

 SpritesAnimators_R.FIGHTING_STANCE_ANI  = 0;
 SpritesAnimators_R.WALKING_FORWARD_ANI  = 1;
 SpritesAnimators_R.WALKING_BACK_ANI     = 2;
 SpritesAnimators_R.RUNNING_ANI          = 3;
 SpritesAnimators_R.PUNCHING_UP_ANI      = 4;
 SpritesAnimators_R.PUNCHING_MIDLE_ANI   = 5;
 SpritesAnimators_R.KICKING_FRONT_ANI    = 6;
 SpritesAnimators_R.KICKING_BACK_ANI     = 7;
 SpritesAnimators_R.BLOCKING_HIGH_ANI    = 8;
 SpritesAnimators_R.BLOCKING_LOW_ANI     = 9;
 SpritesAnimators_R.BEING_HIT_ANI        = 10;

 SpritesAnimators_R.TYPE_ANIMATORS_FIGHTER_SET = [
   SpritesAnimators_R.FIGHTING_STANCE_ANI,
   SpritesAnimators_R.WALKING_FORWARD_ANI,
   SpritesAnimators_R.WALKING_BACK_ANI,
   SpritesAnimators_R.RUNNING_ANI,
   SpritesAnimators_R.PUNCHING_UP_ANI,
   SpritesAnimators_R.PUNCHING_MIDLE_ANI,
   SpritesAnimators_R.KICKING_FRONT_ANI,
   SpritesAnimators_R.KICKING_BACK_ANI,
   SpritesAnimators_R.BLOCKING_HIGH_ANI,
   SpritesAnimators_R.BLOCKING_LOW_ANI,
   SpritesAnimators_R.BEING_HIT_ANI
];

// NAME_INIM_TXT
SpritesAnimators_R.TXT_ANIMATORS_FIGHTER_SET = ["fightingStance",
  "walkingForward", "walkingBack", "running", "punchingUp", "punchingMidle",
  "kickingFront", "kickingBack", "blockingHigh", "blockingLow", "beingHit"
];

 SpritesAnimators_R.animatorsSheeva_mk3_mobj = new Array(11);

 SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.FIGHTING_STANCE_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.FIGHTING_STANCE,
    fr :  [1,2,3,4,5,6,5,4,3,2,1],
    str : [0,0,0,0,0,0,0,0,0,0,0],
    max : 11,
    sound: "sound_IA",
    mustToStance : 0,
    canChange : 1
 };

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.WALKING_FORWARD_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.WALKING,
    fr :  [1,2,3,4,5,6,7,8,9],
    str : [0,0,0,0,0,0,0,0,0],
    max : 9,
    sound: "sound_IAA",
    mustToStance : 0,
    canChange : 1
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.WALKING_BACK_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.WALKING,
    fr :  [9,8,7,6,5,4,3,2,1],
    str : [0,0,0,0,0,0,0,0,0],
    max : 9,
    sound: "sound_IAA",
    mustToStance : 0,
    canChange : 1
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.RUNNING_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.RUNNING,
    fr :  [1,2,3,4,5,6,7,8,9,10,11,12],
    str : [0,0,0,0,0,0,0,0,0,0, 0, 0],
    max : 12,
    sound: "sound_IAAAA",
    mustToStance : 0,
    canChange : 1
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.PUNCHING_UP_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.PUNCHING_UP,
    fr :  [1,2,3,4,5,6],
    str : [0,0,0,0,0,1],
    max : 6,
    sound: "sound_STR_H",
    mustToStance : 1,
    canChange : 0
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.PUNCHING_MIDLE_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.PUNCHING_MIDLE,
    fr :  [1,2,3,4,5,6,7],
    str : [0,0,0,1,0,0,1],
    max : 7,
    sound: "sound_H",
    mustToStance : 1,
    canChange : 0
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.KICKING_FRONT_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.KICKING_FRONT,
    fr :  [1,2,3,4,5,6,7,8],
    str : [0,0,0,0,0,0,0,1],
    max : 8,
    sound: "sound_STR_F",
    mustToStance : 1,
    canChange : 0
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.KICKING_BACK_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.KICKING_BACK,
    fr :  [1,2,3,4,5,6,7,8],
    str : [0,0,0,0,0,0,0,1],
    max : 8,
    sound: "sound_F",
    mustToStance : 1,
    canChange : 0
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.BLOCKING_HIGH_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.BLOCKING_HIGH,
    fr :  [1,2,3,2,1],
    str : [0,0,1,0,0],
    max : 5,
    sound: "sound_STR_B",
    mustToStance : 0,
    canChange : 1
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.BLOCKING_LOW_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.BLOCKING_LOW,
    fr :  [1,2,3,2,1],
    str : [0,0,1,0,0],
    max : 5,
    sound: "sound_STR_B",
    mustToStance : 0,
    canChange : 1
};

SpritesAnimators_R.animatorsSheeva_mk3_mobj[SpritesAnimators_R.BEING_HIT_ANI] = {
    typeSpritesFighterSet : SpritesFighter_R.BEING_HIT,
    fr :  [1,2,3,2,1],
    str : [0,0,0,0,0],
    max : 5,
    sound: "sound_STR",
    mustToStance : 1,
    canChange : 0
};

SpritesAnimators_R.YES_MIRROR = 1;
SpritesAnimators_R.NO_MIRROR = 0;

     //=========================================================================
     SpritesAnimators_R.setTypeAnimation = function(_FighterSheeva_mk3_R1) {

              var typeStateAnimators = _FighterSheeva_mk3_R1.stateFighter;
              var type = _FighterSheeva_mk3_R1.SpritesAnimatorsTypeAnimation;
           //alert("this.type = " + this.type + " toType = " + toType);
           //if (this.inProcess == 1) alert("this.inProcess = " + this.inProcess);



           // если мы устанавливаем новый тип анимации.
               if (_FighterSheeva_mk3_R1.SpritesAnimatorsOldTypeAnimation != typeStateAnimators) {

                 // console.log('1================== ');
                 // console.log('1_typeStateAnimators(stateFighter) = ' + typeStateAnimators + ' type(SpritesAnimatorsTypeAnimation) = ' + type);
                 // console.log('1_canChange(SpritesAnimatorsTypeAnimation) = ' + SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].canChange);
                 // console.log('1_canChange(stateFighter) = ' + SpritesAnimators_R.animatorsSheeva_mk3_mobj[typeStateAnimators].canChange);
                 // console.log('k');

                   if (SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].canChange == 1 ) {
                     _FighterSheeva_mk3_R1.SpritesAnimatorsOldTypeAnimation = _FighterSheeva_mk3_R1.SpritesAnimatorsTypeAnimation;
                     _FighterSheeva_mk3_R1.SpritesAnimatorsTypeAnimation = typeStateAnimators;
                     _FighterSheeva_mk3_R1.SpritesAnimatorsFrames = 0;
                     _FighterSheeva_mk3_R1.SpritesAnimatorsBusy = 1;
                   };

              }
      };
     //=========================================================================


     //=========================================================================
     SpritesAnimators_R.animation = function(_GameText_R1,
       _SpritesFighter_R1, _FighterSheeva_mk3_R1) {

         var num = _FighterSheeva_mk3_R1.SpritesAnimatorsFrames;
         var type = _FighterSheeva_mk3_R1.SpritesAnimatorsTypeAnimation;
         var left = _FighterSheeva_mk3_R1.left;
         var top = _FighterSheeva_mk3_R1.top;
         var mirror = _FighterSheeva_mk3_R1.mirror;


         if (mirror == SpritesAnimators_R.NO_MIRROR){
           //console.log('1_name = ' + _FighterSheeva_mk3_R1.NAME + ' max = ' + SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].max);
           //console.log('1_type = ' + type + ' num = ' + num + ' index iz = ' + SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].fr[num]);

              _SpritesFighter_R1.drawSprite(
                  SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].typeSpritesFighterSet,
                  SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].fr[num], left, top, _GameText_R1);
         }else{
           //console.log('2_name = ' + _FighterSheeva_mk3_R1.NAME + ' max = ' + SpritesAnimators_R.animatorsSheeva_mk3[type].max);
           //console.log('2_type = ' + type + ' num = ' + num + ' index iz = ' + SpritesAnimators_R.animatorsSheeva_mk3[type].fr[num]);

              _SpritesFighter_R1.drawSpriteMirror(
                  SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].typeSpritesFighterSet,
                  SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].fr[num], left, top, _GameText_R1);
         };

         num = num + 1;
         if (num > SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].max - 1 ) {
             num = 0;

              if (SpritesAnimators_R.animatorsSheeva_mk3_mobj[type].mustToStance == 1 ) {
                   _FighterSheeva_mk3_R1.SpritesAnimatorsOldTypeAnimation = _FighterSheeva_mk3_R1.SpritesAnimatorsTypeAnimation;
                   _FighterSheeva_mk3_R1.SpritesAnimatorsTypeAnimation = SpritesAnimators_R.FIGHTING_STANCE_ANI;
                   _FighterSheeva_mk3_R1.SpritesAnimatorsBusy = 0;
              };
         };

         _FighterSheeva_mk3_R1.SpritesAnimatorsFrames = num;
     };
     //=========================================================================

     //=========================================================================
     SpritesAnimators_R.tickAnimation = function( _GameText_R1,
       _SpritesFighter_R1, _FighterSheeva_mk3_R1){

       var typeStateAnimators = _FighterSheeva_mk3_R1.stateFighter;
       var width = _FighterSheeva_mk3_R1.width;
       var height = _FighterSheeva_mk3_R1.height;

       //alert("typeStateAnimators = " + typeStateAnimators);

       this.setTypeAnimation(_FighterSheeva_mk3_R1);
       var num = _FighterSheeva_mk3_R1.SpritesAnimatorsFrames;

         if( (typeStateAnimators == SpritesAnimators_R.BLOCKING_HIGH_ANI) ||(typeStateAnimators == SpritesAnimators_R.BLOCKING_LOW_ANI) ){
              if (num > 3 ){
                 _FighterSheeva_mk3_R1.SpritesAnimatorsFrames = 3;
                 //this.inProcess = 0;
              };
         };

         this.animation(_GameText_R1, _SpritesFighter_R1, _FighterSheeva_mk3_R1);
     };
     //=========================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('9   module "SpritesAnimators" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module SpritesAnimators done");
