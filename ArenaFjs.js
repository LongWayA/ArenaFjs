"use strict";
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 07.07.2018 - 30.12.2018 - 30.05.2019 - 13.07.2019
 // - 22.11.2019 -

  /*
   НАЗНАЧЕНИЕ
   Корневой модуль игры
   Тут общая функция игры вызываемая на каждом тике цикла.
   Базовый цикл игры основанный на
   методе setTimeout(func, delay)
   Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать
   func регулярно/один раз через delay миллисекунд.

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   Render_R
  */


 //alert("module ArenaFjs start");
 //=============================================================================

window.ArenaFjs_R = {};
ArenaFjs_R.NAME = "ArenaFjs_R";//

// 1
// Game_R

// 2
// GameText_R

// 3
// Sound_R

// 4
// Timer_R

// 5
// CommandToFighter_R

// 6
// UserInput_R

// 7
// AICommand_R

// 8
// SpritesFighter

// 9
// SpritesAnimators

// 10
// FighterSheeva_mk3_R

// 11
// Move_R

// 12
// Fight_R

// 13
//Menu_R

// 14
// GameColculation_R

// 15
// ArenaScene

ArenaFjs_R.stateFigting = 0;
ArenaFjs_R.startGame = 0;

 //alert("!");
 //=============================================================================
 ArenaFjs_R.tick = function() {

    var fighter_1 = FighterSheeva_mk3_R.Fighter_1;
    var fighter_2 = FighterSheeva_mk3_R.Fighter_2;

    //alert("t");
    //alert("!");
    // человек отдает приказы с клавиатуры и они обрабатываются событийно.
    UserInput_R.tickSt(ArenaFjs_R);//

    if (ArenaFjs_R.stateFigting == 0){
      // компьютер отдает приказы каждый такт
      AICommand_R.tick(fighter_1, fighter_2, CommandToFighter_R.toFighterRight);//
      AICommand_R.tick(fighter_2, fighter_1, CommandToFighter_R.toFighterLeft);//

    } else if (ArenaFjs_R.stateFigting == 1){
      // человек отдает приказы с клавиатуры и они обрабатываются событийно.
  	  UserInput_R.tick(CommandToFighter_R.toFighterLeft);//
      AICommand_R.tick(fighter_1, fighter_2, CommandToFighter_R.toFighterRight);//
    } else if (ArenaFjs_R.stateFigting == 2){
      // человек отдает приказы с клавиатуры и они обрабатываются событийно.
  	  UserInput_R.tick(CommandToFighter_R.toFighterLeft);//
      AICommand_R.tickM(CommandToFighter_R.toFighterRight);//
    };

    // передаются команды бойцам
    CommandToFighter_R.toFighterLeft.tick(fighter_1);

    CommandToFighter_R.toFighterRight.tick(fighter_2);

    // обрабатываем движение бойцов
    Move_R.tick(fighter_1, fighter_2, ArenaScene_R);

    // обрабатываем бой
    Fight_R.tick(fighter_1, fighter_2, SpritesAnimators_R, Sound_R);

    // тоже что то можем обработать, но пока не знаю что.
    GameColculation_R.tick();

    // отрисовываем всю графику
    ArenaScene_R.drawAll(
       SpritesAnimators_R,
       fighter_1, fighter_2,
       GameText_R, Timer_R,
       CommandToFighter_R.toFighterLeft, CommandToFighter_R.toFighterRight,
       UserInput_R, SpritesFighter_R, ArenaFjs_R);
 };
 //=============================================================================

 //=============================================================================
 ArenaFjs_R.ini = function(){

    ArenaFjs_R.window_load_end = 0;
    ArenaFjs_R.stateFigting = 0;
    ArenaFjs_R.startGame = 0;

    //alert("ini = " + ArenaFjs_R.SpritesAnimators_R1);
    Timer_R.ini(8);

    SpritesFighter_R.loadAllSprite();

    ArenaScene_R.iniAll(Game_R.canvas.width, Game_R.canvas.height,
    FighterSheeva_mk3_R.Fighter_1, FighterSheeva_mk3_R.Fighter_2);

    FighterSheeva_mk3_R.Fighter_1.setState(SpritesAnimators_R.FIGHTING_STANCE_ANI);
    FighterSheeva_mk3_R.Fighter_2.setState(SpritesAnimators_R.FIGHTING_STANCE_ANI);

    UserInput_R.ini();

    CommandToFighter_R.toFighterLeft.ini('1');
    CommandToFighter_R.toFighterRight.ini('2');

 };
 //=============================================================================


