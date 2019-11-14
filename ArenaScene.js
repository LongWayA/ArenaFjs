"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 08.08.2018 - 30.12.2018
// - 14.11.2019 -

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
  ArenaScene_R.Display_Frame = {

       displayWidth  : 0, //
		   displayHeight : 0, //

       x0Left : 0,
       y0Top  : 0,//

       xRight  : 0, //
       yBottom : 0,//

       width  : 0, //
       height : 0,//
  };

  // поле боя
  ArenaScene_R.Location_Frame = {

	     // начальные координаты
       x0LeftLocation : 0,//
       y0TopLocation  : 0,//

	    // максимальные координаты карты. высчитываются по начальным и размеру
      xRightLocation  : 0,//
      yBottomLocation : 0,//

     // размер отображения
      widthLocation  : 0, //
      heightLocation : 0//
  };

  //FPS экран вывода служебной информации
  ArenaScene_R.FPS_Frame = {
    x0LeftFPS : 0, //
    y0TopFPS  : 0,//

    xRightFPS  : 0, //
    yBottomFPS : 0,//

    widthFPS  : 0, //
    heightFPS : 0//
  };

  //HealthPlayer жизни бойцов
  ArenaScene_R.HealthPlayer_Frame = {

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
  ArenaScene_R.imageArena = {
      NAME  : "imageArena",

      ikonSheeva_mk3 : new Image(),
      drak  : new Image(),
      fon1  : new Image(),
      fon2  : new Image(),
      fon3  : new Image()
  };

  // когда фоновый рисунок загружен то 1
  //============================================================================
  ArenaScene_R.imageArena.fon1.onload = function() {
    Game_R.img_load_end = 1;
  };
  //============================================================================

  // когда фоновый рисунок загружен то 1
  //============================================================================
  ArenaScene_R.imageArena.fon2.onload = function() {
    Game_R.img_load_end = 1;
  };
  //============================================================================

  // когда фоновый рисунок загружен то 1
  //============================================================================
  ArenaScene_R.imageArena.fon3.onload = function() {
    Game_R.img_load_end = 1;
  };
  //============================================================================

  // рисуем рисунок как задний фон арены
  //============================================================================
  ArenaScene_R.drawSceneImage = function(type, left, top, kx, ky) {

         var imageWidth  = ArenaScene_R.imageArena[type].width;
         var imageHeight = ArenaScene_R.imageArena[type].height;

         imageWidth  = imageWidth * kx;
         imageHeight = imageHeight * ky;

         Game_R.context.drawImage(ArenaScene_R.imageArena[type], left, top, imageWidth, imageHeight);
         Game_R.context.strokeRect(left, top, imageWidth, imageHeight);

	       //Game_R.context.fillText ("fr = " + index,left, top);
         //Game_R.context.fillText (type,left, top + 100);
  };
  //============================================================================

  //============================================================================
  ArenaScene_R.drawAll = function(_GameText_R) {

    // рисуем рамку всего фона
		_GameText_R.drawRect(ArenaScene_R.Display_Frame.x0Left,
                              ArenaScene_R.Display_Frame.y0Top,
                              ArenaScene_R.Display_Frame.width,
                              ArenaScene_R.Display_Frame.height,
                              1, 'green', 0);

  };
  //============================================================================

  //============================================================================
  // Width in pixels 1280 1500 Height in pixels 960
  ArenaScene_R.iniFramesArena = function( displayWidth,  displayHeight) {

        var dx0 = 10;
        var dy0 = 10;

        ArenaScene_R.Display_Frame.displayWidth = displayWidth - dx0 - 5; //
		    ArenaScene_R.Display_Frame.displayHeight = displayHeight - dy0 - 5;//

    		ArenaScene_R.Display_Frame.x0Left = dx0; //4
		    ArenaScene_R.Display_Frame.y0Top = dy0;//33

		    ArenaScene_R.Display_Frame.width = ArenaScene_R.Display_Frame.displayWidth; //
		    ArenaScene_R.Display_Frame.height = ArenaScene_R.Display_Frame.displayHeight;//

		    ArenaScene_R.Display_Frame.xRight =  ArenaScene_R.Display_Frame.x0Left + ArenaScene_R.Display_Frame.width; //
		    ArenaScene_R.Display_Frame.yBottom = ArenaScene_R.Display_Frame.y0Top + ArenaScene_R.Display_Frame.height;//

//		("x0Left = " + x0Left);
//		("y0Top = " + y0Top);
//		("xRight = " + xRight);
//		("yBottom = " + yBottom);
//		("width = " + width);
//		("height = " + height);

		//view Location

		   ArenaScene_R.Location_Frame.x0LeftLocation = ArenaScene_R.Display_Frame.x0Left + 5; //
		   ArenaScene_R.Location_Frame.y0TopLocation = ArenaScene_R.Display_Frame.y0Top + 5;//

		   ArenaScene_R.Location_Frame.widthLocation  = ArenaScene_R.Display_Frame.width - 10; //
		   ArenaScene_R.Location_Frame.heightLocation = ArenaScene_R.Display_Frame.height - ArenaScene_R.Display_Frame.height/4;//

		   ArenaScene_R.Location_Frame.xRightLocation = ArenaScene_R.Display_Frame.x0Left + ArenaScene_R.Location_Frame.widthLocation; //
		   ArenaScene_R.Location_Frame.yBottomLocation = ArenaScene_R.Display_Frame.y0Top + ArenaScene_R.Location_Frame.heightLocation;//

//		("x0LeftLocation = " + x0LeftLocation);
//		("y0TopLocation = " + y0TopLocation);
//		("xRightLocation = " + xRightLocation);
//		("yBottomLocation = " + yBottomLocation);
//		("widthLocation = " + widthLocation);
//		("heightLocation = " + heightLocation);


		  //viewFPS
		  ArenaScene_R.FPS_Frame.x0LeftFPS = ArenaScene_R.Location_Frame.x0LeftLocation;
		  ArenaScene_R.FPS_Frame.y0TopFPS = ArenaScene_R.Location_Frame.yBottomLocation;//

		  ArenaScene_R.FPS_Frame.widthFPS  = ArenaScene_R.Location_Frame.widthLocation;
		  ArenaScene_R.FPS_Frame.heightFPS = ArenaScene_R.Display_Frame.yBottom - ArenaScene_R.Location_Frame.yBottomLocation;//

		  ArenaScene_R.FPS_Frame.xRightFPS = ArenaScene_R.Location_Frame.xRightLocation;
		  ArenaScene_R.FPS_Frame.yBottomFPS = ArenaScene_R.Display_Frame.yBottom -5; // низ привязали к фону

	    ArenaScene_R.HealthPlayer_Frame.x0LeftHealthPlayer1 = 10; //
	    ArenaScene_R.HealthPlayer_Frame.y0TopHealthPlayer1 = 10;//
	    ArenaScene_R.HealthPlayer_Frame.widthHealthPlayer1 = 500; //
	    ArenaScene_R.HealthPlayer_Frame.heightHealthPlayer1 = 40;//


	    ArenaScene_R.HealthPlayer_Frame.x0LeftHealthPlayer2 = 600; //
	    ArenaScene_R.HealthPlayer_Frame.y0TopHealthPlayer2 = 10;//
	    ArenaScene_R.HealthPlayer_Frame.widthHealthPlayer2 = 500; //
	    ArenaScene_R.HealthPlayer_Frame.heightHealthPlayer2 = 40;//
  };
  //============================================================================


  //============================================================================
  ArenaScene_R.loadSceneImage = function(){

      var path1 = "image/Sheeva_mk3_image/";
      var path2 = "image/Arenas_mk1_image/";

      ArenaScene_R.imageArena.ikonSheeva_mk3.src = path1 + "fs1.png";

      ArenaScene_R.imageArena.drak.src = path2 + "dre.png";

      ArenaScene_R.imageArena.fon1.src = path2 + "mkw.png";
      ArenaScene_R.imageArena.fon2.src = path2 + "tr.png";
      ArenaScene_R.imageArena.fon3.src = path2 + "wsh.png";
  };
  //============================================================================

  //============================================================================
  ArenaScene_R.iniAll = function(displayWidth,  displayHeight,
    fighterSheeva_mk3_1, fighterSheeva_mk3_2) {

       Game_R.img_load_end = 0 ;

       ArenaScene_R.iniFramesArena( displayWidth,  displayHeight);
       ArenaScene_R.loadSceneImage();

       fighterSheeva_mk3_1.ini(ArenaScene_R.Location_Frame.x0LeftLocation+180,
                               ArenaScene_R.Location_Frame.y0TopLocation+550,
                               0,'v1','fightingStance');

       fighterSheeva_mk3_2.ini(ArenaScene_R.Location_Frame.x0LeftLocation+480,
                               ArenaScene_R.Location_Frame.y0TopLocation+550,
                               1,'v2','fightingStance');

      //ArenaScene_R.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

  };
  //============================================================================

  //============================================================================
  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('15 module "ArenaScene" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module ArenaScene done");
