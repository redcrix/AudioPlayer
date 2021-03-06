import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private themes: Theme[] = [];
  private currentTheme: number = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) { 

    this.themes = [
      {
        name: 'day',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#042241'},
          { themeVariable: '--ion-color-primary-rgb', value: '#d33939'},
          // { themeVariable: '--ion-color-primary-rgb', value: '56, 128, 255'},
          // { themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
          // { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
          // { themeVariable: '--ion-color-primary-shade', value: '#3171e0'},
          // { themeVariable: '--ion-color-primary-tint', value: '#0cd1e8'},
          // { themeVariable: '--ion-item-ios-background-color', value: '#ffffff'},
          // { themeVariable: '--ion-item-md-background-color', value: '#ffffff'},
          // { themeVariable: '--ion-tabbar-background-color', value: '#fff'},
          // { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff'},
          // { themeVariable: '--ion-tabbar-md-text-color-active', value: '#ffffff'},
          { themeVariable: '--cust', value: '#d33939'},
          { themeVariable: '--ion-background-color', value: '#fff'}
        ]
      },
      {
        name: 'night',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#fff'},
          { themeVariable: '--ion-color-primary-rgb', value: '#d33939'},
          // { themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
          // { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
          // { themeVariable: '--ion-color-primary-shade', value: '#1e2023'},
          // { themeVariable: '--ion-color-primary-tint', value: '#383a3e'},
          // { themeVariable: '--ion-item-ios-background-color', value: '#717171'},
          // { themeVariable: '--ion-item-md-background-color', value: '#717171'},
          { themeVariable: '--cust', value: '#d33939'},
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff'},
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#ffffff'},
          { themeVariable: '--ion-background-color', value: '#042241'}
        ]
      }
    ]

  }

  cycleTheme(): void {

    if(this.themes.length > this.currentTheme + 1){
      this.currentTheme++;
    } else {
      this.currentTheme = 0;
    }

    this.setTheme(this.themes[this.currentTheme].name);

  }

  setTheme(name): void {

    let theme = this.themes.find(theme => theme.name === name);

    this.domCtrl.write(() => {

      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(style.themeVariable, style.value);
      });

    });

  }

}