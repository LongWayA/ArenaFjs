"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 07.07.2018 - 22.07.2018

  function SpritesSheeva_mk3_CL () {
    this.name = "SpritesSheeva_mk3_CL";
    this.fightingStance = new Array(7);//
    this.walking = new Array(10);//
    this.running = new Array(13);
    this.punchingUp = new Array(7);
    this.punchingMidle = new Array(8);
    this.kickingFront = new Array(9);
    this.kickingBack = new Array(9);
    this.blockingHigh = new Array(4);
    this.blockingLow = new Array(4);
    this.beingHit = new Array(4);
    
      // ini Image
     this.iniSprite = function(type,path) {
        for(var i = 1; i < this[type].length; i++ ){
           this[type][i] = new Image();
           this[type][i].src = path + i + ".png";
         };
     };
    
     //инициализируем массивы с картинками-----------------------------------
     this.iniAllSprite = function() {    
      //ini FightingStance
      this.iniSprite("fightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

      //ini Walking
      this.iniSprite("walking","image/Sheeva_mk3_image/2_Walking/w");  

      //ini Running
      this.iniSprite("running","image/Sheeva_mk3_image/3_Running/r");
  
      //ini PunchingUp
      this.iniSprite("punchingUp","image/Sheeva_mk3_image/4_Punching/pt1_");
    
      //ini PunchingMidle
      this.iniSprite("punchingMidle","image/Sheeva_mk3_image/4_Punching/pm_");
  
      //ini KickingFront
      this.iniSprite("kickingFront","image/Sheeva_mk3_image/5_Kicking/k1_");
  
      //ini KickingBack
      this.iniSprite("kickingBack","image/Sheeva_mk3_image/5_Kicking/k2_");
  
      //ini BlockingHigh
      this.iniSprite("blockingHigh","image/Sheeva_mk3_image/7_Blocking/bt_");  
  
      //ini BlockingLow
      this.iniSprite("blockingLow","image/Sheeva_mk3_image/7_Blocking/bd_");  
  
      //ini BlockingLow
      this.iniSprite("beingHit","image/Sheeva_mk3_image/9_BeingHit/1_h0");  
     };
     
      // draw image
     this.drawSprite = function(type,index,left, top) {
         Game.context.drawImage(this[type][index], left, top);
         Game.context.strokeRect(left, top, this[type][index].width, this[type][index].height);
	       Game.context.fillText ("fr = " + index,left, top);
     };

     this.drawSpriteMirror = function(type,index,left, top) {
         left = left + this[type][index].width;
         Game.context.scale(-1, 1);
         Game.context.drawImage(this[type][index], -left, top);
         Game.context.strokeRect(-left, top, this[type][index].width, this[type][index].height);
         Game.context.scale(-1, 1);
	       Game.context.fillText ("fr = " + index,left - this[type][index].width, top);
     };    
  };

///////////////////////////////////////////////////////////////////
Game.SpritesFighter = {};

Game.SpritesFighter.name = "SpritesFighter";//

  //alert("!");
  
  // alert("!!");
Game.SpritesFighter.spritesSheeva_mk3_1 = new SpritesSheeva_mk3_CL();
  
  
  
 // ----------------------------
   Game.SpritesFighter.iniAllSpriteFighter = function() {
     Game.SpritesFighter.spritesSheeva_mk3_1.iniAllSprite();
  };
  
  
  