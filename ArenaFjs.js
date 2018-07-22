"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 15.07.2018
 
 Game.ArenaFjs = {}; 
 Game.ArenaFjs.name = "ArenaFjs";//
  
 //
 Game.ArenaFjs.ini = function(){
  
   Game.context.fillStyle = '#00f'; // blue
   Game.context.strokeStyle = '#00f'; // red '#f00'
   Game.context.lineWidth = 1;
 
   // text
   Game.context.fillStyle = '#00f';
   Game.context.font = 'italic 20px sans-serif';
   Game.context.textBaseline = 'top';
   
   Game.Timer.ini(8);
   
   Game.countLoop = 1;
   
 };
 

  Game.ArenaFjs.start = function() {
   
  Game.SpritesFighter.iniAllSpriteFighter(); 
  Game.UserInput.start();
  
  //Game.SpritesFighter.drawAllSpriteSheeva_mk3();
  
  
 //  Game.Sound.sound_IA.play();
 //  Game.Sound.sound_IAA.play();
   Game.Sound.sound_IAAAA.play();
//   Game.Sound.sound_STR_H.play();
//   Game.Sound.sound_STR_F.play();
//   Game.Sound.sound_STR_B.play();
//   Game.Sound.sound_F.play();
//   Game.Sound.sound_H.play();
//   Game.Sound.sound_STR.play();    
    
    
  };
 
 
  Game.ArenaFjs.tick = function() {
          
      Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
	  
	     Game.context.fillText ("countLoop = " + Game.countLoop,10, 5);
      Game.context.fillText ("ticksPerSecond = " + Game.Timer.ticksPerSecond,180, 5);
      Game.context.fillText ("tickMustTimeMs = " + Game.Timer.tickMustTimeMs,400, 5);
      Game.context.fillText ("timeBetweenEndMinStartTickMs = " + Game.Timer.timeBetweenEndMinStartTickMs,620, 5);
	     Game.context.fillText ("timeThreadSleepGameMs = " + Game.Timer.timeThreadSleepGameMs,970, 5);
      
      Game.context.fillText ("timeStartTickMs = " + Game.Timer.timeStartTickMs,10, 30);
      Game.context.fillText ("timeEndTickMs = " + Game.Timer.timeEndTickMs,340, 30);
      Game.context.fillText ("timeBetweenStartMinOldStartTickMs = " + Game.Timer.timeBetweenStartMinOldStartTickMs,670, 30);
          
          
     //alert("!!");
     Game.UserInput.tick();
     
     //Game.FighterSheeva_mk3.tick();     
       
      Game.SpritesAnimators.AnimationAll();       
	     Game.countLoop = Game.countLoop + 1; 
  };
  
  
  