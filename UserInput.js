"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 22.07.2018
 
 /*
  События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют получить её скан-код в свойстве keyCode.
  Скан-код клавиши одинаков в любой раскладке и в любом регистре. Например, клавиша z может означать символ "z", "Z" или "я", "Я" в русской раскладке,
  но её скан-код будет всегда одинаков: 90.
  Цитата с сайта https://learn.javascript.ru/keyboard-events
 */
 
 // alert("module UserInput start");
//================================================================================
 
 Game_R.UserInput_R = {}; 
 Game_R.UserInput_R.name = "UserInput_R";//
 
 Game_R.UserInput_R.eventG = 0;

 Game_R.UserInput_R.left = 0;
 Game_R.UserInput_R.right = 0;
 Game_R.UserInput_R.up = 0;
 Game_R.UserInput_R.down = 0;
 Game_R.UserInput_R.run = 0;

 Game_R.UserInput_R.frontPunch = 0;
 Game_R.UserInput_R.backPunch = 0;
 Game_R.UserInput_R.frontKick = 0;
 Game_R.UserInput_R.backKick = 0;
 Game_R.UserInput_R.block = 0;
 Game_R.UserInput_R.teleport = 0;


Game_R.UserInput_R.eventUser = function(event,setE) {
 
    switch(event.keyCodevent){
         
        case 37:  // клавиша влево
          Game_R.UserInput_R.left = setE;
        break;
        case 39:   // клавиша вправо
          Game_R.UserInput_R.right = setE;
        break;
        case 38:   // клавиша вверх
          Game_R.UserInput_R.up = setE;
        break;
        case 40:   // клавиша вниз
          Game_R.UserInput_R.down = setE;
        break;
    };
 
 };

Game_R.UserInput_R.keyDownU = function(event) {
 
 Game_R.UserInput_R.eventG = event.keyCode;
 Game_R.UserInput_R.eventUser(event,1);

 };

Game_R.UserInput_R.keyUpU = function(event) {
 
 Game_R.UserInput_R.eventG = 0;
 Game_R.UserInput_R.eventUser(event,0);
 };

 Game_R.UserInput_R.start = function() {

     window.addEventListener("keydown", Game_R.UserInput_R.keyDownU);
     window.addEventListener("keyup", Game_R.UserInput_R.keyUpU);
     //console.log("V");
  };


//////////////////////////
 Game_R.UserInput_R.tick = function() {
  
  
  //Game_R.UserInput_R.eventG = 0;
  
 };
 
 Game_R.yT = Game_R.yT + Game_R.dyT;//
 Game_R.context.strokeText ('6   module UserInput loaded', 1100, Game_R.yT);
//================================================================================
//alert("module UserInput done");     
 
 
 
 
 
 
 
 
 