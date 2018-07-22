"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 22.07.2018

function AnimatorsSheeva_mk3_CL () {
    this.name = "AnimatorsSheeva_mk3_CL";
    
    this.fightingStance = {
         translate : "fightingStance",
         fr :  [0,1,2,3,4,5,6,5,4,3,2,1],
         str : [0,0,0,0,0,0,0,0,0,0,0,0],
         num : 1,//
         numMirror : 1,//
         max : 12
    };
    
     this.running = {
       translate : "running",
       fr :  [0,1,2,3,4,5,6,7,8,9,10,11,12],
       str : [0,0,0,0,0,0,0,0,0,0,0, 0, 0],
       num : 1,//
       numMirror : 1,//
       max : 13
     };
       
     this.walkingForward = {
      translate : "walking",
      fr :  [0,1,2,3,4,5,6,7,8,9],
      str : [0,0,0,0,0,0,0,0,0,0],
      num : 1,//
      numMirror : 1,//
      max : 10
    };
       
    this.walkingBack = {
       translate : "walking",
       fr :  [0,9,8,7,6,5,4,3,2,1],
       str : [0,0,0,0,0,0,0,0,0,0],
       num : 1,//
       numMirror : 1,//
       max : 10
    };
  
    this.punchUp = {
       translate : "punchingUp",
       fr :  [0,1,2,3,4,5,6],
       str : [0,0,0,0,0,0,1],
       num : 1,//
       numMirror : 1,//
       max : 7
    };
  
    this.punchMidle = {
      translate : "punchingMidle",
      fr :  [0,1,2,3,4,5,6,7],
      str : [0,0,0,0,1,0,0,1],
      num : 1,//
      numMirror : 1,//
      max : 8
    };
  
    this.kickFront = {
       translate : "kickingFront",
       fr :  [0,1,2,3,4,5,6,7,8],
       str : [0,0,0,0,0,0,1,0,1],
       num : 1,//
       numMirror : 1,//
       max : 9
    };
  
    this.kickBack = {
       translate : "kickingBack",
       fr :  [0,1,2,3,4,5,6,7,8],
       str : [0,0,0,0,0,0,0,0,1],
       num : 1,//
       numMirror : 1,//
       max : 9
    };
   
    this.block = {
       translate : "blockingHigh",
       fr :  [0,1,2,3,2,1],
       str : [0,0,0,1,0,0],
       num : 1,//
       numMirror : 1,//
       max : 6
    };
     
    this.blockLow = {
       translate : "blockingLow",
       fr :  [0,1,2,3,2,1],
       str : [0,0,0,1,0,0],
       num : 1,//
       numMirror : 1,//
       max : 6
    };  
     
    this.beingHit = {
      translate : "beingHit",
      fr :  [0,1,2,3,2,1],
      str : [0,0,0,1,0,0],
      num : 1,//
      numMirror : 1,//
      max : 6
    };    
    
     this.Animation = function(type,left, top) {
       Game.SpritesFighter.spritesSheeva_mk3_1.drawSprite(this[type].translate, this[type].fr[this[type].num], left, top);
       this[type].num = this[type].num + 1;
       if (this[type].num > this[type].max - 1 ) this[type].num = 1;
    };
  
    this.AnimationMirror = function(type,left, top) {
       Game.SpritesFighter.spritesSheeva_mk3_1.drawSpriteMirror(this[type].translate, this[type].fr[this[type].numMirror], left, top);
       this[type].numMirror = this[type].numMirror + 1;
       if (this[type].numMirror > this[type].max - 1 ) this[type].numMirror = 1;
    }; 
    
    this.All_Animation = function(typeStateFighter, left, top, mirror, width, height) {
 
       if (typeStateFighter == "fightingStance"){
           //alert("!");
            if (mirror == 0){
               this.Animation("fightingStance", left, top);
            }else{
               this.AnimationMirror("fightingStance", left, top);
            };
       }else if (typeStateFighter == "running"){
           //alert("!");
           if (mirror == 0){
              this.Animation("running", left, top);
           }else{
              this.AnimationMirror("running", left, top);
           };
       }else if (typeStateFighter == "walkingForward"){
           //alert("!");
          if (mirror == 0){
              this.Animation("walkingForward", left, top);
          }else{
              this.AnimationMirror("walkingForward", left, top);
          };
       }else if (typeStateFighter == "walkingBack"){
          //alert("!");
          if (mirror == 0){
              this.Animation("walkingBack", left, top);
          }else{
              this.AnimationMirror("walkingBack", left, top);
          };
       }else if (typeStateFighter == "punchUp"){
          //alert("!");
          if (mirror == 0){
             this.Animation("punchUp", left, top);
          }else{
             this.AnimationMirror("punchUp", left, top);
          };
       }else if (typeStateFighter == "punchMidle"){
      //alert("!");
          if (mirror == 0){
             this.Animation("punchMidle", left, top);
          }else{
             this.AnimationMirror("punchMidle", left, top);
          };
       }else if (typeStateFighter == "kickFront"){
      //alert("!");
          if (mirror == 0){
             this.Animation("kickFront", left, top);
          }else{
             this.AnimationMirror("kickFront", left, top);
          };
       }else if (typeStateFighter == "kickBack"){
          //alert("!");
          if (mirror == 0){
             this.Animation("kickBack", left, top);
         }else{
             this.AnimationMirror("kickBack", left, top);
         };
       }else if (typeStateFighter == "block"){
          //alert("!");
          if (mirror == 0){
              this.Animation("block", left, top);
          }else{
              this.AnimationMirror("block", left, top);
          };
       }else if (typeStateFighter == "blockLow"){
          //alert("!");
          if (mirror == 0){
             this.Animation("blockLow", left, top);
          }else{
             this.AnimationMirror("blockLow", left, top);
          };
       }else if (typeStateFighter == "beingHit"){
          //alert("!");
          if (mirror == 0){
             this.Animation("beingHit", left, top);
          }else{
             this.AnimationMirror("beingHit", left, top);
          };
       };
   };  
 };
    

// Sprite Animators...........................................................
 Game.SpritesAnimators = {}; 
 Game.SpritesAnimators.name = "SpritesAnimators";// 

Game.SpritesAnimators.AnimatorsSheeva_mk3_1 = new AnimatorsSheeva_mk3_CL ();


Game.SpritesAnimators.AnimationAll = function(){
 
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("fightingStance", 0, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("fightingStance", 0, 250,1,0,0);
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("running", 300, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("running", 300, 250,1,0,0);
   
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingForward", 600, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingForward", 600, 250,1,0,0);  
       //Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 50,0,0,0);
       //Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 250,1,0,0);    
	      //Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 450,0,0,0); //___________
   
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("punchUp", 900, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("punchUp", 900, 250,1,0,0);  
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("punchMidle", 1200, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("punchMidle", 1200, 250,1,0,0);  
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("kickFront", 0, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("kickFront", 0, 650,1,0,0);
   
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("kickBack", 300, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("kickBack", 300, 650,1,0,0);   
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("block", 600, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("block", 600, 650,1,0,0);   
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("blockLow", 900, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("blockLow", 900, 650,1,0,0);     
   
	  Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("beingHit", 1200, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("beingHit", 1200, 650,1,0,0);     
 	 
	   //Game.context.fillRect(10, 10, 150, 100);
};

//alert(Game.canvas.width);
