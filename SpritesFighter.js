"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 07.07.2018 - 15.07.2018

Game.SpritesFighter = {};

Game.SpritesFighter.name = "SpritesFighter";//

  Game.SpritesFighter.SpritesSheeva_mk3 = {
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
  Game.SpritesFighter.iniSpriteSheeva_mk3 = function(type,path) {
      //alert(this.name);
      for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3[type].length; i++ ){
         Game.SpritesFighter.SpritesSheeva_mk3[type][i] = new Image();
         Game.SpritesFighter.SpritesSheeva_mk3[type][i].src = path + i + ".png";
      };
  };
  
  // draw image
  Game.SpritesFighter.drawSpriteSheeva_mk3 = function(type,index,left, top) {
     Game.context.drawImage(Game.SpritesFighter.SpritesSheeva_mk3[type][index], left, top);
     Game.context.strokeRect(left, top, Game.SpritesFighter.SpritesSheeva_mk3[type][index].width, Game.SpritesFighter.SpritesSheeva_mk3[type][index].height);
	   Game.context.fillText ("fr = " + index,left, top);
  };
  
  // draw image mirror
  Game.SpritesFighter.drawSpriteSheeva_mk3_Mirror = function(type,index,left, top) {
      left = left + Game.SpritesFighter.SpritesSheeva_mk3[type][index].width;
      Game.context.scale(-1, 1);
      Game.context.drawImage(Game.SpritesFighter.SpritesSheeva_mk3[type][index], -left, top);
      Game.context.strokeRect(-left, top, Game.SpritesFighter.SpritesSheeva_mk3[type][index].width, Game.SpritesFighter.SpritesSheeva_mk3[type][index].height);
      Game.context.scale(-1, 1);
      Game.context.fillText ("fr = " + index, left - Game.SpritesFighter.SpritesSheeva_mk3[type][index].width, top);
  };
  
  //инициализируем массивы с картинками-----------------------------------------------------------------------
   Game.SpritesFighter.iniAllSpriteSheeva_mk3 = function() {    
      //ini FightingStance
      Game.SpritesFighter.iniSpriteSheeva_mk3("FightingStance","image/Sheeva_mk3_image/1_FightingStance/fs");

      //ini Walking
      Game.SpritesFighter.iniSpriteSheeva_mk3("Walking","image/Sheeva_mk3_image/2_Walking/w");  

      //ini Running
      Game.SpritesFighter.iniSpriteSheeva_mk3("Running","image/Sheeva_mk3_image/3_Running/r");
  
      //ini PunchingUp
      Game.SpritesFighter.iniSpriteSheeva_mk3("PunchingUp","image/Sheeva_mk3_image/4_Punching/pt1_");
    
      //ini PunchingMidle
      Game.SpritesFighter.iniSpriteSheeva_mk3("PunchingMidle","image/Sheeva_mk3_image/4_Punching/pm_");
  
      //ini KickingFront
      Game.SpritesFighter.iniSpriteSheeva_mk3("KickingFront","image/Sheeva_mk3_image/5_Kicking/k1_");
  
      //ini KickingBack
      Game.SpritesFighter.iniSpriteSheeva_mk3("KickingBack","image/Sheeva_mk3_image/5_Kicking/k2_");
  
      //ini BlockingHigh
      Game.SpritesFighter.iniSpriteSheeva_mk3("BlockingHigh","image/Sheeva_mk3_image/7_Blocking/bt_");  
  
      //ini BlockingLow
      Game.SpritesFighter.iniSpriteSheeva_mk3("BlockingLow","image/Sheeva_mk3_image/7_Blocking/bd_");  
  
      //ini BlockingLow
      Game.SpritesFighter.iniSpriteSheeva_mk3("BeingHit","image/Sheeva_mk3_image/9_BeingHit/1_h0");  
  };
  
  
 
  // alert("!!");
  
 // рисуем картинки----------------------------
   Game.SpritesFighter.drawAllSpriteSheeva_mk3 = function() {    
  
       Game.SpritesFighter.SpritesSheeva_mk3.FightingStance[Game.SpritesFighter.SpritesSheeva_mk3.FightingStance.length - 1].onload = function(){   
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.FightingStance.length; i++ ){
             Game.SpritesFighter.drawSpriteSheeva_mk3("FightingStance",i, (i-1)*100, 10);
          };
          Game.SpritesFighter.drawSpriteSheeva_mk3_Mirror("FightingStance",1, 900, 10);
       };
  
       Game.SpritesFighter.SpritesSheeva_mk3.Walking[Game.SpritesFighter.SpritesSheeva_mk3.Walking.length - 1].onload = function(){
           for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.Walking.length; i++ ){
              Game.SpritesFighter.drawSpriteSheeva_mk3("Walking",i, (i-1)*100, 170);
           }; 
       };  
  
       Game.SpritesFighter.SpritesSheeva_mk3.Running[Game.SpritesFighter.SpritesSheeva_mk3.Running.length - 1].onload = function(){
           for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.Running.length; i++ ){
              Game.SpritesFighter.drawSpriteSheeva_mk3("Running",i, (i-1)*100, 330);
           }; 
       };
   
      Game.SpritesFighter.SpritesSheeva_mk3.PunchingUp[Game.SpritesFighter.SpritesSheeva_mk3.PunchingUp.length - 1].onload = function(){
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.PunchingUp.length; i++ ){
             Game.SpritesFighter.drawSpriteSheeva_mk3("PunchingUp",i, (i-1)*100, 490);
          };     
      };
  
      Game.SpritesFighter.SpritesSheeva_mk3.PunchingMidle[Game.SpritesFighter.SpritesSheeva_mk3.PunchingMidle.length - 1].onload = function(){
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.PunchingMidle.length; i++ ){
            Game.SpritesFighter.drawSpriteSheeva_mk3("PunchingMidle",i, (i-1)*100, 650);
          };     
      };
 
      Game.SpritesFighter.SpritesSheeva_mk3.KickingFront[Game.SpritesFighter.SpritesSheeva_mk3.KickingFront.length - 1].onload = function(){
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.KickingFront.length; i++ ){
            Game.SpritesFighter.drawSpriteSheeva_mk3("KickingFront",i, (i-1)*100, 810);
          };          
      };  
 
      Game.SpritesFighter.SpritesSheeva_mk3.KickingBack[Game.SpritesFighter.SpritesSheeva_mk3.KickingBack.length - 1].onload = function(){
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.KickingBack.length; i++ ){
            Game.SpritesFighter.drawSpriteSheeva_mk3("KickingBack",i, (i-1)*100, 970);
          };      
      };    
  
      Game.SpritesFighter.SpritesSheeva_mk3.BlockingHigh[Game.SpritesFighter.SpritesSheeva_mk3.BlockingHigh.length - 1].onload = function(){
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.BlockingHigh.length; i++ ){
            Game.SpritesFighter.drawSpriteSheeva_mk3("BlockingHigh",i, (i-1)*100, 1130);
          };          
      }; 
  
      Game.SpritesFighter.SpritesSheeva_mk3.BlockingLow[Game.SpritesFighter.SpritesSheeva_mk3.BlockingLow.length - 1].onload = function(){
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.BlockingLow.length; i++ ){
             Game.SpritesFighter.drawSpriteSheeva_mk3("BlockingLow",i, (i-1)*100, 1290);
          };         
      }; 
 
      Game.SpritesFighter.SpritesSheeva_mk3.BeingHit[Game.SpritesFighter.SpritesSheeva_mk3.BeingHit.length - 1].onload = function(){
          for(var i = 1; i < Game.SpritesFighter.SpritesSheeva_mk3.BeingHit.length; i++ ){
             Game.SpritesFighter.drawSpriteSheeva_mk3("BeingHit",i, (i-1)*100, 1450);
          };         
      };
  
      alert( "!");
};
  
  //alert( SpritesSheeva_mk3.drawSprite());
 // alert(SpritesSheeva_mk3.KickingFront[9]);
 //context.translate(left, 0); 