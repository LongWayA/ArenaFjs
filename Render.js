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


Render_R.ArenaScene_R_framesArena_displayWidth_IN = function() {
   return (ArenaScene_R.framesArena.displayWidth);
};


// Game_R context

Render_R.context_clearRect_IN = function() {
  Game_R.context.clearRect(0, 0, 1100, Game_R.canvas.height);
};

// ArenaFjs_R

Render_R.ArenaFjs_R_countLoop_IN = function() {
   return (ArenaFjs_R.countLoop);
};

// UserInput_R

Render_R.UserInput_R_eventG_IN = function() {
   return (UserInput_R.eventG);
};

//============================================================================
// IMPLEMENTATION=============================================================


  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawIkonFrame = function(_GameText_R1, _ArenaScene_R1) {

      	// рамки прямоугольников
    _GameText_R1.drawRect(_ArenaScene_R1.framesArena.x0LeftHealthPlayer1 + 64,
                              _ArenaScene_R1.framesArena.y0TopHealthPlayer1,
                              _ArenaScene_R1.framesArena.widthHealthPlayer1,
                              _ArenaScene_R1.framesArena.heightHealthPlayer1,
                              1, 'green', 0);

    _GameText_R1.drawRect(_ArenaScene_R1.framesArena.x0LeftHealthPlayer2 + 64,
                              _ArenaScene_R1.framesArena.y0TopHealthPlayer2,
                              _ArenaScene_R1.framesArena.widthHealthPlayer2,
                              _ArenaScene_R1.framesArena.heightHealthPlayer2,
                              1, 'green', 0);

  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawTextFrame = function(_GameText_R1, _Timer_R1) {

    var x =      Render_R.ArenaScene_R_framesArena_x0LeftFPS_IN();
    var y =      Render_R.ArenaScene_R_framesArena_y0TopFPS_IN();
    var width =  Render_R.ArenaScene_R_framesArena_widthFPS_IN();
    var height = Render_R.ArenaScene_R_framesArena_heightFPS_IN();

        _GameText_R1.drawRect( x, y, width, height, 1, 'green', 0);

        y = y + 10;

      _GameText_R1.drawText ("countLoop = " + Render_R.ArenaFjs_R_countLoop_IN(),x+10, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("ticksPerSecond = " + _Timer_R1.ticksPerSecond,x+180, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("tickMustTimeMs = " + _Timer_R1.tickMustTimeMs,x+400, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("timeBetweenEndMinStartTickMs = " + _Timer_R1.timeBetweenEndMinStartTickMs,x+620, y+5, 'italic 20px sans-serif', 'blue', 1);
	    _GameText_R1.drawText ("timeThreadSleepGameMs = " + _Timer_R1.timeThreadSleepGameMs,x+210, y+55, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R1.drawText ("timeStartTickMs = " + _Timer_R1.timeStartTickMs,x+10, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("timeEndTickMs = " + _Timer_R1.timeEndTickMs,x+340, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("timeBetweenStartMinOldStartTickMs = " + _Timer_R1.timeBetweenStartMinOldStartTickMs,x+670, y+30, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R1.drawText ("displayWidth = " + Render_R.ArenaScene_R_framesArena_displayWidth_IN(), x+10, y+55, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R1.drawText ("UserInput-> " +  Render_R.UserInput_R_eventG_IN() ,x+10, y+80, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R1.drawText ("commandToFighterGamer-> " +  CommandToFighter_R.commandToFighterGammerLeft.command ,x+170, y+80, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("commandToFighterGamer-> " +  CommandToFighter_R.commandToFighterGammerLeft.commandText ,x+470, y+80, 'italic 20px sans-serif', 'blue', 1);
  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawFightFrame = function(_SpritesAnimators_R1,_SpritesAnimators_R2,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,_GameText_R1) {

    var x =      Render_R.ArenaScene_R_framesArena_x0LeftLocation_IN();
    var y =      Render_R.ArenaScene_R_framesArena_y0TopLocation_IN();
    var width =  Render_R.ArenaScene_R_framesArena_widthLocation_IN();
    var height = Render_R.ArenaScene_R_framesArena_heightLocation_IN();

    //ArenaScene_R.drawSceneImage("ikonSheeva_mk3",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("drak",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("fon1",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    //ArenaScene_R.drawSceneImage("fon2",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    Render_R.ArenaScene_R_drawSceneImage_IN("fon3",x, y, 2.3, 2.3);

    _FighterSheeva_mk3_R1.tickAnimation(_SpritesAnimators_R1, _GameText_R1);
    _FighterSheeva_mk3_R2.tickAnimation(_SpritesAnimators_R2, _GameText_R1);
    //Location
	  // поле боя
	  _GameText_R1.drawRect(x, y, width, height, 1, 'green', 0);
    _GameText_R1.drawText ("inProcess = " + _SpritesAnimators_R1.SpritesAnimators_id.inProcess,x+300, y+370, 'italic 20px sans-serif', 'blue', 1);
    _GameText_R1.drawText ("busy = " + _FighterSheeva_mk3_R1.busy,x+450, y+370, 'italic 20px sans-serif', 'blue', 1);
  };
  //---------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------
  Render_R.drawAll = function(_SpritesAnimators_R1,_SpritesAnimators_R2,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,
  _GameText_R1, _ArenaScene_R1, _Timer_R1) {

    //Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
    Render_R.context_clearRect_IN() ;

    //alert("_ArenaScene_R1 = " + _ArenaScene_R1.name);

    _ArenaScene_R1.drawAll(_GameText_R1);

    Render_R.drawFightFrame(_SpritesAnimators_R1,_SpritesAnimators_R2,
    _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2, _GameText_R1);
    //Render_R.drawIkonFrame(_GameText_R1, _ArenaScene_R1);
    Render_R.drawTextFrame(_GameText_R1, _Timer_R1);

  };
  //---------------------------------------------------------------------------------------------------------------



Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('16 module "Render" loaded', 1100, Game_R.yT);
//================================================================================
//alert("module Move done");
