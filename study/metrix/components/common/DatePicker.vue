<template>
    <div class="date-area">
        <div class="date-header">
            <button class="left-icon" @click="onClickPrev(currentMonth)"></button>
            <h5>{{currentYear}}년 {{currentMonth}}월</h5>
            <button class="right-icon" @click="onClickNext(currentMonth)"></button>
        </div>
        <ul class="date-picker">
            <li class="week">
                <b v-for="(weekName, i) in weekNames" :key="i">{{weekName}}</b>
            </li>
            <li class="day" v-for="(row, i) in currentCalendarMatrix" :key="i">
                <b v-for="(day, i) in row" :key="i">{{day}}</b>
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data () {
        return {
            weekNames: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            rootYear: 1904,
            rootDayOfWeekIndex: 4, 
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth()+1,
            currentDay: new Date().getDate(),
            currentMonthStartWeekIndex: null,
            currentCalendarMatrix: [],
            endOfDay: null,
            memoDatas: [],
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init:function(){
            this.currentMonthStartWeekIndex = this.getStartWeek(this.currentYear, this.currentMonth);
            this.endOfDay = this.getEndOfDay(this.currentYear, this.currentMonth);
            this.initCalendar();
        },
        initCalendar:function(){
            this.currentCalendarMatrix = [];
            let day=1;
            for(let i=0; i<6; i++){
                let calendarRow = [];
                for(let j=0; j<7; j++){
                    if(i==0 && j<this.currentMonthStartWeekIndex){
                      calendarRow.push("");
                    } else if(day<=this.endOfDay){
                      calendarRow.push(day);
                      day++;
                    } else{
                      calendarRow.push("");
                    }
                }
                this.currentCalendarMatrix.push(calendarRow);
            }
        },
        getEndOfDay: function(year, month){
            switch(month){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    return 30;
                    break;
                case 2:
                    if( (year%4 == 0) && (year%100 != 0) || (year%400 == 0) ){
                        return 29;   
                    }
                    else{
                        return 28;
                    }
                    break;
                default:
                    console.log("unknown month " + month);
                    return 0;
                    break;
            }
        },
        getStartWeek: function(targetYear, targetMonth){
            let year = this.rootYear;
            let month = 1;
            let sumOfDay = this.rootDayOfWeekIndex;
            while(true){
                if(targetYear > year){
                    for(let i=0; i<12; i++){
                        sumOfDay += this.getEndOfDay(year, month+i);
                    }
                    year++;
                }
                else if(targetYear == year){
                    if(targetMonth > month){
                        sumOfDay += this.getEndOfDay(year, month);
                        month++;
                    } else if(targetMonth == month){
                        return (sumOfDay)%7;
                    }
                }
            }
        },
        onClickPrev: function(month){
            month--;
            if(month<=0){
                this.currentMonth = 12;
                this.currentYear -= 1;
            } else{
                this.currentMonth -= 1;
            }
            this.init();
        },
        onClickNext: function(month){
          month++;
          if(month>12){
                this.currentMonth = 1;
                this.currentYear += 1;
          } else{
                this.currentMonth += 1;
          }
          this.init();
        },
        isToday: function(year, month, day){
            let date = new Date();
            return year == date.getFullYear() && month == date.getMonth()+1 && day == date.getDate(); 
        }
    }
}
</script>