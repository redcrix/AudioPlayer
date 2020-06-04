import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ThemeSwitcherService }from '../../app/theme-switcher.service';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppRate } from '@ionic-native/app-rate/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  CheckTogg:any;
  CheckTogg2:any;
  contact_form = false;
  public form  : FormGroup;
  sendM = false;
  view = true;
  // CheckTogg= 'false'; 
  constructor( private appRate: AppRate,
    private iab: InAppBrowser,
    private storage: Storage, public platform: Platform,
    private socialSharing: SocialSharing,
    private _EMAIL   : EmailComposer,   private _FORM	    : FormBuilder,
    
    public themeSwitcher: ThemeSwitcherService,   private router: Router) { 

      this.form = this._FORM.group({
        "to"            : ["shabirgirrach@gmail.com", Validators.required],
        "cc"            : ["shabirgirrach@gmail.com", Validators.required],
        "bcc"           : ["", Validators.required],
        "subject"       : ["", Validators.required],
        "message"       : ["", Validators.required]
     });

  }

  ngOnInit() {

    if (this.platform.is('ios') ) {
    
      this.storage.get('ThemeMode').then((res) => {
      
  
        if(res === 'day'){
          this.CheckTogg= 'false'; 
          this.themeSwitcher.setTheme('day');
        }

        if(res === 'night'){
          this.CheckTogg= 'true'; 
          this.themeSwitcher.setTheme('night');
        }
      
  
      });
    }
      else{
        let VA = localStorage.getItem("ThemeMode");
     
        if(VA === 'day'){
          this.CheckTogg= 'false'; 
          this.themeSwitcher.setTheme('day');
        }

        if(VA === 'night'){
          this.CheckTogg= 'true'; 
          this.themeSwitcher.setTheme('night');
        }
      }


  }
  
  Favourites(){
    this.router.navigate(['favourites']);
  }

  setTheme(){
    console.log('setTheme');
    
    this.themeSwitcher.setTheme('night');
  }
  cycleTheme(){
    console.log(this.CheckTogg2);
    if(this.CheckTogg2 === true){
      console.log('NIGHT');
       this.storage.set('ThemeMode','night');
        this.themeSwitcher.setTheme('night');
         console.log('NIGHT');
        
     
      localStorage.setItem('ThemeMode','night');
      this.themeSwitcher.setTheme('night');
      //  }
  
    }

    if(this.CheckTogg2 === false){
 
        this.storage.set('ThemeMode','day');
        this.themeSwitcher.setTheme('day');

      console.log('DAY');
      localStorage.setItem('ThemeMode','day');
      this.themeSwitcher.setTheme('day');

    }
  
  }



  share(){


    
   this.platform.ready().then(() =>
   {

    let img = '"../../assets/icons.png"';
    
      this.socialSharing.share('Install Rabbana Duas on App Store/ Play Store'+ "\n" +img ).then(() => {
        console.log('socialSharing ');
      }).catch(e => {
        console.log(' Error');
      })
    
  });
  }


  contact_us(){
    this.contact_form = true;

  }

  mailM(){

    this.sendM = true;
    this.view = false;
  
  }




  sendEmail(to         : string, 
    cc         : string, 
    bcc        : string, 
    attachment : string,
    subject    : string,
    body       : string) : void
{

this._EMAIL.isAvailable()
.then((available: boolean) =>
{

this._EMAIL.hasPermission()
.then((isPermitted : boolean) =>
{

   let email : any = {
      app 			: 'mailto',
      to 			: to,
      cc 			: cc,
      bcc 			: bcc,
      attachments 	: [
        attachment
      ],
      subject 		: subject,
      body 		: body
   };


   this._EMAIL.open(email);
})
.catch((error : any) =>
{
   console.log('No access permission granted');
   console.dir(error);
});
})
.catch((error : any) =>
{
console.log('User does not appear to have device e-mail account');
console.dir(error);
});
}





sendMessage() : void
{
   let to 		: string		= this.form.controls["to"].value,
       cc 		: string		= this.form.controls["cc"].value,
       bcc 		: string		= this.form.controls["cc"].value,          
       subject 	: string		= this.form.controls["subject"].value,    
       message 	: string		= this.form.controls["message"].value;

      let _attachment = '';
      this.sendEmail(to, cc, bcc, _attachment, subject, message);
 
}


AppRate(){
  this.appRate.preferences.storeAppURL = {
    ios: 'io.adbits.rabbana',
    android: 'market://details?id=io.adbits.rabbana',
    windows: 'ms-windows-store://review/?ProductId=<store_id>'
  };
  
  this.appRate.promptForRating(true);

  this.appRate.preferences = {
    usesUntilPrompt: 3,
    storeAppURL: {
     ios: 'io.adbits.rabbana',
     android: 'market://details?id=io.adbits.rabbana',
     windows: 'ms-windows-store://review/?ProductId=<store_id>'
    }
  };
  
  this.appRate.promptForRating(false);
}


close(){

  this.sendM = false;
  this.view = true;


}

openUrl(){

  this.iab.create(`https://bit.ly/2Br0Mjc`, `_blank`);
}


}
