"use strict";
// Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 30.12.2018 - 16.11.2019 -

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R

  */


  //alert("module Fight start");
  //============================================================================

window.Fight_R = {};
Fight_R.NAME = "Fight";//

Move_R.DR_F_PUNCH = 75;//
Move_R.DR_F_FRONT_KICK = 95;//
Move_R.DR_F_BACK_KICK = 115;//

//==============================================================================
Fight_R.hit = function(_fighter_1, _fighter_2) {

   var num_1 = _fighter_1.SpritesAnimatorsFrames;
   var type_1 = _fighter_1.SpritesAnimatorsTypeAnimation;
   var type_2 = _fighter_2.SpritesAnimatorsTypeAnimation;

   var mF_1 = _fighter_1.middle;
   var mF_2 = _fighter_2.middle;
   var dR_1_2 = (mF_1 - mF_2)*(mF_1 - mF_2);


   if (SpritesAnimators_R.animatorsSheeva_mk3_mobj[type_1].str[num_1] == 1) {
    if (type_2 != SpritesAnimators_R.BLOCKING_LOW_ANI) {
     //console.log('Fight_R:type_1 ='+ type_1);
     //console.log('Fight_R:num_1 ='+ num_1);

      if (type_1 == SpritesAnimators_R.PUNCHING_UP_ANI) {
              //console.log('Fight_R:mF_1 ='+ mF_1);
              //console.log('Fight_R:mF_1 ='+ mF_2);
              //console.log('Fight_R:dR_1_2 ='+ dR_1_2);

          if (dR_1_2 < (Move_R.DR_F_PUNCH * Move_R.DR_F_PUNCH)) {
                //console.log('Fight_R:dR_1_2 ='+ dR_1_2);
                //console.log('Fight_R:_fighter_2.health ='+ _fighter_2.health);
                //console.log('Fight_R:FighterSheeva_mk3_R.DH_UP_PUNCH ='+ FighterSheeva_mk3_R.DH_UP_PUNCH);
                if(_fighter_2.health > 0) _fighter_2.health = _fighter_2.health - FighterSheeva_mk3_R.DH_UP_PUNCH;
                _fighter_2.stateFighter = SpritesAnimators_R.BEING_HIT_ANI;
          };
      };

      if (type_1 == SpritesAnimators_R.PUNCHING_MIDLE_ANI) {

          if (dR_1_2 < (Move_R.DR_F_PUNCH * Move_R.DR_F_PUNCH)) {
                if(_fighter_2.health > 0) _fighter_2.health = _fighter_2.health - FighterSheeva_mk3_R.DH_MIDLE_PUNCH;
                _fighter_2.stateFighter = SpritesAnimators_R.BEING_HIT_ANI;
          };
      };

      if (type_1 == SpritesAnimators_R.KICKING_FRONT_ANI) {

          if (dR_1_2 < (Move_R.DR_F_FRONT_KICK * Move_R.DR_F_FRONT_KICK)) {
                if(_fighter_2.health > 0) _fighter_2.health = _fighter_2.health - FighterSheeva_mk3_R.DH_FRONT_KICK;
                _fighter_2.stateFighter = SpritesAnimators_R.BEING_HIT_ANI;
          };
      };


      if (type_1 == SpritesAnimators_R.KICKING_BACK_ANI) {

          if (dR_1_2 < (Move_R.DR_F_BACK_KICK * Move_R.DR_F_BACK_KICK)) {
                if(_fighter_2.health > 0) _fighter_2.health = _fighter_2.health - FighterSheeva_mk3_R.DH_BACK_KICK;
                _fighter_2.stateFighter = SpritesAnimators_R.BEING_HIT_ANI;
          };
      };
   };//if (type_2 != SpritesAnimators_R.BLOCKING_LOW_ANI) {
 };//if (SpritesAnimators_R.animatorsSheeva_mk3_mobj[type_1].str[num_1] == 1) {
};
//==============================================================================

//==============================================================================
Fight_R.tick = function(_fighter_1, _fighter_2) {

   Fight_R.hit(_fighter_1, _fighter_2);
   Fight_R.hit(_fighter_2, _fighter_1);

if(_fighter_1.health <= 0) _fighter_1.health = FighterSheeva_mk3_R.MAX_HEALTH;
if(_fighter_2.health <= 0) _fighter_2.health = FighterSheeva_mk3_R.MAX_HEALTH;

};
//==============================================================================





//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('12 module "Fight" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module Fight done");
