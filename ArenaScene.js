"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 08.08.2018 - 30.12.2018

  /*
   $ -переменные

   НАЗНАЧЕНИЕ


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

   ArenaFjs
                      ArenaScene_R.drawAll()
  */

  //alert("module ArenaScene start");
  //================================================================================

var ArenaScene_R = {};

  ArenaScene_R.name = "ArenaScene_R";//

  //============================================================================
  // INPUT======================================================================

// Game_R

ArenaScene_R.Game_R_img_load_end_0_IN = function() {
   Game_R.img_load_end = 0 ;
};

ArenaScene_R.Game_R_img_load_end_1_IN = function() {
   Game_R.img_load_end = 1 ;
};

//     Game_R context

ArenaScene_R.Game_R_context_drawImage_IN = function(image, left, top, imageWidth, imageHeight) {
   Game_R.context.drawImage(image, left, top, imageWidth, imageHeight);
};

ArenaScene_R.Game_R_context_strokeRect_IN = function(left, top, imageWidth, imageHeight) {
   Game_R.context.strokeRect(left, top, imageWidth, imageHeight);
};

//     Game_R canvas

ArenaScene_R.Game_R_canvas_width_IN = function() {
   return (Game_R.canvas.width);
};

ArenaScene_R.Game_R_canvas_height_IN = function() {
   return ( Game_R.canvas.height);
};


// GameText_R

ArenaScene_R.GameText_R_drawRect_IN = function(left, top, width, height, lineWidth, color, fillYes) {
  Game_R.GameText_R.drawRect( left, top, width, height, lineWidth, color, fillYes);
};

// Fighters_R

ArenaScene_R.Fighters_R_fighterSheeva_mk3_1_ini_IN = function(left, top, mirror) {
  Fighters_R.fighterSheeva_mk3_1.ini(left, top, mirror);
};

