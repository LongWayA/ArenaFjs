"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 30.12.2018 - 30.05.2019 - 13.07.2019

  /*
   НАЗНАЧЕНИЕ
   Корневой модуль игры
   Тут общая функция игры вызываемая на каждом тике цикла.
   Базовый цикл игры основанный на
   методе setTimeout(func, delay)
   Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать
   func регулярно/один раз через delay миллисекунд.

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   Render_R
  */


 //alert("module ArenaFjs start");
 //=============================================================================

window.ArenaFjs_R = {};
ArenaFjs_R.NAME = "ArenaFjs_R";//

// 1
// Game_R
// это глобальный объект в одном экземпляре и без дальнейших потомков

// 2
// GameText_R
ArenaFjs_R.GameText_R1 = Object.create(GameText_R);//

// 3
// Sound_R
ArenaFjs_R.Sound_R1 = Object.create(Sound_R);//

// 4
// Timer_R
ArenaFjs_R.Timer_R1 = Object.create(Timer_R);//

// 5
// CommandToFighter_R
ArenaFjs_R.CommandToFighter_R1 = Object.create(CommandToFighter_R);//
ArenaFjs_R.CommandToFighter_R2 = Object.create(CommandToFighter_R);//

// 6
// UserInput_R
ArenaFjs_R.UserInput_R1 = Object.create(UserInput_R);//

// 7
// AICommand_R
ArenaFjs_R.AICommand_R1 = Object.create(AICommand_R);//

// 8
// SpritesFighter
ArenaFjs_R.SpritesFighter_R1 = Object.create(SpritesFighter_R);//

// 9
// SpritesAnimators
ArenaFjs_R.SpritesAnimators_R1  = Object.create(SpritesAnimators_R);//

// 10
// FighterSheeva_mk3_R
ArenaFjs_R.FighterSheeva_mk3_R1 = Object.create(FighterSheeva_mk3_R);//
ArenaFjs_R.FighterSheeva_mk3_R2 = Object.create(FighterSheeva_mk3_R);//

// 11
// Move_R
ArenaFjs_R.Move_R1 = Object.create(Move_R);//

// 12
// Fight_R
ArenaFjs_R.Fight_R1 = Object.create(Fight_R);//

// 13
//Menu_R
ArenaFjs_R.Menu_R1 = Object.create(Menu_R);//

// 14
// GameColculation_R
ArenaFjs_R.GameColculation_R1 = Object.create(GameColculation_R);//

// 15
// ArenaScene
ArenaFjs_R.ArenaScene_R1 = Object.create(ArenaScene_R);//

