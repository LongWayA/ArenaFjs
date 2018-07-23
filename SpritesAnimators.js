"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 23.07.2018

function AnimatorsSheeva_mk3_CL () {
    this.name = "AnimatorsSheeva_mk3_CL";
    
    this.fightingStance = {
         translate : "fightingStance",
         fr :  [0,1,2,3,4,5,6,5,4,3,2,1],
         str : [0,0,0,0,0,0,0,0,0,0,0,0],
         num : 1,//
         max : 12
    };
    
     this.running = {
       translate : "running",
       fr :  [0,1,2,3,4,5,6,7,8,9,10,11,12],
       str : [0,0,0,0,0,0,0,0,0,0,0, 0, 0],
       num : 1,//
       max : 13
     };
       
     this.walkingForward = {
      translate : "walking",
      fr :  [0,1,2,3,4,5,6,7,8,9],
      str : [0,0,0,0,0,0,0,0,0,0],
      num : 1,//
      max : 10
    };
       
    this.walkingBack = {
       translate : "walking",
       fr :  [0,9,8,7,6,5,4,3,2,1],
       str : [0,0,0,0,0,0,0,0,0,0],
       num : 1,//
       max : 10
    };
  
    this.punchUp = {
       translate : "punchingUp",
       fr :  [0,1,2,3,4,5,6],
       str : [0,0,0,0,0,0,1],
       num : 1,//
       max : 7
    };
  
    this.punchMidle = {
      translate : "punchingMidle",
      fr :  [0,1,2,3,4,5,6,7],
      str : [0,0,0,0,1,0,0,1],
      num : 1,//
      max : 8
    };
  
    this.kickFront = {
       translate : "kickingFront",
       fr :  [0,1,2,3,4,5,6,7,8],
       str : [0,0,0,0,0,0,1,0,1],
       num : 1,//
       max : 9
    };
  
    this.kickBack = {
       translate : "kickingBack",
       fr :  [0,1,2,3,4,5,6,7,8],
       str : [0,0,0,0,0,0,0,0,1],
       num : 1,//
       max : 9
    };
   
    this.block = {
       translate : "blockingHigh",
       fr :  [0,1,2,3,2,1],
       str : [0,0,0,1,0,0],
       num : 1,//
       max : 6
    };
     
    this.blockLow = {
       translate : "blockingLow",
       fr :  [0,1,2,3,2,1],
       str : [0,0,0,1,0,0],
       num : 1,//
       max : 6
    };  
     
    this.beingHit = {
      translate : "beingHit",
      fr :  [0,1,2,3,2,1],
      str : [0,0,0,1,0,0],
      num : 1,//
      max : 6
    };    
    
     this.Animation = function(type,mirror,left, top) {
         if (mirror == 0){
                     Game.SpritesFighter.spritesSheeva_mk3_1.drawSprite(this[type].translate, this[type].fr[this[type].num], left, top);
            }else{
               Game.SpritesFighter.spritesSheeva_mk3_1.drawSpriteMirror(this[type].translate, this[type].fr[this[type].num], left, top);
         };
            
         this[type].num = this[type].num + 1;
         if (this[type].num > this[type].max - 1 ) this[type].num = 1;
     };
    
    this.All_Animation = function(typeStateFighter, left, top, mirror, width, height) {
 
       if (typeStateFighter == "fightingStance"){
               this.Animation("fightingStance", mirror, left, top);
               
       }else if (typeStateFighter == "running"){
              this.Animation("running", mirror, left, top);

       }else if (typeStateFighter == "walkingForward"){
              this.Animation("walkingForward", mirror, left, top);

       }else if (typeStateFighter == "walkingBack"){
              this.Animation("walkingBack", mirror, left, top);

       }else if (typeStateFighter == "punchUp"){
             this.Animation("punchUp", mirror, left, top);

       }else if (typeStateFighter == "punchMidle"){
             this.Animation("punchMidle", mirror, left, top);

       }else if (typeStateFighter == "kickFront"){
             this.Animation("kickFront", mirror, left, top);

       }else if (typeStateFighter == "kickBack"){
             this.Animation("kickBack", mirror, left, top);

       }else if (typeStateFighter == "block"){
              this.Animation("block", mirror, left, top);

       }else if (typeStateFighter == "blockLow"){
             this.Animation("blockLow", mirror, left, top);

       }else if (typeStateFighter == "beingHit"){
             this.Animation("beingHit", mirror, left, top);
       };
   };  
 };
    

// Sprite Animators...........................................................
 Game.SpritesAnimators = {}; 
 Game.SpritesAnimators.name = "SpritesAnimators";// 

Game.SpritesAnimators.AnimatorsSheeva_mk3_1 = new AnimatorsSheeva_mk3_CL ();
Game.SpritesAnimators.AnimatorsSheeva_mk3_2 = new AnimatorsSheeva_mk3_CL ();

Game.SpritesAnimators.AnimationAll = function(){
 
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("fightingStance", 0, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("fightingStance", 0, 250,1,0,0);
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("running", 300, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("running", 300, 250,1,0,0);
   
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingForward", 600, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("walkingForward", 600, 250,1,0,0);  
       //Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 50,0,0,0);
       //Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("walkingBack", 600, 250,1,0,0);    
	      //Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 450,0,0,0); //___________
   
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("punchUp", 900, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("punchUp", 900, 250,1,0,0);  
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("punchMidle", 1200, 50,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("punchMidle", 1200, 250,1,0,0);  
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("kickFront", 0, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("kickFront", 0, 650,1,0,0);
   
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("kickBack", 300, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("kickBack", 300, 650,1,0,0);   
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("block", 600, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("block", 600, 650,1,0,0);   
	  
   Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("blockLow", 900, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("blockLow", 900, 650,1,0,0);     
   
	  Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation("beingHit", 1200, 450,0,0,0);
   Game.SpritesAnimators.AnimatorsSheeva_mk3_2.All_Animation("beingHit", 1200, 650,1,0,0);     
 	 
	   //Game.context.fillRect(10, 10, 150, 100);
};

//alert(Game.canvas.width);
