"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 30.12.2018 - 30.05.2019

  /*
   НАЗНАЧЕНИЕ
   Корневой модуль игры
   Тут общая функция игры вызываемая на каждом тике цикла.
   Базовый цикл игры основанный на
   методе setTimeout(func, delay)
   Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать
   func регулярно/один раз через delay миллисекунд.

  */


 //alert("module ArenaFjs start");
 //=============================================================================

var ArenaFjs_R = {};
ArenaFjs_R.name = "ArenaFjs";//


// INPUT======================================================================


// UserInput_R
ArenaFjs_R.UserInput_R1 = Object.create(UserInput_R);//


// Game_R
ArenaFjs_R.Game_R1 = Object.create(Game_R);//

// Timer_R
ArenaFjs_R.Timer_R1 = Object.create(Timer_R);//


// Fighters_R
ArenaFjs_R.Fighters_R1 = Object.create(Fighters_R);//


// GameColculation_R
ArenaFjs_R.GameColculation_R1 = Object.create(GameColculation_R);//


// Render_R
ArenaFjs_R.Render_R1 = Object.create(Render_R);//


// GameText_R
ArenaFjs_R.GameText_R1 = Object.create(GameText_R);//


// AICommand_R
ArenaFjs_R.AICommand_R1 = Object.create(AICommand_R);//


// Move_R
ArenaFjs_R.Move_R1 = Object.create(Move_R);//


// Fight_R
ArenaFjs_R.Fight_R1 = Object.create(Fight_R);//


 // CommandToFighter_R
ArenaFjs_R.CommandToFighter_R1 = Object.create(CommandToFighter_R);//


// IMPLEMENTATION=============================================================

   ArenaFjs_R.countLoop = 1;
   ArenaFjs_R.il = 0;
   ArenaFjs_R.il_2 = 0;


  // old demonstr> -------------------------------------------------------------
   ArenaFjs_R.oldDemonstr = function() {
       if (ArenaFjs_R.countLoop == 24){
          ArenaFjs_R.il_2 = ArenaFjs_R.il;
          //if(Game_R.ArenaFjs.il_2 == 0) Game_R.ArenaFjs.il_2 = 1;
          ArenaFjs_R.Fighters_R1.fighterSheeva_mk3_1
                    .setState(ArenaFjs_R.Fighters_R1.typeM[ArenaFjs_R.il]);

           ArenaFjs_R.Fighters_R1.fighterSheeva_mk3_2
                    .setState(ArenaFjs_R.Fighters_R1.typeM[ArenaFjs_R.il]);

          ArenaFjs_R.il = ArenaFjs_R.il + 1;
          if (ArenaFjs_R.il > ArenaFjs_R.Fighters_R1.typeM.length-1) ArenaFjs_R.il = 0;

       };

   };
   // old demostr< -------------------------------------------------------------
//alert("!");

 // tick> ----------------------------------------------------------------------
  ArenaFjs_R.tick = function() {

    // временная заглушка
      // ArenaFjs_R.oldDemonstr();

    //alert("!");
    // человек отдает приказы с клавиатуры и они обрабатываются событийно.
	  ArenaFjs_R.UserInput_R1.tick(ArenaFjs_R.CommandToFighter_R1);//

    // компьютер отдает приказы каждый такт
    ArenaFjs_R.AICommand_R1.tick();//

    // передаются команды бойцам и бойцицам
    ArenaFjs_R.CommandToFighter_R1.tick();

    // обрабатываем движение бойцов
    ArenaFjs_R.Move_R1.tick();

    // обрабатываем бой
    ArenaFjs_R.Fight_R1.tick();

    // тоже что то можем обработать, но пока не знаю что.
    ArenaFjs_R.GameColculation_R1.tick();

    // отрисовываем всю графику
    ArenaFjs_R.Render_R1.drawAll();

    //alert("!");
    // что это за текст? почему он пишется именно здесь?
    ArenaFjs_R.GameText_R1.drawText
    (ArenaFjs_R.Fighters_R1.typeM[ArenaFjs_R.il_2], 150, 385
      , 'italic 20px sans-serif', 'red', 1);


 //<TEST ------------------------------------------------------

     // SpritesFighter_R.drawSprites_TEST();
     //SpritesAnimators_R.animationAll_TEST();

//TEST> ------------------------------------------------------


	     ArenaFjs_R.countLoop = ArenaFjs_R.countLoop + 1;
       if (ArenaFjs_R.countLoop > 24 ) ArenaFjs_R.countLoop = 1;
  };
 // tick< ----------------------------------------------------------------------

  // ini> ----------------------------------------------------------------------
  ArenaFjs_R.ini = function(){


  };
  // ini< ----------------------------------------------------------------------


  // start> --------------------------------------------------------------------
  ArenaFjs_R.start = function(){

     //alert("!");
     //alert( Menu_R.name );

  };
 // start< ---------------------------------------------------------------------

// loop>------------------------------------------------------------------------
  ArenaFjs_R.ini();
  ArenaFjs_R.start();
   //Game_R.context.fokus();

  ArenaFjs_R.timerId = setTimeout( function tick(){

        ArenaFjs_R.Timer_R1.updateTimeBeforeTick();
        if( ArenaFjs_R.Game_R1.img_load_end == 1 ){
            // alert("!-");
             ArenaFjs_R.tick();

        };

        ArenaFjs_R.Timer_R1.updateTimeAfterTick();
        ArenaFjs_R.timerId = setTimeout( tick,ArenaFjs_R.Timer_R1.timeThreadSleepGameMs);

  }, ArenaFjs_R.Timer_R1.timeThreadSleepGameMs);
// loop<------------------------------------------------------------------------

  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('17 module "ArenaFjs" loaded', 1100, Game_R.yT);

 //=============================================================================
 //alert("module ArenaFjs done");
