"use strict";
// Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 08.08.2018 - 30.12.2018
// - 18.11.2019 -

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs
   Render_R
  */

  //alert("module ArenaScene start");
  //============================================================================

window.ArenaScene_R = {};

  ArenaScene_R.NAME = "ArenaScene_R";//

  // общий экран
  ArenaScene_R.DisplayFrame = {

       x0Left : 0,
       y0Top  : 0,//

       xRight  : 0, //
       yBottom : 0,//

       width  : 0, //
       height : 0,//
  };

  // поле боя
  ArenaScene_R.FightFrame = {

	    // начальные координаты
      x0Left : 0,//
      y0Top  : 0,//

	    // максимальные координаты карты. высчитываются по начальным и размеру
      xRight  : 0,//
      yBottom : 0,//

      // размер отображения
      width  : 0, //
      height : 0//
  };

  //FPS экран вывода служебной информации
  ArenaScene_R.FPS_Frame = {
    x0Left : 0, //
    y0Top  : 0,//

    xRight  : 0, //
    yBottom : 0,//

    width  : 0, //
    height : 0//
  };

  //HealthPlayer жизни бойцов
  ArenaScene_R.HealthFighterFrame = {

    //HealthPlayer1
    x0LeftHealthPlayer1 : 0, //
    y0TopHealthPlayer1  : 0,//
    widthHealthPlayer1  : 0, //
    heightHealthPlayer1 : 0,//

    //HealthPlayer2
    x0LeftHealthPlayer2 : 0, //
    y0TopHealthPlayer2  : 0,//
    widthHealthPlayer2  : 0, //
    heightHealthPlayer2 : 0//
  };

  // задний фон арены
  ArenaScene_R.ImageArena = {
      NAME  : "imageArena",

      ikonSheeva_mk3 : new Image(),
      drak  : new Image(),
      fon1  : new Image(),
      fon2  : new Image(),
      fon3  : new Image()
  };

