import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { IonicModule } from '@ionic/angular';

import { AboutUsPage } from './about-us.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPage
  }
];

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    EmailComposer
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
