"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 18.03.2019 - 30.05.2019

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

 // INPUT========================================================================

 //CommandToFighter_R

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

 UserInput_R.eventG = 0; // заносится скан код нажатой клавиши
 UserInput_R.eventG_Old = 0; //
 UserInput_R.eventG_OneDown = 0; //
  //alert("!");
 //UserInput_R.i = 0;
 //UserInput_R.i2 = 0;

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

// во время нажатия клавиши вызывается эта функция
 UserInput_R.keyDownU = function(event) {

     //Game_R.context.strokeText ('keyDownU ' + UserInput_R.i, 900, 20 + 10*UserInput_R.i);
    // Game_R.context.strokeText ('keyDownU ' + UserInput_R.i, 900, 20);

     if (UserInput_R.eventG_OneDown == 0 ){
        //заносим скан код клавиши
        UserInput_R.eventG_Old = UserInput_R.eventG;
        UserInput_R.eventG = event.keyCode;
        UserInput_R.eventG_OneDown = 1; //
      };

     //UserInput_R.i = UserInput_R.i + 1;
 };

// во время отпускания клавиши вызывается эта функция
 UserInput_R.keyUpU = function(event) {

  //  Game_R.context.strokeText ('keyUpU ' + UserInput_R.i2 , 1100, 30 + 10*UserInput_R.i2);
    if (UserInput_R.eventG_OneDown == 1 ){
        UserInput_R.eventG_Old = UserInput_R.eventG;
        UserInput_R.eventG = 0;
        UserInput_R.eventG_OneDown = 0; //
    };
  //  UserInput_R.i2 = UserInput_R.i2 + 1;
 };

 //добавляем слушателей
 UserInput_R.start = function() {
     // ~ 29 per sekond
     window.addEventListener("keydown", UserInput_R.keyDownU);
     window.addEventListener("keyup", UserInput_R.keyUpU);

     //console.log("V");
  };


//////////////////////////
 UserInput_R.tick = function(_сommandToFighter_R) {

    //UserInput_R.eventG = 0;
    if (UserInput_R.eventG_Old != UserInput_R.eventG ){

       if (UserInput_R.eventG != 0 ){
           // заполняем левого игрока
           UserInput_R.eventUserLeft(_сommandToFighter_R);
       }else{
           _сommandToFighter_R.commandToFighterGammerLeft.command = _сommandToFighter_R.STANCE;
           _сommandToFighter_R.commandToFighterGammerLeft.commandText = 'fighting Stance';
       }
    }
    
 };

 UserInput_R.start();


 Game_R.yT = Game_R.yT + Game_R.dyT;//
 Game_R.context.strokeText ('6   module "UserInput" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module UserInput done");
