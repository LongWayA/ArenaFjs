"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 21.07.2018 - 26.07.2018

function FighterSheeva_mk3_CL () {
    this.name = "FighterSheeva_mk3_CL";
    this.MAX_HEALTH = 1000; //
    this.MAX_STAMINA = 100; //
    
    this.animatorsSheeva_mk3 = new AnimatorsSheeva_mk3_CL ();
     
    this.state;
    this.left;
    this.top;
    this.mirror; // Direction_RIGHT_LEFT
    this.width;
    this.height;

       // жизни бойца
    this.health;

        // изменение жизней при попадании в хит
    this.dhUpPunch;    //2% = (1000/100)*2 = 20
    this.dhMidlePunch; //3%
    this.dhFrontKick;  //5%
    this.dhBackKick;   //7%

        // изменение жизней при попадании в блок
    this.dhUpPunchBlock;     //0,4% = (1000/100)*0.4 = 4
    this.dhMidlePunchBlock;  //0,6%
    this.dhFrontKickBlock;  //1%
    this.dhBackKickBlock;   //1,4%

        // выносливость бойца
    this.stamina;

        // изменение выносливости
    this.ds;
     
    this.ini = function(left, top, mirror) {
      
         this.animatorsSheeva_mk3.ini();
      
         this.state = "fightingStance";
         this.left = left;
         this.top =top;
         this.mirror = mirror; // Direction_RIGHT_LEFT
         this.width = 0;
         this.height = 0;

         // жизни бойца
         this.health = this.MAX_HEALTH;

         // изменение жизней при попадании в хит
         this.dhUpPunch = 20;    //2% = (1000/100)*2 = 20
         this.dhMidlePunch = 30; //3%
         this.dhFrontKick = 50;  //5%
         this.dhBackKick = 70;   //7%

        // изменение жизней при попадании в блок
        this.dhUpPunchBlock = 4;     //0,4% = (1000/100)*0.4 = 4
        this.dhMidlePunchBlock = 6;  //0,6%
        this.dhFrontKickBlock = 10;  //1%
        this.dhBackKickBlock = 14;   //1,4%

        // выносливость бойца
        this.stamina = this.MAX_STAMINA;

        // изменение выносливости
        this.ds = 1;
     };
     
     this.tickAnimation = function() {
         this.animatorsSheeva_mk3.all_Animation( this.state,  this.left, this.top,  this.mirror, this.width,  this.height);     
     };
     
     this.setState = function(toState) {
      
     };
};



// Fighters------------------------------------------------------------------------------
 Game.Fighters = {};

 Game.Fighters.name = "Fighters";//
 //alert("!");

 Game.Fighters.fighterSheeva_mk3_1 = new FighterSheeva_mk3_CL();
 Game.Fighters.fighterSheeva_mk3_2 = new FighterSheeva_mk3_CL();
 Game.Fighters.fighterSheeva_mk3_1.ini(150, 150, 0);
 Game.Fighters.fighterSheeva_mk3_2.ini(450, 150, 1);


//////////////////////////
 Game.Fighters.tick = function() {
  
   Game.Fighters.fighterSheeva_mk3_1.tickAnimation();
   Game.Fighters.fighterSheeva_mk3_2.tickAnimation();
   //alert("!");
 };




