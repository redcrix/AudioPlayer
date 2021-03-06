import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  LocalStorage_: any[];

  constructor(private storage: Storage, public navCtrl: NavController,   public platform: Platform) {


  
    // Work on iOS / Android / Browser
    if (this.platform.is('ios') ) {
    
    this.storage.get('BookMarkList').then((res) => {
    

     this.LocalStorage_= res; 

    });}
    else{
      let VA = JSON.parse(localStorage.getItem("BookMarkList"));
   

      this.LocalStorage_= VA; 
    }

    


    
    
   }

  ngOnInit() {
  }

  clear(){
    this.storage.clear();
    localStorage.clear();
    this.LocalStorage_=[];
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
