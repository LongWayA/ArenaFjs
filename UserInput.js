"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 1.01.2019

   /*
   $ -переменные

   НАЗНАЧЕНИЕ


   ИСПОЛЬЗУЕТ МОДУЛИ


   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

   ArenaFjs
            UserInput_R.tick()
  */


 /*
  События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют получить её скан-код в свойстве keyCode.
  Скан-код клавиши одинаков в любой раскладке и в любом регистре. Например, клавиша z может означать символ "z", "Z" или "я", "Я" в русской раскладке,
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

 UserInput_R.eventG = 0;

 UserInput_R.left = 0;
 UserInput_R.right = 0;
 UserInput_R.up = 0;
 UserInput_R.down = 0;
 UserInput_R.run = 0;

 UserInput_R.frontPunch = 0;
 UserInput_R.backPunch = 0;
 UserInput_R.frontKick = 0;
 UserInput_R.backKick = 0;
 UserInput_R.block = 0;
 UserInput_R.teleport = 0;


UserInput_R.eventUser = function(event,setE) {

    switch(event.keyCodevent){

        case 37:  // клавиша влево
          UserInput_R.left = setE;
        break;
        case 39:   // клавиша вправо
          UserInput_R.right = setE;
        break;
        case 38:   // клавиша вверх
          UserInput_R.up = setE;
        break;
        case 40:   // клавиша вниз
          UserInput_R.down = setE;
        break;
    };

 };

 UserInput_R.keyDownU = function(event) {

     UserInput_R.eventG = event.keyCode;
     UserInput_R.eventUser(event,1);
 };

 UserInput_R.keyUpU = function(event) {

    UserInput_R.eventG = 0;
    UserInput_R.eventUser(event,0);
 };

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
