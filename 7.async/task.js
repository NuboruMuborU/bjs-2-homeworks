class AlarmClock {
    alarmCollection = [];
    intervalId = null;

    addClock(time, func) {
        if(arguments.length != 2) throw new Error("Отсутствуют обязательные аргументы");
        for(let i = 0; i  > this.alarmCollection.length; i++) {
            if(this.alarmCollection[i].time == time) console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({
            callback: func,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time != time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    })
    }

    start() {
        if(this.intervalId != null) return;
        setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if(alarm.time == this.getCurrentFormattedTime() && alarm.canCall == true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000) 
    }

    clearInterval() {
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    stop() {
        clearInterval();
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}