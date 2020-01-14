import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RemoteServiceService } from './remote-service.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  data: any;
  AllList = [];
  category:any;
  items:any;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'About',
      url: 'about-us',
      icon: 'list'
    },
    {
      title: 'Favourites',
      url: 'favourites',
      icon: 'list'
    },
    {
      title: 'Settings',
      url: 'settings',
      icon: 'list'
    },
    {
      title: 'Information',
      url: 'list',
      icon: 'list'
    }
  ];
  route: any;
 

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpService:RemoteServiceService,
    private router: Router
  ) {

    this.httpService.getListing().subscribe(res => {
      this.items = res;
    });

    this.initializeApp();


  }
 



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }






  OpenDetail(a){
    console.log('star');
    console.log(a);
    let navigationExtras: NavigationExtras = {
      state: {
        current: a,
        AllList : this.items
      }
      
    };
    console.log(navigationExtras.state);
    this.router.navigate(['rabbana-list'], navigationExtras);
    
  }

  openAppPages(x){

    setTimeout(()=>{    
      this.router.navigate([x]);
      }, 2000);

 

  }
}
