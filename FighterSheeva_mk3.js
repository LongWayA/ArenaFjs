"use strict"
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 21.07.2018 - 08.08.2018

/*
 IMPORT (references, outer defines)
 SpritesAnimators.js -> used 
 
 EXPORT

*/

/*
INTERFACE
   FighterSheeva_mk3_CL (constructor function)
 
*/

  //alert("module FighterSheeva_mk3 start");
  //================================================================================

function FighterSheeva_mk3_CL () {
    this.name = "FighterSheeva_mk3_CL";
    
    this.animatorsState = {
         num : 0 ,
         busy : 0 ,
         type : "fightingStance",
         oldType : "fightingStance"
    };
    
    this.MAX_HEALTH = 1000; //
    this.MAX_STAMINA = 100; //
     
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
     
     // tickAnimation ---------------------------------------
     this.tickAnimation = function() {
         Game_R.SpritesAnimators_R.all_Animation( this.animatorsState, this.state,  this.left, this.top,  this.mirror, this.width,  this.height);     
     };
     
     // setState--------------------------------------------------------
     this.setState = function(toState) {
     
      if(toState != this.state){
           if( (toState == "fightingStance")||(toState == "walkingForward")||(toState == "walkingBack")||(toState == "block")||(toState == "blockLow") ){
           //alert("1");
                    this.state = toState; 
           } else {
           // alert("2");
                 if(this.animatorsState.busy == 0){
                       this.state = toState; 
                 };            
          };
      };//if(toState != this.state){
      /*
            switch(toState){
         
                 case "fightingStance":
                   
                 break;
       
                 case "running":
          
                 break;
                 case "walkingForward":
          
                 break;
                 case "walkingBack":
          
                 break;
                 case "punchUp":
          
                 break;       
                 case "punchMidle":
          
                 break;      
                 case "kickFront":
          
                 break;       
                 case "kickingBack":
          
                 break;       
                 case "blockingHigh":
          
                 break;      
                 case "blockingLow":
          
                 break;
                 case "beingHit":
          
                 break;     
            };
      */
     };//this.setState
};//FighterSheeva_mk3_CL () {


//////////////////////////

// Fighters------------------------------------------------------------------------------
 Game_R.Fighters_R = {};

 Game_R.Fighters_R.name = "Fighters";//

Game_R.context.strokeText ('7   module FighterSheeva load', 1100, 170);
//================================================================================
//alert("module FighterSheeva done");
