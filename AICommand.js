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

//==============================================================================
AICommand_R.tickM = function( _CommandToFighter_R) {
  //
  _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.STANCE;
  _CommandToFighter_R.saveCommandToFighter_commandText = 'fighting Stance';
  _CommandToFighter_R.saveCommandToFighter_update = 1;

};
//==============================================================================

//
//=============================================================================
AICommand_R.CommandToFighter = function(_CommandToFighter_R, command) {

  switch(command){

      case CommandToFighter_R.LEFT:  // влево
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.LEFT;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'walking left';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.RIGHT:   // вправо
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.RIGHT;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'walking right';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.UP:   // вверх
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.UP;
           _CommandToFighter_R.saveCommandToFighter_commandText = '-up-';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.DOWN:   // вниз
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.DOWN;
           _CommandToFighter_R.saveCommandToFighter_commandText = '-down-';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.RUN:  // бег
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.RUN;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'run';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.FRONTPUNCH:   // пердняя рука
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.FRONTPUNCH;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'punch Up';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.BACKPUNCH:   // задняя рука
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.BACKPUNCH;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'punch Midle';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.FRONTKICK:   // передняя нога
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.FRONTKICK;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'kick Front';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.BACKKICK:   // задняя нога
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.BACKKICK;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'kick Back';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.BLOCK:   // блок
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.BLOCK;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'block';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case CommandToFighter_R.TELEPORT:   // телепорт
          _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.TELEPORT;
          _CommandToFighter_R.saveCommandToFighter_commandText = 'teleport';
          _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

  };

};
//==============================================================================




//==============================================================================
//AICommand_R.tick(fighter_1, fighter_2, CommandToFighter_R.toFighterRight);//
//AICommand_R.tick(fighter_2, fighter_1, CommandToFighter_R.toFighterLeft);//
AICommand_R.tick = function(_Fighter_1, _Fighter_2, _CommandToFighter_R) {

  // Move_R.DR_F_PUNCH = 75;//
  // Move_R.DR_F_FRONT_KICK = 95;//
  // Move_R.DR_F_BACK_KICK = 115;//

  var num_1 = _Fighter_1.spritesAnimatorsFrames;
  var type_1 = _Fighter_1.spritesAnimatorsTypeAnimation;
  var type_2 = _Fighter_2.spritesAnimatorsTypeAnimation;

  var mF_1 = _Fighter_1.middle;
  var mF_2 = _Fighter_2.middle;
  var dR_1_2 = (mF_1 - mF_2)*(mF_1 - mF_2);
// Math.random() возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
  var r1 = 1 + Math.floor( Math.random() * 6 ) ;
  var r2 = 1 + Math.floor( Math.random() * 4 ) ;
  //console.log('AICommand_R: r1 =' + r1);

  //
  AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.STANCE);

  if (dR_1_2 > (Fight_R.DR_F_BACK_KICK * Fight_R.DR_F_BACK_KICK) + 40000) {
     AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.RUN);
  } else if (dR_1_2 > (Fight_R.DR_F_BACK_KICK * Fight_R.DR_F_BACK_KICK)){
  //////////////////////////////////////////////////////////////////////////////
    if (_Fighter_2.mirror == 0) {
        AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.RIGHT);
    } else{
        AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.LEFT);
    };
  //////////////////////////////////////////////////////////////////////////////
  } else if (dR_1_2 > (Fight_R.DR_F_FRONT_KICK * Fight_R.DR_F_FRONT_KICK)){
  //////////////////////////////////////////////////////////////////////////////
      if (type_1 == SpritesAnimators_R.KICKING_BACK_ANI) {
          AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.BLOCK);
      } else {
          if (_Fighter_2.mirror == 0) {
            AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.RIGHT);
          } else{
            AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.LEFT);
          };
      };
  //////////////////////////////////////////////////////////////////////////////
  } else if (dR_1_2 > (Fight_R.DR_F_PUNCH * Fight_R.DR_F_PUNCH)){
  //////////////////////////////////////////////////////////////////////////////
      if ((type_1 == SpritesAnimators_R.KICKING_FRONT_ANI) ||
          (type_1 == SpritesAnimators_R.KICKING_BACK_ANI)) {
         AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.BLOCK);
      } else {
        if (_Fighter_2.mirror == 0) {
          AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.RIGHT);
        } else{
          AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.LEFT);
        };
      };
  //////////////////////////////////////////////////////////////////////////////
  } else {
  //////////////////////////////////////////////////////////////////////////////
            //spritesAnimatorsTypeAnimation

        if ((type_1 == SpritesAnimators_R.PUNCHING_UP_ANI) ||
           (type_1 == SpritesAnimators_R.PUNCHING_MIDLE_ANI) ||
           (type_1 == SpritesAnimators_R.KICKING_FRONT_ANI) ||
           (type_1 == SpritesAnimators_R.KICKING_BACK_ANI)) {
                //console.log('AICommand_R: type_1 =' + SpritesAnimators_R.TXT_ANIMATORS_FIGHTER_SET[type_1]);
                //console.log('AICommand_R: type_2 =' + SpritesAnimators_R.TXT_ANIMATORS_FIGHTER_SET[type_2]);
           AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.BLOCK);
           //AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.TELEPORT);
        } else {
          if(r1 == 1) AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.FRONTPUNCH);
          if(r1 == 2) AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.BACKPUNCH);
          if(r1 == 3) AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.FRONTKICK);
          if(r1 == 4) AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.BACKKICK);
          if(r1 == 5) {
             if (r2 == 2) {
                AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.TELEPORT);
            } else{
                AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.FRONTPUNCH);
            };
          };
          if(r1 == 6) {
            if (_Fighter_2.mirror == 0) {
              AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.LEFT);
            } else{
              AICommand_R.CommandToFighter(_CommandToFighter_R, CommandToFighter_R.RIGHT);
            };
          };
        };
  //////////////////////////////////////////////////////////////////////////////
  };
};
//==============================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('7   module "AI Command" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module AICommand done");
