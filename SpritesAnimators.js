"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 15.07.2018

// Sprite Animators...........................................................
 Game.SpritesAnimators = {}; 
 Game.SpritesAnimators.name = "SpritesAnimators";// 
  
 Game.SpritesAnimators.FrameSpritesSheeva_mk3 = {
    name : "AnimationsSpritesSheeva_mk3",//
    
    numFightingStance : 1,//
    numFightingStanceMirror : 1,//
    maxFightingStance : Game.SpritesFighter.SpritesSheeva_mk3.FightingStance.length,//
    
    numWalking : 1,//
    numWalkingMirror : 1,//
    maxWalking : Game.SpritesFighter.SpritesSheeva_mk3.Walking.length,//
    
    numRunning : 1,
    numRunningMirror : 1,
    maxRunning : Game.SpritesFighter.SpritesSheeva_mk3.Running.length,
    
    numPunchingUp : 1,
    numPunchingUpMirror : 1,
    maxPunchingUp : Game.SpritesFighter.SpritesSheeva_mk3.PunchingUp.length,
    
    numPunchingMidle : 1,
    numPunchingMidleMirror : 1,
    maxPunchingMidle : Game.SpritesFighter.SpritesSheeva_mk3.PunchingMidle.length,
    
    numKickingFront : 1,
    numKickingFrontMirror : 1,
    maxKickingFront : Game.SpritesFighter.SpritesSheeva_mk3.KickingFront.length,
    
    numKickingBack : 1,
    numKickingBackMirror : 1,
    maxKickingBack : Game.SpritesFighter.SpritesSheeva_mk3.KickingBack.length,
    
    numBlockingHigh : 1,
    numBlockingHighMirror : 1,
    maxBlockingHigh : Game.SpritesFighter.SpritesSheeva_mk3.BlockingHigh.length,
    
    numBlockingLow : 1,
    numBlockingLowMirror : 1,
    maxBlockingLow : Game.SpritesFighter.SpritesSheeva_mk3.BlockingLow.length,
    
    numBeingHit : 1,
    numBeingHitMirror : 1,
    maxBeingHit : Game.SpritesFighter.SpritesSheeva_mk3.BeingHit.length   
  };
  
   //alert( "num = " + Game.AnimationsSpritesSheeva_mk3.numFightingStance + " max = " + Game.AnimationsSpritesSheeva_mk3.maxFightingStance);
   //alert( Game.AnimationsSpritesSheeva_mk3["num" + "FightingStance"]);
   

Game.SpritesAnimators.AnimationSheeva_mk3 = function(type,left, top) {
  Game.SpritesFighter.drawSpriteSheeva_mk3(type, Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type], left, top);
  Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type] = Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type] + 1;
  if (Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type] > Game.SpritesAnimators.FrameSpritesSheeva_mk3["max" + type] - 1 ) Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type] = 1;
};

Game.SpritesAnimators.AnimationSheeva_mk3_Mirror = function(type,left, top) {
  Game.SpritesFighter.drawSpriteSheeva_mk3_Mirror(type, Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type + "Mirror"], left, top);
  Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type + "Mirror"] = Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type + "Mirror"] + 1;
  if (Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type + "Mirror"] > Game.SpritesAnimators.FrameSpritesSheeva_mk3["max" + type] - 1 ) Game.SpritesAnimators.FrameSpritesSheeva_mk3["num" + type + "Mirror"] = 1;
};

Game.SpritesAnimators.AnimationAll = function() {
 
   Game.SpritesAnimators.AnimationSheeva_mk3("FightingStance", 0, 50);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("FightingStance", 0, 250);
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("Walking", 300, 50);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("Walking", 300, 250);
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("Running", 600, 50);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("Running", 600, 250);	  
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("PunchingUp", 900, 50);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("PunchingUp", 900, 250);	  	  
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("PunchingMidle", 1200, 50);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("PunchingMidle", 1200, 250);
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("KickingFront", 0, 450);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("KickingFront", 0, 650);	  	  	  	  
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("KickingBack", 300, 450);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("KickingBack", 300, 650);
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("BlockingHigh", 600, 450);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("BlockingHigh", 600, 650);	  
	  
	  Game.SpritesAnimators.AnimationSheeva_mk3("BlockingLow", 900, 450);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("BlockingLow", 900, 650);
	   
	  Game.SpritesAnimators.AnimationSheeva_mk3("BeingHit", 1200, 450);
	  Game.SpritesAnimators.AnimationSheeva_mk3_Mirror ("BeingHit", 1200, 650);	  	  
	  
	   //Game.context.fillRect(10, 10, 150, 100);
};

//alert(Game.canvas.width);