// флаги загрузки фоновых картинок
ArenaScene_R.img_load_end_1 = 0;
ArenaScene_R.img_load_end_2 = 0;
ArenaScene_R.img_load_end_3 = 0;
ArenaScene_R.img_load_end = 0;

  // когда фоновый рисунок загружен то 1
  //============================================================================
  ArenaScene_R.ImageArena.fon1.onload = function() {
    ArenaScene_R.img_load_end_1 = 1;
    ArenaScene_R.img_load_end = ArenaScene_R.img_load_end_1
      && ArenaScene_R.img_load_end_2 && ArenaScene_R.img_load_end_3;
      //console.log('ArenaScene_R: img_load_end_1 img_load_end =' + ArenaScene_R.img_load_end);
      //console.log('ArenaScene_R: img_load_end_1 = '+ ArenaScene_R.img_load_end_1 + ' img_load_end_2 = ' + ArenaScene_R.img_load_end_2 + ' img_load_end_3 = ' + ArenaScene_R.img_load_end_3);
  };
  //============================================================================

  // когда фоновый рисунок загружен то 1
  //============================================================================
  ArenaScene_R.ImageArena.fon2.onload = function() {
    ArenaScene_R.img_load_end_2 = 1;
    ArenaScene_R.img_load_end = ArenaScene_R.img_load_end_1
      && ArenaScene_R.img_load_end_2 && ArenaScene_R.img_load_end_3;
      //console.log('ArenaScene_R: img_load_end_2 img_load_end =' + ArenaScene_R.img_load_end);
      //console.log('ArenaScene_R: img_load_end_1 = '+ ArenaScene_R.img_load_end_1 + ' img_load_end_2 = ' + ArenaScene_R.img_load_end_2 + ' img_load_end_3 = ' + ArenaScene_R.img_load_end_3);
  };
  //============================================================================

  // когда фоновый рисунок загружен то 1
  //============================================================================
  ArenaScene_R.ImageArena.fon3.onload = function() {
    ArenaScene_R.img_load_end_3 = 1;
    ArenaScene_R.img_load_end = ArenaScene_R.img_load_end_1
      && ArenaScene_R.img_load_end_2 && ArenaScene_R.img_load_end_3;
      //console.log('ArenaScene_R: img_load_end_3 img_load_end =' + ArenaScene_R.img_load_end);
      //console.log('ArenaScene_R: img_load_end_1 = '+ ArenaScene_R.img_load_end_1 + ' img_load_end_2 = ' + ArenaScene_R.img_load_end_2 + ' img_load_end_3 = ' + ArenaScene_R.img_load_end_3);
  };
  //============================================================================

  // рисуем рисунок как задний фон арены
  //============================================================================
  ArenaScene_R.drawSceneImage = function(type, left, top, kx, ky) {

         var imageWidth  = ArenaScene_R.ImageArena[type].width;
         var imageHeight = ArenaScene_R.ImageArena[type].height;

         imageWidth  = imageWidth * kx;
         imageHeight = imageHeight * ky;

         Game_R.context.drawImage(ArenaScene_R.ImageArena[type], left, top, imageWidth, imageHeight);
         Game_R.context.strokeRect(left, top, imageWidth, imageHeight);

         //Game_R.context.fillText ("imageWidth = " + imageWidth, left + 10, top);
         //Game_R.context.fillText ("imageHeight = " + imageHeight, left + 10, top + 20);

	       //Game_R.context.fillText ("fr = " + index,left, top);
         //Game_R.context.fillText (type,left, top + 100);
  };
  //============================================================================

  //============================================================================
  ArenaScene_R.drawIkonFrame = function(_GameText_R, _fighter1, _fighter2) {

    var x0LeftHealthPlayer1 = ArenaScene_R.HealthFighterFrame.x0LeftHealthPlayer1;
    var y0TopHealthPlayer1  = ArenaScene_R.HealthFighterFrame.y0TopHealthPlayer1;
    var widthHealthPlayer1 = ArenaScene_R.HealthFighterFrame.widthHealthPlayer1;
    var heightHealthPlayer1 = ArenaScene_R.HealthFighterFrame.heightHealthPlayer1;

    var fighter1_health_p = (FighterSheeva_mk3_R.MAX_HEALTH - _fighter1.health)/FighterSheeva_mk3_R.MAX_HEALTH;
    var widthHealthPlayer1_p = widthHealthPlayer1 - fighter1_health_p * widthHealthPlayer1;
    //console.log('ArenaScene_R:fighter1_health_p ='+ fighter1_health_p);

    var x0LeftHealthPlayer2 = ArenaScene_R.HealthFighterFrame.x0LeftHealthPlayer2;
    var y0TopHealthPlayer2  = ArenaScene_R.HealthFighterFrame.y0TopHealthPlayer2;
    var widthHealthPlayer2 = ArenaScene_R.HealthFighterFrame.widthHealthPlayer2;
    var heightHealthPlayer2 = ArenaScene_R.HealthFighterFrame.heightHealthPlayer2;

    var fighter2_health_p = (FighterSheeva_mk3_R.MAX_HEALTH - _fighter2.health)/FighterSheeva_mk3_R.MAX_HEALTH;
    var widthHealthPlayer2_p = widthHealthPlayer2 - fighter2_health_p * widthHealthPlayer2;

    //if(_fighter1.health > 0) _fighter1.health = _fighter1.health - 1;
    //if(_fighter2.health > 0) _fighter2.health = _fighter2.health - 1;

    // рамки прямоугольников
    _GameText_R.drawRect(x0LeftHealthPlayer1, y0TopHealthPlayer1,
                        widthHealthPlayer1, heightHealthPlayer1,
                        1, 'red', 0);

   _GameText_R.drawRect(x0LeftHealthPlayer1, y0TopHealthPlayer1,
                        widthHealthPlayer1_p, heightHealthPlayer1,
                        1, 'red', 1);

    // рамки прямоугольников
    _GameText_R.drawRect(x0LeftHealthPlayer2, y0TopHealthPlayer2,
                        widthHealthPlayer2, heightHealthPlayer2,
                        1, 'red', 0);

    _GameText_R.drawRect(x0LeftHealthPlayer2, y0TopHealthPlayer2,
                        widthHealthPlayer2_p, heightHealthPlayer2,
                        1, 'red', 1);
  };
  //============================================================================

  //============================================================================
  ArenaScene_R.drawFightFrame = function(_SpritesAnimators_R,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2, _GameText_R,
   _SpritesFighter_R, _ArenaFjs_R) {

    var x =      ArenaScene_R.FightFrame.x0Left;
    var y =      ArenaScene_R.FightFrame.y0Top;
    var width =  ArenaScene_R.FightFrame.width;
    var height = ArenaScene_R.FightFrame.height;

    var middle_1 = _FighterSheeva_mk3_R1.middle;
    var middle_2 = _FighterSheeva_mk3_R2.middle;

    var dX_1_2 = (middle_1 - middle_2);
    var dX2 = (middle_1 - middle_2) * (middle_1 - middle_2);

    //ArenaScene_R.drawSceneImage("ikonSheeva_mk3",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("drak",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 1, 1);
    //ArenaScene_R.drawSceneImage("fon1",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    //ArenaScene_R.drawSceneImage("fon2",ArenaScene_R.framesArena.x0Left, ArenaScene_R.framesArena.y0Top, 2.5, 2.5);

    ArenaScene_R.drawSceneImage("fon3", x, y, 2.3, 2.3);

    ArenaScene_R.drawIkonFrame(_GameText_R, _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,_GameText_R);

    _FighterSheeva_mk3_R1.tickAnimation(_SpritesAnimators_R, _GameText_R, _SpritesFighter_R);
    _FighterSheeva_mk3_R2.tickAnimation(_SpritesAnimators_R, _GameText_R, _SpritesFighter_R);

    // поле боя
    _GameText_R.drawRect(x, y, width, height, 1, 'blue', 0);

    _GameText_R.drawText ("dX_1_2 = " + dX_1_2, x+100, y+370, 'italic 20px sans-serif', 'blue', 1);
    _GameText_R.drawText ("AnimatorsBusy = " + _FighterSheeva_mk3_R1.spritesAnimatorsBusy,x+300, y+370, 'italic 20px sans-serif', 'blue', 1);
    _GameText_R.drawText ("FighterSheevaBusy = " + _FighterSheeva_mk3_R1.busy,x+550, y+370, 'italic 20px sans-serif', 'blue', 1);

    _GameText_R.drawText ("смена режима битвы - клавишей m(change the battle mode with the m key)", x+20, y+40, 'italic 20px sans-serif', 'white', 1);
    if (_ArenaFjs_R.stateFigting == 0) _GameText_R.drawText ("компьютер против компьютера(computer vs computer)", x+20, y+60, 'italic 20px sans-serif', 'white', 1);
    if (_ArenaFjs_R.stateFigting == 1) _GameText_R.drawText ("человек против компьютера(player against computer)", x+20, y+60, 'italic 20px sans-serif', 'white', 1);
    if (_ArenaFjs_R.stateFigting == 2) _GameText_R.drawText ("человек против мешка(player against bag)", x+20, y+60, 'italic 20px sans-serif', 'white', 1);
  };
  //============================================================================

  //============================================================================
  ArenaScene_R.drawFPSFrame = function(_GameText_R, _Timer_R,
     _CommandToFighter_R1, _CommandToFighter_R2,
      _UserInput_R, _ArenaFjs_R) {

    var x =      ArenaScene_R.FPS_Frame.x0Left;
    var y =      ArenaScene_R.FPS_Frame.y0Top;
    var width =  ArenaScene_R.FPS_Frame.width;
    var height = ArenaScene_R.FPS_Frame.height;

        _GameText_R.drawRect( x, y, width, height, 1, 'green', 0);

        y = y + 10;

      _GameText_R.drawText ("clear = " + 0 ,x+10, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("ticksPerSecond = " + _Timer_R.ticksPerSecond,x+180, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("tickMustTimeMs = " + _Timer_R.tickMustTimeMs,x+400, y+5, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("timeBetweenEndMinStartTickMs = " + _Timer_R.timeBetweenEndMinStartTickMs,x+620, y+5, 'italic 20px sans-serif', 'blue', 1);
	    _GameText_R.drawText ("timeThreadSleepGameMs = " + _Timer_R.timeThreadSleepGameMs,x+210, y+55, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R.drawText ("timeStartTickMs = " + _Timer_R.timeStartTickMs,x+10, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("timeEndTickMs = " + _Timer_R.timeEndTickMs,x+340, y+30, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("timeBetweenStartMinOldStartTickMs = " + _Timer_R.timeBetweenStartMinOldStartTickMs,x+670, y+30, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R.drawText ("displayWidth = " + ArenaScene_R.DisplayFrame.width, x+10, y+55, 'italic 20px sans-serif', 'blue', 1);
//alert("_UserInput_R1 = " + _UserInput_R1.NAME);
      _GameText_R.drawText ("UserInput-> " +  _UserInput_R.eventG ,x+10, y+80, 'italic 20px sans-serif', 'blue', 1);

      _GameText_R.drawText ("commandToFighterGamer-> " +  _CommandToFighter_R1.saveCommandToFighter_command ,x+170, y+80, 'italic 20px sans-serif', 'blue', 1);
      _GameText_R.drawText ("commandToFighterGamer-> " +  _CommandToFighter_R1.saveCommandToFighter_commandText ,x+470, y+80, 'italic 20px sans-serif', 'blue', 1);
  };
  //============================================================================

  //============================================================================
  ArenaScene_R.drawAll = function(_SpritesAnimators_R,
  _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2,
  _GameText_R, _Timer_R, _CommandToFighter_R1,
   _CommandToFighter_R2, _UserInput_R, _SpritesFighter_R, _ArenaFjs_R) {

     // 1500x800
     //Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
     Game_R.context.clearRect(0, 0, 1100, Game_R.canvas.height);

    // рисуем рамку самого верхнего окна игры
		_GameText_R.drawRect(ArenaScene_R.DisplayFrame.x0Left,
                              ArenaScene_R.DisplayFrame.y0Top,
                              ArenaScene_R.DisplayFrame.width,
                              ArenaScene_R.DisplayFrame.height,
                              1, 'green', 0);

    ArenaScene_R.drawFightFrame(_SpritesAnimators_R,
    _FighterSheeva_mk3_R1, _FighterSheeva_mk3_R2, _GameText_R
    , _SpritesFighter_R, _ArenaFjs_R);

    ArenaScene_R.drawFPSFrame(_GameText_R, _Timer_R, _CommandToFighter_R1,
      _CommandToFighter_R2, _UserInput_R, _ArenaFjs_R);

  };
  //============================================================================

  //============================================================================
  // Width in pixels 1280 1500 Height in pixels 960
  ArenaScene_R.iniFramesArena = function( _displayWidth,  _displayHeight) {

       //console.log('displayWidth = ' + displayWidth);// 1500
       //console.log('displayHeight = ' + displayHeight);// 800

        // стартовые координаты.если сделать их маленькими то рамка
        // окна сольется с краем поля вывода
        ArenaScene_R.dx0 = 10;
        ArenaScene_R.dy0 = 10;

        // ini displayFrame самое верхнее окно игры
        // задаем левый правый угол
        ArenaScene_R.DisplayFrame.x0Left = ArenaScene_R.dx0; //4
		    ArenaScene_R.DisplayFrame.y0Top = ArenaScene_R.dy0;//33

        //задаем ширину общего окна так что бы были отступы dx0 по горизонтали
        // ,dy0 - по вертикали
		    ArenaScene_R.DisplayFrame.width =  _displayWidth - 2 * ArenaScene_R.dx0; //
		    ArenaScene_R.DisplayFrame.height = _displayHeight - 2 * ArenaScene_R.dy0;//

        // задаем правый нижний угол. это правый верхний плюс размер окна
		    ArenaScene_R.DisplayFrame.xRight =  ArenaScene_R.DisplayFrame.x0Left + ArenaScene_R.DisplayFrame.width; //
		    ArenaScene_R.DisplayFrame.yBottom = ArenaScene_R.DisplayFrame.y0Top + ArenaScene_R.DisplayFrame.height;//


   		  //ini fightFrame

		    ArenaScene_R.FightFrame.x0Left = ArenaScene_R.DisplayFrame.x0Left + 5; //
		    ArenaScene_R.FightFrame.y0Top = ArenaScene_R.DisplayFrame.y0Top + 5;//

		    ArenaScene_R.FightFrame.width  = 920; //
		    ArenaScene_R.FightFrame.height = 585;//

		    ArenaScene_R.FightFrame.xRight = ArenaScene_R.FightFrame.x0Left + ArenaScene_R.FightFrame.width; //
		    ArenaScene_R.FightFrame.yBottom = ArenaScene_R.FightFrame.y0Top + ArenaScene_R.FightFrame.height;//


		  //ini FPS
		  ArenaScene_R.FPS_Frame.x0Left = ArenaScene_R.FightFrame.x0Left;
		  ArenaScene_R.FPS_Frame.y0Top = ArenaScene_R.FightFrame.yBottom + 5;//

		  ArenaScene_R.FPS_Frame.width  = ArenaScene_R.FightFrame.width +150;
		  ArenaScene_R.FPS_Frame.height = ArenaScene_R.DisplayFrame.yBottom - ArenaScene_R.FightFrame.yBottom - 10;//

		  ArenaScene_R.FPS_Frame.xRight = ArenaScene_R.FPS_Frame.x0Left + ArenaScene_R.FPS_Frame.width;
		  ArenaScene_R.FPS_Frame.yBottom = ArenaScene_R.FPS_Frame.y0Top + ArenaScene_R.FPS_Frame.height; // низ привязали к фону

      //ini healthFighterFrame
	    ArenaScene_R.HealthFighterFrame.x0LeftHealthPlayer1 = ArenaScene_R.FightFrame.x0Left + 5; //
	    ArenaScene_R.HealthFighterFrame.y0TopHealthPlayer1 = ArenaScene_R.FightFrame.y0Top + 5;//
	    ArenaScene_R.HealthFighterFrame.widthHealthPlayer1 = 400; //
	    ArenaScene_R.HealthFighterFrame.heightHealthPlayer1 = 20;//

	    ArenaScene_R.HealthFighterFrame.x0LeftHealthPlayer2 = ArenaScene_R.HealthFighterFrame.x0LeftHealthPlayer1 + ArenaScene_R.HealthFighterFrame.widthHealthPlayer1 + 110; //
	    ArenaScene_R.HealthFighterFrame.y0TopHealthPlayer2 = ArenaScene_R.HealthFighterFrame.y0TopHealthPlayer1;//
	    ArenaScene_R.HealthFighterFrame.widthHealthPlayer2 = ArenaScene_R.HealthFighterFrame.widthHealthPlayer1; //
	    ArenaScene_R.HealthFighterFrame.heightHealthPlayer2 = ArenaScene_R.HealthFighterFrame.heightHealthPlayer1;//
  };
  //============================================================================


  //============================================================================
  ArenaScene_R.loadSceneImage = function(){

      var path1 = "image/Sheeva_mk3_image/";
      var path2 = "image/Arenas_mk1_image/";

      ArenaScene_R.ImageArena.ikonSheeva_mk3.src = path1 + "fs1.png";

      ArenaScene_R.ImageArena.drak.src = path2 + "dre.png";

      ArenaScene_R.ImageArena.fon1.src = path2 + "mkw.png";
      ArenaScene_R.ImageArena.fon2.src = path2 + "tr.png";
      ArenaScene_R.ImageArena.fon3.src = path2 + "wsh.png";
  };
  //============================================================================

  //============================================================================
  // передаю Game_R.canvas.width, Game_R.canvas.height
  ArenaScene_R.iniAll = function(_displayWidth,  _displayHeight,
    _Fighter_1, _Fighter_2) {

       ArenaScene_R.img_load_end_1 = 0;
       ArenaScene_R.img_load_end_2 = 0;
       ArenaScene_R.img_load_end_3 = 0;

       ArenaScene_R.img_load_end = 0 ;

       ArenaScene_R.iniFramesArena( _displayWidth,  _displayHeight);
       ArenaScene_R.loadSceneImage();
// 920/2= 460/2=230, 460+230=690
       _Fighter_1.ini(ArenaScene_R.FightFrame.x0Left + 230,
                               ArenaScene_R.FightFrame.y0Top + 550,
                               0,'v1','fightingStance');

       _Fighter_2.ini(ArenaScene_R.FightFrame.x0Left + 690,
                               ArenaScene_R.FightFrame.y0Top + 550,
                               1,'v2','fightingStance');

      //ArenaScene_R.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

  };
  //============================================================================

  //============================================================================
  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('15 module "ArenaScene" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module ArenaScene done");
