"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 19.01.2019

   /*
   $ -переменные

   НАЗНАЧЕНИЕ


   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

   ArenaFjs
            UserInput_R.tick()
  */


 /*
  События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют
  получить её скан-код в свойстве keyCode.
  Скан-код клавиши одинаков в любой раскладке и в любом регистре. Например,
  клавиша z может означать символ "z", "Z" или "я", "Я" в русской раскладке,
  но её скан-код будет всегда одинаков: 90.
  Цитата с сайта https://learn.javascript.ru/keyboard-events
 */

 // alert("module UserInput start");
//================================================================================

 var UserInput_R = {};
 UserInput_R.name = "UserInput_R";//

 //==============================================================================
 // INPUT========================================================================



 //==============================================================================
 // IMPLEMENTATION===============================================================

 // команды бойцам
 UserInput_R.LEFT_F_KEY_LEFT  = 65;//движение влево     A
 UserInput_R.LEFT_F_KEY_RIGHT = 68;//движение вправо    D
 UserInput_R.LEFT_F_KEY_UP    = 87;//движение вверх     W
 UserInput_R.LEFT_F_KEY_DOWN  = 83;//движение вниз      S
 UserInput_R.LEFT_F_KEY_RUN   = 74;//бег                 J

 // передняя и задняя конечность это относительно боковой стойки
 UserInput_R.LEFT_F_KEY_FRONTPUNCH = 85;// удар передней рукой    U
 UserInput_R.LEFT_F_KEY_BACKPUNCH  = 73;// удар задней рукой      I
 UserInput_R.LEFT_F_KEY_FRONTKICK  = 79;// удар передней ногой    O
 UserInput_R.LEFT_F_KEY_BACKKICK   = 80;// удар задней ногой      P
 UserInput_R.LEFT_F_KEY_BLOCK      = 32;// блок                  SPACE
 UserInput_R.LEFT_F_KEY_TELEPORT   = 75;// перемещение           K
                                        // в другой конец арены,
                                        // применяется против зажима у края

 UserInput_R.eventG = 0;
 UserInput_R.commandToFighter;
  //alert("!");
 UserInput_R.eventUserLeft = function() {

    switch(UserInput_R.eventG){

        case UserInput_R.LEFT_F_KEY_LEFT:  // клавиша влево
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.LEFT;
             UserInput_R.commandToFighterLeft.commandText = 'walking left';
        break;

        case UserInput_R.LEFT_F_KEY_RIGHT:   // клавиша вправо
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.RIGHT;
             UserInput_R.commandToFighterLeft.commandText = 'walking right';
        break;

        case UserInput_R.LEFT_F_KEY_UP:   // клавиша вверх
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.UP;
             UserInput_R.commandToFighterLeft.commandText = '-up-';
        break;

        case UserInput_R.LEFT_F_KEY_DOWN:   // клавиша вниз
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.DOWN;
             UserInput_R.commandToFighterLeft.commandText = '-down-';
        break;

        case UserInput_R.LEFT_F_KEY_RUN:  // клавиша бег
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.RUN;
             UserInput_R.commandToFighterLeft.commandText = 'run';
        break;

        case UserInput_R.LEFT_F_KEY_FRONTPUNCH:   // клавиша пердняя рука
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.FRONTPUNCH;
             UserInput_R.commandToFighterLeft.commandText = 'punch Up';
        break;

        case UserInput_R.LEFT_F_KEY_BACKPUNCH:   // клавиша задняя рука
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.BACKPUNCH;
             UserInput_R.commandToFighterLeft.commandText = 'punch Midle';
        break;

        case UserInput_R.LEFT_F_KEY_FRONTKICK:   // клавиша передняя нога
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.FRONTKICK;
             UserInput_R.commandToFighterLeft.commandText = 'kick Front';
        break;

        case UserInput_R.LEFT_F_KEY_BACKKICK:   // клавиша задняя нога
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.BACKKICK;
             UserInput_R.commandToFighterLeft.commandText = 'kick Back';
        break;

        case UserInput_R.LEFT_F_KEY_BLOCK:   // клавиша блок
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.BLOCK;
             UserInput_R.commandToFighterLeft.commandText = 'block';
        break;

        case UserInput_R.LEFT_F_KEY_TELEPORT:   // клавиша телепорт
             UserInput_R.commandToFighterLeft.command  = CommandToFighter_R.TELEPORT;
             UserInput_R.commandToFighterLeft.commandText = 'teleport';
        break;

    };

 };

 UserInput_R.keyDownU = function(event) {

     UserInput_R.eventG = event.keyCode;
     UserInput_R.eventUserLeft();
 };

 UserInput_R.keyUpU = function(event) {

    UserInput_R.eventG = 0;
    UserInput_R.commandToFighterLeft.command  = 0;
    UserInput_R.commandToFighterLeft.commandText = 'fighting Stance';
 };

 UserInput_R.start = function() {

     window.addEventListener("keydown", UserInput_R.keyDownU);
     window.addEventListener("keyup", UserInput_R.keyUpU);

     UserInput_R.commandToFighterLeft = CommandToFighter_R.commandToFighterGammerLeft;
     //console.log("V");
  };


//////////////////////////
 UserInput_R.tick = function() {

    //UserInput_R.eventG = 0;
 };

 UserInput_R.start();


 Game_R.yT = Game_R.yT + Game_R.dyT;//
 Game_R.context.strokeText ('6   module "UserInput" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module UserInput done");
