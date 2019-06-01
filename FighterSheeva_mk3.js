"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 21.07.2018 - 30.12.2018 - 31.05.2019

  /*
   $ -переменные

   НАЗНАЧЕНИЕ


   ИСПОЛЬЗУЕТ МОДУЛИ


   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

   ArenaFjs
                     Fighters_R.fighterSheeva_mk3_1.setState(-)
                     Fighters_R.fighterSheeva_mk3_2.setState(-)
                     $ Fighters_R.typeM.length
                     $ Fighters_R.typeM[-]
  */


  //alert("module FighterSheeva_mk3 start");
  //================================================================================

// Fighters------------------------------------------------------------------------------
 var Fighters_R = {};

 Fighters_R.name = "Fighters";//

 //============================================================================
 // INPUT======================================================================



 //============================================================================
 // IMPLEMENTATION=============================================================

 Fighters_R.typeM = ["fightingStance", "walkingForward", "walkingBack", "running", "punchUp",
                            "punchMidle", "kickFront", "kickBack", "beingHit", "block", "blockLow"];


Fighters_R.FighterSheeva_mk3 = {
    name : "FighterSheeva_mk3",

    MAX_HEALTH : 1000, //
    MAX_STAMINA : 100, //

    state : "fightingStance",
    busy : 0,
    left : 0,
    top : 0,
    mirror : 0, // Direction_RIGHT_LEFT
    width : 0,
    height : 0,

       // жизни бойца
    health : 0,

        // изменение жизней при попадании в хит
    dhUpPunch : 0,    //2% = (1000/100)*2 = 20
    dhMidlePunch : 0, //3%
    dhFrontKick : 0,  //5%
    dhBackKick : 0,   //7%

        // изменение жизней при попадании в блок
    dhUpPunchBlock : 0,     //0,4% = (1000/100)*0.4 = 4
    dhMidlePunchBlock : 0,  //0,6%
    dhFrontKickBlock : 0,  //1%
    dhBackKickBlock : 0,   //1,4%

        // выносливость бойца
    stamina : 0,

        // изменение выносливости
    ds : 0,

    ini : function(left, top, mirror) {
         this.state = "fightingStance";
         this.left = left;
         this.top =top;
         this.mirror = mirror; // Direction_RIGHT_LEFT
         this.width = 0;
         this.height = 0;

         // жизни бойца
         this.health = this.MAX_HEALTH;

         // изменение жизней при попадании в хит
         this.dhUpPunch = 20;    //2% = (1000/100)*2 = 20
         this.dhMidlePunch = 30; //3%
         this.dhFrontKick = 50;  //5%
         this.dhBackKick = 70;   //7%

        // изменение жизней при попадании в блок
        this.dhUpPunchBlock = 4;     //0,4% = (1000/100)*0.4 = 4
        this.dhMidlePunchBlock = 6;  //0,6%
        this.dhFrontKickBlock = 10;  //1%
        this.dhBackKickBlock = 14;   //1,4%

        // выносливость бойца
        this.stamina = this.MAX_STAMINA;

        // изменение выносливости
        this.ds = 1;
     },

     // tickAnimation ---------------------------------------
     tickAnimation : function(_spritesAnimators) {
       //alert("!");
         _spritesAnimators.all_Animation(
           this.state,  this.left,
           this.top,  this.mirror,
           this.width,  this.height);

         if (_spritesAnimators.inProcess == 0) this.busy = 0;
     },

    switchToState : function(toState) {

      var ret = 0;

      switch(toState){

           case "fightingStance":
               ret = 0;
           break;

           case "running":
               ret = 0;
           break;
           case "walkingForward":
               ret = 0;
           break;
           case "walkingBack":
               ret = 0;
           break;
           case "punchUp":
               ret = 1;
           break;
           case "punchMidle":
               ret = 1;
           break;
           case "kickFront":
               ret = 1;
           break;
           case "kickingBack":
               ret = 1;
           break;
           case "blockingHigh":
               ret = 0;
           break;
           case "blockingLow":
               ret = 0;
           break;
           case "beingHit":
               ret = 1;
           break;
      }; //switch(toState){

      return (ret);

    },

     // setState--------------------------------------------------------
     setState : function(_spritesAnimators, toState) {

      // if(toState != this.state){
      //      if( (this.state == "fightingStance")||
      //      (this.state == "walkingForward")||(this.state == "walkingBack")||
      //      (this.state == "block")||(this.state == "blockLow") ){
      //      //alert("1");
      //               this.state = toState;
      //               if (toState != "fightingStance") this.busy = 1;
      //      } else {
      //      // alert("2");
      //            if(this.spritesAnimators.inProcess == 0){
      //                  this.state = toState;
      //                  if (toState != "fightingStance") this.busy = 1;
      //            };
      //     };
      // } else {
      //     if(this.spritesAnimators.inProcess == 0) {
      //        if (toState != "fightingStance") this.busy = 1;
      //      }
      //
      // };//if(toState != this.state){
        if(toState != this.state){
            if( this.busy == 0){
              this.state = toState;
              if( this.switchToState(toState) == 1) this.busy = 1;
            }

        } else {
          if(_spritesAnimators.inProcess == 0) {
             if( this.switchToState(toState) == 1) this.busy = 1;
          };

        };//if(toState != this.state){

     },//this.setState

// когда удар проходит то вклчаем анимацию попадания несмотря на текущее состояние
setStateBeingHit : function(toState) {
    if(toState != this.state){
       this.state = toState;
       this.busy = 1;
    };
},

};//Fighters_R.FighterSheeva_mk3


Fighters_R.spritesAnimators1  = Object.create(SpritesAnimators_R.SpritesAnimators_id);//
Fighters_R.spritesAnimators2  = Object.create(SpritesAnimators_R.SpritesAnimators_id);//

Fighters_R.fighterSheeva_mk3_1 = Object.create(Fighters_R.FighterSheeva_mk3);//
Fighters_R.fighterSheeva_mk3_2 = Object.create(Fighters_R.FighterSheeva_mk3);//

Fighters_R.fighterSheeva_mk3_1.setState(Fighters_R.spritesAnimators1, "fightingStance");
Fighters_R.fighterSheeva_mk3_2.setState(Fighters_R.spritesAnimators2, "fightingStance");
//Fighters_R.fighterSheeva_mk3_1.mirror = 0;
//Fighters_R.fighterSheeva_mk3_2.mirror = 1;

 //alert("!");

Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('10 module "FighterSheeva" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module FighterSheeva done");
