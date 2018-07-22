"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 21.07.2018 - 21.07.2018

Game.FighterSheeva_mk3 = {};

Game.FighterSheeva_mk3.name = "FighterSheeva_mk3";//
//alert("!");

Game.FighterSheeva_mk3.state = "fightingStance";

Game.FighterSheeva_mk3.left = 150;

Game.FighterSheeva_mk3.top =150;

Game.FighterSheeva_mk3.mirror = 0; // Direction_RIGHT_LEFT

Game.FighterSheeva_mk3.width = 0;

Game.FighterSheeva_mk3.height = 0;

Game.FighterSheeva_mk3.MAX_HEALTH = 1000; //
Game.FighterSheeva_mk3.MAX_STAMINA = 100; //

       // жизни бойца
Game.FighterSheeva_mk3.health = Game.FighterSheeva_mk3.MAX_HEALTH;

        // изменение жизней при попадании в хит
Game.FighterSheeva_mk3.dhUpPunch = 20;    //2% = (1000/100)*2 = 20
Game.FighterSheeva_mk3.dhMidlePunch = 30; //3%
Game.FighterSheeva_mk3.dhFrontKick = 50;  //5%
Game.FighterSheeva_mk3.dhBackKick = 70;   //7%

        // изменение жизней при попадании в блок
Game.FighterSheeva_mk3.dhUpPunchBlock = 4;     //0,4% = (1000/100)*0.4 = 4
Game.FighterSheeva_mk3.dhMidlePunchBlock = 6;  //0,6%
Game.FighterSheeva_mk3.dhFrontKickBlock = 10;  //1%
Game.FighterSheeva_mk3.dhBackKickBlock = 14;   //1,4%

        // выносливость бойца
Game.FighterSheeva_mk3.stamina = Game.FighterSheeva_mk3.MAX_STAMINA;

        // изменение выносливости
Game.FighterSheeva_mk3.ds = 1;


//alert("!");


//////////////////////////
 Game.FighterSheeva_mk3.tick = function() {
  Game.SpritesAnimators.AnimatorsSheeva_mk3_1.All_Animation(Game.FighterSheeva_mk3.state, Game.FighterSheeva_mk3.left,
                                                Game.FighterSheeva_mk3.top, Game.FighterSheeva_mk3.mirror,
                                                Game.FighterSheeva_mk3.width, Game.FighterSheeva_mk3.height); 
  
 };
