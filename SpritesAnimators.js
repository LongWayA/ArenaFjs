"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 10.07.2018 - 05.08.2018

/*
 IMPORT (references, outer defines)
 SpritesFighter.js -> used SpritesSheeva_mk3_CL()
 
 EXPORT

*/

/*
INTERFACE
   AnimatorsSheeva_mk3_CL (constructor function)
 
   all_Animation(typeStateAnimators, left, top, mirror, width, height)
 
 
 
*/

function AnimatorsSheeva_mk3_CL() {
    this.name = "AnimatorsSheeva_mk3_CL";
    
    this.spritesSheeva_mk3 = new SpritesSheeva_mk3_CL();
      
    this.fightingStance = {
         translate : "fightingStance",
         fr :  [1,2,3,4,5,6,5,4,3,2,1],
         str : [1,0,0,0,0,0,0,0,0,0,0],
         max : 11,
         sound: "sound_IA"
    };
    
     this.running = {
       translate : "running",
       fr :  [1,2,3,4,5,6,7,8,9,10,11,12],
       str : [1,0,0,0,0,0,0,0,0,0, 0, 0],
       max : 12,
       sound: "sound_IAAAA"
     };
       
     this.walkingForward = {
      translate : "walking",
      fr :  [1,2,3,4,5,6,7,8,9],
      str : [0,0,0,0,0,0,0,0,0],
      max : 9,
      sound: "sound_IAA"
    };
       
    this.walkingBack = {
       translate : "walking",
       fr :  [9,8,7,6,5,4,3,2,1],
       str : [0,0,0,0,0,0,0,0,0],
       max : 9,
       sound: "sound_IAA"
    };
  
    this.punchUp = {
       translate : "punchingUp",
       fr :  [1,2,3,4,5,6],
       str : [0,0,0,0,0,1],
       max : 6,
       sound: "sound_STR_H"
    };
  
    this.punchMidle = {
      translate : "punchingMidle",
      fr :  [1,2,3,4,5,6,7],
      str : [0,0,0,1,0,0,1],
      max : 7,
      sound: "sound_H"
    };
  
    this.kickFront = {
       translate : "kickingFront",
       fr :  [1,2,3,4,5,6,7,8],
       str : [0,0,0,0,0,0,0,1],
       max : 8,
       sound: "sound_STR_F"
    };
  
    this.kickBack = {
       translate : "kickingBack",
       fr :  [1,2,3,4,5,6,7,8],
       str : [0,0,0,0,0,0,0,1],
       max : 8,
       sound: "sound_F"
    };
   
    this.block = {
       translate : "blockingHigh",
       fr :  [1,2,3,2,1],
       str : [0,0,1,0,0],
       max : 5,
       sound: "sound_STR_B"
    };
     
    this.blockLow = {
       translate : "blockingLow",
       fr :  [1,2,3,2,1],
       str : [0,0,1,0,0],
       max : 5,
       sound: "sound_STR_B"
    };  
     
    this.beingHit = {
      translate : "beingHit",
      fr :  [1,2,3,2,1],
      str : [0,0,1,0,0],
      max : 5,
      sound: "sound_STR"
    };    
    
    this.num; //
    
    this.busy;
    
    this.type;
    
    //ini-------------------------------------------------------
    this.ini = function() {
          this.spritesSheeva_mk3.iniAllSprite();
          this.num = 0;
          this.busy = 0;
          this.type = "fightingStance";
    };
    
    //setType-------------------------------------------------------
    this.setType = function(toType) {
     //alert("this.type = " + this.type + " toType = " + toType);
         if (this.type != toType) { 
            this.type = toType;
            this.num = 0;
            this.busy = 1;         
         };
    };
    
    //animation-------------------------------------------------------
    this.animation = function(mirror,left, top) {
             
         if (mirror == 0){

                  this.spritesSheeva_mk3.drawSprite(this[this.type].translate, this[this.type].fr[this.num], left, top);
         }else{
            this.spritesSheeva_mk3.drawSpriteMirror(this[this.type].translate, this[this.type].fr[this.num], left, top);
         };
            
         this.num = this.num + 1;
         if (this.num > this[this.type].max - 1 ) {
             this.num = 0;
             this.busy = 0;
         };
     };
    
    //all_Animation-------------------------------------------------------
    this.all_Animation = function(typeStateAnimators, left, top, mirror, width, height){
 
       this.setType(typeStateAnimators);
 
       if (this[this.type].str[this.num] == 1 ) Game_R.Sound_R[this[this.type].sound].play();
 
       if( (typeStateAnimators == "block") ||(typeStateAnimators == "blockLow") ){
            if (this.num > 3 ){
               this.num = 3;
               this.busy = 0;
            }
            this.animation(mirror, left, top);
       }else {
            this.animation(mirror, left, top);
       };
    };  
 };
    

// Sprite Animators...........................................................
 Game_R.SpritesAnimators_R = {}; 
 Game_R.SpritesAnimators_R.name = "SpritesAnimators";// 

Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_1_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_2_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_3_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_4_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_5_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_6_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_7_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_8_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_9_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_10_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_11_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_12_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_13_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_14_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_15_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_16_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_17_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_18_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_19_t = new AnimatorsSheeva_mk3_CL();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_20_t = new AnimatorsSheeva_mk3_CL();

Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_1_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_2_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_3_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_4_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_5_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_6_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_7_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_8_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_9_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_10_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_11_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_12_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_13_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_14_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_15_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_16_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_17_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_18_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_19_t.ini();
Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_20_t.ini();


Game_R.SpritesAnimators_R.animationAll_TEST = function(){
 
 
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_1_t.all_Animation("fightingStance", 0, 50,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_2_t.all_Animation("fightingStance", 0, 250,1,0,0);
	  
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_3_t.all_Animation("running", 300, 50,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_4_t.all_Animation("running", 300, 250,1,0,0);
   
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_5_t.all_Animation("walkingForward", 600, 50,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_6_t.all_Animation("walkingForward", 600, 250,1,0,0);  
       //Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 50,0,0,0);
       //Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_2.All_Animation("walkingBack", 600, 250,1,0,0);    
	      //Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_1.All_Animation("walkingBack", 600, 450,0,0,0); //___________
   
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_7_t.all_Animation("punchUp", 900, 50,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_8_t.all_Animation("punchUp", 900, 250,1,0,0);  
	  
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_9_t.all_Animation("punchMidle", 1200, 50,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_10_t.all_Animation("punchMidle", 1200, 250,1,0,0);  
	  
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_11_t.all_Animation("kickFront", 0, 450,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_12_t.all_Animation("kickFront", 0, 650,1,0,0);
   
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_13_t.all_Animation("kickBack", 300, 450,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_14_t.all_Animation("kickBack", 300, 650,1,0,0);   
	  
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_15_t.all_Animation("block", 600, 450,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_16_t.all_Animation("block", 600, 650,1,0,0);   
	  
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_17_t.all_Animation("blockLow", 900, 450,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_18_t.all_Animation("blockLow", 900, 650,1,0,0);     
   
	  Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_19_t.all_Animation("beingHit", 1200, 450,0,0,0);
   Game_R.SpritesAnimators_R.AnimatorsSheeva_mk3_20_t.all_Animation("beingHit", 1200, 650,1,0,0);     
 	 
};
