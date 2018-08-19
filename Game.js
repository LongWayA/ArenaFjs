"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 22.07.2018
 
 //window.Game = {};
  //var Game = new Object();
  //window.Game = new Object();
  
  //alert("module Game start");
  //================================================================================
  
  window.Game_R = {};

  Game_R.name = "Game";//

  Game_R.canvas = document.getElementById('game-canvas');
  Game_R.context = Game_R.canvas.getContext('2d');
  
  Game_R.context.fillStyle = '#0000ff';
  Game_R.context.strokeStyle = '#0000ff';
  
  Game_R.context.font = 'italic 30pt Arial';
  
  Game_R.context.lineWidth = 1;
  
  Game_R.context.strokeText ('LOADING RESOURCES', 50, 80);
  
  
  Game_R.context.font = 'italic 15pt Arial';
  
  //Game_R.context.fillText ('LOAD REC', 10, 10);
  //Game_R.context.fillRect( 100, 100, 100, 100);
  //Game_R.context.strokeRect( 10, 10, 100, 100);
  //
  Game_R.yT = 50;//
  Game_R.dyT = 20;//
  Game_R.context.strokeText ('1   module Game loaded', 1100, Game_R.yT);
  //================================================================================
  //alert("module Game done");