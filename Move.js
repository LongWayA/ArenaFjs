"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
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

//==============================================================================
Move_R.tick = function(_Fighter_1, _Fighter_2, _ArenaScene_R) {

   //
};
//==============================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('11 module "Move" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module Move done");
