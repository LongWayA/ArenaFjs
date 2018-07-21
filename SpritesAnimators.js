"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 21.07.2018

// Sprite Animators...........................................................
 Game.SpritesAnimators = {}; 
 Game.SpritesAnimators.name = "SpritesAnimators";// 
  
 Game.SpritesAnimators.translateStateToAnimationSpritesSheeva_mk3 = {
    fightingStance : "FightingStance",//!
    running : "Running",
    walkingForward : "Walking",
    walkingBack : "Walking",
    punchUp : "PunchingUp",
    punchMidle : "PunchingMidle",   
    kickFront : "KickingFront",  
    kickBack : "KickingBack", 
    block : "BlockingHigh",  
    blockLow : "BlockingLow",
    beingHit : "BeingHit"
    //BLOCK_HIT
 };
  
 Game.SpritesAnimators.fightingStanceSheeva_mk3 = {
   translate : "FightingStance",
   fr :  [0,1,2,3,4,5,6,5,4,3,2,1],
   str : [0,0,0,0,0,0,0,0,0,0,0,0],
   num : 1,//
   numMirror : 1,//
   max : 12
 };
  
 Game.SpritesAnimators.runningSheeva_mk3 = {
   translate : "Running",
   fr :  [0,1,2,3,4,5,6,7,8,9,10,11,12],
   str : [0,0,0,0,0,0,0,0,0,0,0, 0, 0],
   num : 1,//
   numMirror : 1,//
   max : 13
 };
       
 Game.SpritesAnimators.walkingForwardSheeva_mk3 = {
   translate : "Walking",
   fr :  [0,1,2,3,4,5,6,7,8,9],
   str : [0,0,0,0,0,0,0,0,0,0],
   num : 1,//
   numMirror : 1,//
   max : 10
 };
       
 Game.SpritesAnimators.walkingBackSheeva_mk3 = {
   translate : "Walking",
   fr :  [0,9,8,7,6,5,4,3,2,1],
   str : [0,0,0,0,0,0,0,0,0,0],
   num : 1,//
   numMirror : 1,//
   max : 10
 };
  
 Game.SpritesAnimators.punchUpSheeva_mk3 = {
   translate : "PunchingUp",
   fr :  [0,1,2,3,4,5,6],
   str : [0,0,0,0,0,0,1],
   num : 1,//
   numMirror : 1,//
   max : 7
 };
  
 Game.SpritesAnimators.punchMidleSheeva_mk3 = {
   translate : "PunchingMidle",
   fr :  [0,1,2,3,4,5,6,7],
   str : [0,0,0,0,1,0,0,1],
   num : 1,//
   numMirror : 1,//
   max : 8
 };
  
 Game.SpritesAnimators.kickFrontSheeva_mk3 = {
   translate : "KickingFront",
   fr :  [0,1,2,3,4,5,6,7,8],
   str : [0,0,0,0,0,0,1,0,1],
   num : 1,//
   numMirror : 1,//
   max : 9
 };
  
 Game.SpritesAnimators.kickBackSheeva_mk3 = {
   translate : "KickingBack",
   fr :  [0,1,2,3,4,5,6,7,8],
   str : [0,0,0,0,0,0,0,0,1],
   num : 1,//
   numMirror : 1,//
   max : 9
 };
   
 Game.SpritesAnimators.blockSheeva_mk3 = {
   translate : "BlockingHigh",
   fr :  [0,1,2,3,2,1],
   str : [0,0,0,1,0,0],
   num : 1,//
   numMirror : 1,//
   max : 6
 };
     
 Game.SpritesAnimators.blockLowSheeva_mk3 = {
   translate : "BlockingLow",
   fr :  [0,1,2,3,2,1],
   str : [0,0,0,1,0,0],
   num : 1,//
   numMirror : 1,//
   max : 6
 };  
     
 Game.SpritesAnimators.beingHitSheeva_mk3 = {
   translate : "BeingHit",
   fr :  [0,1,2,3,2,1],
   str : [0,0,0,1,0,0],
   num : 1,//
   numMirror : 1,//
   max : 6
 };    
   
  //alert( Game.SpritesAnimators["fightingStanceSheeva_mk3"].translate);
  
  Game.SpritesAnimators.AnimationSheeva_mk3_ = function(type,left, top) {
   Game.SpritesFighter.drawSpriteSheeva_mk3(Game.SpritesAnimators[type].translate, Game.SpritesAnimators[type].fr[Game.SpritesAnimators[type].num], left, top);
   Game.SpritesAnimators[type].num = Game.SpritesAnimators[type].num + 1;
   if (Game.SpritesAnimators[type].num > Game.SpritesAnimators[type].max - 1 ) Game.SpritesAnimators[type].num = 1;
  };
  
 Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_ = function(type,left, top) {
   Game.SpritesFighter.drawSpriteSheeva_mk3_Mirror(Game.SpritesAnimators[type].translate, Game.SpritesAnimators[type].fr[Game.SpritesAnimators[type].numMirror], left, top);
   Game.SpritesAnimators[type].numMirror = Game.SpritesAnimators[type].numMirror + 1;
   if (Game.SpritesAnimators[type].numMirror > Game.SpritesAnimators[type].max - 1 ) Game.SpritesAnimators[type].numMirror = 1;
  }; 

