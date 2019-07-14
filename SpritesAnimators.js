"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 30.12.2018

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
 SpritesAnimators_R.name = "SpritesAnimators";//


 SpritesAnimators_R.animatorsSheeva_mk3 = {
        name : "AnimatorsSheeva_mk3",

        fightingStance : {
             translate : "fightingStance",
             fr :  [1,2,3,4,5,6,5,4,3,2,1],
             str : [1,0,0,0,0,0,0,0,0,0,0],
             max : 11,
             sound: "sound_IA"
         },

         running : {
             translate : "running",
             fr :  [1,2,3,4,5,6,7,8,9,10,11,12],
             str : [1,0,0,0,0,0,0,0,0,0, 0, 0],
             max : 12,
             sound: "sound_IAAAA"
         },

         walkingForward : {
             translate : "walking",
             fr :  [1,2,3,4,5,6,7,8,9],
             str : [0,0,0,0,0,0,0,0,0],
             max : 9,
             sound: "sound_IAA"
         },

         walkingBack : {
             translate : "walking",
             fr :  [9,8,7,6,5,4,3,2,1],
             str : [0,0,0,0,0,0,0,0,0],
             max : 9,
             sound: "sound_IAA"
         },

         punchUp : {
            translate : "punchingUp",
            fr :  [1,2,3,4,5,6],
            str : [0,0,0,0,0,1],
            max : 6,
            sound: "sound_STR_H"
         },

         punchMidle : {
           translate : "punchingMidle",
           fr :  [1,2,3,4,5,6,7],
           str : [0,0,0,1,0,0,1],
           max : 7,
           sound: "sound_H"
         },

         kickFront : {
           translate : "kickingFront",
           fr :  [1,2,3,4,5,6,7,8],
           str : [0,0,0,0,0,0,0,1],
           max : 8,
           sound: "sound_STR_F"
         },

         kickBack : {
           translate : "kickingBack",
           fr :  [1,2,3,4,5,6,7,8],
           str : [0,0,0,0,0,0,0,1],
           max : 8,
           sound: "sound_F"
         },

         block : {
           translate : "blockingHigh",
           fr :  [1,2,3,2,1],
           str : [0,0,1,0,0],
           max : 5,
           sound: "sound_STR_B"
         },

         blockLow : {
           translate : "blockingLow",
           fr :  [1,2,3,2,1],
           str : [0,0,1,0,0],
           max : 5,
           sound: "sound_STR_B"
         },

         beingHit : {
           translate : "beingHit",
           fr :  [1,2,3,2,1],
           str : [0,0,1,0,0],
           max : 5,
           sound: "sound_STR"
         }
 };

SpritesAnimators_R.YES_MIRROR = 1;
SpritesAnimators_R.NO_MIRROR = 0;

