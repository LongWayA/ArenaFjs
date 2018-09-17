"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 08.08.2018 - 15.08.2018

  /*
   $ -переменные
   
   НАЗНАЧЕНИЕ
   
   
   ИСПОЛЬЗУЕТ МОДУЛИ
    
   FighterSheeva_mk3
                       Fighters_R.fighterSheeva_mk3_1.tickAnimation();
                       Fighters_R.fighterSheeva_mk3_2.tickAnimation();
                       Fighters_R.fighterSheeva_mk3_1.ini(-)
                       Fighters_R.fighterSheeva_mk3_2.ini(-)
   
   GameText
                       GameText_R.drawRect(-)
                       GameText_R.drawText(-)
   
   Game
                       Game_R.context.strokeText(-)
                       Game_R.context.strokeRect(-)
                       Game_R.context.drawImage(-)
                       Game_R.context.clearRect()
                       $ Game_R.img_load_end
                     
   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   
   ArenaFjs
                      ArenaScene_R.drawAll()
  */

  //alert("module ArenaScene start");
  //================================================================================

Game_R.ArenaScene_R = {};

  Game_R.ArenaScene_R.name = "ArenaScene_R";//
  
  //---------------------------------------------------------------------------------------------------------------
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
  //---------------------------------------------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.imageArena = {
      name            : "imageArena",
      
      ikonSheeva_mk3 : new Image(),
      drak  : new Image(),
      fon1  : new Image(),
      fon2  : new Image(),
      fon3  : new Image()
  };
  //---------------------------------------------------------------------------------------------------------------
  
  Game_R.img_load_end = 0 ;
  
  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.imageArena.fon1.onload = function() {
    Game_R.img_load_end = 1 ;
  };
  //---------------------------------------------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.imageArena.fon2.onload = function() {
    Game_R.img_load_end = 1 ;
  };
  //---------------------------------------------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.imageArena.fon3.onload = function() {
    Game_R.img_load_end = 1 ;
  }
  
  // draw>------------------------------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------------------------------------------
  // draw image
  Game_R.ArenaScene_R.drawSceneImage = function(type, left, top, kx, ky) {
    
         var imageWidth  = Game_R.ArenaScene_R.imageArena[type].width;
         var imageHeight = Game_R.ArenaScene_R.imageArena[type].height;
         
         imageWidth  = imageWidth * kx;
         imageHeight = imageHeight * ky;
    
         Game_R.context.drawImage(Game_R.ArenaScene_R.imageArena[type], left, top, imageWidth, imageHeight);
         Game_R.context.strokeRect(left, top, imageWidth, imageHeight);
         
	       //Game_R.context.fillText ("fr = " + index,left, top);
         //Game_R.context.fillText (type,left, top + 100);
  };
  //---------------------------------------------------------------------------------------------------------------



  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.drawIkonFrame = function() {
    
      	// рамки прямоугольников
		Game_R.GameText_R.drawRect(Game_R.ArenaScene_R.framesArena.x0LeftHealthPlayer1 + 64,
                              Game_R.ArenaScene_R.framesArena.y0TopHealthPlayer1,
				                      Game_R.ArenaScene_R.framesArena.widthHealthPlayer1,
                              Game_R.ArenaScene_R.framesArena.heightHealthPlayer1,
                              1, 'green', 0);

		Game_R.GameText_R.drawRect(Game_R.ArenaScene_R.framesArena.x0LeftHealthPlayer2 + 64,
                              Game_R.ArenaScene_R.framesArena.y0TopHealthPlayer2,
				                      Game_R.ArenaScene_R.framesArena.widthHealthPlayer2,
                              Game_R.ArenaScene_R.framesArena.heightHealthPlayer2,
                              1, 'green', 0);
    
  };
  //---------------------------------------------------------------------------------------------------------------
  
  
  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.drawFightFrame = function() {
    
    var x =      Game_R.ArenaScene_R.framesArena.x0LeftLocation;
    var y =      Game_R.ArenaScene_R.framesArena.y0TopLocation;
    var width =  Game_R.ArenaScene_R.framesArena.widthLocation;
    var height = Game_R.ArenaScene_R.framesArena.heightLocation;
    
    //Game_R.ArenaScene_R.drawSceneImage("ikonSheeva_mk3",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 1, 1);
    //Game_R.ArenaScene_R.drawSceneImage("drak",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 1, 1);    
    //Game_R.ArenaScene_R.drawSceneImage("fon1",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    //Game_R.ArenaScene_R.drawSceneImage("fon2",Game_R.ArenaScene_R.framesArena.x0Left, Game_R.ArenaScene_R.framesArena.y0Top, 2.5, 2.5);
    Game_R.ArenaScene_R.drawSceneImage("fon3",x, y, 2.3, 2.3);
    
    
    Game_R.Fighters_R.fighterSheeva_mk3_1.tickAnimation();
    Game_R.Fighters_R.fighterSheeva_mk3_2.tickAnimation();
    
    
    //Location
		// поле боя
		Game_R.GameText_R.drawRect(x, y, width, height, 1, 'green', 0);
    
    Game_R.GameText_R.drawText ("busy = " + Game_R.Fighters_R.fighterSheeva_mk3_1.spritesAnimators.busy,x+300, y+370, 'italic 20px sans-serif', 'blue', 1);
  };
  //---------------------------------------------------------------------------------------------------------------
  
  
  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.drawTextFrame = function() {
    
    var x =      Game_R.ArenaScene_R.framesArena.x0LeftFPS;
    var y =      Game_R.ArenaScene_R.framesArena.y0TopFPS;
    var width =  Game_R.ArenaScene_R.framesArena.widthFPS;
    var height = Game_R.ArenaScene_R.framesArena.heightFPS;
    
        Game_R.GameText_R.drawRect( x, y, width, height, 1, 'green', 0);
        
        y=y+10;
        
      Game_R.GameText_R.drawText ("countLoop = " + Game_R.ArenaFjs_R.countLoop,x+10, y+5, 'italic 20px sans-serif', 'blue', 1);
      Game_R.GameText_R.drawText ("ticksPerSecond = " + Game_R.Timer_R.ticksPerSecond,x+180, y+5, 'italic 20px sans-serif', 'blue', 1);
      Game_R.GameText_R.drawText ("tickMustTimeMs = " + Game_R.Timer_R.tickMustTimeMs,x+400, y+5, 'italic 20px sans-serif', 'blue', 1);
      Game_R.GameText_R.drawText ("timeBetweenEndMinStartTickMs = " + Game_R.Timer_R.timeBetweenEndMinStartTickMs,x+620, y+5, 'italic 20px sans-serif', 'blue', 1);
	    Game_R.GameText_R.drawText ("timeThreadSleepGameMs = " + Game_R.Timer_R.timeThreadSleepGameMs,x+370, y+55, 'italic 20px sans-serif', 'blue', 1);
      
      Game_R.GameText_R.drawText ("timeStartTickMs = " + Game_R.Timer_R.timeStartTickMs,x+10, y+30, 'italic 20px sans-serif', 'blue', 1);
      Game_R.GameText_R.drawText ("timeEndTickMs = " + Game_R.Timer_R.timeEndTickMs,x+340, y+30, 'italic 20px sans-serif', 'blue', 1);
      Game_R.GameText_R.drawText ("timeBetweenStartMinOldStartTickMs = " + Game_R.Timer_R.timeBetweenStartMinOldStartTickMs,x+670, y+30, 'italic 20px sans-serif', 'blue', 1);
      
      Game_R.GameText_R.drawText ("UserInput-> " +  Game_R.UserInput_R.eventG ,x+10, y+55, 'italic 20px sans-serif', 'blue', 1);
      
      Game_R.GameText_R.drawText ("displayWidth = " + Game_R.ArenaScene_R.framesArena.displayWidth, x+170, y+55, 'italic 20px sans-serif', 'blue', 1);
  };
  //---------------------------------------------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------------------------------------------
  Game_R.ArenaScene_R.drawAll = function() {
    
    //Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
    Game_R.context.clearRect(0, 0, 1100, Game_R.canvas.height);
    
    // это видимо весь фон
		Game_R.GameText_R.drawRect(Game_R.ArenaScene_R.framesArena.x0Left,
                              Game_R.ArenaScene_R.framesArena.y0Top,
                              Game_R.ArenaScene_R.framesArena.width,
                              Game_R.ArenaScene_R.framesArena.height,
                              1, 'green', 0);
    
    Game_R.ArenaScene_R.drawFightFrame();
    //Game_R.ArenaScene_R.drawIkonFrame();
    Game_R.ArenaScene_R.drawTextFrame();

    
    
  };
  //---------------------------------------------------------------------------------------------------------------
  // draw>------------------------------------------------------------------------------------------------
 

