"use strict";
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 1.01.2019


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   Render_R
   ArenaFjs_R
  */


 // alert("module Timer start");
//==============================================================================

 window.Timer_R = {};
 Timer_R.NAME = "Timer_R";//

  Timer_R.ticksPerSecond;// количество циклов в секунду или по другому количество кадров в секунду
        // 1000 задержка в секунду. т.е тысяча милисекунд это секунда
        // 60 кадров это 0,01(6) sek = 16,(6) millis
        // 30 кадров это 0,03(3) sek = 30,(3) millis
        // 25 кадров это 0,04 sek = 40 millis
        // 10 кадров это 0,1 sek = 100 millis

  Timer_R.tickMustTimeMs;// время отведенное на один круг

  Timer_R.timeStartTickMs;// фиксируем время начала тика
  Timer_R.timeEndTickMs;// фиксируем время после тика
  Timer_R.timeBetweenEndMinStartTickMs;// время тика	в это время идет расчет и отрисовка игры
  Timer_R.timeThreadSleepGameMs;// время бездействия потока игры. мы все сделали и оставшееся время бездействуем

  Timer_R.timeOldStartTickMs;// время начала предыдущего тика нужно для вычисления времени полного круга цикла
  Timer_R.timeBetweenStartMinOldStartTickMs;// время прошедшее за полный круг цикла игры

    /*
     * обновляется только в одном месте цикла игры
     * в главном цикле окна перед всеми вычислениями и выводами
     * именно здесь вычисляем промежуток времени прошедший за весь цикл
     * включая и время сна
     * это время должно стремиться к tickMustTimeMs = 1000 /(long)ticksPerSecond
     * сейчас ticksPerSecond мы должны задавать 60 в сек
     * т.е tickMustTimeMs = 16,(6)  msec  как принято в файтингах
     * однако реально ticksPerSecond = 30  в сек т.е
     * tickMustTimeMs = 33,(3) msec так как иначе не успеваем все обсчитать
     */
  //============================================================================
  Timer_R.updateTimeBeforeTick = function() {

		     Timer_R.timeOldStartTickMs = Timer_R.timeStartTickMs;
		     Timer_R.timeStartTickMs = (new Date).getTime();
		     Timer_R.timeBetweenStartMinOldStartTickMs = Timer_R.timeStartTickMs
         - Timer_R.timeOldStartTickMs;
	 };
  //============================================================================

	/*
	 * timeAfterTickMs время прошедшее после обсчета игры
	 * тут мы не учитываем время сна
	 * высчитываем время сколько мы должны спать для того что бы получить
	 * нужное время одного цикла а это tickMustTimeMs
	 * если время сна timeSleepGame_RMs оказывается отрицательным или просто меньше 5
	 * то делаем его 5
	 * отрицательное когда задержка в цикле больше чем отведено на цикл
	 */
  //============================================================================
  Timer_R.updateTimeAfterTick = function() {

		     Timer_R.timeEndTickMs = (new Date).getTime();
		     Timer_R.timeBetweenEndMinStartTickMs = Timer_R.timeEndTickMs
         - Timer_R.timeStartTickMs;

		     Timer_R.timeThreadSleepGameMs = Timer_R.tickMustTimeMs
         - Timer_R.timeBetweenEndMinStartTickMs;
		     //System.out.println("Timer_R: timeBetweenTickMs = " + timeBetweenTickMs );
		     //System.out.println("Timer_R: timeSleepGame_RMs = " + timeSleepGame_RMs );

		     if( Timer_R.timeThreadSleepGameMs < 1){
			      Timer_R.timeThreadSleepGameMs = 1;
			      //System.out.println("Timer_R: timeThreadSleepGameMs(< 1) = " + timeThreadSleepGameMs );
		     };
       //		if( timeThreadSleepGameMs > 33){
       //			    timeThreadSleepGameMs = 33;
       //			    //System.out.println("Timer_R: timeThreadSleepGameMs(> 33) = " + timeThreadSleepGameMs );
       //		}
	};
  //============================================================================

 // стартовая инициализация таймера
 //=============================================================================
 Timer_R.ini = function(_ticksPerSecond) {

     Timer_R.timeStartTickMs = (new Date).getTime();
     Timer_R.ticksPerSecond = _ticksPerSecond;
    	Timer_R.tickMustTimeMs = 1000 / Timer_R.ticksPerSecond;//33,(3)   16,(6)  msec
     //alert("!");
     //alert(Timer_R.tickMustTimeMs);
     //alert(Timer_R.ticksPerSecond);
 };
 //=============================================================================

 //=============================================================================
 Game_R.yT = Game_R.yT + Game_R.dyT;//
 Game_R.context.strokeText ('4   module "Timer" loaded', 1100, Game_R.yT);

 //=============================================================================
//alert("module Timer done");
