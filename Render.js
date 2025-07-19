"use strict";
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 22.09.2018 - 30.12.2018 - 14.11.2019 -

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R

  */


  //alert("module Render start");
  //============================================================================

window.Render_R = {};
Render_R.NAME = "Render";//

  //============================================================================
  Render_R.drawIkonFrame = function(_GameText_R, _ArenaScene_R) {

      	// рамки прямоугольников
    _GameText_R.drawRect(_ArenaScene_R.HealthPlayer_Frame.x0LeftHealthPlayer1 + 64,
                              _ArenaScene_R.HealthPlayer_Frame.y0TopHealthPlayer1,
                              _ArenaScene_R.HealthPlayer_Frame.widthHealthPlayer1,
                              _ArenaScene_R.HealthPlayer_Frame.heightHealthPlayer1,
                              1, 'green', 0);

    _GameText_R.drawRect(_ArenaScene_R.HealthPlayer_Frame.x0LeftHealthPlayer2 + 64,
                              _ArenaScene_R.HealthPlayer_Frame.y0TopHealthPlayer2,
                              _ArenaScene_R.HealthPlayer_Frame.widthHealthPlayer2,
                              _ArenaScene_R.HealthPlayer_Frame.heightHealthPlayer2,
                              1, 'green', 0);

  };
  //============================================================================

  //============================================================================
  Render_R.drawTextFrame = function(_GameText_R, _Timer_R,
     _CommandToFighter_R1, _CommandToFighter_R2,
      _UserInput_R, _ArenaScene_R, _ArenaFjs_R) {

    var x =      _ArenaScene_R.FPS_Frame.x0LeftFPS;
    var y =      _ArenaScene_R.FPS_Frame.y0TopFPS;
    var width =  _ArenaScene_R.FPS_Frame.widthFPS;
    var height = _ArenaScene_R.FPS_Frame.heightFPS;

        _GameText_R.drawRect( x, y, width, height, 1, 'green', 0);

        y = y + 10;

      _GameText_R.drawText ("countLoop = " + _ArenaFjs_R.countLoop,x+10, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("ticksPerSecond = " + _Timer_R.ticksPerSecond,x+180, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("tickMustTimeMs = " + _Timer_R.tickMustTimeMs,x+400, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("timeBetweenEndMinStartTickMs = " + _Timer_R.timeBetweenEndMinStartTickMs,x+620, y+5, 'italic 20px sans-serif', 'blue', 1);
	    _GameText_R.drawText ("timeThreadSleepGameMs = " + _Timer_R.timeThreadSleepGameMs,x+210, y+55, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R.drawText ("timeStartTickMs = " + _Timer_R.timeStartTickMs,x+10, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("timeEndTickMs = " + _Timer_R.timeEndTickMs,x+340, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("timeBetweenStartMinOldStartTickMs = " + _Timer_R.timeBetweenStartMinOldStartTickMs,x+670, y+30, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R.drawText ("displayWidth = " + _ArenaScene_R.Display_Frame.displayWidth, x+10, y+55, 'italic 20px sans-serif', 'blue', 1);
//alert("_UserInput_R1 = " + _UserInput_R1.NAME);
      _GameText_R.drawText ("UserInput-> " +  _UserInput_R.eventG ,x+10, y+80, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R.drawText ("commandToFighterGamer-> " +  _CommandToFighter_R1.saveCommandToFighter_command ,x+170, y+80, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("commandToFighterGamer-> " +  _CommandToFighter_R1.saveCommandToFighter_commandText ,x+470, y+80, 'italic 20px sans-serif', 'blue', 1);
  };
  //============================================================================

  //============================================================================
  Render_R.drawFightFrame = function(_SpritesAnimators_R,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,_GameText_R,
   _SpritesFighter_R, _ArenaScene_R) {

    var x =      _ArenaScene_R.Location_Frame.x0LeftLocation;
    var y =      _ArenaScene_R.Location_Frame.y0TopLocation;
    var width =  _ArenaScene_R.Location_Frame.widthLocation;
    var height = _ArenaScene_R.Location_Frame.heightLocation;

    //ArenaScene_R.drawSceneImage("ikonSheeva_mk3",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("drak",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("fon1",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    //ArenaScene_R.drawSceneImage("fon2",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    _ArenaScene_R.drawSceneImage("fon3",x, y, 2.3, 2.3);

    _FighterSheeva_mk3_R1.tickAnimation(_SpritesAnimators_R, _GameText_R, _SpritesFighter_R);
    _FighterSheeva_mk3_R2.tickAnimation(_SpritesAnimators_R, _GameText_R, _SpritesFighter_R);
    //Location
	  // поле боя
	  _GameText_R.drawRect(x, y, width, height, 1, 'green', 0);
    _GameText_R.drawText ("AnimatorsBusy = " + _FighterSheeva_mk3_R1.SpritesAnimatorsBusy,x+300, y+370, 'italic 20px sans-serif', 'blue', 1);
    _GameText_R.drawText ("FighterSheevaBusy = " + _FighterSheeva_mk3_R1.busy,x+550, y+370, 'italic 20px sans-serif', 'blue', 1);
  };
  //============================================================================

  //============================================================================
  Render_R.drawAll = function(_SpritesAnimators_R,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,
  _GameText_R, _ArenaScene_R, _Timer_R, _CommandToFighter_R1,
   _CommandToFighter_R2, _UserInput_R, _SpritesFighter_R, _ArenaFjs_R) {

    //Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
    Game_R.context.clearRect(0, 0, 1100, Game_R.canvas.height);

    //alert("_ArenaScene_R1 = " + _ArenaScene_R1.NAME);

    _ArenaScene_R.drawAll(_GameText_R);

    Render_R.drawFightFrame(_SpritesAnimators_R,
    _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2, _GameText_R
    , _SpritesFighter_R, _ArenaScene_R);
    //Render_R.drawIkonFrame(_GameText_R1, _ArenaScene_R1);
    Render_R.drawTextFrame(_GameText_R, _Timer_R, _CommandToFighter_R1,
      _CommandToFighter_R2, _UserInput_R, _ArenaScene_R, _ArenaFjs_R);

  };
  //============================================================================

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('16 module "Render" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module Move done");
