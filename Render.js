"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 22.09.2018 - 30.12.2018

  /*
   $ -переменные

   НАЗНАЧЕНИЕ


   ИСПОЛЬЗУЕТ МОДУЛИ


   ВЫЗЫВАЕТСЯ В МОДУЛЯХ


  */


  //alert("module Render start");
  //================================================================================

var Render_R = {};
Render_R.name = "Render";//

//============================================================================
// INPUT======================================================================

// GameText_R

Render_R.GameText_R_drawRect_1_IN = function() {
  GameText_R.drawRect(ArenaScene_R.framesArena.x0LeftHealthPlayer1 + 64,
                            ArenaScene_R.framesArena.y0TopHealthPlayer1,
                            ArenaScene_R.framesArena.widthHealthPlayer1,
                            ArenaScene_R.framesArena.heightHealthPlayer1,
                            1, 'green', 0);
};

Render_R.GameText_R_drawRect_2_IN = function() {
  GameText_R.drawRect(ArenaScene_R.framesArena.x0LeftHealthPlayer2 + 64,
                            ArenaScene_R.framesArena.y0TopHealthPlayer2,
                            ArenaScene_R.framesArena.widthHealthPlayer2,
                            ArenaScene_R.framesArena.heightHealthPlayer2,
                            1, 'green', 0);
};

Render_R.GameText_R_drawRect_IN = function(left, top, width, height, lineWidth, color, fillYes) {
  GameText_R.drawRect( left, top, width, height, lineWidth, color, fillYes);
};

Render_R.GameText_R_drawText_IN = function(text, left, top, font, color, fillYes) {
  GameText_R.drawText (text, left, top, font, color, fillYes);
};

// ArenaScene_R

Render_R.ArenaScene_R_framesArena_x0LeftFPS_IN = function() {
   return (ArenaScene_R.framesArena.x0LeftFPS);
};

Render_R.ArenaScene_R_framesArena_y0TopFPS_IN = function() {
   return (ArenaScene_R.framesArena.y0TopFPS);
};

Render_R.ArenaScene_R_framesArena_widthFPS_IN = function() {
   return (ArenaScene_R.framesArena.widthFPS);
};

Render_R.ArenaScene_R_framesArena_heightFPS_IN = function() {
   return (ArenaScene_R.framesArena.heightFPS);
};

//---------

Render_R.ArenaScene_R_framesArena_x0LeftLocation_IN = function() {
   return (ArenaScene_R.framesArena.x0LeftLocation);
};

Render_R.ArenaScene_R_framesArena_y0TopLocation_IN = function() {
   return (ArenaScene_R.framesArena.y0TopLocation);
};

Render_R.ArenaScene_R_framesArena_widthLocation_IN = function() {
   return (ArenaScene_R.framesArena.widthLocation);
};

Render_R.ArenaScene_R_framesArena_heightLocation_IN = function() {
   return (ArenaScene_R.framesArena.heightLocation);
};

//---------

Render_R.ArenaScene_R_drawSceneImage_IN = function(type, left, top, kx, ky) {
  ArenaScene_R.drawSceneImage(type, left, top, kx, ky);
};

Render_R.ArenaScene_R_drawAll_IN = function() {
  ArenaScene_R.drawAll();
};

Render_R.ArenaScene_R_framesArena_displayWidth_IN = function() {
   return (ArenaScene_R.framesArena.displayWidth);
};


// Fighters_R

Render_R.Fighters_R_fighterSheeva_mk3_1_tickAnimation_IN = function() {
  Fighters_R.fighterSheeva_mk3_1.tickAnimation();
};

Render_R.Fighters_R_fighterSheeva_mk3_2_tickAnimation_IN = function() {
  Fighters_R.fighterSheeva_mk3_2.tickAnimation();
};

Render_R.Fighters_R_fighterSheeva_mk3_1_spritesAnimators_inProcess_IN = function() {
   return (Fighters_R.fighterSheeva_mk3_1.spritesAnimators.inProcess);
};


Render_R.Fighters_R_fighterSheeva_mk3_1_busy_IN = function() {
   return (Fighters_R.fighterSheeva_mk3_1.busy);
};

// Game_R context

Render_R.context_clearRect_IN = function() {
  Game_R.context.clearRect(0, 0, 1100, Game_R.canvas.height);
};

// ArenaFjs_R

Render_R.ArenaFjs_R_countLoop_IN = function() {
   return (ArenaFjs_R.countLoop);
};

// Timer_R

Render_R.Timer_R_ticksPerSecond_IN = function() {
   return (Timer_R.ticksPerSecond);
};

Render_R.Timer_R_tickMustTimeMs_IN = function() {
   return (Timer_R.tickMustTimeMs);
};

Render_R.Timer_R_timeBetweenEndMinStartTickMs_IN = function() {
   return (Timer_R.timeBetweenEndMinStartTickMs);
};

Render_R.Timer_R_timeThreadSleepGameMs_IN = function() {
   return (Timer_R.timeThreadSleepGameMs);
};

Render_R.Timer_R_timeStartTickMs_IN = function() {
   return (Timer_R.timeStartTickMs);
};

Render_R.Timer_R_timeEndTickMs_IN = function() {
   return (Timer_R.timeEndTickMs);
};

Render_R.Timer_R_timeBetweenStartMinOldStartTickMs_IN = function() {
   return (Timer_R.timeBetweenStartMinOldStartTickMs);
};

