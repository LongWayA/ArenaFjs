"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 15.08.2018
 
 //alert("module ArenaFjs start");
 //================================================================================
 
 Game_R.ArenaFjs_R = {}; 
 Game_R.ArenaFjs_R.name = "ArenaFjs";//
 
 Game_R.ArenaFjs_R.countLoop = 1;
 Game_R.ArenaFjs_R.il = 0;
 Game_R.ArenaFjs_R.il_2 = 0; 
  
 // tick> ---------------------------------------------------------------------------
  Game_R.ArenaFjs_R.tick = function() {
          
      //alert("!");
	     Game_R.UserInput_R.tick();
        
         
      if (Game_R.ArenaFjs_R.countLoop == 24){
       Game_R.ArenaFjs_R.il_2 = Game_R.ArenaFjs_R.il
       //if(Game_R.ArenaFjs.il_2 == 0) Game_R.ArenaFjs.il_2 = 1;
       Game_R.Fighters_R.fighterSheeva_mk3_1.setState(Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il]);
       Game_R.Fighters_R.fighterSheeva_mk3_2.setState(Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il]);
       
       Game_R.ArenaFjs_R.il = Game_R.ArenaFjs_R.il + 1;
       if (Game_R.ArenaFjs_R.il > Game_R.Fighters_R.typeM.length-1) Game_R.ArenaFjs_R.il = 0;
       
       };
       
       Game_R.GameColculation_R.tick();
       Game_R.ArenaScene_R.drawAll();
       
       Game_R.GameText_R.drawText (Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il_2],150, 385, 'italic 20px sans-serif', 'red', 1);
     
       
     
 //<TEST ------------------------------------------------------
 
     // Game_R.SpritesFighter_R.drawSprites_TEST();
     //Game_R.SpritesAnimators_R.animationAll_TEST();
      
//TEST> ------------------------------------------------------
   

	     Game_R.ArenaFjs_R.countLoop = Game_R.ArenaFjs_R.countLoop + 1;
      if (Game_R.ArenaFjs_R.countLoop > 24 ) Game_R.ArenaFjs_R.countLoop = 1;
  };
 // tick< --------------------------------------------------------------------------- 
  
  
    // ini> ---------------------------------------------------------
  Game_R.ArenaFjs_R.ini = function(){
   
    
  };
  // ini< ---------------------------------------------------------

  // start> ---------------------------------------------------------------------------
  Game_R.ArenaFjs_R.start = function() {
   
     //alert("!");
  
  };
 // start< ---------------------------------------------------------------------------
  
   //Game_R.ArenaFjs_R.ini();
  
  
  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('16 module ArenaFjs loaded', 1100, Game_R.yT);
 //================================================================================
 //alert("module ArenaFjs done");