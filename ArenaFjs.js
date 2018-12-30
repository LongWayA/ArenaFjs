"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 23.12.2018

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

  //============================================================================
  // INPUT======================================================================

// Game_R
ArenaFjs_R.get_Game_R_img_load_end_IN = function() {
   return (Game_R.img_load_end);
};

// Timer_R
ArenaFjs_R.get_Timer_R_timeThreadSleepGameMs_IN = function() {
   return (Game_R.Timer_R.timeThreadSleepGameMs);
};

ArenaFjs_R.Timer_R_updateTimeBeforeTick_IN = function() {
   Game_R.Timer_R.updateTimeBeforeTick();
};

ArenaFjs_R.Timer_R_updateTimeAfterTick_IN = function() {
   Game_R.Timer_R.updateTimeAfterTick();
};

// Fighters_R
ArenaFjs_R.get_Fighters_R_typeM_length_min_1_IN = function() {
   return (Game_R.Fighters_R.typeM.length-1);
};

 ArenaFjs_R.fighterSheeva_mk3_1_setState_IN = function(num) {
    Game_R.Fighters_R.fighterSheeva_mk3_1.setState(Game_R.Fighters_R.typeM[num]);
 };

 ArenaFjs_R.fighterSheeva_mk3_2_setState_IN = function(num) {
    Game_R.Fighters_R.fighterSheeva_mk3_2.setState(Game_R.Fighters_R.typeM[num]);
 };

// UserInput_R
 ArenaFjs_R.UserInput_R_tick_IN = function() {
    Game_R.UserInput_R.tick();
 };

// GameColculation_R
  ArenaFjs_R.GameColculation_R_tick_IN = function() {
     Game_R.GameColculation_R.tick();
  };

// Render_R
  ArenaFjs_R.Render_R_drawAll_IN = function() {
     Render_R.drawAll();
  };

// GameText_R
  ArenaFjs_R.GameText_R_drawText_IN = function(num) {
     Game_R.GameText_R.drawText (Game_R.Fighters_R.typeM[num],150, 385, 'italic 20px sans-serif', 'red', 1);
  };


  //============================================================================
  // IMPLEMENTATION=============================================================

   ArenaFjs_R.countLoop = 1;
   ArenaFjs_R.il = 0;
   ArenaFjs_R.il_2 = 0;


  // old demonstr> -------------------------------------------------------------
   ArenaFjs_R.oldDemonstr = function() {
       if (ArenaFjs_R.countLoop == 24){
          ArenaFjs_R.il_2 = ArenaFjs_R.il;
          //if(Game_R.ArenaFjs.il_2 == 0) Game_R.ArenaFjs.il_2 = 1;
          ArenaFjs_R.fighterSheeva_mk3_1_setState_IN(ArenaFjs_R.il);
           ArenaFjs_R.fighterSheeva_mk3_2_setState_IN(ArenaFjs_R.il);

          ArenaFjs_R.il = ArenaFjs_R.il + 1;
          if (ArenaFjs_R.il > ArenaFjs_R.get_Fighters_R_typeM_length_min_1_IN()) ArenaFjs_R.il = 0;

       };

   };
   // old demostr< -------------------------------------------------------------
//alert("!");

 // tick> ----------------------------------------------------------------------
  ArenaFjs_R.tick = function() {

      //alert("!");
	     ArenaFjs_R.UserInput_R_tick_IN();

       ArenaFjs_R.GameColculation_R_tick_IN();

       ArenaFjs_R.oldDemonstr();

       ArenaFjs_R.Render_R_drawAll_IN();

//alert("!");
       ArenaFjs_R.GameText_R_drawText_IN(ArenaFjs_R.il_2);


 //<TEST ------------------------------------------------------

     // Game_R.SpritesFighter_R.drawSprites_TEST();
     //Game_R.SpritesAnimators_R.animationAll_TEST();

//TEST> ------------------------------------------------------


	     ArenaFjs_R.countLoop = ArenaFjs_R.countLoop + 1;
       if (ArenaFjs_R.countLoop > 24 ) ArenaFjs_R.countLoop = 1;
  };
 // tick< ----------------------------------------------------------------------

  // ini> ---------------------------------------------------------
  ArenaFjs_R.ini = function(){


  };
  // ini< ---------------------------------------------------------

  // start> --------------------------------------------------------------------
  ArenaFjs_R.start = function(){

     //alert("!");

  };
 // start< ---------------------------------------------------------------------

  ArenaFjs_R.ini();
  ArenaFjs_R.start();
   //Game_R.context.fokus();

  ArenaFjs_R.timerId = setTimeout( function tick(){

        ArenaFjs_R.Timer_R_updateTimeBeforeTick_IN();
        if(ArenaFjs_R.get_Game_R_img_load_end_IN() == 1){
            // alert("!-");
             ArenaFjs_R.tick();

        };

        ArenaFjs_R.Timer_R_updateTimeAfterTick_IN();
        ArenaFjs_R.timerId = setTimeout( tick,ArenaFjs_R.get_Timer_R_timeThreadSleepGameMs_IN());

  }, ArenaFjs_R.get_Timer_R_timeThreadSleepGameMs_IN());

  //============================================================================
  // OUTPUT=====================================================================


  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('17 module ArenaFjs loaded', 1100, Game_R.yT);
 //=============================================================================
 //alert("module ArenaFjs done");
