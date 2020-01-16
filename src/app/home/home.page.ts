import { Component,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RemoteServiceService } from './../remote-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationService, AnimationBuilder } from 'css-animator';

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

  constructor(public navCtrl: NavController,animationService: AnimationService, private router: Router,private httpService:RemoteServiceService) {

    this.animator = animationService.builder();
    this.Details;

    // console.log('LOCAL STORAGE JS/WORK ON ANDROID.',localStorage.getItem("BookMarkList"));
   

    // this.Book_M = localStorage.getItem("BookMarkList");

  this.httpService.getListing().subscribe(res => {
    this.items = res;
  });
  
  }

  ionViewCanEnter(){
  
  }

  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }


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
