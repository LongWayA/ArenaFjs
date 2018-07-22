"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 22.07.2018
 
 //window.Game = {};
  //var Game = new Object();
  //window.Game = new Object();
  
  window.Game = {};

  Game.name = "Game";//

  Game.canvas = document.getElementById('game-canvas');
  Game.context = Game.canvas.getContext('2d');
  Game.context.fokus();
//document.writeln("js >> End_test_js_1.js+++++++++");