"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.

  window.canvas = document.getElementById('game-canvas');
  window.context = canvas.getContext('2d');
  
  window.SpritesSheeva_mk3 = {
    name : "Sheeva",//
    FightingStance : new Array(7),//
    Walking : new Array(10),// z
    Running : new Array(13),
    PunchingUp : new Array(7),
    PunchingMidle : new Array(8),
    KickingFront : new Array(9),
    KickingBack : new Array(9),
    BlockingHigh : new Array(4),
    BlockingLow : new Array(4),
    BeingHit : new Array(4)   
  };
  
  window.SpritesSheeva_mk3.drawSprite = function(type,index,left, top) {
     context.drawImage(SpritesSheeva_mk3[type][index], left, top);
     //return this.name; 
  };
  
  // как нарисовать зеркало?
  
    window.SpritesSheeva_mk3.iniSprite = function(type,path) {      
      for(var i = 1; i < SpritesSheeva_mk3[type].length; i++ ){
         SpritesSheeva_mk3[type][i] = new Image();
         SpritesSheeva_mk3[type][i].src = path + i + ".png";
      };
  };
  
  //инициализируем массивы с картинками-----------------------------------------------------------------------
  
  //alert(SpritesSheeva_mk3.FightingStance.length);
  
  //ini FightingStance
   SpritesSheeva_mk3.iniSprite("FightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

  //ini Walking
  SpritesSheeva_mk3.iniSprite("Walking","image/Sheeva_mk3_image/2_Walking/w");  

  //ini Running
  SpritesSheeva_mk3.iniSprite("Running","image/Sheeva_mk3_image/3_Running/r");
  
  //ini PunchingUp
  SpritesSheeva_mk3.iniSprite("PunchingUp","image/Sheeva_mk3_image/4_Punching/pt1_");
    
  //ini PunchingMidle
  SpritesSheeva_mk3.iniSprite("PunchingMidle","image/Sheeva_mk3_image/4_Punching/pm_");
  
  //ini KickingFront
  SpritesSheeva_mk3.iniSprite("KickingFront","image/Sheeva_mk3_image/5_Kicking/k1_");
  
  //ini KickingBack
  SpritesSheeva_mk3.iniSprite("KickingBack","image/Sheeva_mk3_image/5_Kicking/k2_");
  
  //ini BlockingHigh
  SpritesSheeva_mk3.iniSprite("BlockingHigh","image/Sheeva_mk3_image/7_Blocking/bt_");  
  
  //ini BlockingLow
  SpritesSheeva_mk3.iniSprite("BlockingLow","image/Sheeva_mk3_image/7_Blocking/bd_");  
  
  //ini BlockingLow
  SpritesSheeva_mk3.iniSprite("BeingHit","image/Sheeva_mk3_image/9_BeingHit/1_h0");  
  
  
 //------------------------------------------------------------------------------------------------------ 
  
  SpritesSheeva_mk3.FightingStance[SpritesSheeva_mk3.FightingStance.length - 1].onload = function(){   
      for(var i = 1; i < SpritesSheeva_mk3.FightingStance.length; i++ ){
         SpritesSheeva_mk3.drawSprite("FightingStance",i, (i-1)*100, 10);
      }; 
  };
  
  SpritesSheeva_mk3.Walking[SpritesSheeva_mk3.Walking.length - 1].onload = function(){
      for(var i = 1; i < SpritesSheeva_mk3.Walking.length; i++ ){
         SpritesSheeva_mk3.drawSprite("Walking",i, (i-1)*100, 170);
      }; 
  };  
  
  SpritesSheeva_mk3.Running[SpritesSheeva_mk3.Running.length - 1].onload = function(){
      for(var i = 1; i < SpritesSheeva_mk3.Running.length; i++ ){
         SpritesSheeva_mk3.drawSprite("Running",i, (i-1)*100, 330);
      }; 
  };
   
  SpritesSheeva_mk3.PunchingUp[SpritesSheeva_mk3.PunchingUp.length - 1].onload = function(){
      for(var i = 1; i < SpritesSheeva_mk3.PunchingUp.length; i++ ){
         SpritesSheeva_mk3.drawSprite("PunchingUp",i, (i-1)*100, 490);
      };     
  };
  
  SpritesSheeva_mk3.PunchingMidle[SpritesSheeva_mk3.PunchingMidle.length - 1].onload = function(){
       for(var i = 1; i < SpritesSheeva_mk3.PunchingMidle.length; i++ ){
         SpritesSheeva_mk3.drawSprite("PunchingMidle",i, (i-1)*100, 650);
      };     
  };
 
  SpritesSheeva_mk3.KickingFront[SpritesSheeva_mk3.KickingFront.length - 1].onload = function(){
       for(var i = 1; i < SpritesSheeva_mk3.KickingFront.length; i++ ){
         SpritesSheeva_mk3.drawSprite("KickingFront",i, (i-1)*100, 810);
      };          
  };  
 
  SpritesSheeva_mk3.KickingBack[SpritesSheeva_mk3.KickingBack.length - 1].onload = function(){
       for(var i = 1; i < SpritesSheeva_mk3.KickingBack.length; i++ ){
         SpritesSheeva_mk3.drawSprite("KickingBack",i, (i-1)*100, 970);
      };      
  };    
  
  SpritesSheeva_mk3.BlockingHigh[SpritesSheeva_mk3.BlockingHigh.length - 1].onload = function(){
       for(var i = 1; i < SpritesSheeva_mk3.BlockingHigh.length; i++ ){
         SpritesSheeva_mk3.drawSprite("BlockingHigh",i, (i-1)*100, 1130);
      };          
  }; 
  
    SpritesSheeva_mk3.BlockingLow[SpritesSheeva_mk3.BlockingLow.length - 1].onload = function(){
       for(var i = 1; i < SpritesSheeva_mk3.BlockingLow.length; i++ ){
         SpritesSheeva_mk3.drawSprite("BlockingLow",i, (i-1)*100, 1290);
      };         
  }; 
 
    SpritesSheeva_mk3.BeingHit[SpritesSheeva_mk3.BeingHit.length - 1].onload = function(){
       for(var i = 1; i < SpritesSheeva_mk3.BeingHit.length; i++ ){
         SpritesSheeva_mk3.drawSprite("BeingHit",i, (i-1)*100, 1450);
      };         
  };  
  
  //alert( SpritesSheeva_mk3.drawSprite());
 // alert(SpritesSheeva_mk3.KickingFront[9]);