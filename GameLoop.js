"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 10.07.2018 - 15.07.2018

// Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать func регулярно/один раз через delay миллисекунд.

Game.GameLoop = {}; 
Game.GameLoop.name = "GameLoop";//

 Game.ArenaFjs.ini();

 Game.ArenaFjs.start();

 Game.timerId = setTimeout( function tick(){
  
   Game.Timer.updateTimeBeforeTick();
   Game.ArenaFjs.tick();
   Game.Timer.updateTimeAfterTick();
   
   //alert(Game.Timer.timeThreadSleepGameMs);
   
		 if (Game.countLoop < 1500 ) {
			   Game.timerId = setTimeout( tick, Game.Timer.timeThreadSleepGameMs);
		 } else{
      Game.countLoop = 1;
      Game.timerId = setTimeout( tick, Game.Timer.timeThreadSleepGameMs);
		    //clearTimeout(Game.timerId);
   }
	}, Game.Timer.timeThreadSleepGameMs);


/*	
Game.timerId = setInterval( function tik(){
	document.writeln("countLoop = " + Game.countLoop + " ");
	Game.countLoop = Game.countLoop + 1;
	if (Game.countLoop > 10 ) {
	   clearInterval(Game.timerId);
    }
}, 2000);
*/