//
SpritesAnimators_R.SpritesAnimators_id = {

    name : "SpritesAnimators",

    num : 0,
    inProcess : 0,
    type : "n",
    oldType : "no",


    //setType-------------------------------------------------------
    setType : function(toType) {
     //alert("this.type = " + this.type + " toType = " + toType);
     //if (this.inProcess == 1) alert("this.inProcess = " + this.inProcess);

      if (this.oldType != toType) {
         this.type = toType;
         this.oldType = toType;
         this.num = 0;
         this.inProcess = 1;
      } else {
         if (this.inProcess == 0) this.inProcess = 1;
      };
    },

     //=========================================================================
     animation : function(mirror,left, top, _GameText_R1,_SpritesFighter_R1) {

         //alert("_SpritesFighter_R1 = " + _SpritesFighter_R1.name);

         if (mirror == SpritesAnimators_R.NO_MIRROR){
              _SpritesFighter_R1.drawSprite(
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].translate,
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].fr[this.num], left, top, _GameText_R1);
         }else{
              _SpritesFighter_R1.drawSpriteMirror(
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].translate,
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].fr[this.num], left, top, _GameText_R1);
         };

         this.num = this.num + 1;
         if (this.num > SpritesAnimators_R.animatorsSheeva_mk3[this.type].max - 1 ) {
             this.num = 0;
             this.inProcess = 0;
         };
     },
     //=========================================================================

     //=========================================================================
     all_Animation : function(typeStateAnimators, left, top, mirror, width,
        height, _GameText_R1, _SpritesFighter_R1){

       this.setType(typeStateAnimators);

        // if (SpritesAnimators_R.animatorsSheeva_mk3[this.type].str[this.num] == 1 ){
      //        _Sound_R1[SpritesAnimators_R.animatorsSheeva_mk3[type].sound].play();
      //   };

         if( (typeStateAnimators == "block") ||(typeStateAnimators == "blockLow") ){
              if (this.num > 3 ){
                 this.num = 3;
                 //this.inProcess = 0;
              }
              this.animation(mirror, left, top , _GameText_R1, _SpritesFighter_R1);
         }else {
              this.animation(mirror, left, top, _GameText_R1, _SpritesFighter_R1);
         };
     },
     //=========================================================================

};//SpritesAnimators_R.SpritesAnimators_id



 // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

 SpritesAnimators_R.spritesAnimatorsTest = Object.create(SpritesAnimators_R.SpritesAnimators_id);//

 SpritesAnimators_R.animationAll_TEST = function(_GameText_R1){

  SpritesAnimators_R.spritesAnimatorsTest.all_Animation( "fightingStance",  50, 250,  0, 100,  100, _GameText_R1);

  //SpritesAnimators_R.all_Animation(SpritesAnimators_R.animatorsState_0, "fightingStance", 0, 50,0,0,0);

  /*
    SpritesAnimators_R.AnimatorsSheeva_mk3_1_t.all_Animation("fightingStance", 0, 50,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_2_t.all_Animation("fightingStance", 0, 250,1,0,0);

    SpritesAnimators_R.AnimatorsSheeva_mk3_3_t.all_Animation("running", 300, 50,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_4_t.all_Animation("running", 300, 250,1,0,0);

    SpritesAnimators_R.AnimatorsSheeva_mk3_5_t.all_Animation("walkingForward", 600, 50,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_6_t.all_Animation("walkingForward", 600, 250,1,0,0);
        //SpritesAnimators_R.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 50,0,0,0);
        //SpritesAnimators_R.AnimatorsSheeva_mk3_2.All_Animation("walkingBack", 600, 250,1,0,0);
 	      //SpritesAnimators_R.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 450,0,0,0); //___________

    SpritesAnimators_R.AnimatorsSheeva_mk3_7_t.all_Animation("punchUp", 900, 50,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_8_t.all_Animation("punchUp", 900, 250,1,0,0);

    SpritesAnimators_R.AnimatorsSheeva_mk3_9_t.all_Animation("punchMidle", 1200, 50,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_10_t.all_Animation("punchMidle", 1200, 250,1,0,0);

    SpritesAnimators_R.AnimatorsSheeva_mk3_11_t.all_Animation("kickFront", 0, 450,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_12_t.all_Animation("kickFront", 0, 650,1,0,0);

    SpritesAnimators_R.AnimatorsSheeva_mk3_13_t.all_Animation("kickBack", 300, 450,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_14_t.all_Animation("kickBack", 300, 650,1,0,0);

    SpritesAnimators_R.AnimatorsSheeva_mk3_15_t.all_Animation("block", 600, 450,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_16_t.all_Animation("block", 600, 650,1,0,0);

    SpritesAnimators_R.AnimatorsSheeva_mk3_17_t.all_Animation("blockLow", 900, 450,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_18_t.all_Animation("blockLow", 900, 650,1,0,0);

 	  SpritesAnimators_R.AnimatorsSheeva_mk3_19_t.all_Animation("beingHit", 1200, 450,0,0,0);
    SpritesAnimators_R.AnimatorsSheeva_mk3_20_t.all_Animation("beingHit", 1200, 650,1,0,0);
  	*/
 };
 // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
 /*
 class Proba {

     constructor(){

       this.a;

     };


     w(){
         alert("w");
     };

     b(){
         this.w();
         alert("b");
     };
 };

 SpritesAnimators_R.proba = new Proba();

 //SpritesAnimators_R.proba.b();
 */


//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('9   module "SpritesAnimators" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module SpritesAnimators done");
