"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 22.09.2018 - 30.12.2018

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R

  */


  //alert("module Render start");
  //============================================================================

window.Render_R = {};
Render_R.name = "Render";//

  //============================================================================
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
  //============================================================================

  //============================================================================
  Render_R.drawTextFrame = function(_GameText_R1, _Timer_R1,
     _CommandToFighter_R1, _CommandToFighter_R2,
      _UserInput_R1, _ArenaScene_R1, _ArenaFjs_R) {

    var x =      _ArenaScene_R1.framesArena.x0LeftFPS;
    var y =      _ArenaScene_R1.framesArena.y0TopFPS;
    var width =  _ArenaScene_R1.framesArena.widthFPS;
    var height = _ArenaScene_R1.framesArena.heightFPS;

        _GameText_R1.drawRect( x, y, width, height, 1, 'green', 0);

        y = y + 10;

      _GameText_R1.drawText ("countLoop = " + _ArenaFjs_R.countLoop,x+10, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("ticksPerSecond = " + _Timer_R1.ticksPerSecond,x+180, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("tickMustTimeMs = " + _Timer_R1.tickMustTimeMs,x+400, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("timeBetweenEndMinStartTickMs = " + _Timer_R1.timeBetweenEndMinStartTickMs,x+620, y+5, 'italic 20px sans-serif', 'blue', 1);
	    _GameText_R1.drawText ("timeThreadSleepGameMs = " + _Timer_R1.timeThreadSleepGameMs,x+210, y+55, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R1.drawText ("timeStartTickMs = " + _Timer_R1.timeStartTickMs,x+10, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("timeEndTickMs = " + _Timer_R1.timeEndTickMs,x+340, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("timeBetweenStartMinOldStartTickMs = " + _Timer_R1.timeBetweenStartMinOldStartTickMs,x+670, y+30, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R1.drawText ("displayWidth = " + _ArenaScene_R1.framesArena.displayWidth, x+10, y+55, 'italic 20px sans-serif', 'blue', 1);
//alert("_UserInput_R1 = " + _UserInput_R1.name);
      _GameText_R1.drawText ("UserInput-> " +  _UserInput_R1.eventG ,x+10, y+80, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R1.drawText ("commandToFighterGamer-> " +  _CommandToFighter_R1.saveCommandToFighter_command ,x+170, y+80, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R1.drawText ("commandToFighterGamer-> " +  _CommandToFighter_R1.saveCommandToFighter_commandText ,x+470, y+80, 'italic 20px sans-serif', 'blue', 1);
  };
  //============================================================================

  //============================================================================
  Render_R.drawFightFrame = function(_SpritesAnimators_R1,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,_GameText_R1,
   _SpritesFighter_R1, _ArenaScene_R1) {

    var x =      _ArenaScene_R1.framesArena.x0LeftLocation;
    var y =      _ArenaScene_R1.framesArena.y0TopLocation;
    var width =  _ArenaScene_R1.framesArena.widthLocation;
    var height = _ArenaScene_R1.framesArena.heightLocation;

    //ArenaScene_R.drawSceneImage("ikonSheeva_mk3",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("drak",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("fon1",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    //ArenaScene_R.drawSceneImage("fon2",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    _ArenaScene_R1.drawSceneImage("fon3",x, y, 2.3, 2.3);

    _FighterSheeva_mk3_R1.tickAnimation(_SpritesAnimators_R1, _GameText_R1, _SpritesFighter_R1);
    _FighterSheeva_mk3_R2.tickAnimation(_SpritesAnimators_R1, _GameText_R1, _SpritesFighter_R1);
    //Location
	  // поле боя
	  _GameText_R1.drawRect(x, y, width, height, 1, 'green', 0);
    _GameText_R1.drawText ("inProcess = " + _FighterSheeva_mk3_R1.SpritesAnimators_state_inProcess,x+300, y+370, 'italic 20px sans-serif', 'blue', 1);
    _GameText_R1.drawText ("busy = " + _FighterSheeva_mk3_R1.busy,x+450, y+370, 'italic 20px sans-serif', 'blue', 1);
  };
  //============================================================================

  //============================================================================
  Render_R.drawAll = function(_SpritesAnimators_R1,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,
  _GameText_R1, _ArenaScene_R1, _Timer_R1, _CommandToFighter_R1,
   _CommandToFighter_R2, _UserInput_R1, _SpritesFighter_R1, _ArenaFjs_R) {

    //Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
    Game_R.context.clearRect(0, 0, 1100, Game_R.canvas.height);

    //alert("_ArenaScene_R1 = " + _ArenaScene_R1.name);

    _ArenaScene_R1.drawAll(_GameText_R1);

    Render_R.drawFightFrame(_SpritesAnimators_R1,
    _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2, _GameText_R1
    , _SpritesFighter_R1, _ArenaScene_R1);
    //Render_R.drawIkonFrame(_GameText_R1, _ArenaScene_R1);
    Render_R.drawTextFrame(_GameText_R1, _Timer_R1, _CommandToFighter_R1,
      _CommandToFighter_R2, _UserInput_R1, _ArenaScene_R1, _ArenaFjs_R);

  };
  //============================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('16 module "Render" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module Move done");