////Direction_RIGHT_LEFT
Game.SpritesAnimators.All_AnimationSheeva_mk3 = function(typeStateFighter, left, top, mirror, width, height) {
 
  if (typeStateFighter == "fightingStance"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("fightingStanceSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("fightingStanceSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "running"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("runningSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("runningSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "walkingForward"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("walkingForwardSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("walkingForwardSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "walkingBack"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("walkingBackSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("walkingBackSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "punchUp"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("punchUpSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("punchUpSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "punchMidle"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("punchMidleSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("punchMidleSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "kickFront"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("kickFrontSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("kickFrontSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "kickBack"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("kickBackSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("kickBackSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "block"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("blockSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("blockSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "blockLow"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("blockLowSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("blockLowSheeva_mk3",left, top);
      };
  }else if (typeStateFighter == "beingHit"){
      //alert("!");
      if (mirror == 0){
          Game.SpritesAnimators.AnimationSheeva_mk3_("beingHitSheeva_mk3", left, top);
      }else{
          Game.SpritesAnimators.AnimationSheeva_mk3_Mirror_("beingHitSheeva_mk3",left, top);
      };
  };
};

Game.SpritesAnimators.AnimationAll = function() {
 
   Game.SpritesAnimators.All_AnimationSheeva_mk3("fightingStance", 0, 50,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("fightingStance", 0, 250,1,0,0);
	  
   Game.SpritesAnimators.All_AnimationSheeva_mk3("running", 300, 50,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("running", 300, 250,1,0,0);
   
   Game.SpritesAnimators.All_AnimationSheeva_mk3("walkingForward", 600, 50,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("walkingForward", 600, 250,1,0,0);  
   //Game.SpritesAnimators.All_AnimationSheeva_mk3("walkingBack", 600, 50,0,0,0);
   //Game.SpritesAnimators.All_AnimationSheeva_mk3("walkingBack", 600, 250,1,0,0);    
	  //Game.SpritesAnimators.All_AnimationSheeva_mk3("walkingBack", 600, 450,0,0,0); //___________
   
   Game.SpritesAnimators.All_AnimationSheeva_mk3("punchUp", 900, 50,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("punchUp", 900, 250,1,0,0);  
	  
   Game.SpritesAnimators.All_AnimationSheeva_mk3("punchMidle", 1200, 50,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("punchMidle", 1200, 250,1,0,0);  
	  
   Game.SpritesAnimators.All_AnimationSheeva_mk3("kickFront", 0, 450,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("kickFront", 0, 650,1,0,0);
   
   Game.SpritesAnimators.All_AnimationSheeva_mk3("kickBack", 300, 450,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("kickBack", 300, 650,1,0,0);   
	  
   Game.SpritesAnimators.All_AnimationSheeva_mk3("block", 600, 450,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("block", 600, 650,1,0,0);   
	  
   Game.SpritesAnimators.All_AnimationSheeva_mk3("blockLow", 900, 450,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("blockLow", 900, 650,1,0,0);     
   
	  Game.SpritesAnimators.All_AnimationSheeva_mk3("beingHit", 1200, 450,0,0,0);
   Game.SpritesAnimators.All_AnimationSheeva_mk3("beingHit", 1200, 650,1,0,0);     
 	 
	   //Game.context.fillRect(10, 10, 150, 100);
};

//alert(Game.canvas.width);
