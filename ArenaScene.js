"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 08.08.2018 - 08.08.2018

/*
 IMPORT (references, outer defines)

 
 EXPORT
 
*/

/*

 */

/*
INTERFACE
 
*/

/*
DEFINE

*/

Game_R.ArenaScene_R = {};

  Game_R.ArenaScene_R.name = "ArenaScene_R";//
  
  Game_R.ArenaScene_R.framesArena = {
  
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
  
  Game_R.ArenaScene_R.imageArena = {
      name            : "imageArena",
      
      ikonSheeva_mk3 : new Image(),
      drak  : new Image(),
      fon1  : new Image(),
      fon2  : new Image(),
      fon3  : new Image()
  };
  
  
 // ini>------------------------------------------------------------------------------------------------ 
  
                                         // Width in pixels 1280 1500 Height in pixels 960
  Game_R.ArenaScene_R.iniFramesArena = function( displayWidth,  displayHeight) {
    
        var dx0 = 10;
        var dy0 = 10;
              
        Game_R.ArenaScene_R.framesArena.displayWidth = displayWidth - dx0 - 5; //
		    Game_R.ArenaScene_R.framesArena.displayHeight = displayHeight - dy0 - 5;//
    
    		Game_R.ArenaScene_R.framesArena.x0Left = dx0; //4
		    Game_R.ArenaScene_R.framesArena.y0Top = dy0;//33

		    Game_R.ArenaScene_R.framesArena.width = Game_R.ArenaScene_R.framesArena.displayWidth; //
		    Game_R.ArenaScene_R.framesArena.height = Game_R.ArenaScene_R.framesArena.displayHeight;//

		    Game_R.ArenaScene_R.framesArena.xRight =  Game_R.ArenaScene_R.framesArena.x0Left + Game_R.ArenaScene_R.framesArena.width; //
		    Game_R.ArenaScene_R.framesArena.yBottom = Game_R.ArenaScene_R.framesArena.y0Top + Game_R.ArenaScene_R.framesArena.height;//

//		("x0Left = " + x0Left);
//		("y0Top = " + y0Top);
//		("xRight = " + xRight);
//		("yBottom = " + yBottom);
//		("width = " + width);
//		("height = " + height);

		//view Location

		   Game_R.ArenaScene_R.framesArena.x0LeftLocation = Game_R.ArenaScene_R.framesArena.x0Left + 5; //
		   Game_R.ArenaScene_R.framesArena.y0TopLocation = Game_R.ArenaScene_R.framesArena.y0Top + 5;//

		   Game_R.ArenaScene_R.framesArena.widthLocation  = Game_R.ArenaScene_R.framesArena.width - 10; //
		   Game_R.ArenaScene_R.framesArena.heightLocation = Game_R.ArenaScene_R.framesArena.height - Game_R.ArenaScene_R.framesArena.height/4;//

		   Game_R.ArenaScene_R.framesArena.xRightLocation = Game_R.ArenaScene_R.framesArena.x0Left + Game_R.ArenaScene_R.framesArena.widthLocation; //
		   Game_R.ArenaScene_R.framesArena.yBottomLocation = Game_R.ArenaScene_R.framesArena.y0Top + Game_R.ArenaScene_R.framesArena.heightLocation;//

//		("x0LeftLocation = " + x0LeftLocation);
//		("y0TopLocation = " + y0TopLocation);
//		("xRightLocation = " + xRightLocation);
//		("yBottomLocation = " + yBottomLocation);
//		("widthLocation = " + widthLocation);
//		("heightLocation = " + heightLocation);


		  //viewFPS
		  Game_R.ArenaScene_R.framesArena.x0LeftFPS = Game_R.ArenaScene_R.framesArena.x0LeftLocation;
		  Game_R.ArenaScene_R.framesArena.y0TopFPS = Game_R.ArenaScene_R.framesArena.yBottomLocation;//

		  Game_R.ArenaScene_R.framesArena.widthFPS  = Game_R.ArenaScene_R.framesArena.widthLocation;
		  Game_R.ArenaScene_R.framesArena.heightFPS = Game_R.ArenaScene_R.framesArena.yBottom - Game_R.ArenaScene_R.framesArena.yBottomLocation;//

		  Game_R.ArenaScene_R.framesArena.xRightFPS = Game_R.ArenaScene_R.framesArena.xRightLocation;
		  Game_R.ArenaScene_R.framesArena.yBottomFPS = Game_R.ArenaScene_R.framesArena.yBottom -5; // низ привязали к фону

	    Game_R.ArenaScene_R.framesArena.x0LeftHealthPlayer1 = 10; //
	    Game_R.ArenaScene_R.framesArena.y0TopHealthPlayer1 = 10;//
	    Game_R.ArenaScene_R.framesArena.widthHealthPlayer1 = 500; //
	    Game_R.ArenaScene_R.framesArena.heightHealthPlayer1 = 40;//


	    Game_R.ArenaScene_R.framesArena.x0LeftHealthPlayer2 = 600; //
	    Game_R.ArenaScene_R.framesArena.y0TopHealthPlayer2 = 10;//
	    Game_R.ArenaScene_R.framesArena.widthHealthPlayer2 = 500; //
	    Game_R.ArenaScene_R.framesArena.heightHealthPlayer2 = 40;//
  };
  
  // ini SceneImage
  Game_R.ArenaScene_R.iniSceneImage = function(){
  
      var path1 = "image/Sheeva_mk3_image/";
      var path2 = "image/Arenas_mk1_image/";
           
      Game_R.ArenaScene_R.imageArena.ikonSheeva_mk3.src = path1 + "fs1.png";
      
      Game_R.ArenaScene_R.imageArena.drak.src = path2 + "dre.png";
      
      Game_R.ArenaScene_R.imageArena.fon1.src = path2 + "mkw.png";
      Game_R.ArenaScene_R.imageArena.fon2.src = path2 + "tr.png";
      Game_R.ArenaScene_R.imageArena.fon3.src = path2 + "wsh.png";
          
  };
  
  
   // 
  Game_R.ArenaScene_R.iniText = function() {   
  
     Game_R.context.fillStyle = '#00f'; // blue
     Game_R.context.strokeStyle = '#00f'; // red '#f00'
     Game_R.context.lineWidth = 1;
 
     // text
     Game_R.context.fillStyle = '#f00';//#00f
     Game_R.context.font = 'italic 20px sans-serif';
     Game_R.context.textBaseline = 'top';
  };
  
  // 
  Game_R.ArenaScene_R.iniAll = function(displayWidth,  displayHeight) {    

       Game_R.ArenaScene_R.iniText();
       Game_R.ArenaScene_R.iniFramesArena( displayWidth,  displayHeight);
       Game_R.ArenaScene_R.iniSceneImage();
       
      //Game_R.ArenaScene_R.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

  };
  
  // ini<------------------------------------------------------------------------------------------------
  
  // start>------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.start = function() {
    
    
    
  };
  // start<------------------------------------------------------------------------------------------------
  
  
  // draw>------------------------------------------------------------------------------------------------
  
  // draw drawRects
  Game_R.ArenaScene_R.drawRects = function() {
    
    Game_R.context.fillText ("displayWidth = " + Game_R.ArenaScene_R.framesArena.displayWidth, 10, 700);
     
     
    Game_R.context.strokeRect( Game_R.ArenaScene_R.framesArena.x0LeftFPS,
                              Game_R.ArenaScene_R.framesArena.y0TopFPS,
                              Game_R.ArenaScene_R.framesArena.widthFPS,
                              Game_R.ArenaScene_R.framesArena.heightFPS);
    
    	// рамки прямоугольников
		Game_R.context.strokeRect(Game_R.ArenaScene_R.framesArena.x0LeftHealthPlayer1 + 64,
                              Game_R.ArenaScene_R.framesArena.y0TopHealthPlayer1,
				                      Game_R.ArenaScene_R.framesArena.widthHealthPlayer1,
                              Game_R.ArenaScene_R.framesArena.heightHealthPlayer1);

		Game_R.context.strokeRect(Game_R.ArenaScene_R.framesArena.x0LeftHealthPlayer2 + 64,
                              Game_R.ArenaScene_R.framesArena.y0TopHealthPlayer2,
				                      Game_R.ArenaScene_R.framesArena.widthHealthPlayer2,
                              Game_R.ArenaScene_R.framesArena.heightHealthPlayer2);
    
    // это видимо весь фон
		Game_R.context.strokeRect(Game_R.ArenaScene_R.framesArena.x0Left,
                              Game_R.ArenaScene_R.framesArena.y0Top,
                              Game_R.ArenaScene_R.framesArena.width,
                              Game_R.ArenaScene_R.framesArena.height);

     	//Location
		// поле боя
		Game_R.context.strokeRect(Game_R.ArenaScene_R.framesArena.x0LeftLocation,
                              Game_R.ArenaScene_R.framesArena.y0TopLocation,
                              Game_R.ArenaScene_R.framesArena.widthLocation,
                              Game_R.ArenaScene_R.framesArena.heightLocation);
    
  };
  
  
  Game_R.ArenaScene_R.drawText = function() {
  
      Game_R.context.fillText ("countLoop = " + Game_R.countLoop,10, 5);
      Game_R.context.fillText ("ticksPerSecond = " + Game_R.Timer_R.ticksPerSecond,180, 5);
      Game_R.context.fillText ("tickMustTimeMs = " + Game_R.Timer_R.tickMustTimeMs,400, 5);
      Game_R.context.fillText ("timeBetweenEndMinStartTickMs = " + Game_R.Timer_R.timeBetweenEndMinStartTickMs,620, 5);
	     Game_R.context.fillText ("timeThreadSleepGameMs = " + Game_R.Timer_R.timeThreadSleepGameMs,970, 5);
      
      Game_R.context.fillText ("timeStartTickMs = " + Game_R.Timer_R.timeStartTickMs,10, 30);
      Game_R.context.fillText ("timeEndTickMs = " + Game_R.Timer_R.timeEndTickMs,340, 30);
      Game_R.context.fillText ("timeBetweenStartMinOldStartTickMs = " + Game_R.Timer_R.timeBetweenStartMinOldStartTickMs,670, 30);
      
      Game_R.context.fillText ("busy = " + Game_R.Fighters_R.fighterSheeva_mk3_1.animatorsState.busy,300, 120);
  };
  
  
  // draw image
  Game_R.ArenaScene_R.drawSceneImage = function(type,left, top, kx, ky) {
    
         var imageWidth  = Game_R.ArenaScene_R.imageArena[type].width;
         var imageHeight = Game_R.ArenaScene_R.imageArena[type].height;
         
         imageWidth  = imageWidth * kx;
         imageHeight = imageHeight * ky;
    
         Game_R.context.drawImage(Game_R.ArenaScene_R.imageArena[type], left, top, imageWidth, imageHeight);
         Game_R.context.strokeRect(left, top, imageWidth, imageHeight);
         
	       //Game_R.context.fillText ("fr = " + index,left, top);
         //Game_R.context.fillText (type,left, top + 100);
  };

  //
  Game_R.ArenaScene_R.drawAll = function() {
    
    Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
    
    //Game_R.ArenaScene_R.drawSceneImage("ikonSheeva_mk3",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 1, 1);
    //Game_R.ArenaScene_R.drawSceneImage("drak",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 1, 1);    
    //Game_R.ArenaScene_R.drawSceneImage("fon1",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    //Game_R.ArenaScene_R.drawSceneImage("fon2",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    Game_R.ArenaScene_R.drawSceneImage("fon3",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 2.5, 2.5);   
    
    Game_R.ArenaScene_R.drawRects();
    Game_R.ArenaScene_R.drawText();
    
    
  };

  // draw>------------------------------------------------------------------------------------------------
 

//Game_R.context.fillRect(10, 10, 150, 100);
