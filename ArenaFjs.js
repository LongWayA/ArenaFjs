"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 15.07.2018
 
 Game_R.ArenaFjs_R = {}; 
 Game_R.ArenaFjs_R.name = "ArenaFjs";//
  
  // ini> ---------------------------------------------------------
  Game_R.ArenaFjs_R.ini = function(){
   
     Game_R.Timer_R.ini(8); 
     Game_R.ArenaScene_R.iniAll(Game_R.canvas.width, Game_R.canvas.height);
  
     Game_R.countLoop = 1;
     Game_R.ArenaFjs_R.il = 0;
     Game_R.ArenaFjs_R.il_2 = 0;
     
    
  };
  // ini< ---------------------------------------------------------

  // start> ---------------------------------------------------------------------------
  Game_R.ArenaFjs_R.start = function() {
   
     //alert("!");
  
     Game_R.SpritesFighter_R.start();
  
     Game_R.UserInput_R.start();
  
     Game_R.Fighters_R.start();
  };
 // start< ---------------------------------------------------------------------------
 
 // tick> ---------------------------------------------------------------------------
  Game_R.ArenaFjs_R.tick = function() {
          
      //alert("!");
	     Game_R.ArenaScene_R.drawAll();
        
         
      if (Game_R.countLoop == 24){
       Game_R.ArenaFjs_R.il_2 = Game_R.ArenaFjs_R.il
       //if(Game_R.ArenaFjs.il_2 == 0) Game_R.ArenaFjs.il_2 = 1;
       Game_R.Fighters_R.fighterSheeva_mk3_1.setState(Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il]);
       Game_R.Fighters_R.fighterSheeva_mk3_2.setState(Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il]);
       
       Game_R.ArenaFjs_R.il = Game_R.ArenaFjs_R.il + 1;
       if (Game_R.ArenaFjs_R.il > Game_R.Fighters_R.typeM.length-1) Game_R.ArenaFjs_R.il = 0;
       
       };
       
       Game_R.context.fillText (Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il_2],150, 120); 
     
     Game_R.UserInput_R.tick();
     
 //<TEST ------------------------------------------------------
 
     // Game_R.SpritesFighter_R.drawSprites_TEST();
     //Game_R.SpritesAnimators_R.animationAll_TEST();
      
//TEST> ------------------------------------------------------


      Game_R.Fighters_R.tick();     

	     Game_R.countLoop = Game_R.countLoop + 1;
      if (Game_R.countLoop > 24 ) Game_R.countLoop = 1;
  };
 // tick< --------------------------------------------------------------------------- 
  
  