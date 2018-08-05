"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 10.07.2018 - 26.07.2018

// Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать func регулярно/один раз через delay миллисекунд.

Game_R.GameLoop_R = {}; 
Game_R.GameLoop_R.name = "GameLoop";//

 Game_R.ArenaFjs_R.ini();
 Game_R.ArenaFjs_R.start();

 Game_R.timerId = setTimeout( function tick(){
  
      Game_R.Timer_R.updateTimeBeforeTick();
      Game_R.ArenaFjs_R.tick();
      Game_R.Timer_R.updateTimeAfterTick();
      Game_R.timerId = setTimeout( tick,Game_R.Timer_R.timeThreadSleepGameMs);
   
		    if (Game_R.countLoop > 24 ) Game_R.countLoop = 1;
      
	}, Game_R.Timer_R.timeThreadSleepGameMs);
