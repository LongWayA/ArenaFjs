"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 15.07.2018
 
 Game.ArenaFjs = {}; 
 Game.ArenaFjs.name = "ArenaFjs";//
  
 //
 Game.ArenaFjs.ini = function() {
  
   Game.context.fillStyle = '#00f'; // blue
   Game.context.strokeStyle = '#00f'; // red '#f00'
   Game.context.lineWidth = 1;
 
   // text
   Game.context.fillStyle = '#00f';
   Game.context.font = 'italic 20px sans-serif';
   Game.context.textBaseline = 'top';
   
   Game.Timer.ini(8);
   Game.SpritesFighter.iniAllSpriteSheeva_mk3();
   
   Game.countLoop = 1;
   
 };
 
 
 
  Game.ArenaFjs.start = function() {
  
  //Game.SpritesFighter.drawAllSpriteSheeva_mk3();
    
    
  };
 
 
  Game.ArenaFjs.tick = function() {
  
  		//document.writeln("countLoop = " + Game.countLoop + " ");
        
    // for(var i = 1; i < Game.SpritesSheeva_mk3.FightingStance.length; i++ ){
    //     Game.SpritesSheeva_mk3.drawSprite("FightingStance",i, (i-1)*100, 10);
    //  };
	
      Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
	  
	  Game.context.fillText ("countLoop = " + Game.countLoop,10, 5);
      Game.context.fillText ("ticksPerSecond = " + Game.Timer.ticksPerSecond,180, 5);
      Game.context.fillText ("tickMustTimeMs = " + Game.Timer.tickMustTimeMs,400, 5);
      Game.context.fillText ("timeBetweenEndMinStartTickMs = " + Game.Timer.timeBetweenEndMinStartTickMs,620, 5);
	  Game.context.fillText ("timeThreadSleepGameMs = " + Game.Timer.timeThreadSleepGameMs,970, 5);
      
      Game.context.fillText ("timeStartTickMs = " + Game.Timer.timeStartTickMs,10, 30);
      Game.context.fillText ("timeEndTickMs = " + Game.Timer.timeEndTickMs,340, 30);
      Game.context.fillText ("timeBetweenStartMinOldStartTickMs = " + Game.Timer.timeBetweenStartMinOldStartTickMs,670, 30);
      
      
      Game.SpritesAnimators.AnimationAll();
        
	  Game.countLoop = Game.countLoop + 1;
    
    
  };