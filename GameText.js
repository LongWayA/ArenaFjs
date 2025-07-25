"use strict";
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.08.2018 - 1.01.2019 - 13.07.2019

  /*
   НАЗНАЧЕНИЕ
   Рисуем графические примитивы. Печатаем текст.

   ИСПОЛЬЗУЕТ МОДУЛИ
   Game

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R
   Render_R
   SpritesFighter_R

  */


/*

-----------------

Самое простое, как мы можем стилизовать текст, это задать ему цвет. Цвет
задается при помощи
fillStyle – для задания цвета заливки и strokeStyle – для задания цвета обводки.
Так же как и в CSS3 можно накладывать тени и на текст в канвасе. Это
делается при помощи:
shadowColor – задание цвета тени, shadowOffsetX и
shadowOffsetY – задание отступа и shadowBlur – задание размытия тени.

    ctx.shadowColor = "#F00";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.strokeText("Shadow text", 20, 100);

Из статьи "Выводим текст на HTML5 Canvas" https://habr.com/post/140235/

----------------

var text = context.measureText("Hello"); "22px Verdana"
'15px Verdana' '25px Arial' '20px Comic Sans MS'

----------------

grad = g.createLinearGradient(50, 0, 400, 0);

grad.addColorStop(0, 'red');
grad.addColorStop(0.5, 'green');
grad.addColorStop(1, 'blue');

g.fillStyle = grad;
g.shadowOffsetX = 2;
g.shadowOffsetY = 2;
g.shadowBlur = 3;
g.shadowColor = 'black';

g.font = '30px arial';
g.fillText('Привет, прекрасный мир!', 50, 50);

Из статьи "Отрисовка текста на canvas’e" https://true-coder.ru/javascript/
otrisovka-teksta-na-canvas.html

-----------------------
A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green)
and BB (blue)
hexadecimal integers specify the components of the color. All values must be
 between 00 and FF.

For example, the #0000ff value is rendered as blue,
because the blue component is set to its highest value (ff) and the others
are set to 00.

Define different HEX colors:
#p1 {background-color: #ff0000;}    //red
#p2 {background-color: #00ff00;}   // green
#p3 {background-color: #0000ff;}   // blue

Define different RGB colors:
#p1 {background-color: rgb(255, 0, 0);}   // red
#p2 {background-color: rgb(0, 255, 0);}   // green
#p3 {background-color: rgb(0, 0, 255);}   // blue

Define different RGB colors with opacity:
#p1 {background-color: rgba(255, 0, 0, 0.3);}   // red with opacity
#p2 {background-color: rgba(0, 255, 0, 0.3);}   // green with opacity
#p3 {background-color: rgba(0, 0, 255, 0.3);}   // blue with opacity

Из статьи "CSS Legal Color Values" https://www.w3schools.com/cssref
/css_colors_legal.asp

-----------------------
Цвета можно посмотреть по ссылкам:
https://www.w3schools.com/colors/colors_names.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
-----------------------

fillStyle = color
    Устанавливает стиль для фона фигур.
strokeStyle = color
    Устанавливает стиль контура фигуры.

 Из статьи "Применение стилей и цветов"   https://developer.mozilla.org/ru/
 docs/Web/API/Canvas_API/Tutorial
---------------------

    //document.writeln("js >> End_test_js_1.js+++++++++");

*/

//alert("module GameText start");
//==============================================================================

window.GameText_R = {};
GameText_R.NAME = "GameText_R";//

    // Game_R.context.fillText (text, left, top);

  //============================================================================
  GameText_R.setFont = function(font) {

       Game_R.context.textBaseline = 'top';

       switch(font){

                 case 'italic 20px sans-serif':
                    Game_R.context.font = font;
                 break;

                 case 'italic 30pt Arial':
                   Game_R.context.font = font;
                 break;

                 case 'bold 30px sans-serif':
                   Game_R.context.font = font;
                 break;
       };
  };
  //============================================================================

  //============================================================================
  GameText_R.setColor = function(color) {

        var style;

        switch(color){

                case 'white':
                    style = '#ffffff';
                 break;

                case 'black':
                    style = '#000000';
                 break;

                 case 'red':
                    style = '#ff0000';
                 break;

                 case 'green':
                    style = '#008000';
                 break;

                 case 'blue':
                    style = '#0000ff';
                 break;
       };

       Game_R.context.fillStyle = style;
       Game_R.context.strokeStyle = style;

  };
  //============================================================================

  //============================================================================
  GameText_R.drawText = function(text, left, top, font, color, fillYes) {

         GameText_R.setColor(color);

         GameText_R.setFont(font);

         if(fillYes == 1) {
             Game_R.context.fillText(text, left, top);
         } else {
             Game_R.context.strokeText (text, left, top);
         };

  };
  //============================================================================

  //============================================================================
  GameText_R.drawRect = function(left, top, width, height, lineWidth, color,
    fillYes) {

         GameText_R.setColor(color);

         Game_R.context.lineWidth = lineWidth;

         if(fillYes == 1) {
             Game_R.context.fillRect( left, top, width, height);
         } else {
             Game_R.context.strokeRect( left, top, width, height);
         };

  };
  //============================================================================

  //============================================================================
  Game_R.yT = Game_R.yT + Game_R.dyT;//
  Game_R.context.strokeText ('2   module "GameText" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module GameText done");