// UserInput_R

Render_R.UserInput_R_eventG_IN = function() {
   return (UserInput_R.eventG);
};

//============================================================================
// IMPLEMENTATION=============================================================


  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawIkonFrame = function() {

      	// рамки прямоугольников
		Render_R.GameText_R_drawRect_1_IN();

		Render_R.GameText_R_drawRect_2_IN();

  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawTextFrame = function() {

    var x =      Render_R.ArenaScene_R_framesArena_x0LeftFPS_IN();
    var y =      Render_R.ArenaScene_R_framesArena_y0TopFPS_IN();
    var width =  Render_R.ArenaScene_R_framesArena_widthFPS_IN();
    var height = Render_R.ArenaScene_R_framesArena_heightFPS_IN();

        Render_R.GameText_R_drawRect_IN( x, y, width, height, 1, 'green', 0);

        y = y + 10;

      Render_R.GameText_R_drawText_IN ("countLoop = " + Render_R.ArenaFjs_R_countLoop_IN(),x+10, y+5, 'italic 20px sans-serif', 'blue', 1);
      Render_R.GameText_R_drawText_IN ("ticksPerSecond = " + Render_R.Timer_R_ticksPerSecond_IN(),x+180, y+5, 'italic 20px sans-serif', 'blue', 1);
      Render_R.GameText_R_drawText_IN ("tickMustTimeMs = " + Render_R.Timer_R_tickMustTimeMs_IN(),x+400, y+5, 'italic 20px sans-serif', 'blue', 1);
      Render_R.GameText_R_drawText_IN ("timeBetweenEndMinStartTickMs = " + Render_R.Timer_R_timeBetweenEndMinStartTickMs_IN(),x+620, y+5, 'italic 20px sans-serif', 'blue', 1);
	    Render_R.GameText_R_drawText_IN ("timeThreadSleepGameMs = " + Render_R.Timer_R_timeThreadSleepGameMs_IN(),x+210, y+55, 'italic 20px sans-serif', 'blue', 1);

      Render_R.GameText_R_drawText_IN ("timeStartTickMs = " + Render_R.Timer_R_timeStartTickMs_IN(),x+10, y+30, 'italic 20px sans-serif', 'blue', 1);
      Render_R.GameText_R_drawText_IN ("timeEndTickMs = " + Render_R.Timer_R_timeEndTickMs_IN(),x+340, y+30, 'italic 20px sans-serif', 'blue', 1);
      Render_R.GameText_R_drawText_IN ("timeBetweenStartMinOldStartTickMs = " + Render_R.Timer_R_timeBetweenStartMinOldStartTickMs_IN(),x+670, y+30, 'italic 20px sans-serif', 'blue', 1);

      Render_R.GameText_R_drawText_IN ("displayWidth = " + Render_R.ArenaScene_R_framesArena_displayWidth_IN(), x+10, y+55, 'italic 20px sans-serif', 'blue', 1);

      Render_R.GameText_R_drawText_IN ("UserInput-> " +  Render_R.UserInput_R_eventG_IN() ,x+10, y+80, 'italic 20px sans-serif', 'blue', 1);

      Render_R.GameText_R_drawText_IN ("commandToFighterGamer-> " +  CommandToFighter_R.commandToFighterGammerLeft.command ,x+170, y+80, 'italic 20px sans-serif', 'blue', 1);
      Render_R.GameText_R_drawText_IN ("commandToFighterGamer-> " +  CommandToFighter_R.commandToFighterGammerLeft.commandText ,x+470, y+80, 'italic 20px sans-serif', 'blue', 1);
  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawFightFrame = function() {

    var x =      Render_R.ArenaScene_R_framesArena_x0LeftLocation_IN();
    var y =      Render_R.ArenaScene_R_framesArena_y0TopLocation_IN();
    var width =  Render_R.ArenaScene_R_framesArena_widthLocation_IN();
    var height = Render_R.ArenaScene_R_framesArena_heightLocation_IN();

    //ArenaScene_R.drawSceneImage("ikonSheeva_mk3",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("drak",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("fon1",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    //ArenaScene_R.drawSceneImage("fon2",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    Render_R.ArenaScene_R_drawSceneImage_IN("fon3",x, y, 2.3, 2.3);


    Render_R.Fighters_R_fighterSheeva_mk3_1_tickAnimation_IN();
    Render_R.Fighters_R_fighterSheeva_mk3_2_tickAnimation_IN();


    //Location
	// поле боя
	Render_R.GameText_R_drawRect_IN(x, y, width, height, 1, 'green', 0);

    Render_R.GameText_R_drawText_IN ("inProcess = " + Render_R.Fighters_R_fighterSheeva_mk3_1_spritesAnimators_inProcess_IN(),x+300, y+370, 'italic 20px sans-serif', 'blue', 1);
    Render_R.GameText_R_drawText_IN ("busy = " + Render_R.Fighters_R_fighterSheeva_mk3_1_busy_IN(),x+450, y+370, 'italic 20px sans-serif', 'blue', 1);

  };
  //---------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawAll = function() {

    //Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
    Render_R.context_clearRect_IN() ;

    Render_R.ArenaScene_R_drawAll_IN();

    Render_R.drawFightFrame();
    //Render_R.drawIkonFrame();
    Render_R.drawTextFrame();

  };
  //---------------------------------------------------------------------------------------------------------------



Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('16 module "Render" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module Move done");
