"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 15.07.2018
 
 Game_R.ArenaFjs_R = {}; 
 Game_R.ArenaFjs_R.name = "ArenaFjs";//
  
 // ini ---------------------------------------------------------
 Game_R.ArenaFjs_R.ini = function(){
  
   Game_R.context.fillStyle = '#00f'; // blue
   Game_R.context.strokeStyle = '#00f'; // red '#f00'
   Game_R.context.lineWidth = 1;
 
   // text
   Game_R.context.fillStyle = '#00f';
   Game_R.context.font = 'italic 20px sans-serif';
   Game_R.context.textBaseline = 'top';
  
   Game_R.countLoop = 1;
   Game_R.ArenaFjs_R.il = 0;
   Game_R.ArenaFjs_R.il_2 = 0;
   Game_R.Timer_R.ini(8); 
    
 };

  // start ---------------------------------------------------------
  Game_R.ArenaFjs_R.start = function() {
   
 
  Game_R.UserInput_R.start();
  
  
  //Game_R.SpritesFighter.drawAllSpriteSheeva_mk3();
  //alert("!");
  
 //  Game_R.Sound_R.sound_IA.play();
 //  Game_R.Sound_R.sound_IAA.play();
 //  Game_R.Sound_R.sound_IAAAA.play();
//   Game_R.Sound_R.sound_STR_H.play();
//   Game_R.Sound_R.sound_STR_F.play();
//   Game_R.Sound_R.sound_STR_B.play();
//   Game_R.Sound_R.sound_F.play();
//   Game_R.Sound_R.sound_H.play();
//   Game_R.Sound_R.sound_STR.play();

    Game_R.Fighters_R.start();
  };
 
 
  Game_R.ArenaFjs_R.tick = function() {
          
      Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);
	  
	     Game_R.context.fillText ("countLoop = " + Game_R.countLoop,10, 5);
      Game_R.context.fillText ("ticksPerSecond = " + Game_R.Timer_R.ticksPerSecond,180, 5);
      Game_R.context.fillText ("tickMustTimeMs = " + Game_R.Timer_R.tickMustTimeMs,400, 5);
      Game_R.context.fillText ("timeBetweenEndMinStartTickMs = " + Game_R.Timer_R.timeBetweenEndMinStartTickMs,620, 5);
	     Game_R.context.fillText ("timeThreadSleepGameMs = " + Game_R.Timer_R.timeThreadSleepGameMs,970, 5);
      
      Game_R.context.fillText ("timeStartTickMs = " + Game_R.Timer_R.timeStartTickMs,10, 30);
      Game_R.context.fillText ("timeEndTickMs = " + Game_R.Timer_R.timeEndTickMs,340, 30);
      Game_R.context.fillText ("timeBetweenStartMinOldStartTickMs = " + Game_R.Timer_R.timeBetweenStartMinOldStartTickMs,670, 30);
          
          
         
      if (Game_R.countLoop == 24){
       Game_R.ArenaFjs_R.il_2 = Game_R.ArenaFjs_R.il
       //if(Game_R.ArenaFjs.il_2 == 0) Game_R.ArenaFjs.il_2 = 1;
       Game_R.Fighters_R.fighterSheeva_mk3_1.setState(Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il]);
       Game_R.Fighters_R.fighterSheeva_mk3_2.setState(Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il]);
       
       Game_R.ArenaFjs_R.il = Game_R.ArenaFjs_R.il + 1;
       if (Game_R.ArenaFjs_R.il > Game_R.Fighters_R.typeM.length-1) Game_R.ArenaFjs_R.il = 0;
       
       };
       Game_R.context.fillText (Game_R.Fighters_R.typeM[Game_R.ArenaFjs_R.il_2],150, 120); 
       Game_R.context.fillText ("busy = " + Game_R.Fighters_R.fighterSheeva_mk3_1.animatorsSheeva_mk3.busy,300, 120); 
     //alert("!");
     Game_R.UserInput_R.tick();
     
 //<TEST ------------------------------------------------------
 
     // Game_R.SpritesFighter_R.drawSprites_TEST();
      //Game_R.SpritesAnimators_R.animationAll_TEST();
      
//TEST> ------------------------------------------------------


      Game_R.Fighters_R.tick();     
      
      //alert("!!");
	     Game_R.countLoop = Game_R.countLoop + 1; 
  };
  
  
  