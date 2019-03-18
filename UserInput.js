"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 18.03.2019

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

// устанавливаем команды для бойца управляемого игроком и стоящего в начале слева
 UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN = function(command, commandText) {
    CommandToFighter_R.commandToFighterGammerLeft.command = command;
    CommandToFighter_R.commandToFighterGammerLeft.commandText = commandText;
 };


 UserInput_R.get_CommandToFighter_R_STANCE_IN = function() {
    return (CommandToFighter_R.STANCE);
 };

 UserInput_R.get_CommandToFighter_R_LEFT_IN = function() {
    return (CommandToFighter_R.LEFT);
 };

 UserInput_R.get_CommandToFighter_R_RIGHT_IN = function() {
    return (CommandToFighter_R.RIGHT);
 };

 UserInput_R.get_CommandToFighter_R_UP_IN = function() {
    return (CommandToFighter_R.UP);
 };

 UserInput_R.get_CommandToFighter_R_DOWN_IN = function() {
    return (CommandToFighter_R.DOWN);
 };


 UserInput_R.get_CommandToFighter_R_RUN_IN = function() {
    return (CommandToFighter_R.RUN);
 };

 UserInput_R.get_CommandToFighter_R_FRONTPUNCH_IN = function() {
    return (CommandToFighter_R.FRONTPUNCH);
 };

 UserInput_R.get_CommandToFighter_R_BACKPUNCH_IN = function() {
    return (CommandToFighter_R.BACKPUNCH);
 };

 UserInput_R.get_CommandToFighter_R_FRONTKICK_IN = function() {
    return (CommandToFighter_R.FRONTKICK);
 };

 UserInput_R.get_CommandToFighter_R_BACKKICK_IN = function() {
    return (CommandToFighter_R.LEFT);
 };

 UserInput_R.get_CommandToFighter_R_BLOCK_IN = function() {
    return (CommandToFighter_R.BLOCK);
 };

 UserInput_R.get_CommandToFighter_R_TELEPORT_IN = function() {
    return (CommandToFighter_R.TELEPORT);
 };


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
  //alert("!");

  // заполняем модуль commandToFighterGammerLeft
 UserInput_R.eventUserLeft = function() {

    switch(UserInput_R.eventG){

        case UserInput_R.LEFT_F_KEY_LEFT:  // клавиша влево
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_LEFT_IN(), 'walking left');
        break;

        case UserInput_R.LEFT_F_KEY_RIGHT:   // клавиша вправо
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_RIGHT_IN(), 'walking right');
        break;

        case UserInput_R.LEFT_F_KEY_UP:   // клавиша вверх
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_UP_IN(), '-up-');
        break;

        case UserInput_R.LEFT_F_KEY_DOWN:   // клавиша вниз
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_DOWN_IN(), '-down-');
        break;

        case UserInput_R.LEFT_F_KEY_RUN:  // клавиша бег
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_RUN_IN(), 'run');
        break;

        case UserInput_R.LEFT_F_KEY_FRONTPUNCH:   // клавиша пердняя рука
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_FRONTPUNCH_IN(), 'punch Up');
        break;

        case UserInput_R.LEFT_F_KEY_BACKPUNCH:   // клавиша задняя рука
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_BACKPUNCH_IN(), 'punch Midle');
        break;

        case UserInput_R.LEFT_F_KEY_FRONTKICK:   // клавиша передняя нога
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_FRONTKICK_IN(), 'kick Front');
        break;

        case UserInput_R.LEFT_F_KEY_BACKKICK:   // клавиша задняя нога
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_BACKKICK_IN(), 'kick Back');
        break;

        case UserInput_R.LEFT_F_KEY_BLOCK:   // клавиша блок
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_BLOCK_IN(), 'block');
        break;

        case UserInput_R.LEFT_F_KEY_TELEPORT:   // клавиша телепорт
             UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
             (UserInput_R.get_CommandToFighter_R_TELEPORT_IN(), 'teleport');
        break;

    };

 };

// во время нажатия клавиши вызывается эта функция
 UserInput_R.keyDownU = function(event) {

     //заносим скан код клавиши
     UserInput_R.eventG = event.keyCode;

     // заполняем левого игрока
     UserInput_R.eventUserLeft();
 };

//
 UserInput_R.keyUpU = function(event) {

    UserInput_R.eventG = 0;
    UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN
    (UserInput_R.get_CommandToFighter_R_STANCE_IN(), 'fighting Stance');
 };

 //добавляем слушателей
 UserInput_R.start = function() {

     window.addEventListener("keydown", UserInput_R.keyDownU);
     window.addEventListener("keyup", UserInput_R.keyUpU);

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
