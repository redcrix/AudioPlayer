import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Location } from "@angular/common";
import { NavController, Platform, AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { RemoteServiceService } from '../remote-service.service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx'; 
import { File } from '@ionic-native/file/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
import { Storage } from '@ionic/storage';
import { browser } from 'protractor';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { MediaObject, Media } from '@ionic-native/media/ngx';
import {  LoadingController } from '@ionic/angular';

import { CalPage } from './calender_Time';
import { ModalController } from '@ionic/angular';

declare var cordova: any;
import { IonSlides } from '@ionic/angular';
 

@Component({
  selector: 'app-rabbana-list',
  // template: '<button (click)="OpenDetail(a)>click</button>',
  templateUrl: './rabbana-list.page.html',
  styleUrls: ['./rabbana-list.page.scss']
})

export class RabbanaListPage implements OnInit {
  @ViewChild('mySlider', {static: true}) slides: IonSlides;

  storageDirectory: string = '';
  private fileTransfer: FileTransferObject = this.filetransfer.create();
  public sendTo   : any;
  public subject  : string = 'Message from Social Sharing App';
  public message  : string = 'Take your app development skills to the next level with Mastering Ionic - the definitive guide';
  segment = 0;
  //list received from route
  data: any;
  favdata:any=[];
  AllList = [];
  maindata=[];
  category:any;
  currentActive:any;
  //fresh data variable
  filteredList_3:any;
  filteredList_1:any;
  filteredList_2:any;
  filteredTitle:any;
  mark:any;
  duasAudio:any;
  //.a
  copyX = true;
  segMeChange = 0;
  //.
  lastCopy = false;
  //change color dynamic
  buttonColor: string = '#000'; //Default Color
  //for content
  showHide_1 = true;
  showHide_2 = true;
  showHide_3 = true; 
  showHide_4 = true; 
 
  //for icons
  showMinus1 = false;
  showPlus1 = true;
  showMinus2 = false;
  showPlus2 = true;
  showMinus3 = false;
  showPlus3 = true;
  showMinus4 = false;
  showPlus4 = true;

  //onPageLoad
  ShowPlay = false;
  text: string;
  url: string;
  lists: any = [];
  searchList: any;
  list: any;
  copy = false;

  //local BookMark
  StarList = [];
  http: any;
  listShow = false;
  do3: any;
  do1: any;
  do2: any;
  // duas: string;

  // my logic
  itemisselected = false;

  // spotify like music player

  title: any;
  artist: any;
  image: string = 'assets/album_art.jpg';

  duration: any = -1;
  curr_playing_file: MediaObject;
  // storageDirectory: any;
 
  position: any = 0;
  get_position_interval: any;
  is_playing = false;
  is_in_play = false;
  is_ready = false;
  get_duration_interval: any;
  display_position: any = '00:00';
  display_duration: any = '00:00';
  segments :any;


  constructor(
    public navCtrl: NavController, 
    public platform: Platform,
     private remoteServiceService: RemoteServiceService, 
     private nativeAudio: NativeAudio, 
     private route: ActivatedRoute,
     private router: Router, 
     private location: Location,
     private socialSharing: SocialSharing,
     private storage: Storage,
     private file: File,
     private filetransfer: FileTransfer,
     private media: Media,
     private plt: Platform,
     private LocalNotifications: LocalNotifications,
     private alertCtrl: AlertController,
     public modalController: ModalController

     ) {

    
      this.platform.ready().then(() => {
        // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
        if(!this.platform.is('cordova')) {
          return false;
        }
  
        if (this.platform.is('ios')) {
          this.storageDirectory = cordova.file.documentsDirectory;
        }
        else if(this.platform.is('android')) {
          this.storageDirectory = cordova.file.externalDataDirectory;
        }
        else {
          // exit otherwise, but you could add further types here e.g. Windows
          return false;
        }
      })
  

      this.remoteServiceService.getListing().subscribe(res => {
    
        this.AllList = res;
      });

      this.ShowPlay = false;

    // this.route.queryParams.subscribe(_params => {
      // if (this.router.getCurrentNavigation().extras.state) {
      
  

      

        // this.copyX = true;

        
        this.data = '';
          // this.data = this.router.getCurrentNavigation().extras.state.current;
          // this.AllList = this.router.getCurrentNavigation().extras.state.AllList;
          console.log('=========================='+this.data);

          if(this.data){

            console.log('=========================='+this.data);
            // setTimeout(() => {
            //   this.slides.slideTo(10,0);
            // });

         
          }
          // this.category = this.data.title;
          // this.filteredList_3 = this.data.do3;
          // this.filteredList_1 = this.data.do1;
          // this.filteredList_2 = this.data.do2;
          // this.filteredTitle= this.data.title;
          // this.copy = true;
          // this.duasAudio= this.data.duasAudio;
          // this.mark = this.data.mark;
          // this.copyX = true;
          // this.lastCopy = false;
        

          if(this.data){
            
            console.log('On Page Load from Last=======');

  
            console.log(this.category);
            console.log(this.lists);
            console.log(this.duasAudio);
            console.log(this.data.duasAudio);
            console.log(this.AllList);
             
              

              console.log('.'+this.AllList);
          //     setTimeout( () => {
          //       this.FilterData();
          //  }, 4000);
         

            // });
             
           
      //     }

   
      }

    

         
    // }); 


    // console.log('LOCAL STORAGE JS/WORK ON ANDROID.'+localStorage.getItem("BookMarkList"));

    if(this.copyX = true){
      console.log(this.duasAudio);
      this.nativeAudio
      .preloadComplex('track1', this.duasAudio, 1, 1, 0)
      .then(this.onSuccessPreloading, this.onError);
      this.ShowPlay = true;
    }
    
   }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.Check(JSON.parse(params.current));
      });

      
    

    this.prepareAudioFile();

  }

  prepareAudioFile() {
    this.platform.ready().then((res) => {
      this.getDuration();
    });
  }


  getDuration() {

    let duas = '';
    duas = this.duasAudio
    const play_The_track = `${cordova.file.applicationDirectory}www/assets/DuasAudio/${duas}`;

    // let play_The_track: string = "/android_asset/public/assets/GOT.mp3"; //note this specific url format is used in android only

    this.curr_playing_file = this.media.create(play_The_track);
    // on occassions, the plugin only gives duration of the file if the file is played
    // at least once
    this.curr_playing_file.play();

    this.curr_playing_file.setVolume(0.0);  // you don't want users to notice that you are playing the file
    const self = this;
    // The plugin does not give the correct duration on playback start
    // Need to check for duration repeatedly
    let temp_duration = self.duration;
    this.get_duration_interval = setInterval(() => {
      if (self.duration === -1 || !self.duration) {
        self.duration = ~~(self.curr_playing_file.getDuration());  // make it an integer
      } else {
        if (self.duration !== temp_duration) {
          temp_duration = self.duration;
        }
        else {
          self.curr_playing_file.stop();
          self.curr_playing_file.release();

          clearInterval(self.get_duration_interval);
          this.display_duration = this.toHHMMSS(self.duration);
          self.setToPlayback();
        }
      }
    }, 100);
  }


  setToPlayback() {

    let duas = this.duasAudio;
    const play_The_track = `${cordova.file.applicationDirectory}www/assets/DuasAudio/${duas}`;

    this.curr_playing_file = this.media.create(play_The_track);
    this.curr_playing_file.onStatusUpdate.subscribe(status => {
      switch (status) {
        case 1:
          break;
        case 2:   // 2: playing
          this.is_playing = true;
          break;
        case 3:   // 3: pause
          this.is_playing = false;
          break;
        case 4:   // 4: stop
        default:
          this.is_playing = false;
          break;
      }
    });
    this.is_ready = true;
    this.getAndSetCurrentAudioPosition();
  }

  getAndSetCurrentAudioPosition() {
    const diff = 1;
    const self = this;
    this.get_position_interval = setInterval(() => {
      const last_position = self.position;
      self.curr_playing_file.getCurrentPosition().then((position) => {
        if (position >= 0 && position < self.duration) {
          if (Math.abs(last_position - position) >= diff) {
            // set position
            self.curr_playing_file.seekTo(last_position * 1000);

          } else {
            // update position for display
            self.position = position;
            this.display_position = this.toHHMMSS(self.position);
          }
        } else if (position >= self.duration) {
          self.stop();
          self.setToPlayback();
        }
      });
    }, 100);
  }

  play() {
    this.curr_playing_file.play();
  }

  pause() {
    this.curr_playing_file.pause();
  }

  stop() {
    this.curr_playing_file.stop();
    this.curr_playing_file.release();
    clearInterval(this.get_position_interval);
    this.position = 0;
  }

  controlSeconds(action) {
    const step = 5;
    const numberRange = this.position;
    switch (action) {
      case 'back':
        this.position = numberRange < step ? 0.001 : numberRange - step;
        break;
      case 'forward':
        this.position = numberRange + step < this.duration ? numberRange + step : this.duration;
        break;
      default:
        break;
    }
  }

  // ngOnDestroy() {
  //   this.stop();
  // }

  toHHMMSS(secs) {
    var sec_num = parseInt(secs, 10)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i >= 0)
      .join(":")
  }





  /**  Search Filter Function Starts **/

  FilterData(){
    let TRY = this.AllList.filter(
      book => book.title === this.data.title);

      this.filteredList_3 = TRY[0].do3;
      this.filteredList_1 = TRY[0].do1;
      this.filteredList_2 = TRY[0].do2;
      this.filteredTitle= TRY[0].title;
      console.log(this.filteredList_3);


      console.log("TRY"+JSON.stringify(TRY));
  }


  setFilteredItems() {
    // if (!this.searchList) {
    //   return;
    // }
    if(!this.itemisselected){
      this.listShow = true;
    } else {
      this.itemisselected = false;
    }

    console.log(this.searchList);
    
    
    console.log('Filtering the itmes');
    this.lists = this.remoteServiceService.filterItems(this.searchList);
    console.log('?FILTERED ITEMS FROM REMOTE SERVICE = '+JSON.stringify(this.lists)); 
  }

  // call a function to refresh values in component.

  Chk(Nlist){

  
    console.log(Nlist);
    console.log(this.searchList);
    
    console.log(this.category);

    this.category = this.searchList;
    this.filteredTitle = Nlist.title;
    this.filteredList_1 = Nlist.do1;
    this.filteredList_2 = Nlist.do2;
    this.filteredList_3 = Nlist.do3;

    this.duasAudio= Nlist.duasAudio;

    if(this.filteredList_1 != ''){
      this.listShow = false;
      this.searchList = Nlist.title;
      this.itemisselected = true;
    }
    this.mark = Nlist.mark;
    this.copyX = true;
    this.lastCopy = false;
  }

  // It finished here.



  // Share social media


  share(data){
   this.platform.ready().then(() =>
   {
    
      this.socialSharing.share(data.do3+ "\n" +data.do2+ "\n" +data.do1, data.title, null, "https://play.google.com/store/apps/details?id=com.chaks.rabbana").then(() => {
        console.log('socialSharing ');
      }).catch(e => {
        console.log(' Error');
      })
    
  });
  }



  // Make A theme

  
  addEvent(){
    this.buttonColor = '#345465'; 
    }


 async Check(New){
    this.category=New.title;
    this.filteredList_3 = New.do3;
    this.filteredList_1 = New.do1;
    this.filteredList_2 = New.do2;
    this.filteredTitle= New.title;
    this.copy = true;
    this.duasAudio= New.duasAudio;
    this.mark = New.mark;
//Mark

if (this.platform.is('ios') ) {
  await this.storage.get('BookMarkList').then((res) => {
      if(res.indexOf(New.title)==-1)
      this.mark=false;
      else
      this.mark=true;
  });

 }
 else{
 var res=JSON.parse(await  localStorage.getItem('BookMarkList'));
 if(res.indexOf(New.title)==-1)
      this.mark=false;
      else
      this.mark=true;
 }

//mark



    this.copyX = true;
    this.lastCopy = false;
    this.currentActive=New.title;
    console.log('segment Before'+this.segment);
    
    var matches=this.currentActive.match(/(\d+)/);
    console.log('matches'+matches);
    var x = 1;
    var negX = ( -x );
    
    this.slides.slideTo(matches[0]-1);
console.log(matches+negX);

var Match = matches+(negX);
console.log('Match'+Match);

    // this.slides.slideTo(matches+negX);
  // this.slides.update();


  //  let getActive =  this.slides.getActiveIndex();
  //  console.log('getActiveee'+getActive);
  //  this.focusSegment(this.segment+1);
    // this.focusSegment(this.segment+1);


  }

  focusSegment(segmentId) {
    document.getElementById('seg-'+segmentId).scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  Check2(){

    console.log(this.duasAudio);
    // this.prepareAudioFile();
    this.slides.slidePrev();

  }

  Check3(){

    console.log(this.duasAudio);
    // this.prepareAudioFile();
    this.slides.slideNext();

  }


  playAudio(){
    let duas = this.duasAudio;
    console.log('duascvvbvcbfgb');
    console.log(duas);

    console.log('../../assets/DuasAudio/'+duas);
    
    this.nativeAudio.play('../../assets/DuasAudio/'+duas).then((data) =>{
      console.log(duas+ 'is playing');
      // alert(duas);
    });
  
  }



  duas(duas: any) {
    throw new Error("Method not implemented.");
  }

  StopAudio(){

    let duas = this.duasAudio;

    this.nativeAudio.stop(duas).then(this.onSuccess,this.onError);
    this.ShowPlay = false;
  }

  Adjust_Volume(){
    this.nativeAudio.setVolumeForComplexAsset('track1', 0.6).then(this.onSuccess,this.onError);
  }

  onSuccess(){
    console.log(' onSuccess .');
  }

  onSuccessPreloading = data => {
    console.log("success preloading", data);
    this.nativeAudio.play("track1").then(this.onSuccessPlaying, this.onError);
  };

  onError(){
    console.log('error Playing');
  }

  onSuccessPlaying(){
    console.log('onSuccessPlaying');
  }

  BackButton(){
    this.location.back();
  }


checkEXTRA(){
  console.log(this.segment);
  
}





// async segmentChanged(event) {
//   await this.slides.slideTo(this.segment);
//   this.slides.update();

//   this.Check(this.AllList[data]);

// }





 async slideChanged(category) {

 

   this.slides.getActiveIndex().then(data=>{

  
    
     console.log(this.AllList[data]);



     this.prepareAudioFile();
this.segMeChange = data;
console.log('ACTIVE INDEX = '+this.segMeChange);
    this.Check(this.AllList[data]);
    this.focusSegment(this.segMeChange);
  });

 

  }




  categoryChanged(value) {
    
    this.stop();
    this.prepareAudioFile();

    console.log('segment is 55', JSON.stringify(value['detail']['value']));
 
   
      if (this.platform.is('ios') ) {

    this.storage.get('BookMarkList').then((val) => {
      this.maindata=val;
      console.log(val.indexOf(this.duasAudio));
      if(this.maindata.indexOf(this.duasAudio)>=0){
        this.mark=true;
      }
      else{
        this.mark=false;
      }
        }); 
      }
      else{
        var vallocal=localStorage.getItem('BookMarkList');
    
        if(vallocal.indexOf(this.duasAudio)>=0){
          this.mark=true;
        }
        else{
          this.mark=false;
        }
      }
  }



  Ctrl_version_1(){
    this.showHide_1 = true;
    this.showMinus1 = false;
    this.showPlus1 = true;
  }

  Ctrl_version_2(){
    this.showHide_2 = true;
    this.showMinus2 = false;
    this.showPlus2 = true;
  }

  Ctrl_version_3(){
    this.showHide_3 = true;
    this.showMinus3 = false;
    this.showPlus3 = true;
  }

  Ctrl_version_4(){
    this.showHide_4 = true;
    this.showMinus4 = false;
    this.showPlus4 = true;
  }

  Ctrl2_version_1(){
    this.showHide_1 = false;
    this.showPlus1 = false;
    this.showMinus1 = true;
  }

  Ctrl2_version_2(){
    this.showHide_2 = false;
    this.showPlus2 = false;
    this.showMinus2 = true;
  }

  Ctrl2_version_3(){
    this.showHide_3 = false;
    this.showPlus3 = false;
    this.showMinus3 = true;
  }


  Ctrl2_version_4(){
    this.showHide_4 = false;
    this.showPlus4 = false;
    this.showMinus4 = true;
  }

  async changetm(){

  

    
    // this.Cal_View = true;


// const modal = await this.modalController.create({
//   component: CalPage,
// });
// return await modal.present();


    // this.calendar.createCalendar('MyCalendar').then(
    //   (msg) => { console.log(msg); },
    //   (err) => { console.log(err); }
    // );

//     this.calendar.createEvent(title, location, notes, startDate,    endDate).then(
//       (msg) => { alert(msg); },
//       (err) => { alert(err); }
//  ); 


    //change color dynamic
    // alert("hello");
  // buttonColor: string = 'black'; //Default Color


  this.LocalNotifications.schedule({
    text: 'I will remind you.',
    trigger: {at: new Date(new Date().getTime() + 3600)},
    led: 'FF0000',
    sound: null
  });

// this.localNotifications.schedule({
//   id: 1,
//   text: 'Single ILocalNotification',
//   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
//   data: { secret: key }
// });


  }

  DuaListing(){
    this.router.navigate(['home']);
  }

  DownloadFile(){
    console.log('dfdf');
    let duas = this.duasAudio;
    console.log(this.duasAudio);

    this.platform.ready().then(() => {

      const imageLocation = `${cordova.file.applicationDirectory}www/assets/DuasAudio/${duas}`;
alert('imageLocation'+imageLocation);
      this.fileTransfer.download(imageLocation, this.storageDirectory + duas).then((entry) => {

        alert('Downloaded successfully.'+JSON.stringify(entry));

      }, (error) => {

        alert('Error downloading mp3.'+JSON.stringify(error));

      });

    });
    
   
  }

  async starItem(x,chk){
    this.mark=chk;  
    if (this.platform.is('ios') ) {
     await this.storage.get('BookMarkList').then((res) => {
      if(!res)
        this.favdata=[];
      else
      this.favdata=res;
     });
     if(chk==true)
     this.favdata.push(x.title);
     else if(this.favdata.indexOf(x.title)!==-1)
     this.favdata.splice(this.favdata.indexOf(x.title),1); 
     this.storage.set('BookMarkList',this.favdata);
    }
    else{
    var res=JSON.parse(await  localStorage.getItem('BookMarkList'));
    if(!res)
    this.favdata=[];
    else
    this.favdata=res;
    if(chk==true)
    this.favdata.push(x.title);
    else if(this.favdata.indexOf(x.title)!==-1)
    this.favdata.splice(this.favdata.indexOf(x.title),1);
   localStorage.setItem('BookMarkList',JSON.stringify(this.favdata));
    }
 

}



  replaceByValue( field, oldvalue, newvalue ) {


    for( var k = 0; k < this.AllList.length; ++k ) {
        if( oldvalue == this.AllList[k][field] ) {
          this.AllList[k][field] = newvalue ;
        }
    }
    return this.AllList;

    
}

checkBookMark(){

  console.log(this.AllList);

this.replaceByValue('title','Rabbana 1','Rabbana 13232')
console.log(this.AllList);

this.replaceByValue('type','Chocolate','only water')
console.log(this.AllList);

}

// for AutoPlay

// controlBack(){
  

// }

// controlForward(){


// }





}
