import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recentlyviewed',
  templateUrl: './recentlyviewed.page.html',
  styleUrls: ['./recentlyviewed.page.scss'],
})
export class RecentlyviewedPage implements OnInit {
  LocalStorage_: any[];

  constructor(private storage: Storage, public navCtrl: NavController,   public platform: Platform) {


  
    // Work on iOS / Android / Browser
    if (this.platform.is('ios') ) {
    
    this.storage.get('Recentv').then((res) => {
    

     this.LocalStorage_= res; 

    });}
    else{
      let VA = JSON.parse(localStorage.getItem("Recentv"));
   

      this.LocalStorage_= VA; 
    }

    


    
    
   }

  ngOnInit() {
  }

  OpenDetail(title){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        current: title
      }
    }
    this.navCtrl.navigateForward(['rabbana-list'], navigationExtras);
  }

}
