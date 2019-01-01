"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 1.01.2019

  /*
   $ -переменные

   НАЗНАЧЕНИЕ


   ИСПОЛЬЗУЕТ МОДУЛИ

   Game
        Game_R.context.strokeText(-)

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ


  */

  //alert("module CommandToFighter start");
  //================================================================================

var CommandToFighter_R = {};
CommandToFighter_R.name = "CommandToFighter";//

//==============================================================================
// INPUT========================================================================


//==============================================================================
// IMPLEMENTATION===============================================================


Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('5   module "CommandToFighter" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module CommandToFighter done");