// 16
// Render_R
ArenaFjs_R.Render_R1 = Object.create(Render_R);//


   ArenaFjs_R.countLoop = 1;
   ArenaFjs_R.il = 0;
   ArenaFjs_R.il_2 = 0;


 //=============================================================================
 ArenaFjs_R.oldDemonstr = function() {
       if (ArenaFjs_R.countLoop == 24){
          ArenaFjs_R.il_2 = ArenaFjs_R.il;
          ArenaFjs_R.FighterSheeva_mk3_R1
                    .setState(ArenaFjs_R.FighterSheeva_mk3_R1.STATE_F[ArenaFjs_R.il]);

           ArenaFjs_R.FighterSheeva_mk3_R2
                    .setState(ArenaFjs_R.FighterSheeva_mk3_R2.STATE_F[ArenaFjs_R.il]);

          ArenaFjs_R.il = ArenaFjs_R.il + 1;
          if (ArenaFjs_R.il > ArenaFjs_R.FighterSheeva_mk3_R1.STATE_F.length-1) ArenaFjs_R.il = 0;

       };

 };
 //=============================================================================
 //alert("!");
 //=============================================================================
 ArenaFjs_R.tick = function() {

    //alert("t");
    //alert("!");
    // человек отдает приказы с клавиатуры и они обрабатываются событийно.
	  ArenaFjs_R.UserInput_R1.tick(ArenaFjs_R.CommandToFighter_R1);//

    // компьютер отдает приказы каждый такт
    ArenaFjs_R.AICommand_R1.tick(ArenaFjs_R.CommandToFighter_R2);//

    // передаются команды бойцам и бойцицам
    ArenaFjs_R.CommandToFighter_R1.tick(ArenaFjs_R.FighterSheeva_mk3_R1);

    ArenaFjs_R.CommandToFighter_R2.tick(ArenaFjs_R.FighterSheeva_mk3_R2);

    // обрабатываем движение бойцов
    ArenaFjs_R.Move_R1.tick();

    // обрабатываем бой
    ArenaFjs_R.Fight_R1.tick();

    // тоже что то можем обработать, но пока не знаю что.
    ArenaFjs_R.GameColculation_R1.tick();

    // отрисовываем всю графику
    ArenaFjs_R.Render_R1.drawAll(ArenaFjs_R.SpritesAnimators_R1,
    ArenaFjs_R.FighterSheeva_mk3_R1, ArenaFjs_R.FighterSheeva_mk3_R2
   ,ArenaFjs_R.GameText_R1, ArenaFjs_R.ArenaScene_R1,
    ArenaFjs_R.Timer_R1, ArenaFjs_R.CommandToFighter_R1,
     ArenaFjs_R.CommandToFighter_R2
     , ArenaFjs_R.UserInput_R1, ArenaFjs_R.SpritesFighter_R1, ArenaFjs_R);

    //alert("!");
    // что это за текст? почему он пишется именно здесь?
    ArenaFjs_R.GameText_R1.drawText
    (ArenaFjs_R.FighterSheeva_mk3_R1.STATE_F[ArenaFjs_R.il_2], 150, 385
      , 'italic 20px sans-serif', 'red', 1);

	     ArenaFjs_R.countLoop = ArenaFjs_R.countLoop + 1;
       if (ArenaFjs_R.countLoop > 24 ) ArenaFjs_R.countLoop = 1;
 };
 //=============================================================================

 //=============================================================================
 ArenaFjs_R.ini = function(){

    //alert("ini = " + ArenaFjs_R.SpritesAnimators_R1);
    ArenaFjs_R.Timer_R1.ini(8);

    ArenaFjs_R.SpritesFighter_R1.loadAllSprite();

    ArenaFjs_R.ArenaScene_R1.iniAll(Game_R.canvas.width, Game_R.canvas.height,
    ArenaFjs_R.FighterSheeva_mk3_R1, ArenaFjs_R.FighterSheeva_mk3_R2);

    ArenaFjs_R.FighterSheeva_mk3_R1.setState("fightingStance");
    ArenaFjs_R.FighterSheeva_mk3_R2.setState("fightingStance");

    ArenaFjs_R.UserInput_R1.ini();

    ArenaFjs_R.CommandToFighter_R1.ini('1');
    ArenaFjs_R.CommandToFighter_R2.ini('2');

 };
 //=============================================================================
 //alert("!");
 //=============================================================================
 ArenaFjs_R.start = function(){

      console.log('Ah ah it is Console!');

     //alert("!");
     //alert( Menu_R.NAME );

 };
 //=============================================================================

 //=============================================================================
 ArenaFjs_R.tickTest = function(){

  //<TEST ------------------------------------------------------

      // ArenaFjs_R.SpritesFighter_R1.drawSprites_TEST();
      //ArenaFjs_R.SpritesAnimators_R1.animationAll_TEST();
      // временная заглушка
         //ArenaFjs_R.oldDemonstr();

  //TEST> ------------------------------------------------------

 };
 //=============================================================================

 //loop>------------------------------------------------------------------------
  ArenaFjs_R.ini();
  ArenaFjs_R.start();
   //Game_R.context.fokus();
  ArenaFjs_R.timerId = setTimeout( function tick(){

        ArenaFjs_R.Timer_R1.updateTimeBeforeTick();
        if( Game_R.img_load_end == 1 ){
            // alert("!-");
             ArenaFjs_R.tick();
             //ArenaFjs_R.tickTest();
        };

        ArenaFjs_R.Timer_R1.updateTimeAfterTick();
        ArenaFjs_R.timerId = setTimeout( tick,ArenaFjs_R.Timer_R1.timeThreadSleepGameMs);

  }, ArenaFjs_R.Timer_R1.timeThreadSleepGameMs);
 //loop<------------------------------------------------------------------------

  //============================================================================
  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('17 module "ArenaFjs" loaded', 1100, Game_R.yT);

 //=============================================================================
 //alert("module ArenaFjs done");
