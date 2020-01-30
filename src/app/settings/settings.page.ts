import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ThemeSwitcherService }from '../../app/theme-switcher.service';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  CheckTogg:any;
  CheckTogg2:any;
  // CheckTogg= 'false'; 
  constructor( private storage: Storage, public platform: Platform,
    
    public themeSwitcher: ThemeSwitcherService,   private router: Router) { 

      // this.CheckTogg = 'true';

    // console.log('LOCAL STORAGE JS/WORK ON ANDROID.',localStorage.getItem("BookMarkList"));
   

  


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
        let VA = JSON.parse(localStorage.getItem("ThemeMode"));
     
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
      if (this.platform.is('ios') ) {
     
 
        this.storage.set('ThemeMode','night');
        this.themeSwitcher.setTheme('night');
       }
       else{

        console.log('NIGHT');
        
     
      localStorage.setItem('ThemeMode','night');
      this.themeSwitcher.setTheme('night');
       }
  
    }

    if(this.CheckTogg2 === false){
      if (this.platform.is('ios') ) {
     
 
        this.storage.set('ThemeMode','day');
        this.themeSwitcher.setTheme('day');
       }
       else{
        console.log('DAY');
      localStorage.setItem('ThemeMode','day');
      this.themeSwitcher.setTheme('day');
       }
  
    }
    

 

    // this.themeSwitcher.setTheme('day');
    // this.themeSwitcher.cycleTheme();
  }


}
