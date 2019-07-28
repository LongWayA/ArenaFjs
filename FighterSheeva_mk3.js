"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 21.07.2018 - 30.12.2018 - 31.05.2019
//t
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


     // должна быть согласована со SpritesAnimators_R
     FighterSheeva_mk3_R.STATE_F_TXT = ["fightingStance", "walkingForward",
                                  "walkingBack", "running", "punchUp",
                                  "punchMidle", "kickFront", "kickBack",
                                   "blockingHigh", "blockingLow", "beingHit"];


     FighterSheeva_mk3_R.STATE_F = [
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


    FighterSheeva_mk3_R.NAME = "FighterSheeva_mk3";

    FighterSheeva_mk3_R.MAX_HEALTH = 1000; //
    FighterSheeva_mk3_R.MAX_STAMINA = 100; //

    FighterSheeva_mk3_R.stateFighter = FighterSheeva_mk3_R.STATE_F[0] ; //"fightingStance"
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

    //"SpritesAnimators_state"--------------------------------
    FighterSheeva_mk3_R.SpritesAnimators_state_num = 0;
    FighterSheeva_mk3_R.SpritesAnimators_state_inProcess = 0;
    FighterSheeva_mk3_R.SpritesAnimators_state_type = "n";
    FighterSheeva_mk3_R.SpritesAnimators_state_oldType = "no";

    FighterSheeva_mk3_R.SpritesAnimators_state_setType = function(toType) {
    //alert("this.type = " + this.type + " toType = " + toType);
    //if (this.inProcess == 1) alert("this.inProcess = " + this.inProcess);

          if (this.SpritesAnimators_state_oldType != toType) {
             this.SpritesAnimators_state_oldType = this.SpritesAnimators_state_type;
             this.SpritesAnimators_state_type = toType;
             this.SpritesAnimators_state_num = 0;
             this.SpritesAnimators_state_inProcess = 1;
          } else {
             if (this.SpritesAnimators_state_inProcess == 0) this.SpritesAnimators_state_inProcess = 1;
          };
    };

    //==========================================================================
    FighterSheeva_mk3_R.ini = function(_left, _top, _width, _height,
      _mirror, _name_id, _stateFighter) {
         this.NAME = "FighterSheeva_mk3_" + _name_id;
         this.stateFighter = _stateFighter;
         this.left = _left;
         this.top = _top;
         this.mirror = _mirror; // Direction_RIGHT_LEFT
         this.width = _width;
         this.height = _height;

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
        //alert("this.NAME =" + this.NAME + " this.stateFighter =" + this.stateFighter);
        //alert("Fimk3_R.NAME = " + FighterSheeva_mk3_R.NAME + " Fimk3_R.stateFighter = " + FighterSheeva_mk3_R.stateFighter);

         _SpritesAnimators_R1.all_Animation(
           this.stateFighter,  this.left,
           this.top,  this.mirror,
           this.width,  this.height, _GameText_R1,
            _SpritesFighter_R1, this);

         if (this.SpritesAnimators_state_inProcess == 0) this.busy = 0;
    };
    //==========================================================================

    //==========================================================================
    FighterSheeva_mk3_R.switchToState = function(toState) {

      var ret = 0;

      switch(toState){

           case FighterSheeva_mk3_R.STATE_F[0] : //"fightingStance":
               ret = 0;
           break;

           case FighterSheeva_mk3_R.STATE_F[1] : //"walkingForward":
               ret = 0;
           break;
           case FighterSheeva_mk3_R.STATE_F[2] : //"walkingBack":
               ret = 0;
           break;

           case FighterSheeva_mk3_R.STATE_F[3] : //"running":
               ret = 0;
           break;

           case FighterSheeva_mk3_R.STATE_F[4] : //"punchUp":
               ret = 1;
           break;
           case FighterSheeva_mk3_R.STATE_F[5] : //"punchMidle":
               ret = 1;
           break;
           case FighterSheeva_mk3_R.STATE_F[6] : //"kickFront":
               ret = 1;
           break;
           case FighterSheeva_mk3_R.STATE_F[7] : //"kickingBack":
               ret = 1;
           break;

           case FighterSheeva_mk3_R.STATE_F[8] : //"beingHit":
               ret = 1;
           break;

           case FighterSheeva_mk3_R.STATE_F[9] : //"blockingHigh":
               ret = 0;
           break;
           case FighterSheeva_mk3_R.STATE_F[10] : //"blockingLow":
               ret = 0;
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
      //alert("s11 this.NAME =" + this.NAME + " toState =" + toState);
      //alert("s 12 this.NAME =" + this.NAME + " this.stateFighter =" + this.stateFighter);

        if(toState != this.stateFighter){
            if( this.busy == 0){
              this.stateFighter = toState;
              if( this.switchToState(toState) == 1) this.busy = 1;
            }

        } else {
          if(this.SpritesAnimators_state_inProcess == 0) {
             if( this.switchToState(toState) == 1) this.busy = 1;
          };

        };//if(toState != this.state){

        //  alert("s 21 this.NAME =" + this.NAME + " toState =" + toState);
      //    alert("s 22 this.NAME =" + this.NAME + " this.stateFighter =" + this.stateFighter);

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