//=============================================================================
ArenaFjs_R.buttonStartGame_click = function(){
     //console.log('buttonStartGame_click');
     ArenaFjs_R.startGame = 1 - ArenaFjs_R.startGame;
};
//=============================================================================

 //=============================================================================
 ArenaFjs_R.button_on_of_sound_click = function(){
      //console.log('button_on_of_sound_click');

      //Sound_R.sound_F.muted = false;
      Sound_R.sound_IA.muted    = !Sound_R.sound_IA.muted;
      Sound_R.sound_IAA.muted   = !Sound_R.sound_IAA.muted;
      Sound_R.sound_IAAAA.muted = !Sound_R.sound_IAAAA.muted;
      Sound_R.sound_STR_H.muted = !Sound_R.sound_STR_H.muted;
      Sound_R.sound_STR_F.muted = !Sound_R.sound_STR_F.muted;
      Sound_R.sound_STR_B.muted = !Sound_R.sound_STR_B.muted;
      Sound_R.sound_F.muted     = !Sound_R.sound_F.muted;
      Sound_R.sound_H.muted     = !Sound_R.sound_H.muted;
      Sound_R.sound_STR.muted   = !Sound_R.sound_STR.muted;

      //checkbox_on_of_sound.checked = !checkbox_on_of_sound.checked;
 };
 //=============================================================================

 //alert("!");
 //=============================================================================
 ArenaFjs_R.start = function(){
      //alert("!");
      console.log('Ah ah it is Console!');
      buttonStartGame.onclick = ArenaFjs_R.buttonStartGame_click;
      button_on_of_sound.onclick = ArenaFjs_R.button_on_of_sound_click;
      //ArenaFjs_R.get_buttonStartGame = document.getElementById("buttonStartGame");
      //console.log('ArenaFjs_R: get_buttonStartGame = ' + ArenaFjs_R.get_buttonStartGame);

      //ArenaFjs_R.get_checkboxStartGame = document.getElementById("checkboxStartGame");
      //console.log('ArenaFjs_R: get_checkboxStartGame = ' + ArenaFjs_R.get_checkboxStartGame);
      //document.f1.ch1.checked = true;
      //ArenaFjs_R.get_checkboxStartGame.checked = true;
      checkboxStartGame.checked = false;
      checkbox_on_of_sound.checked = false;
      //ArenaFjs_R.sound_IAAAA2 = document.getElementById('IAAAA2');
      //ArenaFjs_R.sound_IAAAA2.volume = 1.0;
      //ArenaFjs_R.sound_IAAAA2.play();
      //typeWriter.play();
      //typeWriter.pause();
     //alert("!");
     //alert( Menu_R.NAME );



 };
 //=============================================================================

 //=============================================================================
 ArenaFjs_R.tickTest = function(){
      // 1500x800
      Game_R.context.clearRect(0, 0, Game_R.canvas.width, Game_R.canvas.height);

      // ArenaFjs_R.SpritesFighter_R1.drawSprites_TEST();
      //ArenaFjs_R.SpritesAnimators_R1.animationAll_TEST();

      SpritesFighter_R.drawSprites_TEST(GameText_R);

 };
 //=============================================================================

 //=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
 window.onload = function() {
     ArenaFjs_R.window_load_end = 1;
     //console.log('ArenaFjs_R: window.onload');
 };
 //=============================================================================
ArenaFjs_R.frameG = 0;
 //loop>------------------------------------------------------------------------
  ArenaFjs_R.ini();
  ArenaFjs_R.start();
   //Game_R.context.fokus();
  ArenaFjs_R.timerId = setTimeout( function tick(){

        Timer_R.updateTimeBeforeTick();

        checkbox_on_of_sound.checked = !Sound_R.sound_STR.muted;

        if( (ArenaFjs_R.window_load_end == 1) && (ArenaFjs_R.startGame == 0) ){
           ArenaFjs_R.frameG = ArenaFjs_R.frameG + 1;
           if (ArenaFjs_R.frameG > 1000000) ArenaFjs_R.frameG = 0;
           Game_R.context.clearRect(30, 40, 900, 90);
           Game_R.context.strokeText ('Game in pause(Игра на паузе)', 50, 60);
           Game_R.context.strokeText ('Click on the Game pause button(Нажмите кнопку пауза для начала или возобновления игры)', 50, 80);
           Game_R.context.strokeText ('frame(кадр) = ' + ArenaFjs_R.frameG, 50, 100);
           if(checkboxStartGame.checked == true) checkboxStartGame.checked = false;
          // if(checkboxStartGame.checked == true) checkboxStartGame.checked = false;
        };

        if( (ArenaFjs_R.window_load_end == 1) && (ArenaFjs_R.startGame == 1) ){
            // alert("!-");
             if(checkboxStartGame.checked == false) checkboxStartGame.checked = true;
             ArenaFjs_R.tick();
             //ArenaFjs_R.tickTest();
        };

        Timer_R.updateTimeAfterTick();
        ArenaFjs_R.timerId = setTimeout( tick,Timer_R.timeThreadSleepGameMs);

  }, Timer_R.timeThreadSleepGameMs);
 //loop<------------------------------------------------------------------------

  //============================================================================
  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('16 module "ArenaFjs" loaded', 1100, Game_R.yT);

 //=============================================================================
 //alert("module ArenaFjs done");
