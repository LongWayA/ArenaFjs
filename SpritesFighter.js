"use strict"

  var canvas = document.getElementById('game-canvas');
  var context = canvas.getContext('2d');
  
  var SpritesSheeva_mk3 = {
    
    FightingStance : [7],// z
    Walking : [10],// z
    Running : [13],
    PunchingUp : [7],
    PunchingMidle : [8],
    KickingFront : [9],
    KickingBack : [9],
    BlockingHigh : [4],
    BlockingLow : [4],
    BeingHit : [4]   
  };
  
  //инициализируем массивы с картинками-----------------------------------------------------------------------
  
  //ini FightingStance
  for(var i = 1; i < 7; i++ ){
    SpritesSheeva_mk3.FightingStance[i] = new Image();
    SpritesSheeva_mk3.FightingStance[i].src = "image/Sheeva_mk3_image/1_FightingStance/fs" + i + ".png";
  };
  
    //ini Walking
  for(var i = 1; i < 10; i++ ){
    SpritesSheeva_mk3.Walking[i] = new Image();
    SpritesSheeva_mk3.Walking[i].src = "image/Sheeva_mk3_image/2_Walking/w" + i + ".png";
  };
  
  //ini Running
  for(var i = 1; i < 13; i++ ){
    SpritesSheeva_mk3.Running[i] = new Image();
    SpritesSheeva_mk3.Running[i].src = "image/Sheeva_mk3_image/3_Running/r" + i + ".png";
  }; 
  
  //ini PunchingUp
  for(var i = 1; i < 7; i++ ){
    SpritesSheeva_mk3.PunchingUp[i] = new Image();
    SpritesSheeva_mk3.PunchingUp[i].src = "image/Sheeva_mk3_image/4_Punching/pt1_" + i + ".png";
  }; 
    
  //ini PunchingMidle
  for(var i = 1; i < 8; i++ ){
    SpritesSheeva_mk3.PunchingMidle[i] = new Image();
    SpritesSheeva_mk3.PunchingMidle[i].src = "image/Sheeva_mk3_image/4_Punching/pm_" + i + ".png";
  };   
  
  //ini KickingFront
  for(var i = 1; i < 9; i++ ){
    SpritesSheeva_mk3.KickingFront[i] = new Image();
    SpritesSheeva_mk3.KickingFront[i].src = "image/Sheeva_mk3_image/5_Kicking/k1_" + i + ".png";
  };   
  
  //ini KickingBack
  for(var i = 1; i < 9; i++ ){
    SpritesSheeva_mk3.KickingBack[i] = new Image();
    SpritesSheeva_mk3.KickingBack[i].src = "image/Sheeva_mk3_image/5_Kicking/k2_" + i + ".png";
  };      
  
  //ini BlockingHigh
  for(var i = 1; i < 4; i++ ){
    SpritesSheeva_mk3.BlockingHigh[i] = new Image();
    SpritesSheeva_mk3.BlockingHigh[i].src = "image/Sheeva_mk3_image/7_Blocking/bt_" + i + ".png";
  };       
  
  //ini BlockingLow
  for(var i = 1; i < 4; i++ ){
    SpritesSheeva_mk3.BlockingLow[i] = new Image();
    SpritesSheeva_mk3.BlockingLow[i].src = "image/Sheeva_mk3_image/7_Blocking/bd_" + i + ".png";
  };
  
  //ini BlockingLow
  for(var i = 1; i < 4; i++ ){
    SpritesSheeva_mk3.BeingHit[i] = new Image();
    SpritesSheeva_mk3.BeingHit[i].src = "image/Sheeva_mk3_image/9_BeingHit/1_h0" + i + ".png";
  }; 
  
 //------------------------------------------------------------------------------------------------------ 
  
  SpritesSheeva_mk3.FightingStance[6].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.FightingStance[1], 0, 10);
   context.drawImage(SpritesSheeva_mk3.FightingStance[2], 100, 10);
   context.drawImage(SpritesSheeva_mk3.FightingStance[3], 200, 10);
   context.drawImage(SpritesSheeva_mk3.FightingStance[4], 300, 10);
   context.drawImage(SpritesSheeva_mk3.FightingStance[5], 400, 10);
   context.drawImage(SpritesSheeva_mk3.FightingStance[6], 500, 10);
  };
  
  SpritesSheeva_mk3.Walking[9].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.Walking[1], 0, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[2], 100, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[3], 200, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[4], 300, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[5], 400, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[6], 500, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[7], 600, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[8], 700, 170);
   context.drawImage(SpritesSheeva_mk3.Walking[9], 800, 170);
  };  
  
  SpritesSheeva_mk3.Running[12].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.Running[1], 0, 330);
   context.drawImage(SpritesSheeva_mk3.Running[2], 100, 330);
   context.drawImage(SpritesSheeva_mk3.Running[3], 200, 330);
   context.drawImage(SpritesSheeva_mk3.Running[4], 300, 330);
   context.drawImage(SpritesSheeva_mk3.Running[5], 400, 330);
   context.drawImage(SpritesSheeva_mk3.Running[6], 500, 330);
   context.drawImage(SpritesSheeva_mk3.Running[7], 600, 330);
   context.drawImage(SpritesSheeva_mk3.Running[8], 700, 330);
   context.drawImage(SpritesSheeva_mk3.Running[9], 800, 330);
   context.drawImage(SpritesSheeva_mk3.Running[10], 900, 330);
   context.drawImage(SpritesSheeva_mk3.Running[11], 1000, 330);
   context.drawImage(SpritesSheeva_mk3.Running[12], 1100, 330);  
  };
   
  SpritesSheeva_mk3.PunchingUp[6].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.PunchingUp[1], 0, 490);
   context.drawImage(SpritesSheeva_mk3.PunchingUp[2], 100, 490);
   context.drawImage(SpritesSheeva_mk3.PunchingUp[3], 200, 490);
   context.drawImage(SpritesSheeva_mk3.PunchingUp[4], 300, 490);
   context.drawImage(SpritesSheeva_mk3.PunchingUp[5], 400, 490);
   context.drawImage(SpritesSheeva_mk3.PunchingUp[6], 500, 490);  
  };
  
  SpritesSheeva_mk3.PunchingMidle[6].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.PunchingMidle[1], 0, 650);
   context.drawImage(SpritesSheeva_mk3.PunchingMidle[2], 100, 650);
   context.drawImage(SpritesSheeva_mk3.PunchingMidle[3], 200, 650);
   context.drawImage(SpritesSheeva_mk3.PunchingMidle[4], 300, 650);
   context.drawImage(SpritesSheeva_mk3.PunchingMidle[5], 400, 650);
   context.drawImage(SpritesSheeva_mk3.PunchingMidle[6], 500, 650);   
  };
 
  SpritesSheeva_mk3.KickingFront[8].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.KickingFront[1], 0, 810);
   context.drawImage(SpritesSheeva_mk3.KickingFront[2], 100, 810);
   context.drawImage(SpritesSheeva_mk3.KickingFront[3], 200, 810);
   context.drawImage(SpritesSheeva_mk3.KickingFront[4], 300, 810);
   context.drawImage(SpritesSheeva_mk3.KickingFront[5], 400, 810);  
   context.drawImage(SpritesSheeva_mk3.KickingFront[6], 500, 810);
   context.drawImage(SpritesSheeva_mk3.KickingFront[7], 600, 810);
   context.drawImage(SpritesSheeva_mk3.KickingFront[8], 700, 810);   
    
  };  
 
  SpritesSheeva_mk3.KickingBack[8].onload = function(){ 
    context.drawImage(SpritesSheeva_mk3.KickingBack[1], 0, 970);
    context.drawImage(SpritesSheeva_mk3.KickingBack[2], 100, 970);
    context.drawImage(SpritesSheeva_mk3.KickingBack[3], 200, 970);
    context.drawImage(SpritesSheeva_mk3.KickingBack[4], 300, 970);
    context.drawImage(SpritesSheeva_mk3.KickingBack[5], 400, 970);
    context.drawImage(SpritesSheeva_mk3.KickingBack[6], 500, 970);
    context.drawImage(SpritesSheeva_mk3.KickingBack[7], 600, 970);
    context.drawImage(SpritesSheeva_mk3.KickingBack[8], 700, 970);    
  };    
  
  SpritesSheeva_mk3.BlockingHigh[3].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.BlockingHigh[1], 0, 1130);
   context.drawImage(SpritesSheeva_mk3.BlockingHigh[2], 100, 1130);
   context.drawImage(SpritesSheeva_mk3.BlockingHigh[3], 200, 1130);  
  }; 
  
  SpritesSheeva_mk3.BlockingLow[3].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.BlockingLow[1], 0, 1290);
   context.drawImage(SpritesSheeva_mk3.BlockingLow[2], 100, 1290);
   context.drawImage(SpritesSheeva_mk3.BlockingLow[3], 200, 1290);
  };  
  
  SpritesSheeva_mk3.BeingHit[3].onload = function(){ 
   context.drawImage(SpritesSheeva_mk3.BeingHit[1], 0, 1450);
   context.drawImage(SpritesSheeva_mk3.BeingHit[2], 100, 1450);
   context.drawImage(SpritesSheeva_mk3.BeingHit[3], 200, 1450);
  };  
    
  
  
  
  
  
  
  
  
  
  
  

 // alert(SpritesSheeva_mk3.KickingFront[9]);