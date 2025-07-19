"use strict";
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 30.12.2018 - 11.11.2019 -

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R

  */


  //alert("module Move start");
  //============================================================================

window.Move_R = {};
Move_R.NAME = "Move";//
Move_R.DR_STOP_AR_L = 40;//
Move_R.DR_STOP_AR_R = 40;//
Move_R.DR_STOP_F = 50;//
Move_R.STOP = 1;//
Move_R.NO_STOP = 0;//

Move_R.dx = 10;//
Move_R.dxRunning = 30;//


//==============================================================================
Move_R.dX_Fighter_1__Fighter_2 = function(_middle_1, _middle_2) {
  var R2 = (_middle_1 - _middle_2) * (_middle_1 - _middle_2);
  return R2;
};
//==============================================================================

//==============================================================================
Move_R.stop_Fighter_1 = function(_Fighter_1, _Fighter_2, _ArenaScene_R) {

   var xL_S = _ArenaScene_R.FightFrame.x0Left;
   var xR_S = _ArenaScene_R.FightFrame.xRight;
   var mF_1 = _Fighter_1.middle;
   var dR_L_S = mF_1 - xL_S;
   var dR_R_S = xR_S - mF_1;
   var xR2 = Move_R.dX_Fighter_1__Fighter_2(_Fighter_1.middle,_Fighter_2.middle);
   var stop = Move_R.NO_STOP;


   if (xR2 < (Move_R.DR_STOP_F * Move_R.DR_STOP_F) ) {
      stop = Move_R.STOP;
   };

   if (dR_L_S < Move_R.DR_STOP_AR_L) {
      stop = Move_R.STOP;
   };

   if (dR_R_S < Move_R.DR_STOP_AR_R) {
      stop = Move_R.STOP;
   };

   return stop;

};
//==============================================================================

//==============================================================================
Move_R.moveFighter_1or2 = function(_Fighter_1, _Fighter_2, _ArenaScene_R) {

      var mult_dx = 2;
      //
      if (_Fighter_1.spritesAnimatorsTypeAnimation == SpritesAnimators_R.WALKING_FORWARD_ANI) {

          if (_Fighter_1.mirror == SpritesAnimators_R.NO_MIRROR) {
             _Fighter_1.middle = _Fighter_1.middle + Move_R.dx;
             if (Move_R.stop_Fighter_1(_Fighter_1, _Fighter_2, _ArenaScene_R) == Move_R.STOP){
               _Fighter_1.middle = _Fighter_1.middle - mult_dx * Move_R.dx;
             };
          } else {
            _Fighter_1.middle = _Fighter_1.middle - Move_R.dx;
            if (Move_R.stop_Fighter_1(_Fighter_1, _Fighter_2, _ArenaScene_R) == Move_R.STOP){
              _Fighter_1.middle = _Fighter_1.middle + mult_dx * Move_R.dx;
            };
          };
     } else if(_Fighter_1.spritesAnimatorsTypeAnimation == SpritesAnimators_R.WALKING_BACK_ANI) {
         if (_Fighter_1.mirror == SpritesAnimators_R.YES_MIRROR) {
            _Fighter_1.middle = _Fighter_1.middle + Move_R.dx;
            if (Move_R.stop_Fighter_1(_Fighter_1, _Fighter_2, _ArenaScene_R) == Move_R.STOP){
              _Fighter_1.middle = _Fighter_1.middle - mult_dx * Move_R.dx;
            };
         } else {
           _Fighter_1.middle = _Fighter_1.middle - Move_R.dx;
           if (Move_R.stop_Fighter_1(_Fighter_1, _Fighter_2, _ArenaScene_R) == Move_R.STOP){
             _Fighter_1.middle = _Fighter_1.middle + mult_dx * Move_R.dx;
           };
        };
     } else if(_Fighter_1.spritesAnimatorsTypeAnimation == SpritesAnimators_R.RUNNING_ANI) {
        if (_Fighter_1.mirror == SpritesAnimators_R.NO_MIRROR) {
            _Fighter_1.middle = _Fighter_1.middle + Move_R.dxRunning;
            if (Move_R.stop_Fighter_1(_Fighter_1, _Fighter_2, _ArenaScene_R) == Move_R.STOP){
              _Fighter_1.middle = _Fighter_1.middle - Move_R.dxRunning;
            };
        } else {
            _Fighter_1.middle = _Fighter_1.middle - Move_R.dxRunning;
            if (Move_R.stop_Fighter_1(_Fighter_1, _Fighter_2, _ArenaScene_R) == Move_R.STOP){
              _Fighter_1.middle = _Fighter_1.middle + Move_R.dxRunning;
            };
        };
     } else if(_Fighter_1.spritesAnimatorsTypeAnimation == SpritesAnimators_R.FIGHTING_STANCE_ANI){
        if (_Fighter_1.teleport == 1) {
           if (_Fighter_1.mirror == SpritesAnimators_R.NO_MIRROR) {
                if (_Fighter_2.middle < _ArenaScene_R.FightFrame.xRight - Move_R.DR_STOP_AR_R - Move_R.DR_STOP_F) {
                         _Fighter_1.middle = _ArenaScene_R.FightFrame.xRight - Move_R.DR_STOP_AR_R;
                };
           } else{
                if (_Fighter_2.middle > Move_R.DR_STOP_F + _ArenaScene_R.FightFrame.x0Left + Move_R.DR_STOP_AR_L) {
                       _Fighter_1.middle = _ArenaScene_R.FightFrame.x0Left + Move_R.DR_STOP_AR_L;
                };
           };
           _Fighter_1.teleport = 0;
       };
     };

   //
  if ( (_Fighter_1.middle -_Fighter_2.middle) > 0){
     _Fighter_1.mirror = SpritesAnimators_R.YES_MIRROR;
     _Fighter_2.mirror = SpritesAnimators_R.NO_MIRROR;
   }else{
     _Fighter_1.mirror = SpritesAnimators_R.NO_MIRROR;
     _Fighter_2.mirror = SpritesAnimators_R.YES_MIRROR;
   };


};
//==============================================================================


//==============================================================================
Move_R.tick = function(_Fighter_1, _Fighter_2, _ArenaScene_R) {

  //
  Move_R.moveFighter_1or2(_Fighter_1, _Fighter_2, _ArenaScene_R);
  Move_R.moveFighter_1or2(_Fighter_2, _Fighter_1, _ArenaScene_R);
   //
};
//==============================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('11 module "Move" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module Move done");
