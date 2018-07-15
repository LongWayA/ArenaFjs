"use strict"
 // Copyright (c) 2018, 2081, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 15.07.2018 - 15.07.2018
  
 Game.Timer = {}; 
 Game.Timer.name = "Timer";//

  Game.Timer.ticksPerSecond;// количество циклов в секунду или по другому количество кадров в секунду
        // 1000 задержка в секунду. т.е тысяча милисекунд это секунда
        // 60 кадров это 0,01(6) sek = 16,(6) millis
        // 30 кадров это 0,03(3) sek = 30,(3) millis
        // 25 кадров это 0,04 sek = 40 millis
        // 10 кадров это 0,1 sek = 100 millis
        
  Game.Timer.tickMustTimeMs;// время отведенное на один круг

  Game.Timer.timeStartTickMs;// фиксируем время начала тика
  Game.Timer.timeEndTickMs;// фиксируем время после тика
  Game.Timer.timeBetweenEndMinStartTickMs;// время тика	в это время идет расчет и отрисовка игры
  Game.Timer.timeThreadSleepGameMs;// время бездействия потока игры. мы все сделали и оставшееся время бездействуем

  Game.Timer.timeOldStartTickMs;// время начала предыдущего тика нужно для вычисления времени полного круга цикла
  Game.Timer.timeBetweenStartMinOldStartTickMs;// время прошедшее за полный круг цикла игры

        
 	// стартовая инициализация таймера
    Game.Timer.ini = function(_ticksPerSecond) {

    	Game.Timer.timeStartTickMs = (new Date).getTime();
    	Game.Timer.ticksPerSecond = _ticksPerSecond;
    	Game.Timer.tickMustTimeMs = 1000 / Game.Timer.ticksPerSecond;//33,(3)   16,(6)  msec
//alert("!");
//alert(Game.Timer.tickMustTimeMs);
//alert(Game.Timer.ticksPerSecond);
    };

    /*
     * обновляется только в одном месте цикла игры
     * в главном цикле окна перед всеми вычислениями и выводами
     * именно здесь вычисляем промежуток времени прошедший за весь цикл
     * включая и время сна
     * это время должно стремиться к tickMustTimeMs = 1000 /(long)ticksPerSecond
     * сейчас ticksPerSecond мы должны задавать 60 в сек т.е tickMustTimeMs = 16,(6)  msec  как принято в файтингах
     * однако реально ticksPerSecond = 30  в сек т.е  tickMustTimeMs = 33,(3) msec так как иначе не успеваем все обсчитать
     *
     */
    Game.Timer.updateTimeBeforeTick = function() {

		     Game.Timer.timeOldStartTickMs = Game.Timer.timeStartTickMs;
		     Game.Timer.timeStartTickMs = (new Date).getTime();
		     Game.Timer.timeBetweenStartMinOldStartTickMs = Game.Timer.timeStartTickMs - Game.Timer.timeOldStartTickMs;
	 };

	/*
	 * timeAfterTickMs время прошедшее после обсчета игры
	 * тут мы не учитываем время сна
	 * высчитываем время сколько мы должны спать для того что бы получить
	 * нужное время одного цикла а это tickMustTimeMs
	 * если время сна timeSleepGameMs оказывается отрицательным или просто меньше 5
	 * то делаем его 5
	 * отрицательное когда задержка в цикле больше чем отведено на цикл
	 */
  Game.Timer.updateTimeAfterTick = function() {

		Game.Timer.timeEndTickMs = (new Date).getTime();
		Game.Timer.timeBetweenEndMinStartTickMs = Game.Timer.timeEndTickMs - Game.Timer.timeStartTickMs;
		Game.Timer.timeThreadSleepGameMs = Game.Timer.tickMustTimeMs - Game.Timer.timeBetweenEndMinStartTickMs;
		//System.out.println("Timer: timeBetweenTickMs = " + timeBetweenTickMs );
		//System.out.println("Timer: timeSleepGameMs = " + timeSleepGameMs );

		if( Game.Timer.timeThreadSleepGameMs < 1){
			Game.Timer.timeThreadSleepGameMs = 1;
			//System.out.println("Timer: timeThreadSleepGameMs(< 1) = " + timeThreadSleepGameMs );
		};
//		if( timeThreadSleepGameMs > 33){
//			timeThreadSleepGameMs = 33;
//			//System.out.println("Timer: timeThreadSleepGameMs(> 33) = " + timeThreadSleepGameMs );
//		}
	};
       