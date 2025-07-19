"use strict";
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 30.12.2018 - 20.11.2019 -

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

Fight_R.DR_F_PUNCH = 75;//
Fight_R.DR_F_FRONT_KICK = 95;//
Fight_R.DR_F_BACK_KICK = 115;//

//==============================================================================
Fight_R.hit = function(_Fighter_1, _Fighter_2, _SpritesAnimators_R, _Sound_R) {

   var num_1 = _Fighter_1.spritesAnimatorsFrames;
   var type_1 = _Fighter_1.spritesAnimatorsTypeAnimation;
   var type_2 = _Fighter_2.spritesAnimatorsTypeAnimation;

   var mF_1 = _Fighter_1.middle;
   var mF_2 = _Fighter_2.middle;
   var dR_1_2 = (mF_1 - mF_2)*(mF_1 - mF_2);

   /////////////////////////////////////////////////////////////////////////////
   if (SpritesAnimators_R.animatorsSheeva_mk3_mobj[type_1].str[num_1] == 1) {

     //console.log('Fight_R:type_1 ='+ type_1);
     //console.log('Fight_R:num_1 ='+ num_1);
      //////////////////////////////////////////////////////////////////////////
      if (type_1 == SpritesAnimators_R.PUNCHING_UP_ANI) {
          //console.log('Fight_R:mF_1 ='+ mF_1);
          //console.log('Fight_R:mF_1 ='+ mF_2);
          //console.log('Fight_R:dR_1_2 ='+ dR_1_2);
          if (dR_1_2 <= (Fight_R.DR_F_PUNCH * Fight_R.DR_F_PUNCH)) {
                //console.log('Fight_R:dR_1_2 ='+ dR_1_2);
                //console.log('Fight_R:_Fighter_2.health ='+ _Fighter_2.health);
                //console.log('Fight_R:FighterSheeva_mk3_R.DH_UP_PUNCH ='+ FighterSheeva_mk3_R.DH_UP_PUNCH);
                if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                     if(_Fighter_2.health > 0) _Fighter_2.health = _Fighter_2.health - FighterSheeva_mk3_R.DH_UP_PUNCH;
                     _SpritesAnimators_R.setTypeAnimation_BEING_HIT(_Fighter_2);
                     _Sound_R.sound_STR_H.play();
                } else{//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                    _Sound_R.sound_STR_B.play();
                };//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
          } else{//if (dR_1_2 <= (Fight_R.DR_F_PUNCH * Fight_R.DR_F_PUNCH)) {
               _Sound_R.sound_H.play();
          };//if (dR_1_2 <= (Fight_R.DR_F_PUNCH * Fight_R.DR_F_PUNCH)) {
      };//if (type_1 == SpritesAnimators_R.PUNCHING_UP_ANI) {
      //////////////////////////////////////////////////////////////////////////

      //////////////////////////////////////////////////////////////////////////
      if (type_1 == SpritesAnimators_R.PUNCHING_MIDLE_ANI) {
           if (dR_1_2 < (Fight_R.DR_F_PUNCH * Fight_R.DR_F_PUNCH)) {
                if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                   if(_Fighter_2.health > 0) _Fighter_2.health = _Fighter_2.health - FighterSheeva_mk3_R.DH_MIDLE_PUNCH;
                   _SpritesAnimators_R.setTypeAnimation_BEING_HIT(_Fighter_2);
                   _Sound_R.sound_STR_H.play();
                 } else{//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                    _Sound_R.sound_STR_B.play();
                 };//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
           } else{//if (dR_1_2 < (Fight_R.DR_F_PUNCH * Fight_R.DR_F_PUNCH)) {
                 _Sound_R.sound_H.play();
           };//if (dR_1_2 < (Fight_R.DR_F_PUNCH * Fight_R.DR_F_PUNCH)) {
      };//if (type_1 == SpritesAnimators_R.PUNCHING_MIDLE_ANI) {
      //////////////////////////////////////////////////////////////////////////

      //////////////////////////////////////////////////////////////////////////
      if (type_1 == SpritesAnimators_R.KICKING_FRONT_ANI) {
          if (dR_1_2 < (Fight_R.DR_F_FRONT_KICK * Fight_R.DR_F_FRONT_KICK)) {
              if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                   if(_Fighter_2.health > 0) _Fighter_2.health = _Fighter_2.health - FighterSheeva_mk3_R.DH_FRONT_KICK;
                   _SpritesAnimators_R.setTypeAnimation_BEING_HIT(_Fighter_2);
                   _Sound_R.sound_STR_F.play();
              } else{//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                   _Sound_R.sound_STR_B.play();
              };//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
          } else{//if (dR_1_2 < (Fight_R.DR_F_FRONT_KICK * Fight_R.DR_F_FRONT_KICK)) {
           _Sound_R.sound_F.play();
          };//if (dR_1_2 < (Fight_R.DR_F_FRONT_KICK * Fight_R.DR_F_FRONT_KICK)) {
      };//if (type_1 == SpritesAnimators_R.KICKING_FRONT_ANI) {
      //////////////////////////////////////////////////////////////////////////

      //////////////////////////////////////////////////////////////////////////
      if (type_1 == SpritesAnimators_R.KICKING_BACK_ANI) {
          if (dR_1_2 < (Fight_R.DR_F_BACK_KICK * Fight_R.DR_F_BACK_KICK)) {
            if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                if(_Fighter_2.health > 0) _Fighter_2.health = _Fighter_2.health - FighterSheeva_mk3_R.DH_BACK_KICK;
                _SpritesAnimators_R.setTypeAnimation_BEING_HIT(_Fighter_2);
                _Sound_R.sound_STR_F.play();
            } else{//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
                _Sound_R.sound_STR_B.play();
            };//if (type_2 != SpritesAnimators_R.BLOCKING_HIGH_ANI) {
          } else{//if (dR_1_2 < (Fight_R.DR_F_BACK_KICK * Fight_R.DR_F_BACK_KICK)) {
            _Sound_R.sound_F.play();
          };//if (dR_1_2 < (Fight_R.DR_F_BACK_KICK * Fight_R.DR_F_BACK_KICK)) {
      };//if (SpritesAnimators_R.animatorsSheeva_mk3_mobj[type_1].str[num_1] == 1) {
      //////////////////////////////////////////////////////////////////////////
   };//if (SpritesAnimators_R.animatorsSheeva_mk3_mobj[type_1].str[num_1] == 1) {
   /////////////////////////////////////////////////////////////////////////////
};
//==============================================================================

//==============================================================================
Fight_R.tick = function(_Fighter_1, _Fighter_2, _SpritesAnimators_R, _Sound_R) {

   Fight_R.hit(_Fighter_1, _Fighter_2, _SpritesAnimators_R, _Sound_R);
   Fight_R.hit(_Fighter_2, _Fighter_1, _SpritesAnimators_R, _Sound_R);

if(_Fighter_1.health <= 0) {
  _Fighter_1.health = FighterSheeva_mk3_R.MAX_HEALTH;
   Sound_R.sound_IAA.play();
}
if(_Fighter_2.health <= 0){
  _Fighter_2.health = FighterSheeva_mk3_R.MAX_HEALTH;
  Sound_R.sound_IAA.play();
}

};
//==============================================================================





//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('12 module "Fight" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module Fight done");
