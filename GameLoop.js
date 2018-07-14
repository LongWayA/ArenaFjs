"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.

// Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать func регулярно/один раз через delay миллисекунд.



 Game.countLoop = 1;


 Game.context.fillStyle = '#00f'; // blue
 Game.context.strokeStyle = '#00f'; // red '#f00'
 Game.context.lineWidth = 1;
 
 // text
Game.context.fillStyle = '#00f';
Game.context.font = 'italic 30px sans-serif';
Game.context.textBaseline = 'top';


 Game.timerId = setTimeout( function tik(){
		//document.writeln("countLoop = " + Game.countLoop + " ");
        
    // for(var i = 1; i < Game.SpritesSheeva_mk3.FightingStance.length; i++ ){
    //     Game.SpritesSheeva_mk3.drawSprite("FightingStance",i, (i-1)*100, 10);
    //  };
	
      Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
	  
	  Game.context.fillText ("Game.countLoop = " + Game.countLoop,10, 10);
	  
   Game.AnimationsSpritesSheeva_mk3.AnimationAll();
        
		Game.countLoop = Game.countLoop + 1;
		if (Game.countLoop < 100 ) {
			Game.timerId = setTimeout( tik, 100);
		} else{
           Game.countLoop = 1;
           Game.timerId = setTimeout( tik, 100);
		   //clearTimeout(Game.timerId);
        }
	}, 100);


/*	
Game.timerId = setInterval( function tik(){
	document.writeln("countLoop = " + Game.countLoop + " ");
	Game.countLoop = Game.countLoop + 1;
	if (Game.countLoop > 10 ) {
	   clearInterval(Game.timerId);
    }
}, 2000);
*/

//var timerId = setTimeout( userN.sayHi , 2000);