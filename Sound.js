"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 1.01.2019 - 14.12.2019

   /*
   НАЗНАЧЕНИЕ


   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

  */

 //alert("module Sound start");
//================================================================================

 window.Sound_R = {};
 Sound_R.NAME = "Sound";//

//Sound_R.audio_IA = new Audio('image/Sheeva_mk3_sound/female_conv/mk3-01500ruk.wav');
Sound_R.sound_IA = new Audio('image/Sheeva_mk3_sound/female_conv/mk3-01500ruk.wav');
Sound_R.sound_IA.volume = 1.0;
Sound_R.sound_IA.muted = true;

Sound_R.sound_IAA = new Audio('image/Sheeva_mk3_sound/female_conv/mk3-01505nog.wav');
Sound_R.sound_IAA.volume = 1.0;
Sound_R.sound_IAA.muted = true;

Sound_R.sound_IAAAA = new Audio('image/Sheeva_mk3_sound/female_conv/mk3-01525beg.wav');
Sound_R.sound_IAAAA.volume = 1.0;
Sound_R.sound_IAAAA.muted = true;

Sound_R.sound_STR_H = new Audio('image/Sheeva_mk3_sound/hitsounds_conv/mk3-00100pu.wav');
Sound_R.sound_STR_H.volume = 1.0;
Sound_R.sound_STR_H.muted = true;

Sound_R.sound_STR_F = new Audio('image/Sheeva_mk3_sound/hitsounds_conv/mk3-00105pm.wav');
Sound_R.sound_STR_F.volume = 1.0;
Sound_R.sound_STR_F.muted = true;

Sound_R.sound_STR_B = new Audio('image/Sheeva_mk3_sound/hitsounds_conv/mk3-00110b.wav');
Sound_R.sound_STR_B.volume = 1.0;
Sound_R.sound_STR_B.muted = true;

Sound_R.sound_F = new Audio('image/Sheeva_mk3_sound/hitsounds_conv/mk3-00145k.wav');
Sound_R.sound_F.volume = 1.0;
Sound_R.sound_F.muted = true;

Sound_R.sound_H = new Audio('image/Sheeva_mk3_sound/hitsounds_conv/mk3-00150h.wav');
Sound_R.sound_H.volume = 1.0;
Sound_R.sound_H.muted = true;

Sound_R.sound_STR = new Audio('image/Sheeva_mk3_sound/hitsounds_conv/mk3-00275sh.wav');
Sound_R.sound_STR.volume = 1.0;
Sound_R.sound_STR.muted = true;

//alert(Fighting);
//  Sound_R.sound_IA.play();//короткий крик
 //  Sound_R.sound_IAA.play();//средний крик
 //  Sound_R.sound_IAAAA.play();//длинныий крик
//   Sound_R.sound_STR_H.play();//попадание рукой
//   Sound_R.sound_STR_F.play();//попадание ногой
//   Sound_R.sound_STR_B.play();//попадание по блоку
//   Sound_R.sound_F.play();//промах ногой
//   Sound_R.sound_H.play();//промах рукой
//   Sound_R.sound_STR.play();//

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('3   module "Sound" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module Sound done");
