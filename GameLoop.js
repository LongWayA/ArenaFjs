"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 10.07.2018 - 26.07.2018

// Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать func регулярно/один раз через delay миллисекунд.

  //alert("module GameLoop start");
  //================================================================================

Game_R.GameLoop_R = {}; 
Game_R.GameLoop_R.name = "GameLoop";//

Game_R.ArenaFjs_R.start();
 //Game_R.context.fokus();

 Game_R.timerId = setTimeout( function tick(){
  
      Game_R.Timer_R.updateTimeBeforeTick();
      if(Game_R.img_load_end == 1){
           Game_R.ArenaFjs_R.tick();
      };
      Game_R.Timer_R.updateTimeAfterTick();
      Game_R.timerId = setTimeout( tick,Game_R.Timer_R.timeThreadSleepGameMs);
      
	}, Game_R.Timer_R.timeThreadSleepGameMs);


Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('17 module GameLoop loaded', 1100, Game_R.yT);
//================================================================================
//alert("module GameLoop done");