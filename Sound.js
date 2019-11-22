"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 1.01.2019

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

Sound_R.sound_IA = document.getElementById('IA');
//Sound_R.sound_IA.load();
Sound_R.sound_IA.volume = 1.0;
Sound_R.sound_IA.muted = false;

Sound_R.sound_IAA = document.getElementById('IAA');
Sound_R.sound_IAA.volume = 1.0;
Sound_R.sound_IAA.muted = false;

Sound_R.sound_IAAAA = document.getElementById('IAAAA');
Sound_R.sound_IAAAA.volume = 1.0;
Sound_R.sound_IAAAA.muted = false;

Sound_R.sound_STR_H = document.getElementById('STR_H');
Sound_R.sound_STR_H.volume = 1.0;
Sound_R.sound_STR_H.muted = false;

Sound_R.sound_STR_F = document.getElementById('STR_F');
Sound_R.sound_STR_F.volume = 1.0;
Sound_R.sound_STR_F.muted = false;

Sound_R.sound_STR_B = document.getElementById('STR_B');
Sound_R.sound_STR_B.volume = 1.0;
Sound_R.sound_STR_B.muted = false;

Sound_R.sound_F = document.getElementById('F');
Sound_R.sound_F.volume = 1.0;
Sound_R.sound_F.muted = false;
//Sound_R.sound_F.muted = false;

Sound_R.sound_H = document.getElementById('H');
Sound_R.sound_H.volume = 1.0;
Sound_R.sound_H.muted = false;

Sound_R.sound_STR = document.getElementById('STR');
Sound_R.sound_STR.volume = 1.0;
Sound_R.sound_STR.muted = false;

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
