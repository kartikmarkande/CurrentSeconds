import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SecondsComponent implements OnInit, AfterViewInit {

  todaysUtcdate;
  utcDate;
  month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  utcTime;
  unixUtcTime;
  localDate;
  localTime;
  timeZone;
  exactHours;
  localzone;
  secondsValue;
  utcConvertedValue;
  inputSeconds;
  convertedlocalValue;
  convertedUnixSeconds;
  yeartoConvert:number;
  monthtoConvert:number;
  datetoConvert:number;
  hoursConvert:number;
  minutestoConvert:number;
  secondstoConvert:number;
  constructor() { }

  ngOnInit() {
    this.getCurrentDateandTime();
  }

  ngAfterViewInit(){
    this.getCurrentTime();
  }

  /* To get the current date */
  getCurrentDateandTime(){
    let today = new Date();
    this.utcDate = today.getUTCDate() + ' ' + this.month[(today.getUTCMonth())]  + ' ' + today.getUTCFullYear();
    this.localDate = today.getDate()+ ' ' + this.month[(today.getMonth())] + ' ' + today.getFullYear();
    let zonetime = new Date().toTimeString();
    let hoursTime = zonetime.split('GMT');
    let hours = hoursTime[1].split(' ');
    let getHours = hours[0].split('').toString();
    let totalhours = getHours[2].concat(getHours[4]).concat(getHours[4]).concat(getHours[8]);
    let localHours = ((+totalhours)/100).toString();
    this.exactHours = getHours[0]+localHours;
    let standardTime = zonetime.split('(');
    let local = standardTime[1].split('Time');
    this.localzone = local[0];
  }

  getCurrentTime(){
    setInterval(() => {
      let utcTime = new Date().toUTCString();
      let theTime = utcTime.split(' ');
      this.utcTime = theTime[4];
      let timeString = new Date().toTimeString().split('GMT');
      this.localTime = timeString[0];
      this.unixUtcTime = (Date.parse(new Date().toUTCString())/1000);
      document.getElementById('unixUtcTime').innerHTML = this.unixUtcTime;
      document.getElementById('utcTime').innerHTML = this.utcTime;
      document.getElementById('localTime').innerHTML = this.localTime;
    }, 1000);
  }


  /* To get the value from the input field */
  valuechange(value){
    let inputSec = +value;
    if (value == null || inputSec == null){
      this.showTime(1);
    }
    else{
      if (isNaN(inputSec)) {
        this.displayInvalid();
      }else{
        let numlength = inputSec.toString().split('');
        if(numlength.length > 13){
          this.displayInvalid();
        }else{
          this.showTime(inputSec);
        }
      }
    }
  }

  /* Displaying undefined for the wrong inputs */
  displayInvalid(){
    let standardTime = new Date().toTimeString().split('(');
    let local = standardTime[1].slice(0, 2);
    this.convertedlocalValue = local;
    this.utcConvertedValue = 'Undefined';
  }

  /* Calculating the date string and time on valid inputs */
  showTime(inputSec){
    var val = inputSec * 1000;
    var utcValue = new Date(val);
    let utcDateTime = utcValue.toUTCString();
    let utcDate = utcDateTime.split('GMT');
    this.utcConvertedValue = utcDate[0].split(',').join('');
    let localdateTime = utcValue.toString();
    let localtime = localdateTime.split('GMT');
    let localDate = localtime[0].split(' ');
    this.convertedlocalValue = localDate[0]+' '+localDate[2]+' '+localDate[1]+' '+localDate[3]+' '+localDate[4];
  }

  /* Calculating the unix time seconds on the time iputs */
  showUnixSeconds(value, inputFrom){
    let year = this.getYear();
    let month = this.getMonth();
    let daydate = this.getDay();
    let hours = this.getHours();
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let timestamp = new Date(year, month, daydate, hours, minutes, seconds, 0);
    this.convertedUnixSeconds = Math.floor(+timestamp.getTime() / 1000);
  }

  getYear(){
    if(this.yeartoConvert != undefined){
      return this.yeartoConvert;
    }else{
      return 0;
    }
  }
  getMonth(){
    if(this.monthtoConvert != undefined){
      return this.monthtoConvert-1;
    }else{
      return 0;
    }
  }
  getDay(){
    if(this.datetoConvert != undefined){
      return this.datetoConvert;
    }else{
      return 0;
    }
  }
  getHours(){
    if(this.hoursConvert != undefined){
      return this.hoursConvert;
    }else{
      return 0;
    }
  }
  getMinutes(){
    if(this.minutestoConvert != undefined){
      return this.minutestoConvert;
    }else{
      return 0;
    }
  }
  getSeconds(){
    if(this.secondstoConvert != undefined){
      return this.secondstoConvert;
    }else{
      return 0;
    }
  }
}
