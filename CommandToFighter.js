"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 19.01.2019

  /*
   $ -переменные

   НАЗНАЧЕНИЕ


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

// команды бойцам
CommandToFighter_R.LEFT  = 1;//движение влево
CommandToFighter_R.RIGHT = 2;//движение вправо
CommandToFighter_R.UP    = 3;//движение вверх
CommandToFighter_R.DOWN  = 4;//движение вниз
CommandToFighter_R.RUN   = 5;//бег

// передняя и задняя конечность это относительно боковой стойки
CommandToFighter_R.FRONTPUNCH = 6;// удар передней рукой
CommandToFighter_R.BACKPUNCH  = 7;// удар задней рукой
CommandToFighter_R.FRONTKICK  = 8;// удар передней ногой
CommandToFighter_R.BACKKICK   = 9;// удар задней ногой
CommandToFighter_R.BLOCK      = 10;// блок
CommandToFighter_R.TELEPORT   = 11;// перемещение в другой конец арены,
                                   //применяется против зажима у края


CommandToFighter_R.commandToFighterGammerLeft = new CommandToFighter_CL();
CommandToFighter_R.commandToFighterGammerRight = new CommandToFighter_CL();

CommandToFighter_R.commandToFighterAILeft = new CommandToFighter_CL();
CommandToFighter_R.commandToFighterAIRight = new CommandToFighter_CL();

CommandToFighter_R.commandToFighterGammerLeft.command = 0;
CommandToFighter_R.commandToFighterGammerRight.command = 0;
CommandToFighter_R.commandToFighterAILeft.command = 0;
CommandToFighter_R.commandToFighterAIRight.command = 0;

CommandToFighter_R.commandToFighterGammerLeft.commandText = 'fighting Stance';

//CLCLCLCLCL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function CommandToFighter_CL () {

    this.name = "CommandToFighter_CL";

    this.command;

    // tickAnimation ---------------------------------------
    //this.tickAnimation = function() {

    //};
};//CommandToFighter_CL () {

//CLCLCLCLCL<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('5   module "CommandToFighter" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module CommandToFighter done");
