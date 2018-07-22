"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 22.07.2018
 
 /*
  События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют получить её скан-код в свойстве keyCode.
  Скан-код клавиши одинаков в любой раскладке и в любом регистре. Например, клавиша z может означать символ "z", "Z" или "я", "Я" в русской раскладке,
  но её скан-код будет всегда одинаков: 90.
  Цитата с сайта https://learn.javascript.ru/keyboard-events
 */
 
 Game.UserInput = {}; 
 Game.UserInput.name = "UserInput";//
 
 Game.UserInput.eventG = 0;

 Game.UserInput.left = 0;
 Game.UserInput.right = 0;
 Game.UserInput.up = 0;
 Game.UserInput.down = 0;
 Game.UserInput.run = 0;

 Game.UserInput.frontPunch = 0;
 Game.UserInput.backPunch = 0;
 Game.UserInput.frontKick = 0;
 Game.UserInput.backKick = 0;
 Game.UserInput.block = 0;
 Game.UserInput.teleport = 0;


Game.UserInput.eventUser = function(event,setE) {
 
    switch(event.keyCodevent){
         
        case 37:  // клавиша влево
          Game.UserInput.left = setE;
        break;
        case 39:   // клавиша вправо
          Game.UserInput.right = setE;
        break;
        case 38:   // клавиша вверх
          Game.UserInput.up = setE;
        break;
        case 40:   // клавиша вниз
          Game.UserInput.down = setE;
        break;
    };
 
 };

Game.UserInput.keyDownU = function(event) {
 
 Game.UserInput.eventG = event.keyCode;
 Game.UserInput.eventUser(event,1);

 };

Game.UserInput.keyUpU = function(event) {
 
 Game.UserInput.eventG = 0;
 Game.UserInput.eventUser(event,0);
 };

 Game.UserInput.start = function() {

     window.addEventListener("keydown", Game.UserInput.keyDownU);
     window.addEventListener("keyup", Game.UserInput.keyUpU);
     //console.log("V");
  };


//////////////////////////
 Game.UserInput.tick = function() {
  
  Game.context.fillText ("UserInput ->" +  Game.UserInput.eventG ,1300, 5);
  //Game.UserInput.eventG = 0;
  
 };