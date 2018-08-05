"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 22.07.2018
 
 //window.Game = {};
  //var Game = new Object();
  //window.Game = new Object();
  
  window.Game_R = {};

  Game_R.name = "Game";//

  Game_R.canvas = document.getElementById('game-canvas');
  Game_R.context = Game_R.canvas.getContext('2d');
  Game_R.context.fokus();
//document.writeln("js >> End_test_js_1.js+++++++++");