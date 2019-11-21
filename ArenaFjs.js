"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 30.12.2018 - 30.05.2019 - 13.07.2019
 // - 15.11.2019 -

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

ArenaFjs_R.stateFigting = 0;

 //alert("!");
 //=============================================================================
 ArenaFjs_R.tick = function() {

    var fighter_1 = FighterSheeva_mk3_R.Fighter_1;
    var fighter_2 = FighterSheeva_mk3_R.Fighter_2;

    //alert("t");
    //alert("!");
    // человек отдает приказы с клавиатуры и они обрабатываются событийно.
    UserInput_R.tickSt(ArenaFjs_R);//

    if (ArenaFjs_R.stateFigting == 0){
      // компьютер отдает приказы каждый такт
      AICommand_R.tick(fighter_1, fighter_2, CommandToFighter_R.toFighterRight);//
      AICommand_R.tick(fighter_2, fighter_1, CommandToFighter_R.toFighterLeft);//

    } else if (ArenaFjs_R.stateFigting == 1){
      // человек отдает приказы с клавиатуры и они обрабатываются событийно.
  	  UserInput_R.tick(CommandToFighter_R.toFighterLeft);//
      AICommand_R.tick(fighter_1, fighter_2, CommandToFighter_R.toFighterRight);//
    } else if (ArenaFjs_R.stateFigting == 2){
      // человек отдает приказы с клавиатуры и они обрабатываются событийно.
  	  UserInput_R.tick(CommandToFighter_R.toFighterLeft);//
      AICommand_R.tickM(CommandToFighter_R.toFighterRight);//
    };

    // передаются команды бойцам
    CommandToFighter_R.toFighterLeft.tick(fighter_1);

    CommandToFighter_R.toFighterRight.tick(fighter_2);

    // обрабатываем движение бойцов
    Move_R.tick(fighter_1, fighter_2, ArenaScene_R);

    // обрабатываем бой
    Fight_R.tick(fighter_1, fighter_2, SpritesAnimators_R, Sound_R);

    // тоже что то можем обработать, но пока не знаю что.
    GameColculation_R.tick();

    // отрисовываем всю графику
    ArenaScene_R.drawAll(
       SpritesAnimators_R,
       fighter_1, fighter_2,
       GameText_R, Timer_R,
       CommandToFighter_R.toFighterLeft, CommandToFighter_R.toFighterRight,
       UserInput_R, SpritesFighter_R, ArenaFjs_R);
 };
 //=============================================================================

 //=============================================================================
 ArenaFjs_R.ini = function(){

    ArenaFjs_R.stateFigting = 0;

    //alert("ini = " + ArenaFjs_R.SpritesAnimators_R1);
    Timer_R.ini(8);

    SpritesFighter_R.loadAllSprite();

    ArenaScene_R.iniAll(Game_R.canvas.width, Game_R.canvas.height,
    FighterSheeva_mk3_R.Fighter_1, FighterSheeva_mk3_R.Fighter_2);

    FighterSheeva_mk3_R.Fighter_1.setState(SpritesAnimators_R.FIGHTING_STANCE_ANI);
    FighterSheeva_mk3_R.Fighter_2.setState(SpritesAnimators_R.FIGHTING_STANCE_ANI);

    UserInput_R.ini();

    CommandToFighter_R.toFighterLeft.ini('1');
    CommandToFighter_R.toFighterRight.ini('2');

 };
 //=============================================================================
 //alert("!");
 //=============================================================================
 ArenaFjs_R.start = function(){
      //alert("!");
      console.log('Ah ah it is Console!');
      //var audio = new Audio('image/Sheeva_mk3_sound/hitsounds_conv/mk3-00145k.wav');
      //audio.play();
      //Sound_R.sound_F.play();
     //alert("!");
     //alert( Menu_R.NAME );

 };
 //=============================================================================

 //=============================================================================
 ArenaFjs_R.tickTest = function(){
      // 1500x800
      Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);

      // ArenaFjs_R.SpritesFighter_R1.drawSprites_TEST();
      //ArenaFjs_R.SpritesAnimators_R1.animationAll_TEST();

      SpritesFighter_R.drawSprites_TEST(GameText_R);

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
  Game_R.context.strokeText ('16 module "ArenaFjs" loaded', 1100, Game_R.yT);

 //=============================================================================
 //alert("module ArenaFjs done");
