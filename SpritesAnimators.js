"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 30.12.2018

  /*
   $ -переменные

   НАЗНАЧЕНИЕ

   animatorsSheeva_mk3
   это объект в котором содержатся анимационные последовательности.
   Тут мы задаем какие картинки тематического ряда в какой последовательности выводить.
   Возможно выводить картинки в любой последовательности однако только в пределах одного
   тематического ряда.
   all_Animation(animatorsState_Obj, typeStateAnimators, left, top, mirror, width, height)
   выводим нужный анимационный ряд в нужном месте и нужного размера, если надо то зеркальный.
   Просто вешаем флаг что идет анимация. И когда она кончается тогда сбрасываем флаг в ноль.
   А когда она меняется то запускаем по заданную по новой.
   Получается что с флагом занятости крутится только первый круг.

   ИСПОЛЬЗУЕТ МОДУЛИ

   SpritesFighter
                   SpritesFighter_R.drawSprite(-)
                   SpritesFighter_R.drawSpriteMirror(-)

   Game
                   Game_R.context.strokeText(-)

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

   FighterSheeva_mk3
                    this.spritesAnimators = new SpritesAnimators_CL();
                    spritesAnimators.all_Animation()
  */



// alert("module SpritesAnimators start");
//================================================================================

// Sprite Animators...........................................................

 var SpritesAnimators_R = {};
 SpritesAnimators_R.name = "SpritesAnimators";//

 //============================================================================
 // INPUT======================================================================

// SpritesFighter_R

 SpritesAnimators_R.SpritesFighter_R_drawSprite_IN = function(type,index,left, top) {
   SpritesFighter_R.drawSprite(type,index,left, top);
 };

 SpritesAnimators_R.SpritesFighter_R_drawSpriteMirror_IN = function(type,index,left, top) {
   SpritesFighter_R.drawSpriteMirror(type,index,left, top);
 };

// Sound_R

 SpritesAnimators_R.Sound_R_IN = function(type) {
     Game_R.Sound_R[SpritesAnimators_R.animatorsSheeva_mk3[type].sound].play();
 };


 //============================================================================
 // IMPLEMENTATION=============================================================

 SpritesAnimators_R.animatorsSheeva_mk3 = {
        name : "AnimatorsSheeva_mk3_CL",

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


//CLCLCLCLCL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//class SpritesAnimators_CL
function SpritesAnimators_CL () {

    this.name = "SpritesAnimators_CL";

    this.num;
    this.busy = 0;
    this.type;
    this.oldType = "no";


    //setType-------------------------------------------------------
    this.setType = function(toType) {

     //alert("this.type = " + this.type + " toType = " + toType);
         this.type = toType;

           if (this.oldType != toType) {
              this.oldType = toType;
              this.num = 0;
              this.busy = 1;
           };
     };

     //animation-------------------------------------------------------
     this.animation = function(mirror,left, top) {

         if (mirror == 0){
              SpritesAnimators_R.SpritesFighter_R_drawSprite_IN(
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].translate,
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].fr[this.num], left, top);
         }else{
              SpritesAnimators_R.SpritesFighter_R_drawSpriteMirror_IN(
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].translate,
                  SpritesAnimators_R.animatorsSheeva_mk3[this.type].fr[this.num], left, top);
         };

         this.num = this.num + 1;
         if (this.num > SpritesAnimators_R.animatorsSheeva_mk3[this.type].max - 1 ) {
             this.num = 0;
             this.busy = 0;
         };
     };

     //all_Animation-------------------------------------------------------
     this.all_Animation = function(typeStateAnimators, left, top, mirror, width, height){

       this.setType(typeStateAnimators);

         if (SpritesAnimators_R.animatorsSheeva_mk3[this.type].str[this.num] == 1 ){
              SpritesAnimators_R.Sound_R_IN(this.type);
         };

         if( (typeStateAnimators == "block") ||(typeStateAnimators == "blockLow") ){
              if (this.num > 3 ){
                 this.num = 3;
                 this.busy = 0;
              }
              this.animation(mirror, left, top);
         }else {
              this.animation(mirror, left, top);
         };
     };


};//function SpritesAnimators_CL () {
//CLCLCLCLCL<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

SpritesAnimators_R.spritesAnimatorsTest = new SpritesAnimators_CL();

SpritesAnimators_R.animationAll_TEST = function(){

 SpritesAnimators_R.spritesAnimatorsTest.all_Animation( "fightingStance",  50, 250,  0, 100,  100);

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

Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('9   module "SpritesAnimators" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module SpritesAnimators done");
