import { Component,ViewChild } from '@angular/core';
import { NavController,Platform } from '@ionic/angular';
import { RemoteServiceService } from './../remote-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationService, AnimationBuilder } from 'css-animator';
import {ThemeSwitcherService }from '../../app/theme-switcher.service';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myElement', {static:false} ) myElem;
  Book_M:any;
  private animator: AnimationBuilder;
items:any;
url = './rabannas_data.json';
  data: any;
  category: any;
  LovelyLoader = false;

  constructor(private storage: Storage, public platform: Platform,
    public loadingController: LoadingController,
    public themeSwitcher: ThemeSwitcherService, public navCtrl: NavController,animationService: AnimationService, private router: Router,private httpService:RemoteServiceService) {

    // this.animator = animationService.builder();
    this.Details;





this.presentLoadingWithOptions();

  console.log('==================');
    
    if (this.platform.is('ios') ) {
    
      this.storage.get('ThemeMode').then((res) => {
      
  
        if(res === 'day'){
          this.themeSwitcher.setTheme('day');
        }

        if(res === 'night'){
          this.themeSwitcher.setTheme('night');
        }
      
  
      });
    }
      else{
        let VA = JSON.parse(localStorage.getItem("ThemeMode"));
     
        console.log(VA);
        
        if(VA === 'day'){
          this.themeSwitcher.setTheme('day');
        }

        if(VA === 'night'){
          this.themeSwitcher.setTheme('night');
        }
      }



  this.httpService.getListing().subscribe(res => {
    this.items = res;
  });

  this.LovelyLoader = false;


  
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 1000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


  ngOnInit(){
  
  }


  ionViewCanEnter(){
  
  }

  // animateElem() {
  //   this.animator.setType('flipInX').show(this.myElem.nativeElement);
  // }


  Details(){
   
  }

  OpenDetail(a){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        current: a.title
      }
    }
    this.navCtrl.navigateForward(['rabbana-list'], navigationExtras);
  }

  settingsPage(){
    this.router.navigate(['settings']);
  }





}
