"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 31.12.2018 - 18.11.2019 -

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R

  */

  //alert("module AICommand start");
  //============================================================================

window.AICommand_R = {};
AICommand_R.NAME = "AI Command_R";//


/*
// заполняем модуль commandToFighterGammerLeft
UserInput_R.eventUserLeft = function(_CommandToFighter_R) {

  switch(UserInput_R.eventG){

      case UserInput_R.LEFT_F_KEY_LEFT:  // клавиша влево
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.LEFT;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'walking left';

      break;

      case UserInput_R.LEFT_F_KEY_RIGHT:   // клавиша вправо
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.RIGHT;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'walking right';

      break;

      case UserInput_R.LEFT_F_KEY_UP:   // клавиша вверх
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.UP;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = '-up-';

      break;

      case UserInput_R.LEFT_F_KEY_DOWN:   // клавиша вниз
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.DOWN;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = '-down-';

      break;

      case UserInput_R.LEFT_F_KEY_RUN:  // клавиша бег
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.RUN;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'run';

      break;

      case UserInput_R.LEFT_F_KEY_FRONTPUNCH:   // клавиша пердняя рука
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.FRONTPUNCH;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'punch Up';

      break;

      case UserInput_R.LEFT_F_KEY_BACKPUNCH:   // клавиша задняя рука
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.BACKPUNCH;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'punch Midle';

      break;

      case UserInput_R.LEFT_F_KEY_FRONTKICK:   // клавиша передняя нога
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.FRONTKICK;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'kick Front';

      break;

      case UserInput_R.LEFT_F_KEY_BACKKICK:   // клавиша задняя нога
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.BACKKICK;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'kick Back';

      break;

      case UserInput_R.LEFT_F_KEY_BLOCK:   // клавиша блок
           _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.BLOCK;
           _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'block';

      break;

      case UserInput_R.LEFT_F_KEY_TELEPORT:   // клавиша телепорт
      _CommandToFighter_R.commandToFighterGammerLeft.command = _CommandToFighter_R.TELEPORT;
      _CommandToFighter_R.commandToFighterGammerLeft.commandText = 'teleport';

      break;

  };

};
*/

//==============================================================================
AICommand_R.tickM = function( _CommandToFighter_R) {
  //
  _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.STANCE;
  _CommandToFighter_R.saveCommandToFighter_commandText = 'fighting Stance';
  _CommandToFighter_R.saveCommandToFighter_update = 1;

};
//==============================================================================

//==============================================================================
AICommand_R.tick = function(_fighter_1, _fighter_2, _CommandToFighter_R) {

  // Move_R.DR_F_PUNCH = 75;//
  // Move_R.DR_F_FRONT_KICK = 95;//
  // Move_R.DR_F_BACK_KICK = 115;//

  var num_1 = _fighter_1.SpritesAnimatorsFrames;
  var type_1 = _fighter_1.SpritesAnimatorsTypeAnimation;
  var type_2 = _fighter_2.SpritesAnimatorsTypeAnimation;

  var mF_1 = _fighter_1.middle;
  var mF_2 = _fighter_2.middle;
  var dR_1_2 = (mF_1 - mF_2)*(mF_1 - mF_2);

  //if (_Fighter_1.SpritesAnimatorsTypeAnimation == SpritesAnimators_R.WALKING_FORWARD_ANI) {

  //
  _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.STANCE;
  _CommandToFighter_R.saveCommandToFighter_commandText = 'fighting Stance';
  _CommandToFighter_R.saveCommandToFighter_update = 1;

  if (dR_1_2 > (Move_R.DR_F_BACK_KICK * Move_R.DR_F_BACK_KICK) + 40000) {

    _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.RUN;
    _CommandToFighter_R.saveCommandToFighter_commandText = 'run';
    _CommandToFighter_R.saveCommandToFighter_update = 1;

  } else if (dR_1_2 > (Move_R.DR_F_BACK_KICK * Move_R.DR_F_BACK_KICK)){
    if (_fighter_2.mirror == 0) {
        _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.RIGHT;
        _CommandToFighter_R.saveCommandToFighter_commandText = 'walking left';
        _CommandToFighter_R.saveCommandToFighter_update = 1;
    } else{
        _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.LEFT;
        _CommandToFighter_R.saveCommandToFighter_commandText = 'walking right';
        _CommandToFighter_R.saveCommandToFighter_update = 1;
    };

  } else if (dR_1_2 <= (Move_R.DR_F_BACK_KICK * Move_R.DR_F_BACK_KICK)){

    _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.BACKKICK;
    _CommandToFighter_R.saveCommandToFighter_commandText = 'kick Back';
    _CommandToFighter_R.saveCommandToFighter_update = 1;

  };



};
//==============================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('7   module "AI Command" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module AICommand done");
