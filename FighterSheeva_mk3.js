"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 21.07.2018 - 30.12.2018 - 31.05.2019

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R
   CommandToFighter_R
   Render_R
  */


  //alert("module FighterSheeva_mk3 start");
  //============================================================================


 window.FighterSheeva_mk3_R = {};

     FighterSheeva_mk3_R.typeM = ["fightingStance", "walkingForward",
                                  "walkingBack", "running", "punchUp",
                                  "punchMidle", "kickFront", "kickBack",
                                  "beingHit", "block", "blockLow"];



    FighterSheeva_mk3_R.name = "FighterSheeva_mk3";

    FighterSheeva_mk3_R.MAX_HEALTH = 1000; //
    FighterSheeva_mk3_R.MAX_STAMINA = 100; //

    FighterSheeva_mk3_R.stateFighter = "fightingStance";
    FighterSheeva_mk3_R.busy = 0;
    FighterSheeva_mk3_R.left = 0;
    FighterSheeva_mk3_R.top = 0;
    FighterSheeva_mk3_R.mirror = 0; // Direction_RIGHT_LEFT
    FighterSheeva_mk3_R.width = 0;
    FighterSheeva_mk3_R.height = 0;

       // жизни бойца
    FighterSheeva_mk3_R.health = 0;

        // изменение жизней при попадании в хит
    FighterSheeva_mk3_R.dhUpPunch = 0;    //2% = (1000/100)*2 = 20
    FighterSheeva_mk3_R.dhMidlePunch = 0; //3%
    FighterSheeva_mk3_R.dhFrontKick = 0;  //5%
    FighterSheeva_mk3_R.dhBackKick = 0;   //7%

        // изменение жизней при попадании в блок
    FighterSheeva_mk3_R.dhUpPunchBlock = 0;     //0,4% = (1000/100)*0.4 = 4
    FighterSheeva_mk3_R.dhMidlePunchBlock = 0;  //0,6%
    FighterSheeva_mk3_R.dhFrontKickBlock = 0;  //1%
    FighterSheeva_mk3_R.dhBackKickBlock = 0;   //1,4%

        // выносливость бойца
    FighterSheeva_mk3_R.stamina = 0;

        // изменение выносливости
    FighterSheeva_mk3_R.ds = 0;

    FighterSheeva_mk3_R.SpritesAnimators_state = {

        name : "SpritesAnimators_state",

        num : 0,
        inProcess : 0,
        type : "n",
        oldType : "no",

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
        }
    };

    //==========================================================================
    FighterSheeva_mk3_R.ini = function(left, top, mirror) {
         this.name = "FighterSheeva_mk3+";
         this.stateFighter = "fightingStance";
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
    };
    //==========================================================================

    //==========================================================================
    FighterSheeva_mk3_R.tickAnimation = function(_SpritesAnimators_R1,
        _GameText_R1, _SpritesFighter_R1) {
       //alert("!");
        //alert("this.name =" + this.name);
        //alert("this.name =" + this.name + " this.stateFighter =" + this.stateFighter);
        //alert("Fimk3_R.name = " + FighterSheeva_mk3_R.name + " Fimk3_R.stateFighter = " + FighterSheeva_mk3_R.stateFighter);

         _SpritesAnimators_R1.all_Animation(
           this.stateFighter,  this.left,
           this.top,  this.mirror,
           this.width,  this.height, _GameText_R1,
            _SpritesFighter_R1, FighterSheeva_mk3_R);

         if (FighterSheeva_mk3_R.SpritesAnimators_state.inProcess == 0) this.busy = 0;
    };
    //==========================================================================

    //==========================================================================
    FighterSheeva_mk3_R.switchToState = function(toState) {

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

    };
    //==========================================================================

    //==========================================================================
    FighterSheeva_mk3_R.setState = function(toState) {

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
      //alert("s11 this.name =" + this.name + " toState =" + toState);
      //alert("s 12 this.name =" + this.name + " this.stateFighter =" + this.stateFighter);

        if(toState != this.stateFighter){
            if( this.busy == 0){
              this.stateFighter = toState;
              if( this.switchToState(toState) == 1) this.busy = 1;
            }

        } else {
          if(FighterSheeva_mk3_R.SpritesAnimators_state.inProcess == 0) {
             if( this.switchToState(toState) == 1) this.busy = 1;
          };

        };//if(toState != this.state){

        //  alert("s 21 this.name =" + this.name + " toState =" + toState);
      //    alert("s 22 this.name =" + this.name + " this.stateFighter =" + this.stateFighter);

    };//this.setState
    //==========================================================================

// когда удар проходит то вклчаем анимацию попадания несмотря на текущее состояние
    //==========================================================================
    FighterSheeva_mk3_R.setStateBeingHit = function(toState) {
        if(toState != this.stateFighter){
           this.stateFighter = toState;
           this.busy = 1;
        };
    };
    //==========================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('10 module "FighterSheeva" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module FighterSheeva done");
