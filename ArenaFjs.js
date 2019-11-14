"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 30.12.2018 - 30.05.2019 - 13.07.2019
 // - 11.11.2019 -

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

// 2
// GameText_R

// 3
// Sound_R

// 4
// Timer_R

// 5
// CommandToFighter_R

// 6
// UserInput_R

// 7
// AICommand_R

// 8
// SpritesFighter

// 9
// SpritesAnimators

// 10
// FighterSheeva_mk3_R

// 11
// Move_R

// 12
// Fight_R

// 13
//Menu_R

// 14
// GameColculation_R

// 15
// ArenaScene

// 16
// Render_R

   ArenaFjs_R.countLoop = 1;
   ArenaFjs_R.il = 0;
   ArenaFjs_R.il_2 = 0;


 //=============================================================================
 ArenaFjs_R.oldDemonstr = function() {
       if (ArenaFjs_R.countLoop == 24){
          ArenaFjs_R.il_2 = ArenaFjs_R.il;
          FighterSheeva_mk3_R.Fighter_1
                    .setState(SpritesAnimators_R.STATE_ANI[ArenaFjs_R.il]);

           FighterSheeva_mk3_R.Fighter_2
                    .setState(SpritesAnimators_R.STATE_ANI[ArenaFjs_R.il]);

          ArenaFjs_R.il = ArenaFjs_R.il + 1;
          if (ArenaFjs_R.il > SpritesAnimators_R.STATE_ANI.length-1) ArenaFjs_R.il = 0;

       };

 };
 //=============================================================================
 //alert("!");
 //=============================================================================
 ArenaFjs_R.tick = function() {

    //alert("t");
    //alert("!");
    // человек отдает приказы с клавиатуры и они обрабатываются событийно.
	  UserInput_R.tick(CommandToFighter_R.UserToFighter);//

    // компьютер отдает приказы каждый такт
    AICommand_R.tick(CommandToFighter_R.AI_ToFighter);//

    // передаются команды бойцам
    CommandToFighter_R.UserToFighter.tick(FighterSheeva_mk3_R.Fighter_1);

    CommandToFighter_R.AI_ToFighter.tick(FighterSheeva_mk3_R.Fighter_2);

    // обрабатываем движение бойцов
    Move_R.tick(FighterSheeva_mk3_R.Fighter_1, FighterSheeva_mk3_R.Fighter_2, ArenaScene_R);

    // обрабатываем бой
    Fight_R.tick(FighterSheeva_mk3_R.Fighter_1, FighterSheeva_mk3_R.Fighter_2);

    // тоже что то можем обработать, но пока не знаю что.
    GameColculation_R.tick();

    // отрисовываем всю графику
    Render_R.drawAll(
       SpritesAnimators_R,
       FighterSheeva_mk3_R.Fighter_1, FighterSheeva_mk3_R.Fighter_2,
       GameText_R, ArenaScene_R, Timer_R,
       CommandToFighter_R.UserToFighter, CommandToFighter_R.AI_ToFighter,
       UserInput_R, SpritesFighter_R, ArenaFjs_R);

    //alert("!");
    // что это за текст? почему он пишется именно здесь?
    GameText_R.drawText
    (SpritesAnimators_R.STATE_ANI[ArenaFjs_R.il_2], 150, 385
      , 'italic 20px sans-serif', 'red', 1);

	     ArenaFjs_R.countLoop = ArenaFjs_R.countLoop + 1;
       if (ArenaFjs_R.countLoop > 24 ) ArenaFjs_R.countLoop = 1;
 };
 //=============================================================================

 //=============================================================================
 ArenaFjs_R.ini = function(){

    //alert("ini = " + ArenaFjs_R.SpritesAnimators_R1);
    Timer_R.ini(8);

    SpritesFighter_R.loadAllSprite();

    ArenaScene_R.iniAll(Game_R.canvas.width, Game_R.canvas.height,
    FighterSheeva_mk3_R.Fighter_1, FighterSheeva_mk3_R.Fighter_2);

    FighterSheeva_mk3_R.Fighter_1.setState(SpritesAnimators_R.FIGHTING_STANCE_ANI);
    FighterSheeva_mk3_R.Fighter_2.setState(SpritesAnimators_R.FIGHTING_STANCE_ANI);

    UserInput_R.ini();

    CommandToFighter_R.UserToFighter.ini('1');
    CommandToFighter_R.AI_ToFighter.ini('2');

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

         SpritesFighter_R.drawSprites_TEST(GameText_R);

  //TEST> ------------------------------------------------------

 };
 //=============================================================================

 //loop>------------------------------------------------------------------------
  ArenaFjs_R.ini();
  ArenaFjs_R.start();
   //Game_R.context.fokus();
  ArenaFjs_R.timerId = setTimeout( function tick(){

        Timer_R.updateTimeBeforeTick();
        if( Game_R.img_load_end == 1 ){
            // alert("!-");
             ArenaFjs_R.tick();
             //ArenaFjs_R.tickTest();
        };

        Timer_R.updateTimeAfterTick();
        ArenaFjs_R.timerId = setTimeout( tick,Timer_R.timeThreadSleepGameMs);

  }, Timer_R.timeThreadSleepGameMs);
 //loop<------------------------------------------------------------------------

  //============================================================================
  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('17 module "ArenaFjs" loaded', 1100, Game_R.yT);

 //=============================================================================
 //alert("module ArenaFjs done");
