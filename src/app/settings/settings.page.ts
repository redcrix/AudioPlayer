import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ThemeSwitcherService }from '../../app/theme-switcher.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(  public themeSwitcher: ThemeSwitcherService,   private router: Router) { 

    // console.log('LOCAL STORAGE JS/WORK ON ANDROID.',localStorage.getItem("BookMarkList"));
   

  


  }

  ngOnInit() {
  }
  
  Favourites(){
    this.router.navigate(['favourites']);
  }

  setTheme(){
    console.log('setTheme');
    
    this.themeSwitcher.setTheme('night');
  }
  cycleTheme(){
    this.themeSwitcher.setTheme('day');
    // this.themeSwitcher.cycleTheme();
  }


}
