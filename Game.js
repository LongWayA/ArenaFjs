"use strict";
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 22.07.2018

   /*

   НАЗНАЧЕНИЕ

   Глобальный объект один на всю игру.
   Инизиализируется графическая канва на отрисовку 2д графики.
   Также предварительно инициализируется шрифт что бы можно было
   писать текст на экран до создания текстового объекта.

   canvas = document.getElementById('game-canvas')
   canvas.getContext('2d')

   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   во всех

  */

  //alert("module Game start");
  //============================================================================

  window.Game_R = {};

  Game_R.NAME = "Game";//
  Game_R.load = 0;//

  // "2d" создаем объекта CanvasRenderingContext2D,
  //  представляющий двумерный контекст.
  Game_R.canvas = document.getElementById('game-canvas');
  Game_R.context = Game_R.canvas.getContext('2d');

  // определяем текст для тестового выода информации на экран, а также
  // когда надо напечатать до того как мы инициализровали текстовый объект
  Game_R.context.fillStyle = '#0000ff';
  Game_R.context.strokeStyle = '#0000ff';
  Game_R.context.font = 'italic 30pt Arial';
  Game_R.context.lineWidth = 1;

  // пишем текст до загрузки изображений. потом он закрывается картинкой
  Game_R.context.strokeText ('LOADING RESOURCES', 50, 80);

  // шрифт для тестовой печати на экране
  Game_R.context.font = 'italic 15pt Arial';

  //Game_R.context.fillText ('LOAD REC', 10, 10);
  //Game_R.context.fillRect( 100, 100, 100, 100);
  //Game_R.context.strokeRect( 10, 10, 100, 100);

  // сообщаем что модуль был прочитан до конца

  //============================================================================
  Game_R.yT = 50;//
  Game_R.dyT = 20;//
  Game_R.context.strokeText ('1   module "Game" loaded', 1100, Game_R.yT);

  //============================================================================
  //alert("module Game done");