// ini>------------------------------------------------------------------------------------------------ 
//---------------------------------------------------------------------------------------------------------------  
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
  //---------------------------------------------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------------------------------------------
  // ini SceneImage
  Game_R.ArenaScene_R.loadSceneImage = function(){
  
      var path1 = "image/Sheeva_mk3_image/";
      var path2 = "image/Arenas_mk1_image/";
           
      Game_R.ArenaScene_R.imageArena.ikonSheeva_mk3.src = path1 + "fs1.png";
      
      Game_R.ArenaScene_R.imageArena.drak.src = path2 + "dre.png";
      
      Game_R.ArenaScene_R.imageArena.fon1.src = path2 + "mkw.png";
      Game_R.ArenaScene_R.imageArena.fon2.src = path2 + "tr.png";
      Game_R.ArenaScene_R.imageArena.fon3.src = path2 + "wsh.png";
          

          
  };
  //---------------------------------------------------------------------------------------------------------------
  
  //--------------------------------------------------------------------------------------------------------------- 
  Game_R.ArenaScene_R.iniAll = function(displayWidth,  displayHeight) {    

       Game_R.ArenaScene_R.iniFramesArena( displayWidth,  displayHeight);
       Game_R.ArenaScene_R.loadSceneImage();
      
       Game_R.Fighters_R.fighterSheeva_mk3_1.ini(Game_R.ArenaScene_R.framesArena.x0LeftLocation+180,
                                             Game_R.ArenaScene_R.framesArena.y0TopLocation+550, 0);
       Game_R.Fighters_R.fighterSheeva_mk3_2.ini(Game_R.ArenaScene_R.framesArena.x0LeftLocation+480,
                                             Game_R.ArenaScene_R.framesArena.y0TopLocation+550, 1);    
       
      //Game_R.ArenaScene_R.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

  };
  //---------------------------------------------------------------------------------------------------------------
  
  // ini<------------------------------------------------------------------------------------------------

  Game_R.ArenaScene_R.iniAll(Game_R.canvas.width, Game_R.canvas.height);



  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('15 module ArenaScene loaded', 1100, Game_R.yT);

//================================================================================
//alert("module ArenaScene done");

