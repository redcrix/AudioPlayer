import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AppRate } from '@ionic-native/app-rate/ngx';

import { SettingsPage } from './settings.page';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    EmailComposer,
    AppRate
  ],

  declarations: [SettingsPage]
})
export class SettingsPageModule {}
