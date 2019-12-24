import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'modal-page',
  templateUrl: './calender_time.html',
})
export class CalPage {
startDate:any;
startTime:any;
endDate:any;
endTime:any;
title:any;
location:any;
notes:any;

  constructor(  private calendar: Calendar,) {

  }

  getCalender(){		
    var startDateTimeISO = this.buildISODate(this.startDate, this.startTime);
    var enddateTimeISO = this.buildISODate(this.endDate, this.endTime);
             
    
    console.log(enddateTimeISO);
    
    this.calendar.requestWritePermission();	this.calendar.createEvent(this.title, this.location, this.notes, new Date(startDateTimeISO), new Date(enddateTimeISO)).then(
                    (msg) => { alert('msg '+msg); },
                    (err) => { alert('err '+err); }
    );	
     }
    
    buildISODate(date, time){
          var dateArray = date && date.split('-');
          var timeArray = time && time.split(':');
    var normalDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1])-1, parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]), 0, 0);
          return normalDate.toISOString();
      }


}