"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.

// Sprite Animators...........................................................
  
 Game.AnimationsSpritesSheeva_mk3 = {
    name : "AnimationsSpritesSheeva_mk3",//
    
    numFightingStance : 1,//
    numFightingStanceMirror : 1,//
    maxFightingStance : Game.SpritesSheeva_mk3.FightingStance.length,//
    
    numWalking : 1,//
    numWalkingMirror : 1,//
    maxWalking : Game.SpritesSheeva_mk3.Walking.length,//
    
    numRunning : 1,
    numRunningMirror : 1,
    maxRunning : Game.SpritesSheeva_mk3.Running.length,
    
    numPunchingUp : 1,
    numPunchingUpMirror : 1,
    maxPunchingUp : Game.SpritesSheeva_mk3.PunchingUp.length,
    
    numPunchingMidle : 1,
    numPunchingMidleMirror : 1,
    maxPunchingMidle : Game.SpritesSheeva_mk3.PunchingMidle.length,
    
    numKickingFront : 1,
    numKickingFrontMirror : 1,
    maxKickingFront : Game.SpritesSheeva_mk3.KickingFront.length,
    
    numKickingBack : 1,
    numKickingBackMirror : 1,
    maxKickingBack : Game.SpritesSheeva_mk3.KickingBack.length,
    
    numBlockingHigh : 1,
    numBlockingHighMirror : 1,
    maxBlockingHigh : Game.SpritesSheeva_mk3.BlockingHigh.length,
    
    numBlockingLow : 1,
    numBlockingLowMirror : 1,
    maxBlockingLow : Game.SpritesSheeva_mk3.BlockingLow.length,
    
    numBeingHit : 1,
    numBeingHitMirror : 1,
    maxBeingHit : Game.SpritesSheeva_mk3.BeingHit.length   
  };
  
   //alert( "num = " + Game.AnimationsSpritesSheeva_mk3.numFightingStance + " max = " + Game.AnimationsSpritesSheeva_mk3.maxFightingStance);
   //alert( Game.AnimationsSpritesSheeva_mk3["num" + "FightingStance"]);
   

Game.AnimationsSpritesSheeva_mk3.Animation = function(type,left, top) {
  Game.SpritesSheeva_mk3.drawSprite(type, Game.AnimationsSpritesSheeva_mk3["num" + type], left, top);
  Game.AnimationsSpritesSheeva_mk3["num" + type] = Game.AnimationsSpritesSheeva_mk3["num" + type] + 1;
  if (Game.AnimationsSpritesSheeva_mk3["num" + type] > Game.AnimationsSpritesSheeva_mk3["max" + type] - 1 ) Game.AnimationsSpritesSheeva_mk3["num" + type] = 1;
};

Game.AnimationsSpritesSheeva_mk3.AnimationMirror = function(type,left, top) {
  Game.SpritesSheeva_mk3.drawSpriteMirror(type, Game.AnimationsSpritesSheeva_mk3["num" + type + "Mirror"], left, top);
  Game.AnimationsSpritesSheeva_mk3["num" + type + "Mirror"] = Game.AnimationsSpritesSheeva_mk3["num" + type + "Mirror"] + 1;
  if (Game.AnimationsSpritesSheeva_mk3["num" + type + "Mirror"] > Game.AnimationsSpritesSheeva_mk3["max" + type] - 1 ) Game.AnimationsSpritesSheeva_mk3["num" + type + "Mirror"] = 1;
};

Game.AnimationsSpritesSheeva_mk3.AnimationAll = function() {
 
  Game.AnimationsSpritesSheeva_mk3.Animation("FightingStance", 0, 50);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("FightingStance", 0, 250);
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("Walking", 300, 50);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("Walking", 300, 250);
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("Running", 600, 50);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("Running", 600, 250);	  
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("PunchingUp", 900, 50);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("PunchingUp", 900, 250);	  	  
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("PunchingMidle", 1200, 50);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("PunchingMidle", 1200, 250);
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("KickingFront", 0, 450);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("KickingFront", 0, 650);	  	  	  	  
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("KickingBack", 300, 450);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("KickingBack", 300, 650);
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("BlockingHigh", 600, 450);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("BlockingHigh", 600, 650);	  
	  
	  Game.AnimationsSpritesSheeva_mk3.Animation("BlockingLow", 900, 450);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("BlockingLow", 900, 650);
	   
	  Game.AnimationsSpritesSheeva_mk3.Animation("BeingHit", 1200, 450);
	  Game.AnimationsSpritesSheeva_mk3.AnimationMirror ("BeingHit", 1200, 650);	  	  
	  
	   //Game.context.fillRect(10, 10, 150, 100);
};



//alert(Game.canvas.width);


 // alert(SpritesSheeva_mk3.KickingFront[9]);