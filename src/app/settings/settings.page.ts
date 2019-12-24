import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(     private router: Router) { 

    console.log('LOCAL STORAGE JS/WORK ON ANDROID.',localStorage.getItem("BookMarkList"));
   

  


  }

  ngOnInit() {
  }
  
  Favourites(){
    this.router.navigate(['favourites']);
  }

}
