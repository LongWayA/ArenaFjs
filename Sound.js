"use strict";
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
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

/*
https://www.developphp.com/lib/JavaScript/Audio

Audio
The Audio object interface exposes properties, methods and events that can
 be used to program audio software and sound related programs using JavaScript.

Properties----------------------------------------------------------

readonly = can be read but not changed

currentTime - Floating Point Number
startTime -  Floating Point Number (readonly)
duration - Floating Point Number (readonly)
paused - Boolean (readonly)
defaultPlaybackRate - Floating Point Number
playbackRate - Floating Point Number
played - TimeRanges Object (readonly)
seekable - TimeRanges Object (readonly)
ended - Boolean (readonly)
autoplay - Boolean
loop - Boolean
controls - Boolean
volume - Floating Point Number
muted - Boolean
error - Media Error (readonly)
seeking - Boolean (readonly)
src - String
currentSrc - String (readonly)
preload - String - enumerated value
buffered - TimeRanges Object (readonly)
networkState - 0-3 (readonly)
0 - NETWORK_EMPTY
1 - NETWORK_IDLE
2 - NETWORK_LOADING
3 - NETWORK_NO_SOURCE
readyState - 0-4 (readonly)
0 - HAVE_NOTHING
1 - HAVE_METADATA
2 - HAVE_CURRENT_DATA
3 - HAVE_FUTURE_DATA
4 - HAVE_ENOUGH_DATA

Methods-------------------------------------------------------------

play - Make the media object play or resume after pausing.
pause - Pause the media object.
load - Reload the media object.
canPlayType - Determine if a media type can be played.

Events--------------------------------------------------------------

UA = user agent = browser software

loadstart - Fires when UA begins looking for media data.
progress - Fires while UA downloads media data.
suspend - Fires when media data download is suspended.
abort - Fires when media data download is aborted.
error - Fires when an error occurs while downloading media data.
emptied - Fires when a media object networkState is switched to 0.
stalled - Fires when media download stalls.
play - Fires when playback begins.
pause - Fires when playback is paused.
loadedmetadata - Fires when duration and dimensions of media can be accessed.
loadeddata - Fires when the UA has enough media data to begin playback.
waiting - Fires when playback stops due to unavailable media data(UA waiting for more data).
playing - Fires when playback starts.
canplay - Fires when UA determines the media can play, but further buffering may occur.
canplaythrough - Fires when UA determines the media can play without further buffering.
seeking - Fires when seek operations occur. The seeking property changes to true.
seeked - Fires when the seeking property changes to false.
timeupdate - Fires when the playback position changes.
ended - Fires when the media has ended.
ratechange - Fires when the playbackRate property changes.
durationchange - Fires when the duration property changes.
volumechange - Fires when either the volume or muted properties change.
The Audio Programming video tutorial series demonstrates using the methods,
events and properties associated with audio objects.
*/
