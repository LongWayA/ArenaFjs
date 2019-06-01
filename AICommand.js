"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 31.12.2018

  /*
   $ -переменные

   НАЗНАЧЕНИЕ


   ИСПОЛЬЗУЕТ МОДУЛИ


   ВЫЗЫВАЕТСЯ В МОДУЛЯХ


  */

  //alert("module AICommand start");
  //================================================================================

var AICommand_R = {};
AICommand_R.name = "AI Command";//

//==============================================================================
// INPUT========================================================================

//==============================================================================
// IMPLEMENTATION===============================================================

/*
// заполняем модуль commandToFighterGammerLeft
UserInput_R.eventUserLeft = function(_сommandToFighter_R) {

  switch(UserInput_R.eventG){

      case UserInput_R.LEFT_F_KEY_LEFT:  // клавиша влево
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.LEFT;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'walking left';

      break;

      case UserInput_R.LEFT_F_KEY_RIGHT:   // клавиша вправо
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.RIGHT;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'walking right';

      break;

      case UserInput_R.LEFT_F_KEY_UP:   // клавиша вверх
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.UP;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = '-up-';

      break;

      case UserInput_R.LEFT_F_KEY_DOWN:   // клавиша вниз
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.DOWN;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = '-down-';

      break;

      case UserInput_R.LEFT_F_KEY_RUN:  // клавиша бег
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.RUN;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'run';

      break;

      case UserInput_R.LEFT_F_KEY_FRONTPUNCH:   // клавиша пердняя рука
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.FRONTPUNCH;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'punch Up';

      break;

      case UserInput_R.LEFT_F_KEY_BACKPUNCH:   // клавиша задняя рука
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.BACKPUNCH;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'punch Midle';

      break;

      case UserInput_R.LEFT_F_KEY_FRONTKICK:   // клавиша передняя нога
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.FRONTKICK;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'kick Front';

      break;

      case UserInput_R.LEFT_F_KEY_BACKKICK:   // клавиша задняя нога
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.BACKKICK;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'kick Back';

      break;

      case UserInput_R.LEFT_F_KEY_BLOCK:   // клавиша блок
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.BLOCK;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'block';

      break;

      case UserInput_R.LEFT_F_KEY_TELEPORT:   // клавиша телепорт
      _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.TELEPORT;
      _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'teleport';

      break;

  };

};
*/

AICommand_R.tick = function(_сommandToFighter_R) {

   //
};



Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('7   module "AI Command" loaded', 1100, Game_R.yT);

//================================================================================
//alert("module AICommand done");
