"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.

  //window.Game = {};
  //var Game = new Object();
  window.Game = new Object();

  Game.name = "Game";//

  Game.canvas = document.getElementById('game-canvas');
  Game.context = Game.canvas.getContext('2d');
  
  Game.SpritesSheeva_mk3 = {
    name : "SpritesSheeva_mk3",//
    FightingStance : new Array(7),//
    Walking : new Array(10),//
    Running : new Array(13),
    PunchingUp : new Array(7),
    PunchingMidle : new Array(8),
    KickingFront : new Array(9),
    KickingBack : new Array(9),
    BlockingHigh : new Array(4),
    BlockingLow : new Array(4),
    BeingHit : new Array(4)   
  };
  
  //alert(Game.SpritesSheeva_mk3.FightingStance.length);
  
  //alert("!");
  //alert( Game.SpritesSheeva_mk3["FightingStance"].length);
  
  // ini Image
    Game.SpritesSheeva_mk3.iniSprite = function(type,path) {
      //alert(this.name);
      for(var i = 1; i < Game.SpritesSheeva_mk3[type].length; i++ ){
         Game.SpritesSheeva_mk3[type][i] = new Image();
         Game.SpritesSheeva_mk3[type][i].src = path + i + ".png";
      };
  };
  
  // draw image
     Game.SpritesSheeva_mk3.drawSprite = function(type,index,left, top) {
     Game.context.drawImage(Game.SpritesSheeva_mk3[type][index], left, top);
     Game.context.strokeRect(left, top, Game.SpritesSheeva_mk3[type][index].width, Game.SpritesSheeva_mk3[type][index].height);
	   Game.context.fillText ("fr = " + index,left, top);
  
     //return this.name; 
  };
  
  // draw image mirror
      Game.SpritesSheeva_mk3.drawSpriteMirror = function(type,index,left, top) {
      left = left + Game.SpritesSheeva_mk3[type][index].width;
      Game.context.scale(-1, 1);
      Game.context.drawImage(Game.SpritesSheeva_mk3[type][index], -left, top);
      Game.context.strokeRect(-left, top, Game.SpritesSheeva_mk3[type][index].width, Game.SpritesSheeva_mk3[type][index].height);
      Game.context.scale(-1, 1);
      Game.context.fillText ("fr = " + index, left - Game.SpritesSheeva_mk3[type][index].width, top);
  };
  
  //инициализируем массивы с картинками-----------------------------------------------------------------------
   Game.SpritesSheeva_mk3.iniAllSprite = function() {    
      //ini FightingStance
      Game.SpritesSheeva_mk3.iniSprite("FightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

      //ini Walking
      Game.SpritesSheeva_mk3.iniSprite("Walking","image/Sheeva_mk3_image/2_Walking/w");  

      //ini Running
      Game.SpritesSheeva_mk3.iniSprite("Running","image/Sheeva_mk3_image/3_Running/r");
  
      //ini PunchingUp
      Game.SpritesSheeva_mk3.iniSprite("PunchingUp","image/Sheeva_mk3_image/4_Punching/pt1_");
    
      //ini PunchingMidle
      Game.SpritesSheeva_mk3.iniSprite("PunchingMidle","image/Sheeva_mk3_image/4_Punching/pm_");
  
      //ini KickingFront
      Game.SpritesSheeva_mk3.iniSprite("KickingFront","image/Sheeva_mk3_image/5_Kicking/k1_");
  
      //ini KickingBack
      Game.SpritesSheeva_mk3.iniSprite("KickingBack","image/Sheeva_mk3_image/5_Kicking/k2_");
  
      //ini BlockingHigh
      Game.SpritesSheeva_mk3.iniSprite("BlockingHigh","image/Sheeva_mk3_image/7_Blocking/bt_");  
  
      //ini BlockingLow
      Game.SpritesSheeva_mk3.iniSprite("BlockingLow","image/Sheeva_mk3_image/7_Blocking/bd_");  
  
      //ini BlockingLow
      Game.SpritesSheeva_mk3.iniSprite("BeingHit","image/Sheeva_mk3_image/9_BeingHit/1_h0");  
  };
  
  
  
 
  
  // alert("!!");
  
 // рискуем картинки----------------------------
   Game.SpritesSheeva_mk3.drawAllSprite = function() {    
  
  Game.SpritesSheeva_mk3.FightingStance[Game.SpritesSheeva_mk3.FightingStance.length - 1].onload = function(){   
      for(var i = 1; i < Game.SpritesSheeva_mk3.FightingStance.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("FightingStance",i, (i-1)*100, 10);
      };
      
       Game.SpritesSheeva_mk3.drawSpriteMirror("FightingStance",1, 900, 10);
      
  };
  
  Game.SpritesSheeva_mk3.Walking[Game.SpritesSheeva_mk3.Walking.length - 1].onload = function(){
      for(var i = 1; i < Game.SpritesSheeva_mk3.Walking.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("Walking",i, (i-1)*100, 170);
      }; 
  };  
  
  Game.SpritesSheeva_mk3.Running[Game.SpritesSheeva_mk3.Running.length - 1].onload = function(){
      for(var i = 1; i < Game.SpritesSheeva_mk3.Running.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("Running",i, (i-1)*100, 330);
      }; 
  };
   
  Game.SpritesSheeva_mk3.PunchingUp[Game.SpritesSheeva_mk3.PunchingUp.length - 1].onload = function(){
      for(var i = 1; i < Game.SpritesSheeva_mk3.PunchingUp.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("PunchingUp",i, (i-1)*100, 490);
      };     
  };
  
  Game.SpritesSheeva_mk3.PunchingMidle[Game.SpritesSheeva_mk3.PunchingMidle.length - 1].onload = function(){
       for(var i = 1; i < Game.SpritesSheeva_mk3.PunchingMidle.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("PunchingMidle",i, (i-1)*100, 650);
      };     
  };
 
  Game.SpritesSheeva_mk3.KickingFront[Game.SpritesSheeva_mk3.KickingFront.length - 1].onload = function(){
       for(var i = 1; i < Game.SpritesSheeva_mk3.KickingFront.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("KickingFront",i, (i-1)*100, 810);
      };          
  };  
 
  Game.SpritesSheeva_mk3.KickingBack[Game.SpritesSheeva_mk3.KickingBack.length - 1].onload = function(){
       for(var i = 1; i < Game.SpritesSheeva_mk3.KickingBack.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("KickingBack",i, (i-1)*100, 970);
      };      
  };    
  
  Game.SpritesSheeva_mk3.BlockingHigh[Game.SpritesSheeva_mk3.BlockingHigh.length - 1].onload = function(){
       for(var i = 1; i < Game.SpritesSheeva_mk3.BlockingHigh.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("BlockingHigh",i, (i-1)*100, 1130);
      };          
  }; 
  
    Game.SpritesSheeva_mk3.BlockingLow[Game.SpritesSheeva_mk3.BlockingLow.length - 1].onload = function(){
       for(var i = 1; i < Game.SpritesSheeva_mk3.BlockingLow.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("BlockingLow",i, (i-1)*100, 1290);
      };         
  }; 
 
    Game.SpritesSheeva_mk3.BeingHit[Game.SpritesSheeva_mk3.BeingHit.length - 1].onload = function(){
       for(var i = 1; i < Game.SpritesSheeva_mk3.BeingHit.length; i++ ){
         Game.SpritesSheeva_mk3.drawSprite("BeingHit",i, (i-1)*100, 1450);
      };         
  };  
  
};
  
   Game.SpritesSheeva_mk3.iniAllSprite();
   //Game.SpritesSheeva_mk3.drawAllSprite();
   
  //alert( SpritesSheeva_mk3.drawSprite());
 // alert(SpritesSheeva_mk3.KickingFront[9]);
 //context.translate(left, 0); 