ArenaScene_R.Fighters_R_fighterSheeva_mk3_2_ini_IN = function(left, top, mirror) {
  Fighters_R.fighterSheeva_mk3_2.ini(left, top, mirror);
};


  //============================================================================
  // IMPLEMENTATION=============================================================

  //---------------------------------------------------------------------------------------------------------------
  ArenaScene_R.framesArena = {

       displayWidth  : 0, //
		   displayHeight : 0, //

       x0Left : 0,
       y0Top  : 0,//

       xRight  : 0, //
       yBottom : 0,//

       width  : 0, //
       height : 0,//

	     // начальные координаты карты в окне игры
       x0LeftLocation : 0,//
       y0TopLocation  : 0,//

	    // максимальные координаты карты. высчитываются по начальным и размеру
      xRightLocation  : 0,//
      yBottomLocation : 0,//

     // размер отображения карты в окне игры. задается масштабированием карты
      widthLocation  : 0, //
      heightLocation : 0,//

    //FPS
      x0LeftFPS : 0, //
      y0TopFPS  : 0,//

      xRightFPS  : 0, //
      yBottomFPS : 0,//

      widthFPS  : 0, //
      heightFPS : 0,//

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
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  ArenaScene_R.imageArena = {
      name            : "imageArena",

      ikonSheeva_mk3 : new Image(),
      drak  : new Image(),
      fon1  : new Image(),
      fon2  : new Image(),
      fon3  : new Image()
  };
  //---------------------------------------------------------------------------------------------------------------

  ArenaScene_R.Game_R_img_load_end_0_IN();

  //---------------------------------------------------------------------------------------------------------------
  ArenaScene_R.imageArena.fon1.onload = function() {
    ArenaScene_R.Game_R_img_load_end_1_IN() ;
  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  ArenaScene_R.imageArena.fon2.onload = function() {
    ArenaScene_R.Game_R_img_load_end_1_IN() ;
  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  ArenaScene_R.imageArena.fon3.onload = function() {
    ArenaScene_R.Game_R_img_load_end_1_IN() ;
  };

  // draw>------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  // draw image
  ArenaScene_R.drawSceneImage = function(type, left, top, kx, ky) {

         var imageWidth  = ArenaScene_R.imageArena[type].width;
         var imageHeight = ArenaScene_R.imageArena[type].height;

         imageWidth  = imageWidth * kx;
         imageHeight = imageHeight * ky;

         ArenaScene_R.Game_R_context_drawImage_IN(ArenaScene_R.imageArena[type], left, top, imageWidth, imageHeight);
         ArenaScene_R.Game_R_context_strokeRect_IN(left, top, imageWidth, imageHeight);

	       //Game_R.context.fillText ("fr = " + index,left, top);
         //Game_R.context.fillText (type,left, top + 100);
  };
  //---------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------
  ArenaScene_R.drawAll = function() {

    // это видимо весь фон
		ArenaScene_R.GameText_R_drawRect_IN(ArenaScene_R.framesArena.x0Left,
                              ArenaScene_R.framesArena.y0Top,
                              ArenaScene_R.framesArena.width,
                              ArenaScene_R.framesArena.height,
                              1, 'green', 0);

  };
  //---------------------------------------------------------------------------------------------------------------
  // draw>------------------------------------------------------------------------------------------------


// ini>------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
                                         // Width in pixels 1280 1500 Height in pixels 960
  ArenaScene_R.iniFramesArena = function( displayWidth,  displayHeight) {

        var dx0 = 10;
        var dy0 = 10;

        ArenaScene_R.framesArena.displayWidth = displayWidth - dx0 - 5; //
		    ArenaScene_R.framesArena.displayHeight = displayHeight - dy0 - 5;//

    		ArenaScene_R.framesArena.x0Left = dx0; //4
		    ArenaScene_R.framesArena.y0Top = dy0;//33

		    ArenaScene_R.framesArena.width = ArenaScene_R.framesArena.displayWidth; //
		    ArenaScene_R.framesArena.height = ArenaScene_R.framesArena.displayHeight;//

		    ArenaScene_R.framesArena.xRight =  ArenaScene_R.framesArena.x0Left + ArenaScene_R.framesArena.width; //
		    ArenaScene_R.framesArena.yBottom = ArenaScene_R.framesArena.y0Top + ArenaScene_R.framesArena.height;//

//		("x0Left = " + x0Left);
//		("y0Top = " + y0Top);
//		("xRight = " + xRight);
//		("yBottom = " + yBottom);
//		("width = " + width);
//		("height = " + height);

		//view Location

		   ArenaScene_R.framesArena.x0LeftLocation = ArenaScene_R.framesArena.x0Left + 5; //
		   ArenaScene_R.framesArena.y0TopLocation = ArenaScene_R.framesArena.y0Top + 5;//

		   ArenaScene_R.framesArena.widthLocation  = ArenaScene_R.framesArena.width - 10; //
		   ArenaScene_R.framesArena.heightLocation = ArenaScene_R.framesArena.height - ArenaScene_R.framesArena.height/4;//

		   ArenaScene_R.framesArena.xRightLocation = ArenaScene_R.framesArena.x0Left + ArenaScene_R.framesArena.widthLocation; //
		   ArenaScene_R.framesArena.yBottomLocation = ArenaScene_R.framesArena.y0Top + ArenaScene_R.framesArena.heightLocation;//

//		("x0LeftLocation = " + x0LeftLocation);
//		("y0TopLocation = " + y0TopLocation);
//		("xRightLocation = " + xRightLocation);
//		("yBottomLocation = " + yBottomLocation);
//		("widthLocation = " + widthLocation);
//		("heightLocation = " + heightLocation);


		  //viewFPS
		  ArenaScene_R.framesArena.x0LeftFPS = ArenaScene_R.framesArena.x0LeftLocation;
		  ArenaScene_R.framesArena.y0TopFPS = ArenaScene_R.framesArena.yBottomLocation;//

		  ArenaScene_R.framesArena.widthFPS  = ArenaScene_R.framesArena.widthLocation;
		  ArenaScene_R.framesArena.heightFPS = ArenaScene_R.framesArena.yBottom - ArenaScene_R.framesArena.yBottomLocation;//

		  ArenaScene_R.framesArena.xRightFPS = ArenaScene_R.framesArena.xRightLocation;
		  ArenaScene_R.framesArena.yBottomFPS = ArenaScene_R.framesArena.yBottom -5; // низ привязали к фону

	    ArenaScene_R.framesArena.x0LeftHealthPlayer1 = 10; //
	    ArenaScene_R.framesArena.y0TopHealthPlayer1 = 10;//
	    ArenaScene_R.framesArena.widthHealthPlayer1 = 500; //
	    ArenaScene_R.framesArena.heightHealthPlayer1 = 40;//


	    ArenaScene_R.framesArena.x0LeftHealthPlayer2 = 600; //
	    ArenaScene_R.framesArena.y0TopHealthPlayer2 = 10;//
	    ArenaScene_R.framesArena.widthHealthPlayer2 = 500; //
	    ArenaScene_R.framesArena.heightHealthPlayer2 = 40;//
  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  // ini SceneImage
  ArenaScene_R.loadSceneImage = function(){

      var path1 = "image/Sheeva_mk3_image/";
      var path2 = "image/Arenas_mk1_image/";

      ArenaScene_R.imageArena.ikonSheeva_mk3.src = path1 + "fs1.png";

      ArenaScene_R.imageArena.drak.src = path2 + "dre.png";

      ArenaScene_R.imageArena.fon1.src = path2 + "mkw.png";
      ArenaScene_R.imageArena.fon2.src = path2 + "tr.png";
      ArenaScene_R.imageArena.fon3.src = path2 + "wsh.png";



  };
  //---------------------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------------------
  ArenaScene_R.iniAll = function(displayWidth,  displayHeight) {

       ArenaScene_R.iniFramesArena( displayWidth,  displayHeight);
       ArenaScene_R.loadSceneImage();

       ArenaScene_R.Fighters_R_fighterSheeva_mk3_1_ini_IN(ArenaScene_R.framesArena.x0LeftLocation+180,
                                             ArenaScene_R.framesArena.y0TopLocation+550, 0);
       ArenaScene_R.Fighters_R_fighterSheeva_mk3_2_ini_IN(ArenaScene_R.framesArena.x0LeftLocation+480,
                                             ArenaScene_R.framesArena.y0TopLocation+550, 1);

      //ArenaScene_R.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

  };
  //---------------------------------------------------------------------------------------------------------------

  // ini<------------------------------------------------------------------------------------------------

  ArenaScene_R.iniAll(ArenaScene_R.Game_R_canvas_width_IN(),ArenaScene_R.Game_R_canvas_height_IN());



  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('15 module "ArenaScene" loaded', 1100, Game_R.yT);

//================================================================================
//alert("module ArenaScene done");
